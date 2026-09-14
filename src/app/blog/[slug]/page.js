import { BlogNotFoundError, getBlog } from '@/lib/blogs';
import { defaultSocialImage, serializeJsonLd, siteUrl } from '@/lib/seo';
import { notFound } from 'next/navigation';

async function findBlog(slug) {
  try { return await getBlog(slug); }
  catch (error) { if (error instanceof BlogNotFoundError) notFound(); throw error; }
}

export async function generateMetadata({ params }) {
  const { slug } = await params; const blog = await findBlog(slug); const canonical = `/blog/${blog.slug}`;
  const images = blog.featuredImageUrl ? [{ url: blog.featuredImageUrl, alt: `Featured image for ${blog.title}` }] : [defaultSocialImage];
  return { title: blog.seoTitle, description: blog.seoDescription, alternates: { canonical }, openGraph: { type: 'article', siteName: 'Zaxcode', locale: 'en_BD', title: blog.seoTitle, description: blog.seoDescription, url: canonical, publishedTime: blog.publishedAt, modifiedTime: blog.updatedAt, authors: [blog.author], images }, twitter: { card: 'summary_large_image', title: blog.seoTitle, description: blog.seoDescription, images: images.map(({ url }) => url) } };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params; const blog = await findBlog(slug); const url = `${siteUrl}/blog/${blog.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'BlogPosting', '@id': `${url}/#article`, headline: blog.title, description: blog.seoDescription, url, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, datePublished: blog.publishedAt, dateModified: blog.updatedAt, author: { '@type': 'Person', name: blog.author }, publisher: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Zaxcode', url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo.png`, width: 349, height: 293 } }, image: blog.featuredImageUrl ? { '@type': 'ImageObject', url: blog.featuredImageUrl } : undefined, inLanguage: 'en' }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` }, { '@type': 'ListItem', position: 3, name: blog.title, item: url }] }] };
  return <article className="mx-auto max-w-4xl pb-24 pt-32"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} /><header><p className="text-sm font-bold uppercase tracking-[0.2em] opacity-45">Zaxcode Blog</p><h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">{blog.title}</h1><p className="mt-6 text-xl leading-8 opacity-65">{blog.excerpt}</p><div className="mt-6 flex flex-wrap gap-3 text-sm opacity-55"><span>By {blog.author}</span><span aria-hidden="true">•</span><time dateTime={blog.publishedAt}>{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(blog.publishedAt))}</time>{blog.updatedAt !== blog.publishedAt && <><span aria-hidden="true">•</span><span>Updated <time dateTime={blog.updatedAt}>{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(blog.updatedAt))}</time></span></>}</div></header>{blog.featuredImageUrl && <img src={blog.featuredImageUrl} alt={`Featured image for ${blog.title}`} width="1200" height="675" fetchPriority="high" decoding="async" className="mt-10 aspect-[16/9] w-full rounded-[2rem] object-cover" />}<div className="blog-content mt-12" dangerouslySetInnerHTML={{ __html: blog.contentHtml }} /></article>;
}

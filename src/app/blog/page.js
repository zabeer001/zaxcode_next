import Link from 'next/link';
import { getBlogs } from '@/lib/blogs';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Zaxcode Blog', description: 'Practical articles from Zaxcode about websites, SaaS, ERP systems, automation, design, and software delivery.', path: '/blog' });

export default async function BlogIndexPage() {
  const blogs = await getBlogs();
  return <div className="pb-24 pt-28">
    <section className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-base-200/55 px-6 py-16 sm:px-10 lg:px-14 lg:py-24"><div className="absolute inset-0 wifix-panel-grid opacity-45" /><div className="relative max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.24em] text-base-content/50">Ideas & field notes</p><h1 className="mt-5 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">The Zaxcode Blog</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-base-content/65">Practical thinking about useful software, dependable systems, and digital products built to grow.</p></div></section>
    <section className="py-20" aria-label="Published articles"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{blogs.map((blog) => <article key={blog.id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">{blog.featuredImageUrl && <img src={blog.featuredImageUrl} alt={`Featured image for ${blog.title}`} width="1200" height="675" loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />}<div className="flex flex-1 flex-col p-6"><time className="text-xs font-bold uppercase tracking-[0.16em] opacity-45" dateTime={blog.publishedAt}>{new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(blog.publishedAt))}</time><h2 className="mt-3 text-2xl font-bold"><Link href={`/blog/${blog.slug}`} className="after:absolute after:inset-0">{blog.title}</Link></h2><p className="mt-4 flex-1 leading-7 opacity-65">{blog.excerpt}</p><span className="mt-7 text-sm font-bold">Read article →</span></div></article>)}</div>{blogs.length === 0 && <div className="rounded-2xl border border-dashed border-base-300 py-20 text-center text-base-content/60">No articles have been published yet.</div>}</section>
  </div>;
}

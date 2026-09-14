import { industries, services } from '@/data/marketing';
import { BlogUpstreamError, getBlogs } from '@/lib/blogs';
import { siteUrl } from '@/lib/seo';

export default async function sitemap() {
  let blogs = [];
  try { blogs = await getBlogs(); }
  catch (error) { if (!(error instanceof BlogUpstreamError)) throw error; }
  const entry = (path, changeFrequency, priority, lastModified) => ({ url: `${siteUrl}${path}`, changeFrequency, priority, ...(lastModified ? { lastModified } : {}) });
  return [entry('/', 'weekly', 1), entry('/contact', 'monthly', 0.7), entry('/services', 'monthly', 0.8), ...services.map(({ slug }) => entry(`/services/${slug}`, 'monthly', 0.7)), entry('/industries', 'monthly', 0.8), ...industries.map(({ slug }) => entry(`/industries/${slug}`, 'monthly', 0.7)), entry('/blog', 'weekly', 0.8), ...blogs.map((blog) => entry(`/blog/${blog.slug}`, 'weekly', 0.7, blog.updatedAt))];
}

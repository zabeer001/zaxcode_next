import 'server-only';
import { parseBlogDetailXml, parseBlogListXml } from './blogXml';

const apiBase = process.env.LARAVEL_API_BASE_URL?.replace(/\/$/, '');

export class BlogNotFoundError extends Error {}
export class BlogUpstreamError extends Error {}

async function requestXml(path, tags) {
  if (!apiBase) throw new BlogUpstreamError('LARAVEL_API_BASE_URL is not configured.');
  let response;
  try {
    response = await fetch(`${apiBase}${path}`, { headers: { Accept: 'application/xml' }, next: { revalidate: 300, tags } });
  } catch (error) {
    throw new BlogUpstreamError(`Laravel blog feed is unavailable: ${error.message}`);
  }
  if (response.status === 404) throw new BlogNotFoundError('Blog not found.');
  if (!response.ok) throw new BlogUpstreamError(`Laravel blog feed returned ${response.status}.`);
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('xml')) throw new BlogUpstreamError('Laravel blog feed returned a non-XML response.');
  return response.text();
}

export async function getBlogs() {
  try { return parseBlogListXml(await requestXml('/api/public/blogs.xml', ['blogs'])); }
  catch (error) { if (error instanceof BlogNotFoundError || error instanceof BlogUpstreamError) throw error; throw new BlogUpstreamError(error.message); }
}

export async function getBlog(slug) {
  try { return parseBlogDetailXml(await requestXml(`/api/public/blogs/${encodeURIComponent(slug)}.xml`, ['blogs', `blog:${slug}`])); }
  catch (error) { if (error instanceof BlogNotFoundError || error instanceof BlogUpstreamError) throw error; throw new BlogUpstreamError(error.message); }
}

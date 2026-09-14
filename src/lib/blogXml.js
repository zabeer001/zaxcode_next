import { XMLParser, XMLValidator } from 'fast-xml-parser';

const parser = new XMLParser({ ignoreAttributes: false, trimValues: true, processEntities: true });

function requireString(value, field) {
  if (typeof value !== 'string' && typeof value !== 'number') throw new Error(`Invalid blog XML: ${field} is missing.`);
  return String(value);
}

function optionalString(value) { return value === undefined || value === null ? '' : String(value); }

function normalizeBlog(value, includeContent = false) {
  if (!value || typeof value !== 'object') throw new Error('Invalid blog XML payload.');
  const blog = { id: requireString(value.id, 'id'), slug: requireString(value.slug, 'slug'), title: requireString(value.title, 'title'), excerpt: requireString(value.excerpt, 'excerpt'), featuredImageUrl: optionalString(value.featured_image_url), seoTitle: optionalString(value.seo_title) || requireString(value.title, 'title'), seoDescription: optionalString(value.seo_description) || requireString(value.excerpt, 'excerpt'), publishedAt: requireString(value.published_at, 'published_at'), updatedAt: requireString(value.updated_at, 'updated_at'), author: optionalString(value.author) || 'Zaxcode' };
  if (includeContent) blog.contentHtml = requireString(value.content_html, 'content_html');
  if (Number.isNaN(Date.parse(blog.publishedAt)) || Number.isNaN(Date.parse(blog.updatedAt))) throw new Error('Invalid blog XML: invalid date.');
  return blog;
}

function parse(xml) {
  const validation = XMLValidator.validate(xml);
  if (validation !== true) throw new Error(`Laravel blog feed returned malformed XML: ${validation.err.msg}`);
  try { return parser.parse(xml); }
  catch (error) { throw new Error(`Laravel blog feed returned malformed XML: ${error.message}`); }
}

export function parseBlogListXml(xml) {
  const values = parse(xml)?.blogs?.blog;
  if (!values) return [];
  return (Array.isArray(values) ? values : [values]).map((blog) => normalizeBlog(blog));
}

export function parseBlogDetailXml(xml) { return normalizeBlog(parse(xml)?.blog, true); }

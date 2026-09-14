import assert from 'node:assert/strict';
import test from 'node:test';
import { parseBlogDetailXml, parseBlogListXml } from '../src/lib/blogXml.js';

const item = '<blog><id>1</id><slug>hello-world</slug><title>Hello &amp; World</title><excerpt>Summary</excerpt><featured_image_url></featured_image_url><seo_title></seo_title><seo_description></seo_description><published_at>2026-09-14T10:00:00+00:00</published_at><updated_at>2026-09-14T11:00:00+00:00</updated_at><author>Zaxcode</author></blog>';

test('parses blog list XML and applies SEO fallbacks', () => {
  const [blog] = parseBlogListXml(`<?xml version="1.0"?><blogs count="1">${item}</blogs>`);
  assert.equal(blog.title, 'Hello & World');
  assert.equal(blog.seoTitle, 'Hello & World');
  assert.equal(blog.seoDescription, 'Summary');
});

test('parses sanitized HTML from detail XML', () => {
  const blog = parseBlogDetailXml(item.replace('</blog>', '<content_html>&lt;p&gt;Body&lt;/p&gt;</content_html></blog>'));
  assert.equal(blog.contentHtml, '<p>Body</p>');
});

test('rejects an incomplete payload', () => {
  assert.throws(() => parseBlogDetailXml('<blog><title>Missing fields</title></blog>'), /id is missing/);
});

test('rejects malformed XML', () => {
  assert.throws(() => parseBlogListXml('<blogs><blog></blogs>'), /malformed XML/);
});

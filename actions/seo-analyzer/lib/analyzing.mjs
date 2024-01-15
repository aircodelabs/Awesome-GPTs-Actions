import { JSDOM } from 'jsdom';

export default function analyzing(content) {
  const {window} = new JSDOM(content);
  const document = window.document;
  const {head, body} = document;

  let headings = {};
  
  for(let i = 1; i <= 5; i++) {
    const headTag = `h${i}`;
    const counts = document.querySelectorAll(headTag).length;
    headings[headTag] = counts;
  }

  return {
    titleTag: document.title || 'en',
    siteLanguage: document.documentElement.lang,
    metaDescription: head.querySelector('meta[name="description"]')?.content,
    metaKeywords: head.querySelector('meta[name="keywords"]')?.content,
    headings,
  };
}
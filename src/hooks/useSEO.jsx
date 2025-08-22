import { useEffect } from "react";

export default function useSEO({
  title,
  description,
  keywords,
  image,
  url,
}) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta helper
    const setMeta = (name, attr, content) => {
      if (!content) return;
      let tag = document.querySelector(`${name}[${attr}='${content}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, content);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Standard metas
    if (description) setMeta("meta", "name", "description", description);
    if (keywords) setMeta("meta", "name", "keywords", keywords);

    // Open Graph
    if (title) setMeta("meta", "property", "og:title", title);
    if (description) setMeta("meta", "property", "og:description", description);
    if (image) setMeta("meta", "property", "og:image", image);
    if (url) setMeta("meta", "property", "og:url", url);

    // Twitter
    if (title) setMeta("meta", "name", "twitter:title", title);
    if (description) setMeta("meta", "name", "twitter:description", description);
    if (image) setMeta("meta", "name", "twitter:image", image);
    setMeta("meta", "name", "twitter:card", "summary_large_image");

  }, [title, description, keywords, image, url]);
}

// Prefixes a public-folder asset path (e.g. "/assets/images/foo.png") with
// Vite's configured base URL, so it resolves correctly both in dev (base "/")
// and on GitHub Pages (base "/lumos-website/").
export function asset(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}

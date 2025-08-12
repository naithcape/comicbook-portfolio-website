// /pages/utils.js
// Environment: server & client

import type { PageContext } from "vike/types"

export { getTitle }

function getTitle(pageContext: PageContext) {
  const val = pageContext.config.title
  if (typeof val === "function") {
    return val(pageContext)
  }
  return val || "naithcape"
}

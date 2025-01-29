import meta from "../../../pages/_meta.js";
import javascript_meta from "../../../pages/javascript/_meta.js";
import sql_meta from "../../../pages/sql/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "javascript",
  route: "/javascript",
  children: [{
    data: javascript_meta
  }, {
    name: "index",
    route: "/javascript",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }]
}, {
  name: "sql",
  route: "/sql",
  children: [{
    data: sql_meta
  }, {
    name: "index",
    route: "/sql",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }]
}];
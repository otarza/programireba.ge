import meta from "../../../pages/_meta.js";
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
  name: "sql",
  route: "/sql",
  children: [{
    data: sql_meta
  }, {
    name: "ch0",
    route: "/sql/ch0",
    frontMatter: {
      "sidebarTitle": "Ch0"
    }
  }, {
    name: "ch1",
    route: "/sql/ch1",
    frontMatter: {
      "sidebarTitle": "Ch1"
    }
  }, {
    name: "ch2",
    route: "/sql/ch2",
    frontMatter: {
      "sidebarTitle": "Ch2"
    }
  }, {
    name: "index",
    route: "/sql",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }]
}];
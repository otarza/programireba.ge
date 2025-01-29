import meta from "../../../pages/_meta.js";
import html_meta from "../../../pages/html/_meta.js";
import javascript_meta from "../../../pages/javascript/_meta.js";
import sql_meta from "../../../pages/sql/_meta.js";
import tools_meta from "../../../pages/tools/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "html",
  route: "/html",
  children: [{
    data: html_meta
  }, {
    name: "0-html-document",
    route: "/html/0-html-document",
    frontMatter: {
      "sidebarTitle": "0 HTML Document"
    }
  }, {
    name: "1-tags",
    route: "/html/1-tags",
    frontMatter: {
      "sidebarTitle": "1 Tags"
    }
  }, {
    name: "index",
    route: "/html",
    frontMatter: {
      "title": "HTML",
      "sidebarTitle": "HTML",
      "asIndexPage": true
    }
  }]
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
}, {
  name: "tools",
  route: "/tools",
  children: [{
    data: tools_meta
  }, {
    name: "code-editor",
    route: "/tools/code-editor",
    frontMatter: {
      "sidebarTitle": "Code Editor"
    }
  }, {
    name: "index",
    route: "/tools",
    frontMatter: {
      "title": "პროგრამისტის იარაღები",
      "sidebarTitle": "იარაღები",
      "asIndexPage": true
    }
  }]
}];
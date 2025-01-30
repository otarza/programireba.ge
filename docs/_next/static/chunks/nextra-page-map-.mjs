import meta from "../../../pages/_meta.js";
import blog_meta from "../../../pages/blog/_meta.js";
import html_meta from "../../../pages/html/_meta.js";
import tools_meta from "../../../pages/tools/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "blog",
  route: "/blog",
  children: [{
    data: blog_meta
  }, {
    name: "index",
    route: "/blog",
    frontMatter: {
      "title": "ბლოგის სტატიები",
      "sidebarTitle": "სტატიები",
      "asIndexPage": true
    }
  }]
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
      "title": "HTML - ის სახელმძღვანელო",
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
    name: "git",
    route: "/tools/git",
    frontMatter: {
      "sidebarTitle": "Git"
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
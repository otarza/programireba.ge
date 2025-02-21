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
    name: "2-html-document-structure",
    route: "/html/2-html-document-structure",
    frontMatter: {
      "sidebarTitle": "2 HTML Document Structure"
    }
  }, {
    name: "3-text-elements",
    route: "/html/3-text-elements",
    frontMatter: {
      "sidebarTitle": "3 Text Elements"
    }
  }, {
    name: "4-lists",
    route: "/html/4-lists",
    frontMatter: {
      "sidebarTitle": "4 Lists"
    }
  }, {
    name: "5-images-and-attributes",
    route: "/html/5-images-and-attributes",
    frontMatter: {
      "sidebarTitle": "5 Images and Attributes"
    }
  }, {
    name: "6-hyperlinks",
    route: "/html/6-hyperlinks",
    frontMatter: {
      "sidebarTitle": "6 Hyperlinks"
    }
  }, {
    name: "7-page-structure",
    route: "/html/7-page-structure",
    frontMatter: {
      "sidebarTitle": "7 Page Structure"
    }
  }, {
    name: "8-semantic-html",
    route: "/html/8-semantic-html",
    frontMatter: {
      "sidebarTitle": "8 Semantic HTML"
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
    "title": "პროგრამირება და ვებ ტექნოლოგიები",
    "sidebarTitle": "დასაწყისი"
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
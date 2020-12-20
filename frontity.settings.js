const settings = {
  "name": "f1",
  "state": {
    "frontity": {
      "url": "https://staging2.awsm.in/fone/",
      "title": "AWSM F1 - Frontity theme",
      "description": "A simple theme for Frontity WordPress development"
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["About", "/about-us/"],
            ["Services", "/services/"],
            ["Work", "/work/"],
            ["Careers", "/careers/"],            
            ["Blog", "/blog/"],
            ["Contact", "/contact-us/"],
            ["Get a quote", "/get-a-quote/"],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://intellrocket-new.sajtic-projects.com/wp-json",
          "homepage": "/boo-new-main",
          "postsPage":"/blog",
          postTypes: [
            {
              type: "work", // type slug
              endpoint: "work", // REST API endpoint
              archive: "/work-archive"
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7",
    "@awsmin/frontity-wp-job-openings"
  
    
  ]
};

export default settings;

const dayjs = require("dayjs");

module.exports = function (config) {
  // Pass-through images
  config.addPassthroughCopy("./_site/img");
  config.addPassthroughCopy("./_site/css");
  config.addPassthroughCopy("./_site/js");

  //add shortcodes
  config.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add Date filters
  config.addFilter("date", (dateObj) => {
    return dayjs(dateObj).format("MMMM D, YYYY");
  });

  config.addFilter("sitemapDate", (dateObj) => {
    return dayjs(dateObj).toISOString();
  });

  config.addFilter("year", () => {
    return dayjs().format("YYYY");
  });

  // Add pages collection
  config.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "_site",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
      output: "dist",
    },
  };
};

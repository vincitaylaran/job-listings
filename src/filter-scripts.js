"use strict";

const d = require("./data.json");

const listings = JSON.parse(JSON.stringify(d));

let filteredListings = listings.map((listing) => {
  const keywords = [
    listing.role.toLowerCase(),
    listing.level.toLowerCase(),
    ...listing.languages.map((language) => language.toLowerCase()),
    ...listing.tools.map((tool) => tool.toLowerCase()),
  ];
  return { ...listing, keywords };
});

let selectedKeyword = null;
let criteria = new Array();

const filter = (keyword) => {
  const keywordLowercase = keyword.toLowerCase();
  criteria.push(keyword); // I don't push keywordLowercase because I want the text in the components that will render criteria array to have the original casing.
  selectedKeyword = keywordLowercase;

  filteredListings = filteredListings.filter((listing) =>
    listing.keywords.some((keyword) => keyword === selectedKeyword)
      ? true
      : false
  );

  return filteredListings;
};

const clear = () => {
  filteredListings = listings.map((listing) => {
    const keywords = [
      listing.role.toLowerCase(),
      listing.level.toLowerCase(),
      ...listing.languages.map((language) => language.toLowerCase()),
      ...listing.tools.map((tool) => tool.toLowerCase()),
    ];
    return { ...listing, keywords };
  });
};

const remove = (keyword) => {
  criteria = criteria.filter((word) => word !== keyword);
  clear();

  criteria.forEach((word) => {
    selectedKeyword = word.toLowerCase();
    filteredListings = filteredListings.filter((listing) =>
      listing.keywords.some((keyword) => keyword === selectedKeyword)
        ? true
        : false
    );
  });

  return filteredListings;
};

console.log("FILTER FOR fullstack -> ", filter("Fullstack"));
console.log("FILTER FOR javascript and fullstack -> ", filter("JavaScript"));
console.log("FILTER FOR sass, javascript, and fullstack -> ", filter("Sass"));
console.log("FILTER FOR javascript and fullstack -> ", remove("Sass"));
console.log(criteria);
console.log("FILTER FOR javascript and fullstack -> ", remove("Fullstack"));
console.log("FILTER FOR show all -> ", remove("JavaScript"));
console.log(criteria);

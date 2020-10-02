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
let criteria = [];

const filter = (keyword) => {
  // convert it to lowercase since casing on some of the objects is not consistent. For example: some objects have "FullStack" while others have "Fullstack" (lowercase S).
  const keywordLowercase = keyword.toLowerCase();

  // I don't push keywordLowercase because I want the text in the components that will render the criteria array to have the original casing.
  criteria.push(keyword);
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

const printListings = () => {
  console.log(`There are ${filteredListings.length} job(s)`);

  filteredListings.forEach((listing) => {
    console.log({ id: listing.id, keywords: listing.keywords });
  });
};

filter("javascript");
printListings();

filter("vue");
printListings();

remove("javascript");
printListings();

remove("vue");
printListings();

filter("ruby");
printListings();

clear();
printListings();

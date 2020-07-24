/**
* custom slugify function
*/
export const customSlugify = (input) => {
  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-/]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
    .slice(0, 120);
};
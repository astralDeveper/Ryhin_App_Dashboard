const generateImagePath = (name) => `src/assets/${name}.png`;

const imageNames = [
  "logo",
  "eye",
  "avatar",
  "delete",
  "edit",
  "options",
  "pencil",
  "search", 
];

const IMAGES = imageNames.reduce((acc, name) => {
  acc[name.toUpperCase()] = generateImagePath(name);
  return acc;
}, {}); 


export { IMAGES };

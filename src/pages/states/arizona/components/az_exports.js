// src/pages/states/arizona/components/exports.js
const countyNames = ['Cochise', 'Maricopa', 'Pima', 'Pinal', 'SantaCruzAZ', 'Yuma'];

export const counties = Object.fromEntries(
  countyNames.map(name => [name, require(`../counties/${name}`).default])
);

export default counties;

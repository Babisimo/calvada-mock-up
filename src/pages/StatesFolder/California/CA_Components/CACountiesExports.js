import CACountiesArr from "./CACountiesArr";

const counties = {};

CACountiesArr.forEach(county => {
  counties[county] = require(`../ca_counties/${county}`).default;
});

export default counties;
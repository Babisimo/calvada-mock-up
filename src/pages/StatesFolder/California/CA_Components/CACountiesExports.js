import CACountiesArr from "./CACountiesArr";

const cacounties = {};

CACountiesArr.forEach(county => {
  cacounties[county] = require(`../ca_counties/${county}`).default;
});

export default cacounties;
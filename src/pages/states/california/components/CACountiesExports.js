import CACountiesArr from "./CACountiesArr";

const cacounties = {};

CACountiesArr.forEach(county => {
  cacounties[county] = require(`../counties/${county}`).default;
});

export default cacounties;
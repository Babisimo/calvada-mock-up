let azCountiesArr = [
    "Cochise",
    "Maricopa",
    "Pima",
    "SantaCruzAZ",
    "Yuma",
    "Pinal",
]


const azcounties = {}

azCountiesArr.forEach(county => {
    azcounties[county] = require(`../a_counties/${county}`).default;
})

export default azcounties


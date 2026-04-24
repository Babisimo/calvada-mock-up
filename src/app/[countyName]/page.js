import CountyPageTemplate from "../../components/CountyPageTemplate";
import caCountiesData from "../../data/california_counties.json";
import azCountiesData from "../../data/arizona_counties.json";
import nvCountiesData from "../../data/nevada_counties.json";
import txCountiesData from "../../data/texas_counties.json";
import waCountiesData from "../../data/washington_counties.json";
import azHighwayData from "../../data/arizona_highway.json";
import nvHighwayData from "../../data/nevada_highway.json";

const allCountiesList = [
    ...caCountiesData,
    ...azCountiesData,
    ...nvCountiesData,
    ...txCountiesData,
    ...waCountiesData
];

export const dynamicParams = false;

export async function generateStaticParams() {
    return allCountiesList.map((county) => ({
        countyName: county.id.toLowerCase(),
    }));
}

export default async function CountyPage({ params }) {
    const { countyName } = await params;
    let county = allCountiesList.find(c => c.id.toLowerCase() === countyName.toLowerCase());
    
    if (county && county.state === 'AZ') {
        county = { ...county, highway: azHighwayData };
    } else if (county && county.state === 'NV') {
        county = { ...county, highway: nvHighwayData };
    }
    
    return <CountyPageTemplate county={county} />;
}

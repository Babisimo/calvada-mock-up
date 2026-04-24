import UtilityPageTemplate from '../../../components/UtilityPageTemplate';
import caUtilities from '../../../data/california_utilities.json';

const routeMap = {
    "lautilities": "LAUtils",
    "zonetwoutilities": "ZoneTwoUtils",
    "zonethreeutilities": "ZoneThreeUtils",
    "zonefourutilities": "ZoneFourUtils",
    "zonefiveutilities": "ZoneFiveUtils",
    "zonesixutilities": "ZoneSixUtils"
};

export async function generateStaticParams() {
    return Object.keys(routeMap).map(route => ({
        utilityName: route
    }));
}

export default async function UtilityPage({ params }) {
    const { utilityName } = await params;
    const id = routeMap[utilityName];
    const utility = caUtilities.find(u => u.id === id);
    return <UtilityPageTemplate utility={utility} />;
}

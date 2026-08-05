import CACities from '../../../components/CACities';
import AZCities from '../../../components/AZCities';
import WACities from '../../../components/WACities';
import NVCities from '../../../components/NVCities';

export async function generateStaticParams() {
    return [
        { stateName: 'CACities' },
        { stateName: 'AZCities' },
        { stateName: 'WACities' },
        { stateName: 'NVCities' },
    ];
}

const STATE_NAMES = {
    CACities: 'California',
    AZCities: 'Arizona',
    WACities: 'Washington',
    NVCities: 'Nevada',
};

export async function generateMetadata({ params }) {
    const { stateName } = await params;
    const state = STATE_NAMES[stateName];
    if (!state) return { title: 'State Not Found' };
    return {
        title: `${state} Cities`,
        description: `City research links for ${state} — zoning, benchmarks, GIS, and public works.`,
    };
}

export default async function StateCitiesPage({ params }) {
    const { stateName } = await params;
    if (stateName === 'CACities') return <CACities />;
    if (stateName === 'AZCities') return <AZCities />;
    if (stateName === 'WACities') return <WACities />;
    if (stateName === 'NVCities') return <NVCities />;
    return <div>State not found</div>;
}

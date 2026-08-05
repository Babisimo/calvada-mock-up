import Home from '../components/Home';

export const metadata = {
  // No `title` here on purpose: title.template does not apply within the same
  // route segment as the layout that declares it, so setting one would render
  // a bare "Home". Falling through to title.default gives "Calvada Research".
  description:
    'Jump into Calvada Surveying research by county, city, or California utility zone.',
};

export default Home;

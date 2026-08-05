import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import backgrounds from '../data/backgrounds.json';
import '../styles/tokens.css'; // must be first — every other sheet consumes it
import '../styles/navbar.css';
import '../style.css';
import '../styles/dropdown.css';
import '../styles/city.css';
import '../styles/city_dropdown.css';
import '../styles/scrollbar.css';
import '../styles/utils.css';
import '../styles/notification.css';
import '../styles/counties.css';
import '../styles/map.css';
import '../styles/contact.css';
import '../styles/links.css';

export const metadata = {
  // Pages set their own `title`; the template appends the site name so every
  // tab is identifiable. See docs/brand-guidelines.md §1.
  title: {
    default: 'Calvada Research',
    template: '%s — Calvada Research',
  },
  description:
    'Internal survey research reference for Calvada Surveying, Inc. — county and city records, APN formats, public works contacts, Caltrans districts, and utility zones.',
};

/* Rendered into <head> so the photo is chosen before first paint — picking it
   after hydration would show one background and then visibly swap it.
   The choice is held in sessionStorage, so navigating around the site keeps
   the same photo and only a new visit rotates it. Falls back silently to the
   inline :root default if storage is unavailable (private mode, file://). */
const backgroundPickerScript = `
(function () {
  var list = ${JSON.stringify(backgrounds)};
  if (!list.length) return;
  var chosen;
  try {
    var stored = sessionStorage.getItem('heroBackground');
    chosen = list.indexOf(stored) !== -1
      ? stored
      : list[Math.floor(Math.random() * list.length)];
    sessionStorage.setItem('heroBackground', chosen);
  } catch (e) {
    chosen = list[Math.floor(Math.random() * list.length)];
  }
  document.documentElement.style.setProperty('--hero-image', 'url("' + chosen + '")');
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Default for the no-JavaScript case; the script above overrides it. */}
        <style>{`:root{--hero-image:url("${backgrounds[0]}")}`}</style>
        <script dangerouslySetInnerHTML={{ __html: backgroundPickerScript }} />
      </head>
      <body suppressHydrationWarning>
        <header>
          <NavBar />
        </header>
        <article>
          <div className="container">
            {children}
          </div>
        </article>
        <Footer />
      </body>
    </html>
  );
}

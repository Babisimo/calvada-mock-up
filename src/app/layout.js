import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/navbar.css';
import '../style.css';
import '../styles/dropdown.css';
import '../styles/city.css';
import '../styles/city_dropdown.css';
import '../styles/scrollbar.css';
import '../styles/utils.css';
import '../styles/notification.css';
import '../styles/counties.css';
import '../styles/contact.css';
import '../styles/links.css';

export const metadata = {
  title: 'Research Calvada',
  description: 'Research material organization for Calvada Surveying',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <header>
          <NavBar />
        </header>
        <article>
          <div className="container">
            {children}
          </div>
        </article>
      </body>
    </html>
  );
}

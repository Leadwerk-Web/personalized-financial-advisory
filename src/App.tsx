/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import { Impressum, Datenschutz, Erstinformation } from './pages/Legal';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<Service />} />
          <Route path="ueber-mich" element={<About />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
          <Route path="erstinformation" element={<Erstinformation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

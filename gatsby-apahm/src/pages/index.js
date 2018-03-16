import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <Header />
    <About
        title='About APAHM'>
    </About>
    <Resume />
    <Testimonials />
    <Footer />
  </div>
);

export default IndexPage;

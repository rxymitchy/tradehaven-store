
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Home/Hero';
import Categories from '@/components/Home/Categories';
import FeaturedProducts from '@/components/Product/FeaturedProducts';
import FeaturedProduct from '@/components/Home/FeaturedProduct';
import Testimonials from '@/components/Home/Testimonials';
import Newsletter from '@/components/Home/Newsletter';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FeaturedProduct />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Index;

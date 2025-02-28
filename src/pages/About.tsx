
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto animate-slide-in">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4">Our Story</div>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">About TradeHaven</h1>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p>
              TradeHaven was founded with a simple yet profound mission: to create a shopping experience that honors the 
              principles of thoughtful design and exceptional quality. Our journey began in 2023 when our founder, 
              inspired by a lifelong passion for minimalist design philosophy, set out to curate a collection of products 
              that seamlessly blend form and function.
            </p>
            
            <p>
              We believe that the objects we surround ourselves with should not only be beautiful but purposeful. 
              Each item in our collection is carefully selected based on its design integrity, material quality, 
              and the story behind its creation. We partner with designers and makers who share our commitment to 
              craftsmanship and sustainability.
            </p>
            
            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Our Philosophy</h2>
            
            <p>
              At TradeHaven, we embrace the principle that "less is more." We believe in the power of thoughtful curation 
              over endless options, quality over quantity, and timeless design over fleeting trends. Our approach is guided 
              by three core values:
            </p>
            
            <ul>
              <li>
                <strong>Intentional Design:</strong> Every product we offer has been thoughtfully designed with attention to detail, 
                proportion, and material integrity.
              </li>
              <li>
                <strong>Lasting Quality:</strong> We believe in creating and offering products that are built to last, 
                both in their physical construction and their aesthetic appeal.
              </li>
              <li>
                <strong>Mindful Experience:</strong> From browsing our collections to unboxing your purchase, we strive to create 
                an experience that feels considered and elegant at every touchpoint.
              </li>
            </ul>
            
            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Our Promise</h2>
            
            <p>
              We are committed to offering you products that enrich your everyday life through their beauty, functionality, 
              and quality. We stand behind everything we sell and are dedicated to providing exceptional customer service.
            </p>
            
            <p>
              Thank you for joining us on this journey. We look forward to being a part of your story as you create spaces 
              and experiences that reflect your own appreciation for thoughtful design.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

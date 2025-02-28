
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProduct = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 space-y-8 animate-slide-in">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-2">
                Featured Product
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight">
                The Perfect Sound Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience audio like never before with our premium wireless headphones. 
                Featuring active noise cancellation, crystal-clear sound quality, and up to 
                40 hours of battery life - all wrapped in a sleek, minimalist design.
              </p>
            </div>
            
            <ul className="space-y-3">
              {[
                'Active Noise Cancellation',
                'Premium Sound Quality',
                '40-Hour Battery Life',
                'Comfortable Ergonomic Design'
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <div className="mr-3 h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-baseline space-x-3">
              <span className="font-bold text-2xl">$249.99</span>
              <span className="text-muted-foreground line-through">$299.99</span>
            </div>
            
            <Button size="lg" className="rounded-full px-8 btn-hover-effect" asChild>
              <Link to="/products/3">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center relative animate-slide-in">
            <div className="absolute inset-0 scale-110 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
              alt="Wireless Headphones" 
              className="relative z-10 rounded-lg max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
      </div>
      
      <div className="container relative px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[90vh] md:min-h-[80vh] items-center py-12 md:py-20">
          <div className="space-y-8 animate-slide-in max-w-xl">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                New Collection
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Discover Timeless Elegance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Curated pieces that blend minimalist design with premium craftmanship, creating a shopping experience as unique as you are.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 btn-hover-effect" asChild>
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/categories">Explore Categories</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-4">
              {['Premium Quality', 'Sustainable', 'Free Shipping'].map((item) => (
                <div key={item} className="text-center">
                  <div className="font-medium text-sm mb-1">{item}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-secondary/40 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" 
                alt="Premium watch" 
                className="relative rounded-2xl w-full max-w-md h-auto object-cover shadow-2xl animate-slide-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

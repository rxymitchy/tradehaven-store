
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold">TradeHaven</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium shopping experience with curated products for the discerning customer.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Categories', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {['FAQ', 'Shipping Policy', 'Returns & Exchanges', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter to get updates on new arrivals and special offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="h-10 rounded-l-md bg-white/80"
              />
              <Button className="rounded-r-md btn-hover-effect">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TradeHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

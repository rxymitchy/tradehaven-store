
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Minimalist Ceramic Vase',
    image: 'https://images.unsplash.com/photo-1602479185069-cf2cfc4c463f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 49.99,
    category: 'Home Decor',
    isNew: true
  },
  {
    id: '2',
    name: 'Leather Crossbody Bag',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 129.99,
    category: 'Accessories'
  },
  {
    id: '3',
    name: 'Wireless Noise-Canceling Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 199.99,
    category: 'Electronics',
    isSale: true
  },
  {
    id: '4',
    name: 'Modern Desk Lamp',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 79.99,
    category: 'Lighting'
  },
  {
    id: '5',
    name: 'Black Essential T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 29.99,
    category: 'Clothing'
  },
  {
    id: '6',
    name: 'Minimalist Wall Clock',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 59.99,
    category: 'Home Decor',
    isNew: true
  },
  {
    id: '7',
    name: 'Smart Watch Series 5',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 299.99,
    category: 'Electronics'
  },
  {
    id: '8',
    name: 'Handcrafted Ceramic Mug Set',
    image: 'https://images.unsplash.com/photo-1577918782896-488c9010e6df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 39.99,
    category: 'Kitchen',
    isSale: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4">Featured Collection</div>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight">Our Best Sellers</h2>
          </div>
          <Link to="/products" className="mt-4 md:mt-0 group inline-flex items-center text-sm font-medium">
            View All Products
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="animate-slide-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;


import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ProductCard, { ProductProps } from '@/components/Product/ProductCard';
import { Button } from '@/components/ui/button';
import { Filter, SlidersHorizontal } from 'lucide-react';

// Reusing the sample product data from FeaturedProducts
const products: ProductProps[] = [
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
  },
  {
    id: '9',
    name: 'Minimalist Backpack',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 89.99,
    category: 'Accessories'
  },
  {
    id: '10',
    name: 'Natural Wooden Chair',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 149.99,
    category: 'Furniture',
    isNew: true
  },
  {
    id: '11',
    name: 'Stainless Steel Water Bottle',
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 34.99,
    category: 'Kitchen'
  },
  {
    id: '12',
    name: 'Wool Throw Blanket',
    image: 'https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 79.99,
    category: 'Home Decor',
    isSale: true
  }
];

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4">Collection</div>
              <h1 className="text-2xl md:text-4xl font-display font-bold tracking-tight">All Products</h1>
            </div>
            <Button variant="outline" size="sm" className="mt-4 md:mt-0">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="animate-slide-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Load More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;

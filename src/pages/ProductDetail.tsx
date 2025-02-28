
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  Heart, 
  Share2, 
  Truck, 
  RotateCcw, 
  ShieldCheck 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ProductCard, { ProductProps } from '@/components/Product/ProductCard';

// Reusing product data
const allProducts: ProductProps[] = [
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
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the product with the matching ID
    const foundProduct = allProducts.find(p => p.id === id) || null;
    setProduct(foundProduct);
    
    // Get related products (excluding current product)
    if (foundProduct) {
      const related = allProducts
        .filter(p => p.category === foundProduct.category && p.id !== id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product?.name} (${quantity}) has been added to your cart`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product?.name} has been added to your wishlist`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Product share link copied to clipboard",
    });
  };

  if (!product) {
    return (
      <Layout>
        <div className="container px-4 py-16 md:py-24 text-center">
          <p>Product not found</p>
          <Button className="mt-4" asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 py-12 md:py-16">
        <Link to="/products" className="inline-flex items-center text-sm font-medium mb-8 hover:text-primary/70 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slide-in">
          {/* Product Images */}
          <div className="bg-secondary/20 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">{product.name}</h1>
              <div className="flex items-center mt-3 space-x-4">
                <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
                {product.isSale && (
                  <div className="text-muted-foreground line-through">${(product.price * 1.2).toFixed(2)}</div>
                )}
              </div>
            </div>

            <div className="pt-4">
              <div className="font-medium mb-2">Description</div>
              <p className="text-muted-foreground">
                Experience the perfect blend of form and function with our meticulously crafted {product.name.toLowerCase()}. 
                Designed with premium materials and attention to detail, this product combines minimalist aesthetics with 
                practical functionality to enhance your everyday life.
              </p>
            </div>

            {/* Quantity selector */}
            <div className="pt-4">
              <div className="font-medium mb-3">Quantity</div>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full h-9 w-9"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full h-9 w-9"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 sm:flex-1 btn-hover-effect" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12" onClick={handleAddToWishlist}>
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product features */}
            <div className="border-t border-border pt-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: RotateCcw, label: "30-Day Returns" },
                { icon: ShieldCheck, label: "2-Year Warranty" }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-3">
                  <feature.icon className="h-6 w-6 mb-2 text-muted-foreground" />
                  <span className="text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-display font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div key={product.id} className="animate-slide-in">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;


import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  image,
  price,
  category,
  isNew,
  isSale
}) => {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to Cart",
      description: `${name} has been added to your cart`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to Wishlist",
      description: `${name} has been added to your wishlist`,
    });
  };

  return (
    <Link to={`/products/${id}`} className="group">
      <div className="product-card bg-background rounded-lg overflow-hidden border border-border/40 hover:shadow-lg transition-all duration-300">
        <div className="relative product-image-container aspect-square bg-secondary/30">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover product-image"
            loading="lazy"
          />
          {(isNew || isSale) && (
            <div className="absolute top-3 left-3">
              {isNew && (
                <Badge className="bg-primary text-primary-foreground font-medium">New</Badge>
              )}
              {isSale && (
                <Badge className="bg-destructive text-destructive-foreground font-medium ml-2">Sale</Badge>
              )}
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={handleWishlist}
          >
            <Heart className="h-5 w-5" />
          </Button>
          <div className="absolute inset-x-0 bottom-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Button 
              className="m-3 w-full max-w-[80%] rounded-full shadow-lg btn-hover-effect" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-muted-foreground mb-1">{category}</div>
          <h3 className="font-medium text-base mb-1 line-clamp-1">{name}</h3>
          <div className="text-sm font-bold">${price.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

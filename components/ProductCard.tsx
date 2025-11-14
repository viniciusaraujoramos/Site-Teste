import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-sm mb-5 aspect-[3/4] bg-neutral/10">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        <Button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white text-primary hover:bg-primary hover:text-white border border-neutral/20"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </div>
      <div className="space-y-1">
        <p className="text-foreground/50 text-xs uppercase tracking-wider">{product.category}</p>
        <h4 className="text-foreground group-hover:text-primary transition-colors duration-300">{product.name}</h4>
        <p className="text-foreground pt-1">R$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Product } from "./ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onNavigate: (page: string) => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-24">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-primary mb-6">Seu carrinho está vazio</h2>
          <p className="text-foreground/60 mb-10 leading-relaxed">
            Adicione alguns produtos incríveis à sua sacola!
          </p>
          <Button
            onClick={() => onNavigate("products")}
            className="bg-primary hover:bg-primary-light text-white px-8 py-6 rounded-sm text-sm uppercase tracking-wider transition-all duration-300"
          >
            Explorar Produtos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-primary mb-12">Carrinho de Compras</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-6 bg-white border border-neutral/20 rounded-sm p-6 hover:border-neutral/30 transition-colors">
              <div className="w-28 h-28 rounded-sm overflow-hidden bg-neutral/10 flex-shrink-0">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-1.5">{item.name}</h4>
                <p className="text-sm text-foreground/50 uppercase tracking-wide mb-3">{item.category}</p>
                <p className="text-foreground">R$ {item.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemoveItem(item.id)}
                  className="text-foreground/40 hover:text-red-500 hover:bg-transparent transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <div className="flex items-center gap-3 border border-neutral/20 rounded-sm">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="h-9 w-9 hover:bg-neutral/10"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </Button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="h-9 w-9 hover:bg-neutral/10"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-neutral/10 border border-neutral/20 rounded-sm p-8 sticky top-28">
            <h3 className="mb-8 text-primary">Resumo do Pedido</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-foreground/70">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-foreground/70">
                <span>Frete</span>
                <span>{shipping === 0 ? "Grátis" : `R$ ${shipping.toFixed(2)}`}</span>
              </div>
              {subtotal > 0 && subtotal < 200 && (
                <p className="text-sm text-primary-light pt-2">
                  Frete grátis em compras acima de R$ 200
                </p>
              )}
              <div className="border-t border-neutral/30 pt-4 flex justify-between">
                <span>Total</span>
                <span className="text-primary">R$ {total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary-light text-white py-6 rounded-sm text-sm uppercase tracking-wider transition-all duration-300 mb-3">
              Finalizar Compra
            </Button>
            <Button
              variant="outline"
              className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white py-6 rounded-sm text-sm uppercase tracking-wider transition-all duration-300"
              onClick={() => onNavigate("products")}
            >
              Continuar Comprando
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
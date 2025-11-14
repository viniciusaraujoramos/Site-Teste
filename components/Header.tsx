import { ShoppingBag, User, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemsCount: number;
}

export function Header({ currentPage, onNavigate, cartItemsCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral/10 shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate("home")}
            className="hover:opacity-80 transition-opacity duration-300 text-primary text-2xl"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <button
              onClick={() => onNavigate("home")}
              className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                currentPage === "home" ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate("products")}
              className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                currentPage === "products" ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Produtos
            </button>
            <button
              onClick={() => onNavigate("blog")}
              className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                currentPage === "blog" ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Blog
            </button>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-neutral/20 transition-colors">
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate("cart")}
              className="relative hover:bg-neutral/20 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate("profile")}
              className="hover:bg-neutral/20 transition-colors"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-neutral/20 transition-colors">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
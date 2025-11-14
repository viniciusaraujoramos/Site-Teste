import { useState } from "react";
import { ProductCard, Product } from "./ProductCard";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface ProductsPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductsPage({ products, onAddToCart }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

  let filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-primary">Nossa Coleção</h1>
        
        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-white border border-neutral/30 rounded-md pl-4 pr-10 py-2.5 text-sm cursor-pointer hover:border-neutral/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="featured">Destaque</option>
            <option value="name">Nome A-Z</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-foreground/60" />
        </div>
      </div>

      <div className="flex gap-12">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-28">
            <h4 className="mb-6 text-foreground">Categorias</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 text-sm ${
                    selectedCategory === category
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-foreground/70 hover:bg-neutral/20 hover:text-foreground border-l-2 border-transparent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Price Range */}
            <div className="mt-12 pt-8 border-t border-neutral/20">
              <h5 className="mb-4 text-foreground/80">Faixa de Preço</h5>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-neutral/40 text-primary focus:ring-primary/20" />
                  Até R$ 150
                </label>
                <label className="flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-neutral/40 text-primary focus:ring-primary/20" />
                  R$ 150 - R$ 250
                </label>
                <label className="flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-neutral/40 text-primary focus:ring-primary/20" />
                  R$ 250 - R$ 350
                </label>
                <label className="flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-neutral/40 text-primary focus:ring-primary/20" />
                  Acima de R$ 350
                </label>
              </div>
            </div>

            {/* Materials */}
            <div className="mt-8 pt-8 border-t border-neutral/20">
              <h5 className="mb-4 text-foreground/80">Materiais</h5>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-neutral/40 text-primary focus:ring-primary/20" />
                  Linho
                </label>
                <label className="flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-neutral/40 text-primary focus:ring-primary/20" />
                  Algodão Orgânico
                </label>
                <label className="flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-neutral/40 text-primary focus:ring-primary/20" />
                  Lã Natural
                </label>
                <label className="flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-neutral/40 text-primary focus:ring-primary/20" />
                  Seda
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Mobile Category Filter */}
          <div className="lg:hidden mb-8">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none bg-white border border-neutral/30 rounded-md pl-4 pr-10 py-3 cursor-pointer hover:border-neutral/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-foreground/50">
              <p>Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
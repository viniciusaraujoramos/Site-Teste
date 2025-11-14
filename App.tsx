import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { BlogPage } from "./components/BlogPage";
import { CartPage } from "./components/CartPage";
import { ProfilePage } from "./components/ProfilePage";
import { Product } from "./components/ProductCard";
import { CartItem } from "./components/CartPage";
import { BlogPost } from "./components/BlogPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Mock Products Data
  const products: Product[] = [
    {
      id: "1",
      name: "Vestido Linho Natural",
      price: 285.00,
      image: "https://images.unsplash.com/photo-1675239514439-1c128b0cffcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBvcmdhbmljfGVufDF8fHx8MTc2MzA5NDk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Vestido fluido em linho 100% natural",
      category: "Vestidos",
    },
    {
      id: "2",
      name: "Blusa Artesanal Bordada",
      price: 165.00,
      image: "https://images.unsplash.com/photo-1704729105381-f579cfcefd63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZmFzaGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjMwOTQ5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Blusa com bordados feitos à mão",
      category: "Blusas",
    },
    {
      id: "3",
      name: "Calça Wide Leg Orgânica",
      price: 220.00,
      image: "https://images.unsplash.com/photo-1664623737694-fd3d0e144842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmFicmljJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzMDk0OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Calça confortável em algodão orgânico",
      category: "Calças",
    },
    {
      id: "4",
      name: "Kimono Estampado",
      price: 195.00,
      image: "https://images.unsplash.com/photo-1722942432154-067a239bc58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHdhcmRyb2JlJTIwbWluaW1hbHxlbnwxfHx8fDE3NjMwOTQ5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Kimono leve com estampas exclusivas",
      category: "Blusas",
    },
    {
      id: "5",
      name: "Saia Midi Texturizada",
      price: 175.00,
      image: "https://images.unsplash.com/photo-1633367092521-ca95d1e14572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsb3RoaW5nJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjMwOTQ5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Saia midi com textura única",
      category: "Saias",
    },
    {
      id: "6",
      name: "Casaco Tricot Artesanal",
      price: 315.00,
      image: "https://images.unsplash.com/photo-1759738097761-506cd03c7ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjB0ZXh0aWxlJTIwY3JhZnR8ZW58MXx8fHwxNzYzMDk0OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Casaco tricotado à mão com lã natural",
      category: "Casacos",
    },
    {
      id: "7",
      name: "Macacão Linho Confort",
      price: 340.00,
      image: "https://images.unsplash.com/photo-1675239514439-1c128b0cffcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBvcmdhbmljfGVufDF8fHx8MTc2MzA5NDk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Macacão versátil em linho puro",
      category: "Vestidos",
    },
    {
      id: "8",
      name: "Top Cropped Sustentável",
      price: 125.00,
      image: "https://images.unsplash.com/photo-1664623737694-fd3d0e144842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmFicmljJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzMDk0OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Top cropped em algodão reciclado",
      category: "Blusas",
    },
  ];

  // Mock Blog Posts Data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "A Arte do Tingimento Natural",
      excerpt: "Descubra como utilizamos plantas e minerais para criar cores vibrantes e sustentáveis em nossas peças.",
      image: "https://images.unsplash.com/photo-1759738097761-506cd03c7ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjB0ZXh0aWxlJTIwY3JhZnR8ZW58MXx8fHwxNzYzMDk0OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "10 Nov 2024",
      author: "Ana Costa",
      category: "Técnicas",
    },
    {
      id: "2",
      title: "Moda Sustentável: Por Que Importa?",
      excerpt: "Entenda o impacto da moda rápida no meio ambiente e como fazer escolhas mais conscientes.",
      image: "https://images.unsplash.com/photo-1675239514439-1c128b0cffcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBvcmdhbmljfGVufDF8fHx8MTc2MzA5NDk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "05 Nov 2024",
      author: "Maria Silva",
      category: "Sustentabilidade",
    },
    {
      id: "3",
      title: "Conhecendo Nossos Artesãos",
      excerpt: "Uma conversa intimista com os talentosos artesãos que dão vida às peças AZOUS.",
      image: "https://images.unsplash.com/photo-1704729105381-f579cfcefd63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZmFzaGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjMwOTQ5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "01 Nov 2024",
      author: "João Santos",
      category: "Histórias",
    },
    {
      id: "4",
      title: "Cuidados com Suas Roupas Artesanais",
      excerpt: "Dicas essenciais para prolongar a vida útil das suas peças artesanais favoritas.",
      image: "https://images.unsplash.com/photo-1664623737694-fd3d0e144842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmFicmljJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzMDk0OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "28 Out 2024",
      author: "Clara Lima",
      category: "Dicas",
    },
    {
      id: "5",
      title: "Tendências em Moda Consciente 2024",
      excerpt: "As principais tendências que unem estilo e responsabilidade ambiental neste ano.",
      image: "https://images.unsplash.com/photo-1722942432154-067a239bc58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHdhcmRyb2JlJTIwbWluaW1hbHxlbnwxfHx8fDE3NjMwOTQ5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "20 Out 2024",
      author: "Paula Mendes",
      category: "Tendências",
    },
    {
      id: "6",
      title: "Do Campo à Moda: A Jornada do Linho",
      excerpt: "Acompanhe o processo completo de produção do linho, desde o cultivo até a peça final.",
      image: "https://images.unsplash.com/photo-1633367092521-ca95d1e14572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsb3RoaW5nJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjMwOTQ5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "15 Out 2024",
      author: "Roberto Alves",
      category: "Processos",
    },
  ];

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartItemsCount={cartItemsCount}
      />
      
      <main className="flex-1">
        {currentPage === "home" && (
          <HomePage
            onNavigate={setCurrentPage}
            onAddToCart={handleAddToCart}
            featuredProducts={products.slice(0, 4)}
          />
        )}
        {currentPage === "products" && (
          <ProductsPage products={products} onAddToCart={handleAddToCart} />
        )}
        {currentPage === "blog" && <BlogPage posts={blogPosts} />}
        {currentPage === "cart" && (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigate={setCurrentPage}
          />
        )}
        {currentPage === "profile" && <ProfilePage />}
      </main>

      <Footer />
    </div>
  );
}

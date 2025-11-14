import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProductCard, Product } from "./ProductCard";
import { Logo } from "./Logo";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product) => void;
  featuredProducts: Product[];
}

export function HomePage({ onNavigate, onAddToCart, featuredProducts }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[700px] bg-neutral/10 flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1633367092521-ca95d1e14572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsb3RoaW5nJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjMwOTQ5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <div className="mb-8 flex justify-center text-primary text-6xl">
            <Logo />
          </div>
          <h1 className="text-primary mb-8">Moda Artesanal com Alma</h1>
          <p className="text-xl mb-10 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Descubra peças únicas, feitas à mão com materiais sustentáveis e muito carinho
          </p>
          <Button 
            onClick={() => onNavigate("products")}
            className="bg-primary hover:bg-primary-light text-white px-10 py-6 rounded-sm text-sm uppercase tracking-wider transition-all duration-300"
          >
            Explorar Coleção
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-primary">Nossa História</h2>
            <p className="text-foreground/70 leading-relaxed">
              A AZOUS nasceu do amor pela moda artesanal e sustentável. Cada peça é cuidadosamente 
              confeccionada por artesãos talentosos, utilizando técnicas tradicionais e materiais 
              naturais de alta qualidade.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Acreditamos que a roupa que você veste deve contar uma história - uma história de 
              dedicação, arte e respeito pelo meio ambiente.
            </p>
          </div>
          <div className="relative h-[500px] rounded-sm overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759738097761-506cd03c7ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjB0ZXh0aWxlJTIwY3JhZnR8ZW58MXx8fHwxNzYzMDk0OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nossa história"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-neutral/10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-primary mb-16">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              onClick={() => onNavigate("products")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-sm text-sm uppercase tracking-wider transition-all duration-300"
            >
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🌿</span>
            </div>
            <h4 className="text-primary">Sustentável</h4>
            <p className="text-foreground/60 leading-relaxed">
              Materiais naturais e processos ecológicos
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">✋</span>
            </div>
            <h4 className="text-primary">Feito à Mão</h4>
            <p className="text-foreground/60 leading-relaxed">
              Cada peça é única e cuidadosamente elaborada
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💚</span>
            </div>
            <h4 className="text-primary">Com Amor</h4>
            <p className="text-foreground/60 leading-relaxed">
              Dedicação e paixão em cada detalhe
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Instagram, Facebook, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-neutral/20 mt-20 border-t border-neutral/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-primary text-xl mb-6">
              <Logo />
            </div>
            <p className="text-foreground/60 leading-relaxed">
              Roupas artesanais feitas com amor e dedicação para você.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="mb-6 text-foreground/80">Navegação</h5>
            <ul className="space-y-3 text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Produtos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Contato</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h5 className="mb-6 text-foreground/80">Informações</h5>
            <ul className="space-y-3 text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Envio e Entrega</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Política de Devolução</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Privacidade</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="mb-6 text-foreground/80">Redes Sociais</h5>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral/30 mt-12 pt-8 text-center text-foreground/50 text-sm">
          <p>&copy; 2024 AZOUS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
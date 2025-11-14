import { User, MapPin, CreditCard, Package, Heart, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ProfilePage() {
  const mockOrders = [
    { id: "1", date: "15/10/2024", status: "Entregue", total: 285.00 },
    { id: "2", date: "03/11/2024", status: "Em trânsito", total: 420.00 },
    { id: "3", date: "10/11/2024", status: "Processando", total: 165.00 },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-primary mb-12">Meu Perfil</h1>

      <Tabs defaultValue="account" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="orders">Pedidos</TabsTrigger>
          <TabsTrigger value="addresses">Endereços</TabsTrigger>
          <TabsTrigger value="favorites">Favoritos</TabsTrigger>
        </TabsList>

        {/* Account Tab */}
        <TabsContent value="account" className="space-y-6">
          <div className="bg-white border border-neutral/20 rounded-sm p-8 max-w-2xl">
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-neutral/20">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h3 className="mb-1">Maria Silva</h3>
                <p className="text-foreground/60">maria.silva@email.com</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-foreground/70 text-sm uppercase tracking-wide mb-2 block">Nome</Label>
                  <Input id="firstName" defaultValue="Maria" className="rounded-sm border-neutral/30" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground/70 text-sm uppercase tracking-wide mb-2 block">Sobrenome</Label>
                  <Input id="lastName" defaultValue="Silva" className="rounded-sm border-neutral/30" />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground/70 text-sm uppercase tracking-wide mb-2 block">Email</Label>
                <Input id="email" type="email" defaultValue="maria.silva@email.com" className="rounded-sm border-neutral/30" />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground/70 text-sm uppercase tracking-wide mb-2 block">Telefone</Label>
                <Input id="phone" defaultValue="(11) 98765-4321" className="rounded-sm border-neutral/30" />
              </div>

              <Button className="bg-primary hover:bg-primary-light text-white px-8 py-6 rounded-sm text-sm uppercase tracking-wider transition-all duration-300">
                Salvar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <div className="space-y-4 max-w-3xl">
            {mockOrders.map((order) => (
              <div key={order.id} className="bg-white border border-neutral/20 rounded-sm p-6 hover:border-neutral/30 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Package className="w-5 h-5 text-primary" />
                      <h4>Pedido #{order.id}</h4>
                    </div>
                    <p className="text-foreground/60 text-sm">Data: {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground mb-2">R$ {order.total.toFixed(2)}</p>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-wide ${
                      order.status === "Entregue" 
                        ? "bg-green-100 text-green-700" 
                        : order.status === "Em trânsito"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Addresses Tab */}
        <TabsContent value="addresses">
          <div className="max-w-2xl space-y-4">
            <div className="bg-white border border-neutral/20 rounded-sm p-6 hover:border-neutral/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="mb-3">Endereço Principal</h4>
                  <p className="text-foreground/60 leading-relaxed">Rua das Flores, 123</p>
                  <p className="text-foreground/60 leading-relaxed">Bairro Jardim - São Paulo, SP</p>
                  <p className="text-foreground/60 leading-relaxed">CEP: 01234-567</p>
                </div>
                <Button variant="outline" size="sm" className="border-neutral/30 hover:border-primary hover:text-primary">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white px-6 py-6 rounded-sm text-sm uppercase tracking-wider transition-all duration-300">
              Adicionar Novo Endereço
            </Button>
          </div>
        </TabsContent>

        {/* Favorites Tab */}
        <TabsContent value="favorites">
          <div className="text-center py-20 max-w-md mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-foreground/20" />
            <h3 className="text-foreground/60 mb-3">Nenhum favorito ainda</h3>
            <p className="text-foreground/50 mb-8 leading-relaxed">
              Comece a adicionar produtos aos seus favoritos!
            </p>
            <Button className="bg-primary hover:bg-primary-light text-white px-8 py-6 rounded-sm text-sm uppercase tracking-wider transition-all duration-300">
              Explorar Produtos
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
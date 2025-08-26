import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Package, Car, Wrench, Settings, Users, ShoppingCart, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import servicoTransporte from '@/assets/servico-transporte.jpg';
import servicoManutencao from '@/assets/servico-manutencao.jpg';
import servicoLocacao from '@/assets/servico-locacao.jpg';

const services = [
  {
    id: 1,
    title: "Transporte municipal de cargas",
    description: "Entregas locais com agilidade e segurança.",
    icon: Truck,
    image: servicoTransporte
  },
  {
    id: 2,
    title: "Carga e descarga",
    description: "Equipe treinada para operações eficientes.",
    icon: Package,
    image: servicoTransporte
  },
  {
    id: 3,
    title: "Locação de automóveis",
    description: "Veículos para uso corporativo, sem condutor.",
    icon: Car,
    image: servicoLocacao
  },
  {
    id: 4,
    title: "Máquinas e equipamentos",
    description: "Aluguel sob demanda para o seu projeto.",
    icon: Settings,
    image: servicoManutencao
  },
  {
    id: 5,
    title: "Manutenção mecânica",
    description: "Cuidado técnico para sua frota.",
    icon: Wrench,
    image: servicoManutencao
  },
  {
    id: 6,
    title: "Peças usadas",
    description: "Reaproveitamento responsável e econômico.",
    icon: Cog,
    image: servicoManutencao
  },
  {
    id: 7,
    title: "Passageiros com motorista",
    description: "Translado corporativo sob reserva.",
    icon: Users,
    image: servicoLocacao
  },
  {
    id: 8,
    title: "Veículos novos",
    description: "Soluções de mobilidade para empresas.",
    icon: ShoppingCart,
    image: servicoLocacao
  }
];

const cnaeList = [
  "49.30-2-01 – Transporte rodoviário de carga municipal",
  "77.11-0-00 – Locação de automóveis sem condutor",
  "77.39-0-99 – Aluguel de outras máquinas e equipamentos",
  "45.20-0-01 – Manutenção e reparação mecânica",
  "45.30-7-04 – Comércio de peças e acessórios usados",
  "52.12-5-00 – Carga e descarga",
  "45.11-1-01 – Comércio de automóveis novos",
  "77.19-5-99 – Locação de outros meios de transporte",
  "77.32-2-01 – Aluguel de máquinas para construção",
  "49.23-0-02 – Transporte de passageiros com motorista"
];

export const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em transporte e serviços correlatos para atender 
              às necessidades de sua empresa.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative mb-12">
            <div 
              className="overflow-hidden rounded-xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={service.id} className="w-full flex-shrink-0">
                      <Card className="mx-2 border-0 bg-gradient-to-br from-card to-card/80 gs-card-shadow">
                        <CardContent className="p-0">
                          <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
                            {/* Image */}
                            <div className="relative bg-muted rounded-l-xl overflow-hidden">
                              <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-8 flex flex-col justify-center">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-secondary/10 rounded-lg">
                                  <IconComponent className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-display font-semibold text-foreground">
                                    {service.title}
                                  </h3>
                                </div>
                              </div>
                              <p className="text-muted-foreground text-lg leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border hover:bg-muted"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border hover:bg-muted"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-secondary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* CNAE Registry */}
          <div className="mt-16">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 text-center">
              Registros CNAE
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cnaeList.map((cnae, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-2 bg-muted rounded-full text-sm text-muted-foreground border border-border"
                >
                  {cnae}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
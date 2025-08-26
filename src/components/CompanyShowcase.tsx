import { Building2, MapPin, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import sedeImage from '@/assets/sede.jpg';
import empresaImage from '@/assets/empresa.jpg';

export const CompanyShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Nossa Empresa
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instalações modernas e equipe qualificada para atender suas necessidades 
              de transporte e logística.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Company Image */}
            <div className="relative">
              <img 
                src={sedeImage} 
                alt="Sede da GS Transportes e Serviços LTDA"
                className="w-full h-[400px] object-cover rounded-xl gs-card-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl"></div>
            </div>
            
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Sede em Contagem/MG
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nossa sede está estrategicamente localizada em Contagem, região metropolitana 
                  de Belo Horizonte, permitindo atendimento eficiente em toda a região.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Building2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">9+ Anos</p>
                    <p className="text-sm text-muted-foreground">No mercado</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Contagem</p>
                    <p className="text-sm text-muted-foreground">Minas Gerais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <Card className="gs-card-shadow border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Equipe Qualificada
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Nossos profissionais são capacitados e experientes, garantindo 
                    a qualidade e segurança em todos os serviços prestados.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-secondary" />
                      <span className="text-foreground font-medium">Equipe treinada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-secondary" />
                      <span className="text-foreground font-medium">Certificada</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={empresaImage} 
                    alt="Equipe da GS Transportes trabalhando"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
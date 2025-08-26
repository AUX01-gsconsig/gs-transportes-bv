import { Building2, Calendar, MapPin, FileText, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Quem Somos
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Company Description */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  A GS Transportes e Serviços LTDA atua desde 2015 em Contagem–MG, com foco em 
                  transporte municipal de cargas e serviços correlatos de mobilidade e apoio operacional. 
                  Valorizamos a segurança, a pontualidade e o atendimento próximo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Este site também serve como referência oficial para verificação do Business Manager 
                  da Meta, apresentando nossos dados cadastrais e canais de contato.
                </p>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <Shield className="w-6 h-6 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Empresa Verificada</p>
                  <p className="text-sm text-muted-foreground">
                    Dados oficiais disponíveis para verificação institucional
                  </p>
                </div>
              </div>
            </div>

            {/* Company Data Card */}
            <Card className="gs-card-shadow border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Dados Oficiais
                  </h3>
                  <div className="w-12 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Razão Social</p>
                      <p className="text-muted-foreground">GS Transportes e Serviços LTDA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">CNPJ</p>
                      <p className="text-muted-foreground font-mono">23.814.427/0001-29</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Fundação</p>
                      <p className="text-muted-foreground">09/12/2015</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Cidade/UF</p>
                      <p className="text-muted-foreground">Contagem – Minas Gerais</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-1">CNAE Principal</p>
                    <p className="text-sm text-muted-foreground">
                      49.30-2-01 – Transporte rodoviário de carga, exceto produtos perigosos e mudanças, municipal
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-xs text-muted-foreground text-center">
                    Este site também comprova presença online para verificação do BM da Meta.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
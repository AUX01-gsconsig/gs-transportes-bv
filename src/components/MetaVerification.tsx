import { Shield, CheckCircle, Building, Globe, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MetaVerification = () => {
  return (
    <section id="verificacao" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="gs-card-shadow border-0 bg-card/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <CardTitle className="text-2xl font-display font-bold text-foreground">
                Verificação do Business Manager da Meta
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="text-center mb-8">
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Esta página funciona como referência pública da GS Transportes e Serviços LTDA, 
                  apresentando razão social, CNPJ e canais de contato oficiais para validações de propriedade.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Razão Social</p>
                      <p className="text-muted-foreground">GS Transportes e Serviços LTDA</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">CNPJ</p>
                      <p className="text-muted-foreground font-mono">23.814.427/0001-29</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Domínio</p>
                      <p className="text-muted-foreground">gsconsig.fun</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-mail Corporativo</p>
                      <p className="text-muted-foreground">contato@gsconsig.fun</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Cidade/UF</p>
                      <p className="text-muted-foreground">Contagem/MG</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefone</p>
                      <p className="text-muted-foreground">(11) 93014-7751</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Política de Privacidade
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Nenhum dado sensível é coletado aqui. Esta página serve exclusivamente 
                      para verificação de propriedade empresarial em plataformas digitais.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <h1 className="text-xl font-display font-bold text-primary">
              GS Transportes
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="gs-card-shadow border-0">
            <CardHeader>
              <CardTitle className="text-3xl font-display font-bold text-center">
                Termos de Uso
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </CardHeader>
            
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-foreground">
                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">1. Aceitação</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao acessar gsconsig.fun, você concorda com estes Termos.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">2. Objetivo do Site</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Página institucional da GS Transportes e Serviços LTDA, incluindo informações 
                    para verificação de propriedade em plataformas como o BM da Meta.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">3. Conteúdo</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Informações podem ser atualizadas sem aviso prévio.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">4. Formulário</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Mensagens enviadas são de responsabilidade do usuário; o envio não cria 
                    obrigação comercial.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">5. Propriedade Intelectual</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Marcas, textos e imagens pertencem à GS Transportes e a seus licenciadores; 
                    vedada reprodução sem autorização.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">6. Isenções</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O site é disponibilizado "no estado em que se encontra"; não garantimos 
                    disponibilidade ininterrupta.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">7. Privacidade</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Regida pela <a href="/politica-de-privacidade" className="text-secondary hover:text-secondary/80">Política de Privacidade</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">8. Contato Oficial</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <a href="mailto:contato@gsconsig.fun" className="text-secondary hover:text-secondary/80">contato@gsconsig.fun</a> | 
                    <a href="tel:+5511930147751" className="text-secondary hover:text-secondary/80 ml-1">(11) 93014-7751</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">9. Foro</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Contagem/MG, Brasil.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
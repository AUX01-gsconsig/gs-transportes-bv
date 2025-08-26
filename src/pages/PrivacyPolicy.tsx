import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
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
                Política de Privacidade
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </CardHeader>
            
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-foreground">
                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Controladora</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>GS Transportes e Serviços LTDA</strong> (CNPJ 23.814.427/0001-29), 
                    Contagem–MG, contato: <a href="mailto:contato@gsconsig.fun" className="text-secondary hover:text-secondary/80">contato@gsconsig.fun</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Dados Coletados</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nome, telefone e mensagem enviados via formulário deste site.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Finalidade</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Atendimento a contatos e comprovação de presença online para validações 
                    institucionais (ex.: BM da Meta).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Base Legal (LGPD)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Consentimento e legítimo interesse (art. 7º).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Compartilhamento</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Não compartilhamos dados com terceiros, salvo exigência legal.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Apenas os necessários ao funcionamento e métricas básicas anonimizadas (se aplicável).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Direitos do Titular</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Acesso, correção, exclusão, revogação de consentimento.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Segurança</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Medidas técnicas e organizacionais compatíveis com o porte da empresa.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Retenção</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Somente pelo tempo necessário ao atendimento.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Contato do DPO/Encarregado</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <a href="mailto:contato@gsconsig.fun" className="text-secondary hover:text-secondary/80">contato@gsconsig.fun</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-display font-semibold mb-3">Atualizações</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Esta política pode ser atualizada e a data de revisão constará nesta página.
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

export default PrivacyPolicy;
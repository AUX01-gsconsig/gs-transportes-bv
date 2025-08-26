import { Mail, Phone, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">GS Transportes</h3>
            <p className="text-primary-foreground/80 mb-4">
              Transporte municipal de cargas com agilidade e confiança desde 2015.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/60">
                CNPJ: 23.814.427/0001-29
              </p>
              <p className="text-sm text-primary-foreground/60">
                Contagem – Minas Gerais
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Links Úteis</h4>
            <nav className="space-y-2">
              <a 
                href="/politica-de-privacidade" 
                className="block text-primary-foreground/80 hover:text-primary-foreground gs-transition"
              >
                Política de Privacidade
              </a>
              <a 
                href="/termos-de-uso" 
                className="block text-primary-foreground/80 hover:text-primary-foreground gs-transition"
              >
                Termos de Uso
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('contato');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-primary-foreground/80 hover:text-primary-foreground gs-transition text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contato@gsconsig.fun"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground gs-transition"
              >
                <Mail className="w-4 h-4" />
                contato@gsconsig.fun
              </a>
              <a 
                href="tel:+5511930147751"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground gs-transition"
              >
                <Phone className="w-4 h-4" />
                (11) 93014-7751
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Globe className="w-4 h-4" />
                gsconsig.fun
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} GS Transportes e Serviços LTDA — CNPJ 23.814.427/0001-29
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="/politica-de-privacidade" 
                className="text-primary-foreground/60 hover:text-primary-foreground gs-transition"
              >
                Política de Privacidade
              </a>
              <span className="text-primary-foreground/40">|</span>
              <a 
                href="/termos-de-uso" 
                className="text-primary-foreground/60 hover:text-primary-foreground gs-transition"
              >
                Termos de Uso
              </a>
              <span className="text-primary-foreground/40">|</span>
              <button 
                onClick={() => {
                  const element = document.getElementById('contato');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-primary-foreground/60 hover:text-primary-foreground gs-transition"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
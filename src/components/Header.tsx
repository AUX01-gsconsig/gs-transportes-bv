import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-primary">
              GS Transportes
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary gs-transition"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary gs-transition"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary gs-transition"
            >
              Contato
            </button>
            <a
              href="/politica-de-privacidade"
              className="text-foreground hover:text-primary gs-transition"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos-de-uso"
              className="text-foreground hover:text-primary gs-transition"
            >
              Termos de Uso
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              variant="default"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-glow"
              onClick={() => window.open('https://wa.me/5511930147751?text=Olá! Gostaria de solicitar informações sobre os serviços da GS Transportes.', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Falar com a GS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary gs-transition"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-primary gs-transition"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary gs-transition"
              >
                Contato
              </button>
              <a
                href="/politica-de-privacidade"
                className="text-left text-foreground hover:text-primary gs-transition"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-de-uso"
                className="text-left text-foreground hover:text-primary gs-transition"
              >
                Termos de Uso
              </a>
              <Button
                variant="default"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-4"
                onClick={() => {
                  window.open('https://wa.me/5511930147751?text=Olá! Gostaria de solicitar informações sobre os serviços da GS Transportes.', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Falar com a GS
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
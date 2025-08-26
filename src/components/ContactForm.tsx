import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateName = (name: string): string | undefined => {
    const nameRegex = /^\s*[A-Za-zÀ-ú]{2,}(\s+[A-Za-zÀ-ú]{2,})+\s*$/;
    if (!name.trim()) return 'Nome é obrigatório';
    if (!nameRegex.test(name)) return 'Nome deve conter pelo menos 2 palavras com 2+ letras cada';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    const phoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;
    if (!phone.trim()) return 'Telefone é obrigatório';
    if (!phoneRegex.test(phone)) return 'Formato: (00) 00000-0000';
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Mensagem é obrigatória';
    if (message.trim().length < 10) return 'Mensagem deve ter pelo menos 10 caracteres';
    return undefined;
  };

  const formatPhone = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply mask: (00) 00000-0000
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === 'phone') {
      value = formatPhone(value);
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;
    
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;
    
    const messageError = validateMessage(formData.message);
    if (messageError) newErrors.message = messageError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Retornaremos em breve. Obrigado pelo contato.",
    });
    
    // Clear form
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const isFormValid = !validateName(formData.name) && 
                     !validatePhone(formData.phone) && 
                     !validateMessage(formData.message) &&
                     formData.name.trim() && 
                     formData.phone.trim() && 
                     formData.message.trim();

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Envie uma mensagem e retornaremos em breve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="gs-card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded">
                      <Send className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <a 
                        href="mailto:contato@gsconsig.fun" 
                        className="text-secondary hover:text-secondary/80 gs-transition"
                      >
                        contato@gsconsig.fun
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded">
                      <Send className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telefone</p>
                      <a 
                        href="tel:+5511930147751" 
                        className="text-secondary hover:text-secondary/80 gs-transition"
                      >
                        (11) 93014-7751
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded">
                      <Send className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Localização</p>
                      <p className="text-muted-foreground">Contagem, Minas Gerais</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="gs-card-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl font-display">Enviar Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={errors.name ? 'border-destructive' : ''}
                      placeholder="Seu nome completo"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <div id="name-error" className="flex items-center gap-2 text-sm text-destructive" aria-live="polite">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={errors.phone ? 'border-destructive' : ''}
                      placeholder="(00) 00000-0000"
                      maxLength={15}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <div id="phone-error" className="flex items-center gap-2 text-sm text-destructive" aria-live="polite">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={errors.message ? 'border-destructive' : ''}
                      placeholder="Como podemos ajudar?"
                      rows={4}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <div id="message-error" className="flex items-center gap-2 text-sm text-destructive" aria-live="polite">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-glow"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
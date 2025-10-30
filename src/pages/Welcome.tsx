import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Rocket, Code2, Palette, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ConexaLogo from "@/assets/conexa-logo.svg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="container mx-auto px-4 py-16">
        {/* Logo and Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-8 flex justify-center">
            <img 
              src={ConexaLogo} 
              alt="Conexa" 
              className="h-12 md:h-16 w-auto"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Boilerplate Lovable
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comece seu projeto com arquitetura sólida, design system completo e componentes prontos para uso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/showcase")}
              className="gap-2 group text-base"
            >
              Explorar Componentes
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/icons")}
              className="gap-2 text-base"
            >
              <Palette className="h-5 w-5" />
              Ver Ícones
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <Card className="border-2 transition-all hover:shadow-lg hover:border-primary/50">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Setup Instantâneo</h3>
              <p className="text-sm text-muted-foreground">
                Clone e comece. Tudo já configurado e funcionando.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all hover:shadow-lg hover:border-primary/50">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Design System</h3>
              <p className="text-sm text-muted-foreground">
                Tokens, componentes UI e 260+ ícones customizados.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all hover:shadow-lg hover:border-primary/50">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">TypeScript</h3>
              <p className="text-sm text-muted-foreground">
                Type-safe, organizado e pronto para escalar.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all hover:shadow-lg hover:border-primary/50">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Otimizado</h3>
              <p className="text-sm text-muted-foreground">
                Vite, React 18, Tailwind e as melhores práticas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Start */}
        <Card className="max-w-3xl mx-auto border-2">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Como Usar Este Boilerplate</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Faça um Remix</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Clique no nome do projeto no topo → <strong>Settings</strong> → <strong>Remix this project</strong>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Isso cria uma cópia completa do boilerplate para você
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customize e Construa</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Use os componentes, ícones e design tokens já prontos
                  </p>
                  <code className="text-xs bg-background px-2 py-1 rounded block mt-2">
                    import &#123; Button, Card &#125; from "@/components/ui/..."
                  </code>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Desenvolva Rápido</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Foque em features, não em configuração
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                    <li>✓ Design system unificado</li>
                    <li>✓ Componentes shadcn/ui</li>
                    <li>✓ Navegação e rotas configuradas</li>
                    <li>✓ Dark mode pronto</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Dica:</strong> Explore as páginas <strong>/showcase</strong> e <strong>/icons</strong> para ver tudo que está disponível
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

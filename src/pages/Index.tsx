import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Palette, Code2, Sparkles, BookOpen, Package, Boxes } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Conexa Hero Design System</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Design System Lovable Edition
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sistema de design unificado para projetos Lovable da Conexa.
            Tokens consistentes, componentes reutilizáveis e guidelines claros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/showcase")}
              className="gap-2 group"
            >
              Explorar Showcase
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Documentação
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Card className="transition-all hover:shadow-lg cursor-pointer" onClick={() => navigate("/showcase")}>
            <CardHeader>
              <Palette className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Tokens Unificados</CardTitle>
              <CardDescription>
                Cores, espaçamentos e tipografia padronizados em um único lugar
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="transition-all hover:shadow-lg cursor-pointer" onClick={() => navigate("/icons")}>
            <CardHeader>
              <Boxes className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Iconografia Customizada</CardTitle>
              <CardDescription>
                164 ícones, 5 emojis e 93 ilustrações SVG prontas para uso
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="transition-all hover:shadow-lg opacity-60">
            <CardHeader>
              <Package className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Componentes (Em breve)</CardTitle>
              <CardDescription>
                Biblioteca de componentes React + Tailwind testados
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Start */}
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>
              Como começar a usar o design system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-start p-4 rounded-lg bg-muted/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Remix este projeto</h4>
                <p className="text-sm text-muted-foreground">
                  No Lovable: Settings → Remix this project
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg bg-muted/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Use os tokens</h4>
                <p className="text-sm text-muted-foreground">
                  Todos os tokens estão em <code className="px-1 py-0.5 bg-background rounded">index.css</code> e <code className="px-1 py-0.5 bg-background rounded">tailwind.config.ts</code>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg bg-muted/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Importe componentes</h4>
                <p className="text-sm text-muted-foreground">
                  Componentes convertidos estarão em <code className="px-1 py-0.5 bg-background rounded">/components/conexa</code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            🚧 Projeto em construção - Componentes sendo convertidos gradualmente
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

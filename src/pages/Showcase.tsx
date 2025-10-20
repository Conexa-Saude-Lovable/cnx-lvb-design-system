import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Layout, 
  Type, 
  Box,
  Sparkles,
  Code2,
  Copy,
  Check
} from "lucide-react";
import { toast } from "sonner";

const Showcase = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToken = (token: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedToken(token);
    toast.success("Token copiado!", { description: value });
    setTimeout(() => setCopiedToken(null), 2000);
  };

  // Design Tokens estruturados
  const colorTokens = {
    primary: [
      { name: "Primary 100", var: "--brand-primary-100", value: "252 100% 97%" },
      { name: "Primary 200", var: "--brand-primary-200", value: "252 96% 91%" },
      { name: "Primary 300", var: "--brand-primary-300", value: "276 75% 40%" },
      { name: "Primary 400", var: "--brand-primary-400", value: "276 76% 29%" },
      { name: "Primary 500", var: "--brand-primary-500", value: "276 73% 17%" },
    ],
    secondary: [
      { name: "Secondary 100", var: "--brand-secondary-100", value: "350 100% 97%" },
      { name: "Secondary 200", var: "--brand-secondary-200", value: "350 96% 91%" },
      { name: "Secondary 300", var: "--brand-secondary-300", value: "350 91% 70%" },
      { name: "Secondary 400", var: "--brand-secondary-400", value: "345 85% 41%" },
      { name: "Secondary 500", var: "--brand-secondary-500", value: "345 82% 20%" },
    ],
    tertiary: [
      { name: "Tertiary 100", var: "--brand-tertiary-100", value: "310 86% 97%" },
      { name: "Tertiary 200", var: "--brand-tertiary-200", value: "310 100% 88%" },
      { name: "Tertiary 300", var: "--brand-tertiary-300", value: "310 100% 79%" },
      { name: "Tertiary 400", var: "--brand-tertiary-400", value: "310 55% 65%" },
      { name: "Tertiary 500", var: "--brand-tertiary-500", value: "310 52% 38%" },
    ],
    feedback: [
      { name: "Success 300", var: "--feedback-success-300", value: "146 70% 38%" },
      { name: "Warning 300", var: "--feedback-warning-300", value: "46 86% 50%" },
      { name: "Error 300", var: "--feedback-error-300", value: "358 76% 44%" },
      { name: "Info 300", var: "--feedback-info-300", value: "218 81% 49%" },
    ],
    neutral: [
      { name: "Neutral 100", var: "--neutral-100", value: "213 48% 94%" },
      { name: "Neutral 200", var: "--neutral-200", value: "213 26% 59%" },
      { name: "Neutral 300", var: "--neutral-300", value: "213 36% 35%" },
      { name: "Neutral 400", var: "--neutral-400", value: "213 48% 20%" },
      { name: "Neutral 500", var: "--neutral-500", value: "213 74% 9%" },
    ],
  };

  const spacingTokens = [
    { name: "XXS", value: "0.5rem", pixels: "8px" },
    { name: "XS", value: "1rem", pixels: "16px" },
    { name: "SM", value: "1.5rem", pixels: "24px" },
    { name: "MD", value: "2rem", pixels: "32px" },
    { name: "LG", value: "3rem", pixels: "48px" },
    { name: "XL", value: "4rem", pixels: "64px" },
    { name: "2XL", value: "5rem", pixels: "80px" },
  ];

  const radiusTokens = [
    { name: "None", var: "--radius-none", value: "0px" },
    { name: "XXS", var: "--radius-xxs", value: "1px" },
    { name: "XS", var: "--radius-xs", value: "4px" },
    { name: "MD", var: "--radius-md", value: "6px" },
    { name: "LG", var: "--radius-lg", value: "8px" },
    { name: "XL", var: "--radius-xl", value: "16px" },
    { name: "Full", var: "--radius-full", value: "99999px" },
  ];

  const breakpointTokens = [
    { name: "sm", value: "640px", description: "Mobile landscape / Small tablets" },
    { name: "md", value: "768px", description: "Tablets" },
    { name: "lg", value: "1024px", description: "Desktop / Laptop" },
    { name: "xl", value: "1280px", description: "Large desktop" },
    { name: "2xl", value: "1536px", description: "Extra large screens" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Conexa Hero DS</h1>
                <p className="text-sm text-muted-foreground">Lovable Edition</p>
              </div>
            </div>
            <Badge variant="secondary" className="gap-2">
              <Code2 className="h-3 w-3" />
              v1.0.0
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="tokens" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="tokens" className="gap-2">
              <Palette className="h-4 w-4" />
              Tokens
            </TabsTrigger>
            <TabsTrigger value="components" className="gap-2">
              <Layout className="h-4 w-4" />
              Componentes
            </TabsTrigger>
            <TabsTrigger value="guidelines" className="gap-2">
              <Type className="h-4 w-4" />
              Guidelines
            </TabsTrigger>
          </TabsList>

          {/* TOKENS TAB */}
          <TabsContent value="tokens" className="space-y-8">
            {/* Color Tokens */}
            <section>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Design Tokens</h2>
                <p className="text-muted-foreground">
                  Todos os tokens do sistema de design. Clique para copiar.
                </p>
              </div>

              <div className="space-y-8">
                {/* Primary Colors */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Box className="h-5 w-5" />
                      Cores Primárias
                    </CardTitle>
                    <CardDescription>
                      Cores principais da marca e ações primárias
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {colorTokens.primary.map((token) => (
                        <button
                          key={token.var}
                          onClick={() => copyToken(token.var, `hsl(var(${token.var}))`)}
                          className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
                        >
                          <div
                            className="h-24 w-full transition-transform group-hover:scale-105"
                            style={{ backgroundColor: `hsl(${token.value})` }}
                          />
                          <div className="p-3 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-sm">{token.name}</p>
                              {copiedToken === token.var ? (
                                <Check className="h-4 w-4 text-success" />
                              ) : (
                                <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </div>
                            <code className="text-xs text-muted-foreground">
                              {token.var}
                            </code>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Secondary Colors */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cores Secundárias</CardTitle>
                    <CardDescription>
                      Ações secundárias e elementos de suporte
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {colorTokens.secondary.map((token) => (
                        <button
                          key={token.var}
                          onClick={() => copyToken(token.var, `hsl(var(${token.var}))`)}
                          className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
                        >
                          <div
                            className="h-24 w-full transition-transform group-hover:scale-105"
                            style={{ backgroundColor: `hsl(${token.value})` }}
                          />
                          <div className="p-3 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-sm">{token.name}</p>
                              {copiedToken === token.var ? (
                                <Check className="h-4 w-4 text-success" />
                              ) : (
                                <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </div>
                            <code className="text-xs text-muted-foreground">
                              {token.var}
                            </code>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Feedback Colors */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cores de Feedback</CardTitle>
                    <CardDescription>
                      Estados de sucesso, alerta, erro e informação
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {colorTokens.feedback.map((token) => (
                        <button
                          key={token.var}
                          onClick={() => copyToken(token.var, `hsl(var(${token.var}))`)}
                          className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
                        >
                          <div
                            className="h-24 w-full transition-transform group-hover:scale-105"
                            style={{ backgroundColor: `hsl(${token.value})` }}
                          />
                          <div className="p-3 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-sm">{token.name}</p>
                              {copiedToken === token.var ? (
                                <Check className="h-4 w-4 text-success" />
                              ) : (
                                <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </div>
                            <code className="text-xs text-muted-foreground">
                              {token.var}
                            </code>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Spacing */}
                <Card>
                  <CardHeader>
                    <CardTitle>Espaçamentos</CardTitle>
                    <CardDescription>
                      Sistema de espaçamento baseado em múltiplos de 4px
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {spacingTokens.map((token) => (
                        <div
                          key={token.name}
                          className="flex items-center gap-4 p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
                        >
                          <div className="flex-1">
                            <p className="font-medium">{token.name}</p>
                            <code className="text-sm text-muted-foreground">
                              {token.value} ({token.pixels})
                            </code>
                          </div>
                          <div
                            className="h-8 bg-primary rounded"
                            style={{ width: token.value }}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Border Radius */}
                <Card>
                  <CardHeader>
                    <CardTitle>Raios de Borda</CardTitle>
                    <CardDescription>
                      Valores de border-radius padronizados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {radiusTokens.map((token) => (
                        <button
                          key={token.var}
                          onClick={() => copyToken(token.var, `var(${token.var})`)}
                          className="group p-4 rounded-lg border bg-card hover:bg-accent transition-all text-center"
                        >
                          <div
                            className="h-20 w-full bg-primary mb-3 mx-auto"
                            style={{ borderRadius: token.value }}
                          />
                          <p className="font-medium text-sm">{token.name}</p>
                          <code className="text-xs text-muted-foreground">
                            {token.value}
                          </code>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Breakpoints */}
                <Card>
                  <CardHeader>
                    <CardTitle>Breakpoints Responsivos</CardTitle>
                    <CardDescription>
                      Larguras personalizáveis que determinam como o layout se comporta em diferentes viewports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {breakpointTokens.map((token) => (
                        <button
                          key={token.name}
                          onClick={() => copyToken(token.name, token.value)}
                          className="w-full group flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors text-left"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <code className="font-bold text-primary">{token.name}</code>
                              <span className="text-sm text-muted-foreground">•</span>
                              <code className="text-sm font-medium">{token.value}</code>
                            </div>
                            <p className="text-sm text-muted-foreground">{token.description}</p>
                          </div>
                          {copiedToken === token.name ? (
                            <Check className="h-4 w-4 text-success" />
                          ) : (
                            <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 p-4 rounded-lg bg-muted">
                      <p className="text-sm font-medium mb-2">Exemplo de uso:</p>
                      <code className="text-xs text-muted-foreground block">
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                      </code>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* COMPONENTS TAB */}
          <TabsContent value="components" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Componentes</CardTitle>
                <CardDescription>
                  Em construção - Componentes serão adicionados gradualmente
                </CardDescription>
              </CardHeader>
              <CardContent className="py-12 text-center">
                <Layout className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">Componentes em desenvolvimento</p>
                <p className="text-muted-foreground">
                  Os componentes do Conexa Hero serão convertidos e adicionados aqui
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* GUIDELINES TAB */}
          <TabsContent value="guidelines" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Guidelines de Uso</CardTitle>
                <CardDescription>
                  Boas práticas para usar o design system
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h3>Como usar os tokens</h3>
                <p>
                  Todos os tokens estão disponíveis como variáveis CSS e classes Tailwind:
                </p>
                <ul>
                  <li>
                    <strong>CSS:</strong> <code>var(--primary)</code>
                  </li>
                  <li>
                    <strong>Tailwind:</strong> <code>bg-primary</code>, <code>text-primary</code>
                  </li>
                  <li>
                    <strong>HSL direto:</strong> <code>hsl(var(--primary))</code>
                  </li>
                </ul>

                <h3>Estrutura de cores</h3>
                <p>Cada cor principal possui variações de estado:</p>
                <ul>
                  <li><code>primary</code> - Estado padrão</li>
                  <li><code>primary-hover</code> - Estado hover</li>
                  <li><code>primary-active</code> - Estado ativo/pressionado</li>
                  <li><code>primary-foreground</code> - Texto sobre a cor primária</li>
                </ul>

                <h3>Próximos passos</h3>
                <ol>
                  <li>Ajustar tokens com valores do Conexa Hero original</li>
                  <li>Adicionar componentes gradualmente</li>
                  <li>Documentar padrões de uso</li>
                  <li>Criar exemplos de composição</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Showcase;

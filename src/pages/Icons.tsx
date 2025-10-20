import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Sparkles, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import * as ConexaIcons from "@/components/icons";

const Icons = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const iconsList = [
    { name: "Bulb", component: ConexaIcons.Bulb, category: "icons" },
    { name: "Adjustments", component: ConexaIcons.Adjustments, category: "icons" },
  ];

  const emojisList = [
    { name: "AngryFace", component: ConexaIcons.AngryFace, category: "emojis" },
  ];

  const illustrationsList = [
    { name: "CardBack", component: ConexaIcons.CardBack, category: "illustrations", width: 520, height: 240 },
    { name: "WomanPhoneNotification", component: ConexaIcons.WomanPhoneNotification, category: "illustrations", width: 102, height: 150 },
  ];

  const copyUsage = (iconName: string) => {
    const usage = `import { ${iconName} } from "@/components/icons";\n\n<${iconName} size={24} color="currentColor" />`;
    navigator.clipboard.writeText(usage);
    setCopiedIcon(iconName);
    toast.success("Código copiado!", { description: `Uso do ícone ${iconName}` });
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const filteredIcons = iconsList.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <h1 className="text-2xl font-bold">Conexa Iconography</h1>
                <p className="text-sm text-muted-foreground">Biblioteca de ícones customizados</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Icons: 2</Badge>
              <Badge variant="secondary">Emojis: 1</Badge>
              <Badge variant="secondary">Illustrations: 2</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="icons" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="icons">Icons (2)</TabsTrigger>
            <TabsTrigger value="emojis">Emojis (1)</TabsTrigger>
            <TabsTrigger value="illustrations">Illustrations (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="icons" className="space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Buscar Ícones
                </CardTitle>
                <CardDescription>
                  Pesquise por nome para encontrar o ícone desejado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Ex: bulb, adjustments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-md"
                />
              </CardContent>
            </Card>

            {/* Icons Grid */}
            <Card>
              <CardHeader>
                <CardTitle>
                  Biblioteca de Ícones
                  <span className="text-muted-foreground ml-2">
                    ({filteredIcons.length} {filteredIcons.length === 1 ? "ícone" : "ícones"})
                  </span>
                </CardTitle>
                <CardDescription>
                  Clique para copiar o código de uso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredIcons.map((icon) => {
                    const IconComponent = icon.component;
                    return (
                      <button
                        key={icon.name}
                        onClick={() => copyUsage(icon.name)}
                        className="group relative p-6 rounded-lg border bg-card hover:bg-accent transition-all hover:shadow-md flex flex-col items-center justify-center gap-3"
                      >
                        <IconComponent size={32} className="text-foreground" />
                        <div className="text-center">
                          <p className="text-sm font-medium">{icon.name}</p>
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedIcon === icon.name ? (
                            <Check className="h-4 w-4 text-success" />
                          ) : (
                            <Copy className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {filteredIcons.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Nenhum ícone encontrado</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Usage Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Como usar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Importar o ícone</h3>
                  <code className="block p-3 bg-muted rounded-md text-sm">
                    {`import { Bulb } from "@/components/icons";`}
                  </code>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Usar no componente</h3>
                  <code className="block p-3 bg-muted rounded-md text-sm">
                    {`<Bulb size={24} color="currentColor" />`}
                  </code>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Customizar com props</h3>
                  <code className="block p-3 bg-muted rounded-md text-sm">
                    {`<Bulb 
  size={32} 
  color="hsl(var(--primary))" 
  className="hover:scale-110"
/>`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emojis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Emojis Conexa
                  <span className="text-muted-foreground ml-2">
                    ({emojisList.length} {emojisList.length === 1 ? "emoji" : "emojis"})
                  </span>
                </CardTitle>
                <CardDescription>
                  Emojis customizados com cores fixas. Use apenas a prop size.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {emojisList.map((emoji) => {
                    const EmojiComponent = emoji.component as any;
                    return (
                      <button
                        key={emoji.name}
                        onClick={() => copyUsage(emoji.name)}
                        className="group relative p-6 rounded-lg border bg-card hover:bg-accent transition-all hover:shadow-md flex flex-col items-center justify-center gap-3"
                      >
                        <EmojiComponent size={48} />
                        <div className="text-center">
                          <p className="text-sm font-medium">{emoji.name}</p>
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedIcon === emoji.name ? (
                            <Check className="h-4 w-4 text-success" />
                          ) : (
                            <Copy className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como usar Emojis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <code className="block p-3 bg-muted rounded-md text-sm">
                    {`import { AngryFace } from "@/components/icons";\n\n<AngryFace size={30} />`}
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">
                  ⚠️ Emojis possuem cores fixas e não aceitam a prop <code>color</code>
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="illustrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Ilustrações Conexa
                  <span className="text-muted-foreground ml-2">
                    ({illustrationsList.length} {illustrationsList.length === 1 ? "ilustração" : "ilustrações"})
                  </span>
                </CardTitle>
                <CardDescription>
                  Ilustrações complexas com dimensões e cores fixas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {illustrationsList.map((illustration) => {
                    const IllustrationComponent = illustration.component as any;
                    return (
                      <button
                        key={illustration.name}
                        onClick={() => copyUsage(illustration.name)}
                        className="group relative p-6 rounded-lg border bg-card hover:bg-accent transition-all hover:shadow-md flex flex-col items-center justify-center gap-4"
                      >
                        <div className="w-full flex items-center justify-center overflow-hidden">
                          <IllustrationComponent 
                            width={illustration.width ? illustration.width / 2 : undefined}
                            height={illustration.height ? illustration.height / 2 : undefined}
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">{illustration.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {illustration.width}x{illustration.height}px
                          </p>
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedIcon === illustration.name ? (
                            <Check className="h-4 w-4 text-success" />
                          ) : (
                            <Copy className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como usar Ilustrações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <code className="block p-3 bg-muted rounded-md text-sm">
                    {`import { CardBack } from "@/components/icons";\n\n<CardBack width={520} height={240} />`}
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">
                  💡 Ilustrações mantêm proporções originais e cores fixas
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Icons;

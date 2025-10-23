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
    { name: "Adjustments", component: ConexaIcons.Adjustments, category: "icons" },
    { name: "Alarm", component: ConexaIcons.Alarm, category: "icons" },
    { name: "Analytics", component: ConexaIcons.Analytics, category: "icons" },
    { name: "ArrowDown", component: ConexaIcons.ArrowDown, category: "icons" },
    { name: "ArrowLeft", component: ConexaIcons.ArrowLeft, category: "icons" },
    { name: "ArrowRight", component: ConexaIcons.ArrowRight, category: "icons" },
    { name: "ArrowUp", component: ConexaIcons.ArrowUp, category: "icons" },
    { name: "Back", component: ConexaIcons.Back, category: "icons" },
    { name: "Brain", component: ConexaIcons.Brain, category: "icons" },
    { name: "Bulb", component: ConexaIcons.Bulb, category: "icons" },
    { name: "Bullet", component: ConexaIcons.Bullet, category: "icons" },
    { name: "Calendar", component: ConexaIcons.Calendar, category: "icons" },
    { name: "CalendarRepeat", component: ConexaIcons.CalendarRepeat, category: "icons" },
    { name: "CalendarRepeatTwo", component: ConexaIcons.CalendarRepeatTwo, category: "icons" },
    { name: "DoubleCheck", component: ConexaIcons.DoubleCheck, category: "icons" },
    { name: "DoubleCheckTwo", component: ConexaIcons.DoubleCheckTwo, category: "icons" },
    { name: "DragDrop", component: ConexaIcons.DragDrop, category: "icons" },
    { name: "IAFill", component: ConexaIcons.IAFill, category: "icons" },
    { name: "IALine", component: ConexaIcons.IALine, category: "icons" },
    { name: "MinimizeScreen", component: ConexaIcons.MinimizeScreen, category: "icons" },
    { name: "Pause", component: ConexaIcons.Pause, category: "icons" },
    { name: "Ring", component: ConexaIcons.Ring, category: "icons" },
    { name: "SearchHeart", component: ConexaIcons.SearchHeart, category: "icons" },
    { name: "Talk", component: ConexaIcons.Talk, category: "icons" },
  ];

  const emojisList = [
    { name: "AngryFace", component: ConexaIcons.AngryFace, category: "emojis" },
    { name: "DelightedFace", component: ConexaIcons.DelightedFace, category: "emojis" },
    { name: "HappyFace", component: ConexaIcons.HappyFace, category: "emojis" },
    { name: "RegularFace", component: ConexaIcons.RegularFace, category: "emojis" },
    { name: "SadFace", component: ConexaIcons.SadFace, category: "emojis" },
  ];

  const illustrationsList = [
    { name: "CardBack", component: ConexaIcons.CardBack, category: "illustrations", width: 520, height: 240 },
    { name: "CardFront", component: ConexaIcons.CardFront, category: "illustrations", width: 520, height: 240 },
    { name: "Doctors", component: ConexaIcons.Doctors, category: "illustrations", width: 399, height: 240 },
    { name: "HealthClipboard", component: ConexaIcons.HealthClipboard, category: "illustrations", width: 241, height: 297 },
    { name: "HealthSearch", component: ConexaIcons.HealthSearch, category: "illustrations", width: 241, height: 238 },
    { name: "HealthTeam", component: ConexaIcons.HealthTeam, category: "illustrations", width: 769, height: 248 },
    { name: "ManAdvocate", component: ConexaIcons.ManAdvocate, category: "illustrations", width: 241, height: 240 },
    { name: "ManHoldingPhone", component: ConexaIcons.ManHoldingPhone, category: "illustrations", width: 218, height: 240 },
    { name: "ManMoney", component: ConexaIcons.ManMoney, category: "illustrations", width: 241, height: 240 },
    { name: "ManRun", component: ConexaIcons.ManRun, category: "illustrations", width: 205, height: 242 },
    { name: "ManRunTwo", component: ConexaIcons.ManRunTwo, category: "illustrations", width: 205, height: 242 },
    { name: "ManTalking", component: ConexaIcons.ManTalking, category: "illustrations", width: 241, height: 240 },
    { name: "ManTalkingTwo", component: ConexaIcons.ManTalkingTwo, category: "illustrations", width: 241, height: 240 },
    { name: "MedicAccompanyingPrimary", component: ConexaIcons.MedicAccompanyingPrimary, category: "illustrations", width: 201, height: 240 },
    { name: "MedicAccompanyingSecondary", component: ConexaIcons.MedicAccompanyingSecondary, category: "illustrations", width: 209, height: 240 },
    { name: "MedicAttendingPrimary", component: ConexaIcons.MedicAttendingPrimary, category: "illustrations", width: 213, height: 240 },
    { name: "MedicAttendingSecondary", component: ConexaIcons.MedicAttendingSecondary, category: "illustrations", width: 213, height: 240 },
    { name: "MedicCalendar", component: ConexaIcons.MedicCalendar, category: "illustrations", width: 240, height: 240 },
    { name: "MedicClock", component: ConexaIcons.MedicClock, category: "illustrations", width: 212, height: 240 },
    { name: "MedicCrossedArmsPrimary", component: ConexaIcons.MedicCrossedArmsPrimary, category: "illustrations", width: 201, height: 241 },
    { name: "MedicCrossedArmsSecondary", component: ConexaIcons.MedicCrossedArmsSecondary, category: "illustrations", width: 209, height: 240 },
    { name: "MedicError", component: ConexaIcons.MedicError, category: "illustrations", width: 241, height: 240 },
    { name: "MedicExplaining", component: ConexaIcons.MedicExplaining, category: "illustrations", width: 211, height: 240 },
    { name: "MedicHappyPrimary", component: ConexaIcons.MedicHappyPrimary, category: "illustrations", width: 201, height: 240 },
    { name: "MedicHappySecondary", component: ConexaIcons.MedicHappySecondary, category: "illustrations", width: 208, height: 240 },
    { name: "MedicHelloPaperPrimary", component: ConexaIcons.MedicHelloPaperPrimary, category: "illustrations", width: 201, height: 240 },
    { name: "MedicHelloPaperSecondary", component: ConexaIcons.MedicHelloPaperSecondary, category: "illustrations", width: 208, height: 240 },
    { name: "MedicNegative", component: ConexaIcons.MedicNegative, category: "illustrations", width: 240, height: 240 },
    { name: "MedicPrepared", component: ConexaIcons.MedicPrepared, category: "illustrations", width: 201, height: 240 },
    { name: "MedicReady", component: ConexaIcons.MedicReady, category: "illustrations", width: 201, height: 240 },
    { name: "MedicScreeningPrimary", component: ConexaIcons.MedicScreeningPrimary, category: "illustrations", width: 201, height: 240 },
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
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Iconografia Conexa</h1>
          <p className="text-muted-foreground mb-4">
            Biblioteca completa de ícones, emojis e ilustrações customizados
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Icons: 24</Badge>
            <Badge variant="secondary">Emojis: 5</Badge>
            <Badge variant="secondary">Illustrations: 32</Badge>
          </div>
        </div>
        
        <Tabs defaultValue="icons" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="icons">Icons (24)</TabsTrigger>
            <TabsTrigger value="emojis">Emojis (5)</TabsTrigger>
            <TabsTrigger value="illustrations">Illustrations (32)</TabsTrigger>
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
                        className="group relative p-6 rounded-lg border bg-card hover:bg-[hsl(var(--primary-hover))] transition-all hover:shadow-md flex flex-col items-center justify-center gap-3"
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
                        className="group relative p-6 rounded-lg border bg-card hover:bg-[hsl(var(--primary-hover))] transition-all hover:shadow-md flex flex-col items-center justify-center gap-3"
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
                        className="group relative p-6 rounded-lg border bg-card hover:bg-[hsl(var(--primary-hover))] transition-all hover:shadow-md flex flex-col items-center justify-center gap-4"
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

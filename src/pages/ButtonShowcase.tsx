import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Heart, Settings, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ButtonShowcase() {
  const [background, setBackground] = useState<"white" | "primary">("white");

  const toggleBackground = () => {
    setBackground((prev) => (prev === "white" ? "primary" : "white"));
  };

  const modes = ["solid", "outline", "text", "plain"] as const;
  const colors = [
    "primary",
    "secondary",
    "tertiary",
    "error",
    "success",
    "warning",
    "information",
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-10 px-4 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Button Component
          </h1>
          <p className="text-lg text-muted-foreground">
            Sistema completo de botões com múltiplas variantes, estados e configurações.
          </p>
        </div>

        <Separator />

        {/* Interactive Background Test */}
        <Card>
          <CardHeader>
            <CardTitle>Teste Interativo</CardTitle>
            <CardDescription>
              Clique no botão para alternar o background e testar contrastes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={cn(
                "p-8 rounded-lg transition-colors",
                background === "white"
                  ? "bg-[hsl(var(--background-white))]"
                  : "bg-[hsl(var(--brand-primary-300))]"
              )}
            >
              <Button onClick={toggleBackground}>
                Alternar Background
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* All Modes & Colors Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Modes & Colors</CardTitle>
            <CardDescription>
              Todas as combinações de modes (solid, outline, text, plain) e colors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {modes.map((mode) => (
              <div key={mode} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-mono">
                    {mode}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <Button key={`${mode}-${color}`} mode={mode} color={color}>
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>
              Botões com ícones à esquerda, direita ou apenas ícone
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Left Icon</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={Home}>Home</Button>
                <Button mode="outline" leftIcon={Heart} color="error">
                  Favoritar
                </Button>
                <Button mode="text" leftIcon={Settings} color="tertiary">
                  Configurações
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Right Icon</h3>
              <div className="flex flex-wrap gap-3">
                <Button rightIcon={Home}>Home</Button>
                <Button mode="outline" rightIcon={Heart} color="success">
                  Favoritar
                </Button>
                <Button mode="text" rightIcon={Settings} color="information">
                  Configurações
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Both Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={Home} rightIcon={Heart}>
                  Both Icons
                </Button>
                <Button mode="outline" leftIcon={Settings} rightIcon={Bell}>
                  Outline Both
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Icon Only</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={Home} />
                <Button mode="outline" leftIcon={Heart} color="error" />
                <Button mode="text" leftIcon={Settings} color="tertiary" />
                <Button mode="plain" leftIcon={Bell} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* States */}
        <Card>
          <CardHeader>
            <CardTitle>States</CardTitle>
            <CardDescription>
              Estados disabled e busy (loading)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Disabled</h3>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Solid Disabled</Button>
                <Button mode="outline" disabled>
                  Outline Disabled
                </Button>
                <Button mode="text" disabled>
                  Text Disabled
                </Button>
                <Button mode="plain" disabled>
                  Plain Disabled
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Busy (Loading)</h3>
              <div className="flex flex-wrap gap-3">
                <Button busy>Loading</Button>
                <Button mode="outline" busy color="secondary">
                  Loading Outline
                </Button>
                <Button mode="text" busy color="success">
                  Loading Text
                </Button>
                <Button busy leftIcon={Home}>
                  Loading with Icon
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* With Notification Badge */}
        <Card>
          <CardHeader>
            <CardTitle>With Notification</CardTitle>
            <CardDescription>
              Badge de notificação no canto superior direito
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button notification={2}>Notificações</Button>
              <Button mode="outline" notification={5} leftIcon={Bell}>
                Alertas
              </Button>
              <Button mode="text" notification={99}>
                Mensagens
              </Button>
              <Button notification={3} leftIcon={Bell} />
            </div>
          </CardContent>
        </Card>

        {/* Full Width */}
        <Card>
          <CardHeader>
            <CardTitle>Full Width</CardTitle>
            <CardDescription>
              Botões que ocupam 100% da largura do container
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button fullWidth>Full Width Button</Button>
            <Button mode="outline" fullWidth color="secondary">
              Full Width Outline
            </Button>
            <Button mode="text" fullWidth color="success" leftIcon={Home}>
              Full Width with Icon
            </Button>
          </CardContent>
        </Card>

        {/* White Buttons on Dark Background */}
        <Card>
          <CardHeader>
            <CardTitle>White Buttons</CardTitle>
            <CardDescription>
              Botões brancos para uso em backgrounds escuros
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-[hsl(var(--brand-primary-300))] p-6 rounded-lg space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button color="white">White Solid</Button>
                <Button mode="outline" color="white">
                  White Outline
                </Button>
                <Button mode="text" color="white">
                  White Text
                </Button>
                <Button mode="plain" color="white">
                  White Plain
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button color="white" leftIcon={Home}>
                  With Icon
                </Button>
                <Button mode="outline" color="white" leftIcon={Heart}>
                  Outline Icon
                </Button>
                <Button color="white" disabled>
                  Disabled
                </Button>
                <Button mode="outline" color="white" busy>
                  Loading
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plain Mode Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Plain Mode</CardTitle>
            <CardDescription>
              Modo plain para textos com ação, mantém alinhamento sem padding
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                O plain mode é ideal quando você precisa de um botão que se comporte como
                texto, mantendo o alinhamento com outros elementos da página.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm">Texto normal ao lado de</span>
                <Button mode="plain" color="primary">
                  botão plain
                </Button>
                <span className="text-sm">mantém alinhamento</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper function (if not already in utils)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

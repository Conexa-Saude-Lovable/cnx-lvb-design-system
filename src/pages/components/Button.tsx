import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Code2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ButtonComponent() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Breadcrumb/Back */}
        <Link 
          to="/showcase?tab=components"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Componentes
        </Link>

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Button</h1>
          <p className="text-lg text-muted-foreground">
            Sistema completo de botões com múltiplas variantes, estados e configurações
          </p>
        </div>

        {/* Modes & Colors Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Modes & Colors</CardTitle>
            <CardDescription>
              Todas as combinações de modes (solid, outline, text, plain) e colors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {(["solid", "outline", "text", "plain"] as const).map((mode) => (
              <div key={mode} className="space-y-4">
                <Badge variant="outline" className="font-mono">
                  {mode}
                </Badge>
                <div className="flex flex-wrap gap-3">
                  {(["primary", "secondary", "tertiary", "error", "success", "warning", "information"] as const).map((color) => (
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
                <Button leftIcon={Sparkles}>Home</Button>
                <Button mode="outline" leftIcon={Sparkles} color="error">
                  Favoritar
                </Button>
                <Button mode="text" leftIcon={Code2} color="tertiary">
                  Configurações
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Right Icon</h3>
              <div className="flex flex-wrap gap-3">
                <Button rightIcon={Sparkles}>Home</Button>
                <Button mode="outline" rightIcon={Sparkles} color="success">
                  Favoritar
                </Button>
                <Button mode="text" rightIcon={Code2} color="information">
                  Configurações
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Both Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={Sparkles} rightIcon={Code2}>
                  Both Icons
                </Button>
                <Button mode="outline" leftIcon={Code2} rightIcon={Sparkles}>
                  Outline Both
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Icon Only</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={Sparkles} />
                <Button mode="outline" leftIcon={Code2} color="error" />
                <Button mode="text" leftIcon={Code2} color="tertiary" />
                <Button mode="plain" leftIcon={Sparkles} />
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
                <Button busy leftIcon={Sparkles}>
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
              <Button mode="outline" notification={5} leftIcon={Sparkles}>
                Alertas
              </Button>
              <Button mode="text" notification={99}>
                Mensagens
              </Button>
              <Button notification={3} leftIcon={Sparkles} />
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
            <Button mode="text" fullWidth color="success" leftIcon={Sparkles}>
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
                <Button color="white" leftIcon={Sparkles}>
                  With Icon
                </Button>
                <Button mode="outline" color="white" leftIcon={Code2}>
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
      </main>
    </div>
  );
}

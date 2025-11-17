import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function SwitchComponent() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(true);

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
          <h1 className="text-4xl font-bold mb-2">Switch</h1>
          <p className="text-lg text-muted-foreground">
            Componente de alternância (toggle) para ativar ou desativar configurações
          </p>
        </div>

        {/* Estados Básicos */}
        <Card>
          <CardHeader>
            <CardTitle>Estados</CardTitle>
            <CardDescription>
              Visualização dos diferentes estados do Switch
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Default */}
            <div className="space-y-3">
              <Badge variant="outline">Default (Off)</Badge>
              <div className="flex items-center gap-3">
                <Switch id="default" />
                <Label htmlFor="default" className="text-sm">Switch desativado</Label>
              </div>
            </div>

            {/* Active/Checked */}
            <div className="space-y-3">
              <Badge variant="outline">Active (On)</Badge>
              <div className="flex items-center gap-3">
                <Switch id="active" defaultChecked />
                <Label htmlFor="active" className="text-sm">Switch ativado</Label>
              </div>
            </div>

            {/* Disabled Off */}
            <div className="space-y-3">
              <Badge variant="outline">Disabled Off</Badge>
              <div className="flex items-center gap-3">
                <Switch id="disabled-off" disabled />
                <Label htmlFor="disabled-off" className="text-sm text-[hsl(var(--neutral-200))]">
                  Switch desabilitado (off)
                </Label>
              </div>
            </div>

            {/* Disabled On */}
            <div className="space-y-3">
              <Badge variant="outline">Disabled On</Badge>
              <div className="flex items-center gap-3">
                <Switch id="disabled-on" disabled defaultChecked />
                <Label htmlFor="disabled-on" className="text-sm text-[hsl(var(--neutral-200))]">
                  Switch desabilitado (on)
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>
              Switches controlados que você pode interagir
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="cursor-pointer">
                Notificações push
              </Label>
              <Switch 
                id="notifications" 
                checked={checked1}
                onCheckedChange={setChecked1}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="emails" className="cursor-pointer">
                E-mails de marketing
              </Label>
              <Switch 
                id="emails" 
                checked={checked2}
                onCheckedChange={setChecked2}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="security" className="cursor-pointer">
                Autenticação de dois fatores
              </Label>
              <Switch 
                id="security" 
                checked={checked3}
                onCheckedChange={setChecked3}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="cursor-pointer">
                Modo escuro
              </Label>
              <Switch 
                id="dark-mode" 
                checked={checked4}
                onCheckedChange={setChecked4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Casos de Uso Comuns */}
        <Card>
          <CardHeader>
            <CardTitle>Casos de Uso Comuns</CardTitle>
            <CardDescription>
              Exemplos práticos de uso do Switch
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Configurações</h3>
              <div className="space-y-3 border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="config-1">Notificações</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba alertas sobre atualizações
                    </p>
                  </div>
                  <Switch id="config-1" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="config-2">Sincronização automática</Label>
                    <p className="text-sm text-muted-foreground">
                      Mantenha seus dados atualizados
                    </p>
                  </div>
                  <Switch id="config-2" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Permissões</h3>
              <div className="space-y-3 border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="perm-1">Câmera</Label>
                  <Switch id="perm-1" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="perm-2">Microfone</Label>
                  <Switch id="perm-2" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="perm-3">Localização</Label>
                  <Switch id="perm-3" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Código de Exemplo */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              <CardTitle>Como Usar</CardTitle>
            </div>
            <CardDescription>
              Exemplos de código para implementar o Switch
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">Import</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">{`import { Switch } from "@/lib";
import { Label } from "@/lib";`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Básico</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">{`// Switch simples
<Switch />

// Switch com estado inicial
<Switch defaultChecked />

// Switch desabilitado
<Switch disabled />
<Switch disabled defaultChecked />`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Com Label</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">{`<div className="flex items-center gap-3">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Modo avião</Label>
</div>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Controlado (com estado)</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">{`const [isEnabled, setIsEnabled] = useState(false);

<Switch 
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
/>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Props Table */}
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>
              Propriedades disponíveis para o componente Switch
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left font-semibold">Prop</th>
                    <th className="p-3 text-left font-semibold">Tipo</th>
                    <th className="p-3 text-left font-semibold">Default</th>
                    <th className="p-3 text-left font-semibold">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-sm">checked</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3">Estado controlado do switch</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-sm">defaultChecked</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3 font-mono text-sm">false</td>
                    <td className="p-3">Estado inicial (não controlado)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-sm">onCheckedChange</td>
                    <td className="p-3 font-mono text-sm">(checked: boolean) =&gt; void</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3">Callback quando o estado muda</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-sm">disabled</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3 font-mono text-sm">false</td>
                    <td className="p-3">Desabilita o switch</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-sm">id</td>
                    <td className="p-3 font-mono text-sm">string</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3">ID para associar com label</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-mono text-sm">className</td>
                    <td className="p-3 font-mono text-sm">string</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3">Classes CSS adicionais</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Design Specs */}
        <Card>
          <CardHeader>
            <CardTitle>Especificações de Design</CardTitle>
            <CardDescription>
              Cores e estados do componente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded">
                <span className="font-medium">Default (Off)</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">neutral.200</code>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <span className="font-medium">Active (On)</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">success.300</code>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <span className="font-medium">Disabled</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">neutral.200 + 50% opacity</code>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <span className="font-medium">Thumb (bolinha)</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">white</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

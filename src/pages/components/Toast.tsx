import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check, Info, AlertTriangle, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ToastAction } from "@/components/ui/toast";

const ToastComponent = () => {
  const { toast } = useToast();

  const showSuccessToast = () => {
    toast({
      variant: "success",
      description: "Suas alterações foram salvas com sucesso.",
    });
  };

  const showInformationToast = () => {
    toast({
      variant: "information",
      description: "Uma nova atualização está disponível.",
    });
  };

  const showWarningToast = () => {
    toast({
      variant: "warning",
      description: "Verifique os dados antes de continuar.",
    });
  };

  const showErrorToast = () => {
    toast({
      variant: "error",
      description: "Não foi possível completar a operação.",
    });
  };

  const showSuccessToastWithAction = () => {
    toast({
      variant: "success",
      description: "Seu arquivo foi enviado com sucesso.",
      action: (
        <ToastAction altText="Ver arquivo">
          Ver arquivo
        </ToastAction>
      ),
    });
  };

  const showInformationToastWithAction = () => {
    toast({
      variant: "information",
      description: "Uma nova versão está pronta.",
      action: (
        <ToastAction altText="Atualizar">
          Atualizar agora
        </ToastAction>
      ),
    });
  };

  const showWarningToastWithAction = () => {
    toast({
      variant: "warning",
      description: "Esta ação não pode ser desfeita.",
      action: (
        <ToastAction altText="Confirmar">
          Confirmar
        </ToastAction>
      ),
    });
  };

  const showErrorToastWithAction = () => {
    toast({
      variant: "error",
      description: "Ocorreu um erro ao processar sua solicitação.",
      action: (
        <ToastAction altText="Tentar novamente">
          Tentar novamente
        </ToastAction>
      ),
    });
  };

  const showAllToasts = () => {
    showSuccessToast();
    setTimeout(() => showInformationToast(), 300);
    setTimeout(() => showWarningToast(), 600);
    setTimeout(() => showErrorToast(), 900);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        {/* Breadcrumb/Back */}
        <Link 
          to="/showcase?tab=components"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Componentes
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Toast Component</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Notificações flutuantes com múltiplas variantes e ações opcionais.
          </p>
          <Button onClick={showAllToasts} size="lg">
            Testar Todos os Toasts
          </Button>
        </div>

        {/* Variantes Básicas */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Variantes Básicas</h2>
          <Card>
            <CardHeader>
              <CardTitle>Toast sem ação</CardTitle>
              <CardDescription>
                Notificações simples com título e descrição
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" onClick={showSuccessToast} className="justify-start">
                  <Check className="mr-2 h-4 w-4" />
                  Success Toast
                </Button>
                <Button variant="outline" onClick={showInformationToast} className="justify-start">
                  <Info className="mr-2 h-4 w-4" />
                  Information Toast
                </Button>
                <Button variant="outline" onClick={showWarningToast} className="justify-start">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Warning Toast
                </Button>
                <Button variant="outline" onClick={showErrorToast} className="justify-start">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Error Toast
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Com Ação */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Com Botão de Ação</h2>
          <Card>
            <CardHeader>
              <CardTitle>Toast com ação responsiva</CardTitle>
              <CardDescription>
                Botão de ação inline no desktop e em bloco no mobile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" onClick={showSuccessToastWithAction} className="justify-start">
                  <Check className="mr-2 h-4 w-4" />
                  Success com Ação
                </Button>
                <Button variant="outline" onClick={showInformationToastWithAction} className="justify-start">
                  <Info className="mr-2 h-4 w-4" />
                  Information com Ação
                </Button>
                <Button variant="outline" onClick={showWarningToastWithAction} className="justify-start">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Warning com Ação
                </Button>
                <Button variant="outline" onClick={showErrorToastWithAction} className="justify-start">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Error com Ação
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documentação */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Como Usar</h2>
          <Card>
            <CardHeader>
              <CardTitle>Implementação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Importar o hook</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { useToast } from "@/hooks/use-toast";`}</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">2. Usar no componente</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`const { toast } = useToast();

// Toast simples
toast({
  variant: "success",
  description: "Operação concluída com sucesso.",
});

// Toast com ação
toast({
  variant: "information",
  description: "Uma nova versão está pronta.",
  action: (
    <ToastAction altText="Atualizar">
      Atualizar agora
    </ToastAction>
  ),
});`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Props */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Props</h2>
          <Card>
            <CardHeader>
              <CardTitle>Propriedades do Toast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Prop</th>
                      <th className="text-left py-2 px-4">Tipo</th>
                      <th className="text-left py-2 px-4">Padrão</th>
                      <th className="text-left py-2 px-4">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">variant</td>
                      <td className="py-2 px-4 font-mono text-xs">"success" | "information" | "warning" | "error"</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Variante visual do toast</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">description</td>
                      <td className="py-2 px-4 font-mono text-xs">string | ReactNode</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Mensagem principal do toast (text-neutral-500)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">action</td>
                      <td className="py-2 px-4 font-mono text-xs">ToastActionElement</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Botão de ação (opcional)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono">duration</td>
                      <td className="py-2 px-4 font-mono text-xs">number</td>
                      <td className="py-2 px-4">5000</td>
                      <td className="py-2 px-4">Tempo de exibição em ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ToastComponent;

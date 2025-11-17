import { useState } from "react";
import { Alert } from "@/components/ui/alert";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AlertComponent = () => {
  const [alerts, setAlerts] = useState({
    success: true,
    information: true,
    warning: true,
    error: true,
    primary: true,
    withAction: true,
    simple: true,
  });

  const handleClose = (key: string) => {
    setAlerts((prev) => ({ ...prev, [key]: false }));
  };

  const handleReset = () => {
    setAlerts({
      success: true,
      information: true,
      warning: true,
      error: true,
      primary: true,
      withAction: true,
      simple: true,
    });
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

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Alert Component
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Componente de alertas e notificações com múltiplas variantes e funcionalidades.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Resetar Alertas
          </button>
        </div>

        {/* Variantes de Cor */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Variantes de Cor
          </h2>
          <div className="space-y-4">
            {alerts.success && (
              <Alert
                variant="success"
                title="Sucesso!"
                description="Sua operação foi concluída com sucesso. Todos os dados foram salvos corretamente."
                onClose={() => handleClose("success")}
              />
            )}

            {alerts.information && (
              <Alert
                variant="information"
                title="Informação importante"
                description="Esta é uma mensagem informativa para ajudá-lo a entender melhor o processo."
                onClose={() => handleClose("information")}
              />
            )}

            {alerts.warning && (
              <Alert
                variant="warning"
                title="Atenção necessária"
                description="Por favor, revise as informações antes de continuar. Algumas ações podem não ser reversíveis."
                onClose={() => handleClose("warning")}
              />
            )}

            {alerts.error && (
              <Alert
                variant="error"
                title="Erro detectado"
                description="Não foi possível completar a operação. Verifique os dados e tente novamente."
                onClose={() => handleClose("error")}
              />
            )}

            {alerts.primary && (
              <Alert
                variant="primary"
                title="Notificação padrão"
                description="Esta é uma mensagem padrão sem classificação específica."
                onClose={() => handleClose("primary")}
              />
            )}
          </div>
        </section>

        {/* Com Botão de Ação */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Com Botão de Ação
          </h2>
          <div className="space-y-4">
            {alerts.withAction && (
              <Alert
                variant="information"
                title="Atualização disponível"
                description="Uma nova versão do sistema está disponível com melhorias e correções."
                actionLabel="Atualizar agora"
                onAction={() => alert("Ação executada!")}
                onClose={() => handleClose("withAction")}
              />
            )}
          </div>
        </section>

        {/* Alertas Simples (sem descrição) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Alertas Simples
          </h2>
          <div className="space-y-4">
            {alerts.simple && (
              <Alert
                variant="success"
                title="Documento salvo com sucesso"
                onClose={() => handleClose("simple")}
              />
            )}
          </div>
        </section>

        {/* Sem Botão de Fechar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Sem Botão de Fechar
          </h2>
          <div className="space-y-4">
            <Alert
              variant="warning"
              title="Este alerta não pode ser fechado"
              description="Alguns alertas críticos não permitem fechamento até que uma ação seja tomada."
            />
          </div>
        </section>

        {/* Todos os Exemplos Juntos */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Exemplo de Uso no Código
          </h2>
          <div className="bg-neutral-900 text-neutral-100 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm">
              <code>{`import { Alert } from "@/components/ui/alert";

// Alert básico
<Alert
  variant="success"
  title="Operação concluída"
  description="Seus dados foram salvos."
  onClose={() => console.log("Fechado")}
/>

// Alert com ação
<Alert
  variant="information"
  title="Nova atualização"
  description="Versão 2.0 disponível"
  actionLabel="Ver detalhes"
  onAction={() => navigate("/updates")}
  onClose={() => dismiss()}
/>

// Alert simples
<Alert
  variant="warning"
  title="Atenção necessária"
/>`}</code>
            </pre>
          </div>
        </section>

        {/* Props Documentation */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Propriedades
          </h2>
          <div className="bg-card rounded-lg border border-border p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-4 font-semibold">Prop</th>
                  <th className="text-left py-2 px-4 font-semibold">Tipo</th>
                  <th className="text-left py-2 px-4 font-semibold">Default</th>
                  <th className="text-left py-2 px-4 font-semibold">Descrição</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="py-2 px-4 font-mono">variant</td>
                  <td className="py-2 px-4 font-mono text-xs">
                    'success' | 'information' | 'warning' | 'error' | 'default'
                  </td>
                  <td className="py-2 px-4 font-mono text-xs">'default'</td>
                  <td className="py-2 px-4">Variante visual do alert</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-4 font-mono">title</td>
                  <td className="py-2 px-4 font-mono text-xs">string</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Título do alert (obrigatório)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-4 font-mono">description</td>
                  <td className="py-2 px-4 font-mono text-xs">string</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Descrição adicional (opcional)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-4 font-mono">actionLabel</td>
                  <td className="py-2 px-4 font-mono text-xs">string</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Texto do botão de ação</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-4 font-mono">onAction</td>
                  <td className="py-2 px-4 font-mono text-xs">() =&gt; void</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Callback ao clicar no botão de ação</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-mono">onClose</td>
                  <td className="py-2 px-4 font-mono text-xs">() =&gt; void</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">Callback ao fechar o alert</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlertComponent;

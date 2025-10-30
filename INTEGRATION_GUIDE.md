# 🚀 Guia de Integração do Design System

Este guia mostra passo-a-passo como integrar o design system em um projeto Lovable.

## ⚠️ Problemas Comuns e Soluções

### Erro 504 / Failed to load resource

**Sintoma**: Erros no console como:
```
Failed to load resource: cnx-lvb-design-system_src_lib_index.ts
net::ERR_ABORTED 504 (Gateway Timeout)
```

**Causa**: O Vite não está configurado para processar TypeScript do design system instalado via GitHub.

**Solução**: Configure o Vite corretamente (veja abaixo).

---

## 📋 Checklist de Instalação

- [ ] 1. Pacote instalado via GitHub
- [ ] 2. Vite configurado com `optimizeDeps`
- [ ] 3. CSS importado no `main.tsx`
- [ ] 4. Imports usando path `/src/lib`
- [ ] 5. Cache limpo e servidor reiniciado

---

## 🔧 Passo 1: Instalar o Pacote

No projeto Lovable que vai usar o design system, peça ao Lovable:

```
"Instale o pacote github:Conexa-Saude-Lovable/cnx-lvb-design-system"
```

Ou adicione manualmente no chat:
```
"Adicione a dependência cnx-lvb-design-system do GitHub"
```

---

## 🔧 Passo 2: Configurar o Vite

**CRUCIAL**: Edite o arquivo `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 👇 ADICIONE ESTAS LINHAS
  optimizeDeps: {
    include: [
      'cnx-lvb-design-system',
    ],
  },
  build: {
    commonjsOptions: {
      include: [/cnx-lvb-design-system/, /node_modules/],
    },
  },
}));
```

**O que isso faz?**
- `optimizeDeps.include`: Força o Vite a pré-processar o design system
- `build.commonjsOptions.include`: Garante que o design system seja incluído no build

---

## 🔧 Passo 3: Importar o CSS

No arquivo `src/main.tsx`, adicione o CSS **ANTES** do seu CSS local:

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 👇 CSS DO DESIGN SYSTEM PRIMEIRO
import "cnx-lvb-design-system/src/index.css";

// 👇 SEU CSS DEPOIS
import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

---

## 🔧 Passo 4: Usar os Componentes

Crie um arquivo de teste (ex: `src/pages/DesignSystemTest.tsx`):

```typescript
// ✅ IMPORTS CORRETOS - use /src/lib
import { 
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Badge,
  Loader
} from "cnx-lvb-design-system/src/lib";

// ✅ ÍCONES também vem do /src/lib
import { 
  Alarm,
  Brain,
  Calendar,
  Chat,
  Check
} from "cnx-lvb-design-system/src/lib";

export default function DesignSystemTest() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold">Design System Test</h1>
      
      {/* Card com Botões */}
      <Card>
        <CardHeader>
          <CardTitle>Botões</CardTitle>
          <CardDescription>Todos os modos e cores</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button mode="solid" color="primary">Primary</Button>
          <Button mode="solid" color="secondary">Secondary</Button>
          <Button mode="outline" color="primary">Outline</Button>
          <Button mode="text" color="tertiary">Text</Button>
          <Button mode="solid" color="error">Error</Button>
          <Button mode="solid" color="success">Success</Button>
        </CardContent>
      </Card>

      {/* Card com Ícones */}
      <Card>
        <CardHeader>
          <CardTitle>Ícones</CardTitle>
          <CardDescription>Biblioteca de ícones customizados</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-6 flex-wrap">
          <Alarm size={32} color="hsl(var(--brand-primary-300))" />
          <Brain size={32} color="hsl(var(--brand-secondary-300))" />
          <Calendar size={32} color="hsl(var(--brand-tertiary-300))" />
          <Chat size={32} color="hsl(var(--feedback-success-300))" />
          <Check size={32} color="hsl(var(--feedback-error-300))" />
        </CardContent>
      </Card>

      {/* Card com Badges e Loader */}
      <Card>
        <CardHeader>
          <CardTitle>Componentes de Feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          
          <div className="flex gap-4 items-center">
            <Loader size="small" />
            <Loader size="medium" />
            <Loader size="large" />
          </div>
        </CardContent>
      </Card>

      {/* Card com Botões com Ícones */}
      <Card>
        <CardHeader>
          <CardTitle>Botões com Ícones</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button 
            mode="solid" 
            color="primary"
            leftIcon={Alarm}
          >
            Com Ícone Esquerdo
          </Button>
          
          <Button 
            mode="outline" 
            color="secondary"
            rightIcon={Check}
          >
            Com Ícone Direito
          </Button>
          
          <Button 
            mode="text" 
            color="tertiary"
            leftIcon={Chat}
            rightIcon={Check}
          >
            Ambos os Lados
          </Button>

          <Button 
            mode="solid" 
            color="primary"
            busy={true}
          >
            Carregando...
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## 🔧 Passo 5: Adicionar Rota (Opcional)

Se quiser uma rota para testar, adicione no `App.tsx`:

```typescript
import { Route, Routes } from "react-router-dom";
import DesignSystemTest from "./pages/DesignSystemTest";
// ... outros imports

function App() {
  return (
    <Routes>
      {/* ... outras rotas */}
      <Route path="/ds-test" element={<DesignSystemTest />} />
    </Routes>
  );
}
```

---

## 🔧 Passo 6: Limpar Cache e Testar

Peça ao Lovable:
```
"Limpe o cache e reinicie o servidor de desenvolvimento"
```

Ou reinicie manualmente o preview.

---

## ✅ Verificação Final

Acesse `/ds-test` e verifique:

- [ ] CSS do design system está aplicado (cores, espaçamentos)
- [ ] Botões renderizam com estilos corretos
- [ ] Ícones aparecem sem erros
- [ ] Loader anima corretamente
- [ ] Sem erros 504 no console
- [ ] Sem erros de TypeScript

---

## 🚨 Se Ainda Tiver Erros

### Erro: Cannot find module 'cnx-lvb-design-system'

**Solução**: Verifique se o pacote está instalado:
```bash
npm list cnx-lvb-design-system
```

Se não estiver, peça ao Lovable para instalar novamente.

### Erro: Cannot read properties of undefined

**Possível causa**: Import path incorreto.

**Solução**: Certifique-se de usar `/src/lib`:
```typescript
// ✅ Correto
import { Button } from "cnx-lvb-design-system/src/lib";

// ❌ Errado
import { Button } from "cnx-lvb-design-system";
```

### Erros 504 persistem

1. Verifique se `optimizeDeps` está no `vite.config.ts`
2. Delete `node_modules/.vite` (cache do Vite)
3. Peça ao Lovable para reinstalar dependências

### TypeScript reclama de tipos

**Solução temporária**: Adicione `// @ts-ignore` antes do import:
```typescript
// @ts-ignore
import { Button } from "cnx-lvb-design-system/src/lib";
```

**Solução ideal**: O design system precisa incluir definições de tipo no build.

---

## 📞 Suporte

Se os problemas persistirem:

1. Verifique se o repositório está público: https://github.com/Conexa-Saude-Lovable/cnx-lvb-design-system
2. Confirme que todos os 5 passos foram seguidos
3. Compartilhe o erro completo do console

---

## 🎯 Resumo

1. ✅ Instalar pacote do GitHub
2. ✅ Configurar `optimizeDeps` no Vite
3. ✅ Importar CSS no `main.tsx`
4. ✅ Usar path `/src/lib` nos imports
5. ✅ Limpar cache e testar

**Com essas configurações, o design system funcionará perfeitamente! 🎉**

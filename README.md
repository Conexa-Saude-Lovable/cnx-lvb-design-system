# Conexa Hero Design System

Design system com componentes React, ícones customizados e tokens de design para projetos Conexa.

> ✅ **v1.1.0** - Agora com imports corrigidos para uso como pacote externo!

## 🎨 O que inclui

- **Componentes UI**: Todos os componentes shadcn/ui customizados
- **Design Tokens**: Cores, espaçamentos, raios, sombras
- **Ícones**: Biblioteca completa de ícones e ilustrações customizadas
- **Tipografia**: Sistema tipográfico consistente
- **Temas**: Suporte a light/dark mode

## 📦 Instalação em outro projeto Lovable

### 1. Obter o link do GitHub

Copie a URL do seu repositório GitHub. Exemplo:
```
https://github.com/Conexa-Saude-Lovable/cnx-lvb-design-system
```

### 2. No novo projeto Lovable

Peça ao Lovable para instalar o pacote:

```
"Instale o design system usando o pacote github:Conexa-Saude-Lovable/cnx-lvb-design-system"
```

Ou use o comando diretamente no chat do Lovable para adicionar a dependência.

### 3. Configurar o Vite (CRUCIAL!)

**MUITO IMPORTANTE**: O projeto consumidor precisa processar TypeScript do design system.

No arquivo `vite.config.ts` do projeto que vai usar o design system, adicione:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 👇 ADICIONE ESTA CONFIGURAÇÃO
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
});
```

### 4. Importar os estilos (IMPORTANTE!)

No arquivo `src/main.tsx` do novo projeto, adicione ANTES do seu index.css:

```typescript
// No topo do arquivo, ANTES do import do index.css local
import "cnx-lvb-design-system/src/index.css"
import "./index.css" // seus estilos locais depois
```

### 5. Usar os componentes

```typescript
// Importar componentes do pacote - use o path completo!
import { Button, Card, CardHeader, CardTitle, CardContent } from "cnx-lvb-design-system/src/lib";
import { Loader } from "cnx-lvb-design-system/src/lib";
import { Alarm, Brain, Chat } from "cnx-lvb-design-system/src/lib";

function App() {
  return (
    <div className="container p-8">
      <Card>
        <CardHeader>
          <CardTitle>Teste do Design System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button mode="solid" color="primary">Meu Botão</Button>
          <div className="flex gap-4">
            <Alarm size={24} />
            <Brain size={24} />
            <Chat size={24} />
          </div>
          <Loader size="medium" />
        </CardContent>
      </Card>
    </div>
  );
}
```

## 🔄 Atualizar o Design System

Quando você fizer alterações neste projeto:

1. **Automático no GitHub**: As mudanças vão para o GitHub automaticamente via Lovable
2. **No projeto que usa o DS**: Peça ao Lovable:
   ```
   "Atualize o pacote cnx-lvb-design-system para a versão mais recente"
   ```
   
   Ou rode manualmente (se tiver acesso ao terminal):
   ```bash
   npm update cnx-lvb-design-system
   # ou forçar reinstalação
   npm uninstall cnx-lvb-design-system
   npm install github:Conexa-Saude-Lovable/cnx-lvb-design-system
   ```

## 🎯 Componentes Disponíveis

### Componentes UI (shadcn)
- Button, Card, Input, Label
- Dialog, Sheet, Drawer
- Select, Checkbox, Switch, Slider
- Tabs, Accordion, Collapsible
- Table, Form, Calendar
- Toast, Alert, Badge
- Sidebar, Navigation Menu
- E todos os outros componentes shadcn/ui

### Componentes Customizados
- `Loader` - Componente de loading
- Todos os ícones customizados
- Ilustrações

### Ícones Disponíveis

```typescript
import { 
  Alarm, 
  Analytics, 
  Brain,
  Calendar,
  Chat,
  // ... e muitos outros
} from "cnx-lvb-design-system";

// Emojis
import { HappyFace, SadFace, AngryFace } from "cnx-lvb-design-system";

// Ilustrações
import { Doctors, HealthTeam, MedicHappyPrimary } from "cnx-lvb-design-system";
```

## 🎨 Design Tokens

Os tokens são automaticamente aplicados quando você importa o CSS. Use as classes Tailwind:

```typescript
// Cores
<div className="bg-primary text-primary-foreground">Primary</div>
<div className="bg-secondary text-secondary-foreground">Secondary</div>
<div className="bg-success text-success-foreground">Success</div>

// Raios
<div className="rounded-lg">8px radius</div>
<div className="rounded-xl">16px radius</div>

// Sombras
<div className="shadow-md">Sombra média</div>
<div className="shadow-lg">Sombra grande</div>
```

## 📚 Ver todos os componentes

Acesse a rota `/showcase` neste projeto para ver:
- Todos os tokens de design
- Paleta de cores completa com valores HEX
- Variantes de componentes
- Exemplos de uso

## 🛠️ Desenvolvimento

### Estrutura
```
src/
├── components/
│   ├── ui/              # Componentes shadcn
│   ├── icons/           # Ícones customizados
│   └── feedback/        # Componentes de feedback
├── lib/
│   ├── index.ts         # Exports principais
│   └── utils.ts         # Utilitários
├── hooks/               # React hooks
├── index.ts             # Entry point do pacote
└── index.css            # Design tokens
```

### Adicionar novos componentes

1. Crie o componente em `src/components/`
2. Exporte em `src/lib/index.ts`
3. Push para GitHub (automático no Lovable)
4. Atualize nos projetos que usam

## 🔧 Correções Recentes (v1.1.0)

### ✅ Problema resolvido: Imports com alias `@/`

**Problema anterior:**
```typescript
// ❌ Não funcionava quando instalado como pacote
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CardFrontSvg from "@/assets/illustrations/card-front.svg";
```

**Solução implementada:**
```typescript
// ✅ Agora usa caminhos relativos
import { cn } from "../../lib/utils";
import { Button } from "./button";
import CardFrontSvg from "../../../assets/illustrations/card-front.svg";
```

**Arquivos corrigidos:**
- ✅ Todos os 44 componentes UI em `src/components/ui/`
- ✅ Componente `Loader` em `src/components/feedback/`
- ✅ Arquivo `button.tsx` com imports de `Loader` e `Icon`
- ✅ Todos os 32 componentes de ilustração em `src/components/icons/illustrations/`
- ✅ Arquivos com interdependências entre componentes

**Resultado:**
Agora o pacote funciona perfeitamente quando instalado via npm/GitHub em outros projetos, incluindo as ilustrações SVG!

## 🐛 Troubleshooting

### ⚡ Quick Fix para erros 504

Se você está vendo erros 504 ou "Failed to load resource" no console:

**1. Configure o Vite** no projeto consumidor (`vite.config.ts`):
```typescript
export default defineConfig({
  // ... outras configurações existentes
  optimizeDeps: {
    include: ['cnx-lvb-design-system'],
  },
  build: {
    commonjsOptions: {
      include: [/cnx-lvb-design-system/, /node_modules/],
    },
  },
});
```

**2. Use o import correto** com `/src/lib`:
```typescript
import { Button } from "cnx-lvb-design-system/src/lib";
```

**3. Limpe o cache**: Peça ao Lovable para reiniciar o servidor de desenvolvimento.

---

### Estilos não aparecem
Certifique-se de importar o CSS antes dos seus estilos:
```typescript
import "cnx-lvb-design-system/src/index.css"
import "./index.css"
```

### Componente não encontrado
Verifique se está exportado em `src/lib/index.ts` e se você está importando do caminho correto:
```typescript
// ✅ Correto - use o path completo
import { Button } from "cnx-lvb-design-system/src/lib";

// ❌ Errado - não funciona sem o /src/lib
import { Button } from "cnx-lvb-design-system";
```

### Erros 504 ou arquivos .js não encontrados
Este erro acontece se o Vite não está configurado para processar o TypeScript do design system.

**Solução**: Adicione a configuração `optimizeDeps` no `vite.config.ts`:
```typescript
export default defineConfig({
  // ... outras configurações
  optimizeDeps: {
    include: ['cnx-lvb-design-system'],
  },
  build: {
    commonjsOptions: {
      include: [/cnx-lvb-design-system/, /node_modules/],
    },
  },
});
```

Depois, peça ao Lovable: "Limpe o cache e reinicie o servidor de desenvolvimento"

### Versão antiga após atualizar
Peça ao Lovable para remover e reinstalar:
```
"Remova o pacote cnx-lvb-design-system e instale novamente da versão mais recente do GitHub"
```

### Erro "Cannot find module"
Certifique-se de que:
1. O pacote está instalado: `npm list cnx-lvb-design-system`
2. Você está importando diretamente do pacote: `import { Button } from "cnx-lvb-design-system"`
3. O arquivo `src/index.ts` existe no repositório (entry point do pacote)

## 📄 Licença

Propriedade de Conexa Hero.

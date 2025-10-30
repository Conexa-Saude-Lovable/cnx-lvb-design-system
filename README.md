# Conexa Hero Design System

Design system com componentes React, ícones customizados e tokens de design para projetos Conexa.

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
https://github.com/seu-usuario/conexa-hero-ds
```

### 2. No novo projeto Lovable

Peça ao Lovable para instalar o pacote:

```
"Instale o design system usando o pacote github:seu-usuario/conexa-hero-ds"
```

Ou use o comando diretamente no chat do Lovable para adicionar a dependência.

### 3. Importar os estilos (IMPORTANTE!)

No arquivo `src/main.tsx` ou `src/App.tsx` do novo projeto, adicione:

```typescript
// ANTES dos seus estilos locais
import "conexa-hero-ds/src/index.css"
import "./index.css" // seus estilos locais depois
```

### 4. Usar os componentes

```typescript
import { Button, Card, Loader } from "conexa-hero-ds/src/lib";

function App() {
  return (
    <Card>
      <Button variant="default">Meu Botão</Button>
      <Loader />
    </Card>
  );
}
```

## 🔄 Atualizar o Design System

Quando você fizer alterações neste projeto:

1. **Automático no GitHub**: As mudanças vão para o GitHub automaticamente via Lovable
2. **No projeto que usa o DS**: Peça ao Lovable:
   ```
   "Atualize o pacote conexa-hero-ds para a versão mais recente"
   ```
   
   Ou rode manualmente (se tiver acesso ao terminal):
   ```bash
   npm update conexa-hero-ds
   # ou forçar reinstalação
   npm uninstall conexa-hero-ds
   npm install github:seu-usuario/conexa-hero-ds
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
} from "conexa-hero-ds/src/lib";

// Emojis
import { HappyFace, SadFace, AngryFace } from "conexa-hero-ds/src/lib";

// Ilustrações
import { Doctors, HealthTeam, MedicHappyPrimary } from "conexa-hero-ds/src/lib";
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
└── index.css            # Design tokens
```

### Adicionar novos componentes

1. Crie o componente em `src/components/`
2. Exporte em `src/lib/index.ts`
3. Push para GitHub (automático no Lovable)
4. Atualize nos projetos que usam

## 🐛 Troubleshooting

### Estilos não aparecem
Certifique-se de importar o CSS antes dos seus estilos:
```typescript
import "conexa-hero-ds/src/index.css"
import "./index.css"
```

### Componente não encontrado
Verifique se está exportado em `src/lib/index.ts`

### Versão antiga após atualizar
Peça ao Lovable para remover e reinstalar:
```
"Remova o pacote conexa-hero-ds e instale novamente da versão mais recente do GitHub"
```

### Path não resolve
Certifique-se de importar com o caminho completo:
```typescript
import { Button } from "conexa-hero-ds/src/lib"
import "conexa-hero-ds/src/index.css"
```

## 📄 Licença

Propriedade de Conexa Hero.

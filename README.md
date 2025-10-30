# Conexa Hero - Boilerplate Lovable

Boilerplate completo para projetos Lovable da Conexa, com design system integrado, componentes prontos e arquitetura otimizada.

## 🚀 Como Usar

### 1. Fazer Remix do Projeto

1. Clique no nome do projeto no topo esquerdo do Lovable
2. Selecione **Settings**
3. Clique em **Remix this project**
4. Seu novo projeto estará pronto com tudo configurado!

### 2. O que você ganha

✅ **Design System completo**
- Tokens de design (cores, espaçamentos, tipografia)
- Componentes shadcn/ui customizados
- 164 ícones + 5 emojis + 93 ilustrações

✅ **Arquitetura pronta**
- React 18 + TypeScript
- Vite para build otimizado
- Tailwind CSS configurado
- React Router com navegação

✅ **Componentes prontos**
- Button, Card, Input, Select, Dialog
- Table, Form, Tabs, Accordion
- Toast, Alert, Badge, Avatar
- E muito mais (40+ componentes)

✅ **Dark Mode**
- Suporte completo a temas
- Toggle automático

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn customizados
│   ├── icons/           # 164 ícones customizados
│   │   ├── emojis/     # 5 emojis
│   │   └── illustrations/  # 93 ilustrações
│   ├── feedback/        # Loader e outros
│   └── Navigation.tsx   # Navegação principal
├── pages/
│   ├── Welcome.tsx      # Página inicial (customize!)
│   ├── Showcase.tsx     # Ver componentes e tokens
│   ├── Icons.tsx        # Ver todos os ícones
│   └── NotFound.tsx     # 404
├── hooks/               # Custom hooks
├── lib/
│   └── utils.ts         # Utilitários (cn, etc)
├── assets/              # Imagens e SVGs
├── index.css            # Design tokens CSS
└── App.tsx              # Configuração de rotas
```

## 🎨 Design System

### Tokens de Design

Todos os tokens estão em `src/index.css` e podem ser usados via Tailwind:

```tsx
// Cores
<div className="bg-primary text-primary-foreground">
<div className="bg-secondary text-secondary-foreground">
<div className="bg-success text-success-foreground">
<div className="bg-warning text-warning-foreground">
<div className="bg-danger text-danger-foreground">

// Raios
<div className="rounded-lg">     // 8px
<div className="rounded-xl">     // 16px
<div className="rounded-2xl">    // 24px

// Sombras
<div className="shadow-sm">
<div className="shadow-md">
<div className="shadow-lg">
```

### Componentes UI

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
// ... e muitos outros

function MeuComponente() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Título</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Clique aqui</Button>
      </CardContent>
    </Card>
  );
}
```

### Ícones Customizados

```tsx
import { Alarm, Brain, Chat, Calendar } from "@/components/icons";
import { HappyFace, SadFace } from "@/components/icons/emojis";
import { Doctors, HealthTeam } from "@/components/icons/illustrations";

function MinhaPagina() {
  return (
    <div>
      <Alarm size={24} className="text-primary" />
      <HappyFace size={32} />
      <Doctors width={200} height={150} />
    </div>
  );
}
```

## 📚 Páginas de Exemplo

### `/` - Welcome
Página inicial com instruções de uso do boilerplate

### `/showcase` 
Showcase completo com:
- Paleta de cores e valores HEX
- Todos os componentes UI
- Exemplos de uso
- Design tokens

### `/icons`
Galeria com todos os ícones, emojis e ilustrações

## 🛠️ Começar a Desenvolver

### 1. Limpe a Welcome Page

Edite `src/pages/Welcome.tsx` e customize para seu projeto:
- Mude o conteúdo
- Adicione suas seções
- Use os componentes disponíveis

### 2. Crie suas páginas

```tsx
// src/pages/MinhaPagina.tsx
import { Button } from "@/components/ui/button";

const MinhaPagina = () => {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-4">Minha Página</h1>
      <Button>Meu Botão</Button>
    </div>
  );
};

export default MinhaPagina;
```

### 3. Adicione rotas

```tsx
// src/App.tsx
import MinhaPagina from "./pages/MinhaPagina";

// Adicione na Routes:
<Route path="/minha-pagina" element={<MinhaPagina />} />
```

### 4. Atualize a navegação

```tsx
// src/components/Navigation.tsx
// Adicione seus links no componente de navegação
```

## 🎯 Best Practices

### Use os Design Tokens

❌ **Não faça:**
```tsx
<div className="bg-blue-500 text-white">
```

✅ **Faça:**
```tsx
<div className="bg-primary text-primary-foreground">
```

### Importe componentes corretamente

```tsx
// UI Components
import { Button, Card } from "@/components/ui/...";

// Ícones
import { Alarm, Chat } from "@/components/icons";

// Hooks
import { useToast } from "@/hooks/use-toast";

// Utils
import { cn } from "@/lib/utils";
```

### Mantenha a organização

- Componentes reutilizáveis em `src/components/`
- Páginas em `src/pages/`
- Hooks customizados em `src/hooks/`
- Utilitários em `src/lib/`
- Assets em `src/assets/`

## 🌗 Dark Mode

O tema já está configurado. Para adicionar toggle:

```tsx
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

## 📦 Componentes Disponíveis

### Layout
- Card, Container, Separator
- AspectRatio, ScrollArea

### Formulários
- Input, Textarea, Label
- Select, Checkbox, Switch, Slider
- RadioGroup, Form

### Navegação
- Navigation Menu, Sidebar
- Breadcrumb, Tabs
- Pagination

### Feedback
- Toast, Alert, Badge
- Progress, Skeleton, Loader
- Dialog, AlertDialog

### Data Display
- Table, Avatar
- Calendar, Chart
- Accordion, Collapsible

### Outros
- Button, Dropdown Menu
- Tooltip, Hover Card, Popover
- Context Menu, Menubar
- Sheet, Drawer

## 🔧 Configuração

### Tailwind

O `tailwind.config.ts` já está configurado com:
- Design tokens
- Animações customizadas
- Variantes de cores
- Plugins necessários

### Vite

O `vite.config.ts` está otimizado com:
- Path aliases (`@/`)
- React SWC para builds rápidos
- Porta 8080

## 📝 Scripts

```bash
# Desenvolvimento (automático no Lovable)
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🆘 Troubleshooting

### Componente não aparece
- Verifique se importou corretamente de `@/components/ui/...`
- Confira se o componente existe no diretório

### Estilos não aplicam
- Os tokens CSS estão em `src/index.css`
- Use as classes Tailwind (bg-primary, text-foreground, etc)
- Não use cores hardcoded (bg-blue-500)

### Ícone não encontrado
- Verifique em `/icons` quais estão disponíveis
- Importe de `@/components/icons` ou `@/components/icons/emojis`

## 🚀 Deploy

O Lovable permite deploy direto:
1. Clique em **Publish** no topo direito
2. Configure seu domínio (se necessário)
3. Pronto!

## 📄 Licença

Propriedade de Conexa Hero.

---

## 🎉 Próximos Passos

1. ✅ Faça o Remix deste projeto
2. ✅ Explore `/showcase` e `/icons`
3. ✅ Customize a Welcome page
4. ✅ Crie suas páginas
5. ✅ Desenvolva suas features
6. ✅ Deploy!

**Dúvidas?** Consulte o showcase ou veja os exemplos nas páginas de demonstração.

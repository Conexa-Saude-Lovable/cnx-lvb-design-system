# Conexa Hero Design System - Lovable Edition

Sistema de design unificado da Conexa Saúde para projetos desenvolvidos com Lovable.

## 🎯 Objetivo

Manter consistência visual entre múltiplos projetos Lovable através de:
- **Tokens de design centralizados** (cores, espaçamentos, tipografia)
- **Componentes reutilizáveis** convertidos do Storybook original
- **Guidelines claras** de uso e boas práticas

## 📦 Estrutura do Projeto

```
src/
├── index.css              # Todos os design tokens (HSL)
├── tailwind.config.ts     # Configuração Tailwind com tokens
├── components/
│   ├── ui/               # Componentes shadcn customizados
│   └── conexa/           # Componentes Conexa convertidos
└── pages/
    ├── Index.tsx         # Home do projeto
    └── Showcase.tsx      # Galeria visual de tokens/componentes
```

## 🚀 Como Usar

### Opção 1: Remix (Recomendado para começar)

1. No Lovable: **Settings → Remix this project**
2. Novo projeto é criado com design system completo
3. Comece a desenvolver usando os tokens e componentes

### Opção 2: NPM Package (Em desenvolvimento)

```bash
npm install @conexa/hero-lovable
```

## 🎨 Design Tokens

Todos os tokens estão definidos em `src/index.css` usando HSL:

### Cores Principais
- `--primary`: Cor primária da marca
- `--primary-hover`: Estado hover
- `--primary-active`: Estado ativo
- `--primary-foreground`: Texto sobre primária

### Cores de Feedback
- `--success`: Ações de sucesso
- `--warning`: Alertas
- `--error`: Erros
- `--info`: Informações

### Uso nos Componentes

```tsx
// ✅ Usando tokens do design system
<Button className="bg-primary text-primary-foreground">
  Ação Primária
</Button>

// ❌ Evitar cores diretas
<Button className="bg-blue-500 text-white">
  Não fazer assim
</Button>
```

## 📖 Showcase

Acesse `/showcase` para visualizar:
- Todos os design tokens com valores copiáveis
- Componentes disponíveis e suas variações
- Guidelines de uso

## 🔄 Workflow de Conversão

1. Componente selecionado do Storybook original
2. Análise de props, variantes e estados
3. Conversão para React + Tailwind usando tokens
4. Validação e ajustes
5. Commit no GitHub

## 🛠️ Tecnologias

- **React** + **TypeScript**
- **Tailwind CSS** com design tokens
- **shadcn/ui** como base de componentes
- **Vite** como bundler

## 📚 Referências

- [Storybook Original](https://conexa-hero.conexasaude.com.br/)
- [Lovable Documentation](https://docs.lovable.dev/)

## 🚧 Status

**Em construção** - Componentes sendo convertidos gradualmente do Storybook original.

### Roadmap
- [x] Estrutura base de tokens
- [x] Página showcase
- [ ] Conversão de componentes principais (Button, Input, Card)
- [ ] Conversão de componentes de formulário
- [ ] Conversão de componentes de navegação
- [ ] Publicação como NPM package

## 📄 Licença

Uso interno - Conexa Saúde

---

**Desenvolvido com ❤️ pela equipe Conexa**

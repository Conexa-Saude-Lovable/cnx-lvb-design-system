import { useState } from "react";
import { Chip } from "@/components/ui/chip";
import { Check, Heart, Star, User } from "lucide-react";

const ChipShowcase = () => {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-2">Chip Component</h1>
        <p className="text-neutral-400 text-lg">
          Componente de chip interativo com suporte para múltiplas variantes, tamanhos e estados.
        </p>
      </div>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Neutral (Recomendado)</h3>
            <p className="text-neutral-400 text-sm mb-3">
              Variant mais versátil e recomendada para a maioria dos casos de uso.
            </p>
            <div className="flex flex-wrap gap-3">
              <Chip variant="neutral">Default</Chip>
              <Chip variant="neutral" checked>Checked</Chip>
              <Chip variant="neutral" disabled>Disabled</Chip>
              <Chip variant="neutral" leftIcon={<Star />}>Com Ícone</Chip>
              <Chip variant="neutral" leftIcon={<Heart />} checked>Favorito</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Primary</h3>
            <p className="text-neutral-400 text-sm mb-3">
              Variant de destaque, use com moderação para ações principais.
            </p>
            <div className="flex flex-wrap gap-3">
              <Chip variant="primary">Default</Chip>
              <Chip variant="primary" checked>Checked</Chip>
              <Chip variant="primary" disabled>Disabled</Chip>
              <Chip variant="primary" leftIcon={<Check />}>Verificado</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Chip size="small">Small</Chip>
          <Chip size="medium">Medium</Chip>
        </div>
      </section>

      {/* Shapes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Shapes</h2>
        <div className="flex flex-wrap gap-3">
          <Chip shape="default">Default</Chip>
          <Chip shape="square">Square</Chip>
          <Chip shape="circle">Circle</Chip>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">With Icons</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Left Icon - Neutral</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="neutral" leftIcon={<Heart />}>Favorite</Chip>
              <Chip variant="neutral" leftIcon={<Star />} checked>Starred</Chip>
              <Chip variant="neutral" leftIcon={<User />} disabled>User</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Left Icon - Primary</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="primary" leftIcon={<Heart />}>Favorite</Chip>
              <Chip variant="primary" leftIcon={<Star />} checked>Starred</Chip>
              <Chip variant="primary" leftIcon={<User />} disabled>User</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Right Icon - Neutral</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="neutral" rightIcon={<Check />}>Verified</Chip>
              <Chip variant="neutral" rightIcon={<Check />} checked>Completed</Chip>
              <Chip variant="neutral" rightIcon={<Check />} disabled>Done</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Both Icons - Neutral</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="neutral" leftIcon={<Heart />} rightIcon={<Check />}>
                Premium
              </Chip>
              <Chip variant="neutral" leftIcon={<Star />} rightIcon={<Check />} checked>
                Featured
              </Chip>
              <Chip variant="neutral" leftIcon={<User />} rightIcon={<Check />} disabled>
                Member
              </Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Full Width</h2>
        <div className="space-y-3 max-w-md">
          <Chip fullWidth>Full Width Chip</Chip>
          <Chip fullWidth checked>
            Full Width Checked
          </Chip>
          <Chip fullWidth leftIcon={<Star />}>
            Full Width with Icon
          </Chip>
        </div>
      </section>

      {/* Casos de Uso Comuns */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Casos de Uso Comuns (Variant Neutral)</h2>
        <p className="text-neutral-400">
          Exemplos práticos de uso do chip com variant neutral
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Filtros</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="neutral" size="small">Todos</Chip>
              <Chip variant="neutral" size="small" checked>Ativos</Chip>
              <Chip variant="neutral" size="small">Inativos</Chip>
              <Chip variant="neutral" size="small">Pendentes</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Tags/Categorias</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="neutral" leftIcon={<Star />}>JavaScript</Chip>
              <Chip variant="neutral" leftIcon={<Star />}>React</Chip>
              <Chip variant="neutral" leftIcon={<Star />} checked>TypeScript</Chip>
              <Chip variant="neutral" leftIcon={<Star />}>CSS</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Seleção Múltipla</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="neutral" leftIcon={<User />} checked>Frontend</Chip>
              <Chip variant="neutral" leftIcon={<User />}>Backend</Chip>
              <Chip variant="neutral" leftIcon={<User />} checked>DevOps</Chip>
              <Chip variant="neutral" leftIcon={<User />}>Design</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Example</h2>
        <p className="text-neutral-400">
          Clique nos chips para alternar o estado checked
        </p>
        <ChipInteractiveDemo />
      </section>

      {/* Code Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Como Usar</h2>
        <div className="bg-neutral-100 p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code>{`import { Chip } from "@/lib";
import { Heart, Check, Star } from "lucide-react";

// Básico (neutral é default recomendado)
<Chip variant="neutral">Label</Chip>

// Com variante e estado
<Chip variant="neutral" checked>Selected</Chip>
<Chip variant="primary">Primary Option</Chip>

// Com tamanhos (neutral)
<Chip variant="neutral" size="small">Small</Chip>
<Chip variant="neutral" size="medium">Medium</Chip>

// Com formas (neutral)
<Chip variant="neutral" shape="circle">10</Chip>
<Chip variant="neutral" shape="square">Tag</Chip>

// Com ícones (neutral - mais comum)
<Chip variant="neutral" leftIcon={<Heart />}>Favorite</Chip>
<Chip variant="neutral" rightIcon={<Check />}>Done</Chip>
<Chip variant="neutral" leftIcon={<Star />} rightIcon={<Check />}>Both</Chip>

// Full width (neutral)
<Chip variant="neutral" fullWidth>Full Width</Chip>

// Disabled
<Chip variant="neutral" disabled>Disabled</Chip>`}</code>
          </pre>
        </div>
      </section>

      {/* Props Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Prop</th>
                <th className="text-left p-3">Tipo</th>
                <th className="text-left p-3">Default</th>
                <th className="text-left p-3">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">"primary" | "neutral"</td>
                <td className="p-3 font-mono text-sm">"primary"</td>
                <td className="p-3">Variante de cor do chip. Neutral é mais versátil e recomendada para a maioria dos casos.</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">"small" | "medium"</td>
                <td className="p-3 font-mono text-sm">"medium"</td>
                <td className="p-3">Tamanho do chip (24px ou 40px)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">shape</td>
                <td className="p-3 font-mono text-sm">"default" | "square" | "circle"</td>
                <td className="p-3 font-mono text-sm">"default"</td>
                <td className="p-3">Forma das bordas do chip</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">fullWidth</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Se o chip deve ocupar 100% da largura</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">checked</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Estado selecionado do chip</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Estado desabilitado do chip</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">leftIcon</td>
                <td className="p-3 font-mono text-sm">ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Ícone à esquerda do texto</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">rightIcon</td>
                <td className="p-3 font-mono text-sm">ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Ícone à direita do texto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

// Componente de demonstração interativa
const ChipInteractiveDemo = () => {
  const [selectedChips, setSelectedChips] = useState<Set<string>>(
    new Set()
  );

  const toggleChip = (id: string) => {
    setSelectedChips((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const chips = [
    { id: "javascript", label: "JavaScript", icon: <Star /> },
    { id: "typescript", label: "TypeScript", icon: <Star /> },
    { id: "react", label: "React", icon: <Heart /> },
    { id: "vue", label: "Vue", icon: <Heart /> },
    { id: "angular", label: "Angular", icon: <Heart /> },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((chip) => (
        <Chip
          key={chip.id}
          leftIcon={chip.icon}
          checked={selectedChips.has(chip.id)}
          onClick={() => toggleChip(chip.id)}
        >
          {chip.label}
        </Chip>
      ))}
    </div>
  );
};

export default ChipShowcase;

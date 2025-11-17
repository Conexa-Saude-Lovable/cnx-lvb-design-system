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
            <h3 className="text-lg font-medium mb-3">Primary</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="primary">Default</Chip>
              <Chip variant="primary" checked>Checked</Chip>
              <Chip variant="primary" disabled>Disabled</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Neutral</h3>
            <div className="flex flex-wrap gap-3">
              <Chip variant="neutral">Default</Chip>
              <Chip variant="neutral" checked>Checked</Chip>
              <Chip variant="neutral" disabled>Disabled</Chip>
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
            <h3 className="text-lg font-medium mb-3">Left Icon</h3>
            <div className="flex flex-wrap gap-3">
              <Chip leftIcon={<Heart />}>Favorite</Chip>
              <Chip leftIcon={<Star />} checked>Starred</Chip>
              <Chip leftIcon={<User />} disabled>User</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Right Icon</h3>
            <div className="flex flex-wrap gap-3">
              <Chip rightIcon={<Check />}>Verified</Chip>
              <Chip rightIcon={<Check />} checked>Completed</Chip>
              <Chip rightIcon={<Check />} disabled>Done</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Both Icons</h3>
            <div className="flex flex-wrap gap-3">
              <Chip leftIcon={<Heart />} rightIcon={<Check />}>
                Premium
              </Chip>
              <Chip leftIcon={<Star />} rightIcon={<Check />} checked>
                Featured
              </Chip>
              <Chip leftIcon={<User />} rightIcon={<Check />} disabled>
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
import { Heart, Check } from "lucide-react";

// Básico
<Chip>Label</Chip>

// Com variante e estado
<Chip variant="primary" checked>Selected</Chip>
<Chip variant="neutral">Option</Chip>

// Com tamanhos
<Chip size="small">Small</Chip>
<Chip size="medium">Medium</Chip>

// Com formas
<Chip shape="circle">Circle</Chip>
<Chip shape="square">Square</Chip>

// Com ícones
<Chip leftIcon={<Heart />}>Favorite</Chip>
<Chip rightIcon={<Check />}>Done</Chip>
<Chip leftIcon={<Heart />} rightIcon={<Check />}>Both</Chip>

// Full width
<Chip fullWidth>Full Width</Chip>

// Disabled
<Chip disabled>Disabled</Chip>`}</code>
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
                <td className="p-3">Variante de cor do chip</td>
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

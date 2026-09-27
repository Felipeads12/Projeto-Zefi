import type { NivelEngajamento } from '../../types/zefi';

interface ZefiAvatarProps {
  nivel?: NivelEngajamento;
  tamanho?: 'pequeno' | 'medio' | 'grande';
}

const TAMANHOS = {
  pequeno: 'h-12 w-12 text-2xl',
  medio: 'h-24 w-24 text-5xl',
  grande: 'h-40 w-40 text-7xl md:h-56 md:w-56 md:text-8xl',
};

// O visual muda conforme o nível de engajamento do usuário
const CORES: Record<NivelEngajamento, string> = {
  BAIXO: 'bg-slate-200 opacity-70',
  MEDIO: 'bg-ceu',
  ALTO: 'bg-ceu ring-4 ring-energia',
};

export default function ZefiAvatar({ nivel = 'MEDIO', tamanho = 'medio' }: ZefiAvatarProps) {
  return (
    <div
      role="img"
      aria-label={`Zefi, nível de engajamento ${nivel.toLowerCase()}`}
      className={`flex shrink-0 items-center justify-center rounded-full ${TAMANHOS[tamanho]} ${CORES[nivel]}`}
    >
      🌬️
    </div>
  );
}
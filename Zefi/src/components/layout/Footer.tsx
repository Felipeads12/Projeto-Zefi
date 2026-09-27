import { Link } from 'react-router-dom';
import type { LinkMenu } from '../../types/navegacao';

// Links institucionais do rodapé
const LINKS_RODAPE: LinkMenu[] = [
  { rotulo: 'Sobre', caminho: '/sobre' },
  { rotulo: 'FAQ', caminho: '/faq' },
  { rotulo: 'Integrantes', caminho: '/integrantes' },
  { rotulo: 'Contato', caminho: '/contato' },
];

export default function Footer() {
  const anoAtual: number = new Date().getFullYear();

  return (
    <footer className="bg-tinta text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold">🌬️ Zefi</p>
          <p className="text-sm text-white/70">O avatar inteligente do Soul Up, por Prospera.</p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="flex flex-wrap gap-4">
            {LINKS_RODAPE.map((link) => (
              <li key={link.caminho}>
                <Link to={link.caminho} className="text-white/80 transition-colors hover:text-energia">
                  {link.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {anoAtual} Zefi · Challenge Soul Up · FIAP
      </p>
    </footer>
  );
}
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { LinkMenu } from '../../types/navegacao';

// Links do menu principal
const LINKS: LinkMenu[] = [
  { rotulo: 'Início', caminho: '/' },
  { rotulo: 'Missões', caminho: '/missoes' },
  { rotulo: 'Chat com o Zefi', caminho: '/chat' },
  { rotulo: 'Sobre', caminho: '/sobre' },
  { rotulo: 'FAQ', caminho: '/faq' },
  { rotulo: 'Integrantes', caminho: '/integrantes' },
  { rotulo: 'Contato', caminho: '/contato' },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  // Estilo do link: destaca a página atual
  const estiloLink = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-3 py-2 font-semibold transition-colors ${
      isActive ? 'bg-ceu text-tinta' : 'text-tinta/80 hover:bg-ceu/50'
    }`;

  return (
    <header className="sticky top-0 z-10 border-b border-ceu bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
       <Link to="/" className="flex items-center gap-2 text-tinta">
          <span aria-hidden="true" className="text-xl">🌬️</span>
          <span className="text-xl font-extrabold">Zefi</span>
          <span className="hidden text-sm font-semibold text-tinta/60 sm:inline">| Soul Up</span>
        </Link>

        {/* Botão hambúrguer (só no celular e tablet) */}
        <button
          type="button"
          className="rounded-lg p-2 text-2xl text-tinta lg:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

        {/* Menu desktop */}
        <ul className="hidden gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.caminho}>
              <NavLink to={link.caminho} className={estiloLink} end>
                {link.rotulo}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile */}
      {menuAberto && (
        <ul id="menu-mobile" className="flex flex-col gap-1 border-t border-ceu px-4 py-3 lg:hidden">
          {LINKS.map((link) => (
            <li key={link.caminho}>
              <NavLink
                to={link.caminho}
                className={estiloLink}
                onClick={() => setMenuAberto(false)}
                end
              >
                {link.rotulo}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
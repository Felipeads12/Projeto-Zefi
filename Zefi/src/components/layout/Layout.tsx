import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Estrutura comum a todas as páginas: Header no topo, página no meio e Footer embaixo
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-tinta">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<p className="p-8">Página em construção 🌬️</p>} />
      </Route>
    </Routes>
  );
}
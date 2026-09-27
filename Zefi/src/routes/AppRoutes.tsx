import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Integrantes from '../pages/Integrantes';
import NaoEncontrada from '../pages/NaoEncontrada';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}
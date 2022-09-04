import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Deskripsi from './Deskirpsi';

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path={`/deskripsi`} element={<Deskripsi />} />
      </Routes>
    </Router>
  );
}

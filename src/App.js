//Plan
// 1. Додати в проект BrowserRouter
// 2. Створити папку pages
// 3. Створити компонент Products та Cart в папці Pages. Перенести відповідний код туди
// 4. Створити Navbar, Layout
// 5. Додати маршрути та заглушку на 404. А також використати Navigate для редіректу

import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Products from "./pages/products";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default App;

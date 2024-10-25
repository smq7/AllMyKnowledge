// Пояснення прикладу
// Спочатку ми обертаємо наш вміст <BrowserRouter>.
// Тоді ми визначаємо наш <Routes>. Додаток може мати кілька <Routes>. У нашому базовому прикладі використовується лише один.
// <Route> можуть бути вкладеними. Перший <Route> має шлях / і відображає компонент Layout.
// Вкладені <Route> успадковують і додають до батьківського маршруту. Тож шлях blogs поєднується з батьківським і стає /blogs.
// Маршрут компонента Home не має шляху, але має атрибут index Це визначає цей маршрут як маршрут за замовчуванням для батьківського маршруту, яким є /.
// Встановлення для path значення * діятиме як універсальне для всіх невизначених URL-адрес. Це підходить для сторінки помилки 404.
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

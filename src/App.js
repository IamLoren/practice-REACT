import { Route, Routes } from "react-router";
import { Posts } from "./components/Posts/Posts";
import { TaskList } from "./components/TaskList/TaskList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
//Plan
// Підключити роутер до проекту (notFound)
// Конфігурувати аксіос, використати create
// Створити слайс для auth і додати файл операцій
// Додати можливість реєстрації та логінізації
// Додати можливість для виходу з облікового запису
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/todos" element={<TaskList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

import { BlogCard } from "./components/BlogCard";
import { Header } from "./components/Header";
import dataArticle from "./assets/article.json";
function App() {
  return (
    <div>
      <Header title="Project-js" />
      <BlogCard {...dataArticle} />
    </div>
  );
}

export default App;

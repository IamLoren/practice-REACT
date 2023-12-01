import { BlogCard } from "./components/BlogCard/BlogCard";
import "./styles.css";

import { Header } from "./components/Header";
import dataArticle from "./assets/article.json";
import { Statistics } from "./components/Statistics";
import dataStats from "./assets/data.json";

function App() {
  return (
    <div>
      <Header title="Project-js" />
      <BlogCard {...dataArticle} />
      <Statistics data={dataStats} />
    </div>
  );
}

export default App;

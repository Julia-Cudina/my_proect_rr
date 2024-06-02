import { useEffect, useState } from 'react';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { Article } from '../shared/types/article';

export const EventsPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://0df6c884deaa53e2.mokky.dev/events')
      .then(res => res.json())
      .then((articlesData: Article[]) => {
        setArticles(articlesData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>События</h2>
      <h3>{count}</h3>
      <button onClick={increment}>increment</button>

      {isLoading && <div>Loading...</div>}

      {!!articles && !isLoading && <ArticleList articles={articles} />}
    </div>
  );
};

//console.log('render EventsPage');

// useEffect(() => {
//   console.log('mount');

//   return () => console.log('unmount')
// }, []);

import { ChangeEvent, useState } from 'react';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { PageWrapper } from '../features/page-wrapper';
import { mockPosts } from '../shared/mocks/mockArticles';


export const ChampionshipsPage = () => {
  const [articles, setArticles] = useState(mockPosts);



  return (

      <div>
        <h2>Чемпионаты</h2> 
        
        <ArticleList articles={articles} />
      </div>


  );
};

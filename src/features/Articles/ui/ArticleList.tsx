import { PostCard } from 'shared/features/Article/ArticleCard/index1';
import { Article } from 'shared/types/article';

type ArticleListProps = {
  articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  // const [articles, setArticles] = useState(mockPosts);
  return (
    <div>
      {articles.map((article, index) => (
        <PostCard postData={article} key={index} />
      ))}
    </div>
  );
};

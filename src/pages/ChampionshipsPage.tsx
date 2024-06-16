import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import Select from '../shared/components/Select';
import Loader from '../shared/components/loader';
import { Article } from '../shared/types/article';
import { get } from 'transport';

export const ChampionshipsPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const section = params.get('section') || 'all';

  useEffect(() => {
    setIsLoading(true);

    const queryParams = section === 'all' ? '' : `?section=${section}`;

    get<Article[]>('/championships', {params: section === 'all' ? {} : { section } })
      .then(({ data }) => {
        setArticles(data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [section]);

  return (
    <div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <h2>Чемпионаты</h2>

        <Select
          value={section}
          onChange={e => {
            params.set('section', e.target.value);
            setParams(params);
          }}
          options={[
            { label: 'Все', value: 'all' },
            { label: 'Прошедшие', value: 'Прошедшие' },
            { label: 'Предстоящие', value: 'Предстоящие' },
          ]}
        />
      </div>

      {isLoading && <Loader />}

      {!!articles && !isLoading && <ArticleList articles={articles} />}
    </div>
  );
};

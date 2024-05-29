import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Article } from '../features/Article/ui/Article';
import { ROUTES } from 'router/routes';

export const ArticlePage = () => {
    const {id} = useParams();
    const naigate = useNavigate();
    const location = useLocation();

    const [params, setParams] = useSearchParams();

    console.log(location);


    if(!id) return <h2>Статьи не существует</h2>;

    return (
    <>
    <button onClick={() => naigate(ROUTES.ROOT)}>Вернуться</button>

    <button
    onClick={() => {
        params.set('section', 'race')
        setParams();
    }}
    >
        Забеги
        </button>
        <button
    onClick={() => {
        params.set('section', 'obstacles')
        setParams();
    }}
    >
        Препятствия
        </button>

    <Article id={Number(id)} />;
    </>
    );
};
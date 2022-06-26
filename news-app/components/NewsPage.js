import NewsList from './NewsList';
import Categories from './Categories';
import  {useParams} from 'react-router';

function NewsPage(){
  const param = useParams();
  const category = param['*'] || 'all';
  return(
    <div>
      <Categories/>
      <NewsList category={category} />
    </div>
  );
}

export default NewsPage;
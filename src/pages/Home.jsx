import React from 'react'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components'
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy} from '../redux/action/filters'
import { fetchPizzas } from '../redux/action/pizzaz';


const categoryNames = [
  'Мясные', 'Вегетарианские', 'Гриль','Острые','Закрытые'
];

const sortItems = [
  { name: 'популярное', type: 'popular', order: 'desc'},
 { name: 'цена', type: 'price', order: 'desc'}, 
 {name: 'алфавит', type: 'name', order: 'asc'} ];

function Home({}) {
  const dispatch = useDispatch();
  const items = useSelector(({pizzaz}) =>  pizzaz.items ) ;
  const isLoaded = useSelector(({pizzaz}) =>  pizzaz.isLoaded ) ;
  const { category, sortBy} = useSelector(({filters}) =>  filters ) ;

  React.useEffect(() => {
    
    (dispatch(fetchPizzas(sortBy, category)));
    
   }, [category, sortBy]);





const onSelectCategory = React.useCallback((index) => {
  dispatch(setCategory(index));
}, []);

const onSelectSortType = React.useCallback((type) => {
  dispatch(setSortBy(type));
}, []);


  return (
    <div className="container">
    <div className="content__top">
      
      <Categories 
      activeCategory={category}  
      onClickCategory={onSelectCategory} 
      items={categoryNames} />

      <SortPopup 
      activeSortType={sortBy.type} 
      items={sortItems} 
      onClickSortType={onSelectSortType} /> 

      {/* !! */}
    
    
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {
        isLoaded 
        ? items.map(obj => <PizzaBlock  key ={obj.id} isLoading={true} {...obj} />)
: 
  Array(10).fill(0).map((_, index) => 
  <PizzaLoadingBlock key={index}/>)
}
      
      
      
       
    </div>
  </div>
  )
}

export default Home
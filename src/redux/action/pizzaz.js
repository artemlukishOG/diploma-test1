import axios from 'axios';

export const setLoaded = (payload) => (
  {
    type: 'SET_LOADED',
    payload,
  }
);

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))
    axios
  .get(`https://artemlukishog.github.io/diploma-test1/pizzas?${
    category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
  .then(({data}) => {
  dispatch(setPizzaz(data));
  });
  
}

export const setPizzaz = (items) => ({
    type: 'SET_PIZZAZ',
  payload: items,
});




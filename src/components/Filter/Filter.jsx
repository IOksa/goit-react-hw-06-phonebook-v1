import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {setContactsFilter} from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const stateFilter = useSelector(state => state.filter);

  const changeFilter = (e) => {
    dispatch(setContactsFilter(e.currentTarget.value));
    
  };

  return (
    <>
      <label className={css.filter__label}>Find contacts by name </label>
      <input type="text" value={stateFilter} placeholder='search...' onChange={changeFilter} className={css.filter__input}/>
    
    </>
  );
}

export default Filter;


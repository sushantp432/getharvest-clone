import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './search.module.css';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { queryIngegrationAPI } from '../../../store/integrationReducer/integration.action';

export const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(queryIngegrationAPI(query));
  };

  useEffect(()=> {
    dispatch(queryIngegrationAPI(query));
  }, [query]);

  return (
    <form className={styles.searchDiv} onSubmit={handleSubmit} >
      <button type='submit'><BsSearch className={styles.searchIcon}/></button>
      <input type="search" name='query' onChange={(e)=>setQuery(e.target.value)} placeholder='Find an app or service you use' />
    </form>  
  )
};

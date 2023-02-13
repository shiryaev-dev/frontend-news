import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import CardNews from '../components/cardNews/CardNews';
import Sorting from '../components/sorting/Sorting';
import Search from '../components/search/Search';
import Pagination from '../components/Pagination/Pagination';

// import { sortList } from '../components/Sort';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/sorting/selectors';
import { selectNewsData } from '../redux/news/selectors';
import { setCurrentPage, setFilters } from '../redux/sorting/slice';
import { fetchNews } from '../redux/news/asyncActions';
import { SearchNewsParams } from '../redux/news/types';

const Home = () => {
    const dispatch = useAppDispatch();

    const { items, status } = useSelector(selectNewsData);
    const { sort, currentPage, searchValue } = useSelector(selectFilter);

    const getNews = async () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const search = searchValue;
    
        dispatch(
          fetchNews({
            sortBy,
            order,
            search,
            currentPage: String(currentPage),
          }),
        );
    };

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    useEffect(() => {
        getNews();
    }, [sort.sortProperty, searchValue, currentPage])

    const news = items.map((item: any) => <CardNews {...item} />);

    return (
      <div className="home">
        <div className="home__toolbar">
          <Search />
          <Sorting value={sort} />
        </div>
        {status === "error" ? (
          <div className="home__error-info">
            <h2>Произошла ошибка</h2>
            <p>
              К сожалению, не удалось получить новости. Попробуйте повторить
              попытку позже.
            </p>
          </div>
        ) : (
            <>{status === "loading" ? <div className="home__loading">Загрузка...</div> : news}</>
        )}
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    );
}

export default Home;
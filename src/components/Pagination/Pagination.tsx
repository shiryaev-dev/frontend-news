import React from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className={"pagination"}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    //Если бы мокапи возвращал количество записей, можно было бы расчитать кол-во страниц
    pageCount={5}
    forcePage={currentPage - 1}
  />
);

export default Pagination;
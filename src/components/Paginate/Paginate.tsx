import ReactPaginate from 'react-paginate';
import { PaginateProps } from '../../types/types';

import './Paginate.scss';

// I declare the functional component Pagination with props and with typing TypeScript
export const Paginate: React.FC<PaginateProps> = ({
  pageCount,
  handlePageClick,
}) => (
  // Add ReactPaginate
  <ReactPaginate
    previousLabel={'<'}
    nextLabel={'>'}
    breakLabel={'...'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={4}
    onPageChange={handlePageClick}
    containerClassName={'pagination'}
    activeClassName={'active'}
  />
);

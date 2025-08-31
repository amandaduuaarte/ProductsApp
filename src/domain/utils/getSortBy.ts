import {EOrderBy, ESortBy, TSortByProps} from '@data/queryFn/getProducts';

const getSortBy = ({orderBy, sortBy}: TSortByProps): string => {
  if (orderBy === EOrderBy.lest && sortBy === ESortBy.price) {
    return 'Less price';
  }
  if (orderBy === EOrderBy.than && sortBy === ESortBy.price) {
    return 'Big price';
  }

  if (orderBy === EOrderBy.lest && sortBy === ESortBy.rating) {
    return 'Bad rating';
  }
  if (orderBy === EOrderBy.than && sortBy === ESortBy.rating) {
    return 'Good rating';
  }
  return '';
};

export const sortByFormatter = {
  getSortBy,
};

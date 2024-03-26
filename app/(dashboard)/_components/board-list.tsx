'use client';

import EmptyBoards from './empty-boards';
import EmptyFavorites from './empty-favorites';
import EmptySearch from './empty-search';

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: boolean;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // fetch data from API

  if (!data.length) {
    if (query.search) {
      return <EmptySearch />;
    }
    if (query.favorites) {
      return <EmptyFavorites />;
    }
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;

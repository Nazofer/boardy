import Image from 'next/image';
import EmptyFavoritesImg from '@/public/empty-favorites.svg';

const EmptyFavorites = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src={EmptyFavoritesImg} height={140} width={140} alt='empty' />
      <h2 className='text-2xl font-semibold mt-6'>No favorite boards</h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Try favoriting a board to see it here
      </p>
    </div>
  );
};

export default EmptyFavorites;

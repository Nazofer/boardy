'use client';

import { Link } from 'lucide-react';
import Image from 'next/image';

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = (board: BoardCardProps) => {
  return (
    <Link href={`/board/${board.id}`}>
      <div className='group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'>
        <div className='relative flex-1 bg-amber-50'>
          <Image
            src={board.imageUrl}
            alt={board.title}
            fill
            className='object-fit'
          />
        </div>
      </div>
    </Link>
  );
};

export default BoardCard;

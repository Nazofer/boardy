'use client';

import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import EmptyBoardsImg from '@/public/note.svg';
import { Button } from '@/components/ui/button';
import { useOrganization } from '@clerk/nextjs';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';

const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = async () => {
    if (!organization) return;

    try {
      await mutate({ orgId: organization.id, title: 'Untitled' });
      toast.success('Board created successfully');
      // TODO: redirect to the created board
    } catch (err) {
      toast.error('Failed to create board');
    }
  };

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src={EmptyBoardsImg} height={140} width={140} alt='empty' />
      <h2 className='text-2xl font-semibold mt-6'>Create your first board</h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Start by creating a board for your organization
      </p>
      <div className='mt-6'>
        <Button disabled={pending} size='lg' onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;

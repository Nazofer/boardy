'use client';

import qs from 'query-string';
import { Search } from 'lucide-react';
import { useDebounceCallback } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { OrganizationSwitcher } from '@clerk/nextjs';

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const debouncedCallback = useDebounceCallback(handleChange, 500);

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: { search: value },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [value]);

  return (
    <div className='w-full relative'>
      <Search className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
      <Input
        className='w-full max-w-[516px] pl-9'
        placeholder='Search boards'
        onChange={debouncedCallback}
        defaultValue={value}
      />
    </div>
  );
};

export default SearchInput;

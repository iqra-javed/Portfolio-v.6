import React, { useState, useEffect } from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import FINDER_DATA from '../constants/finderData.js';

export default function SearchInput({
  setFinderItems,
  finderItems,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <InputGroup size='sm' width='300px' borderRadius='4px'>
      <InputLeftElement
        pointerEvents='none'
        children={<Search2Icon color='gray.100' />}
      />
      <Input
        variant='filled'
        placeholder='Search'
        bg='#6A6C6E'
        borderRadius='4px'
        color='gray.100'
        _hover={{ bg: '#6A6C6E' }}
        // onChange={(e) => { // TODO:
        //   if (e.target.value) {
        //     const searched = finderItems.filter(
        //       (item) =>
        //         item.text.toLowerCase().includes(e.target.value) ||
        //         item.parentId ===
        //           item.text.toLowerCase().includes(e.target.value).parentId
        //     );
        //     console.log(searched);
        //     setFinderItems(searched);
        //   } else {
        //       setFinderItems(FINDER_DATA)
        //   }
        // }}
      />
    </InputGroup>
  );
}

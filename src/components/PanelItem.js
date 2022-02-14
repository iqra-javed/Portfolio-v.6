import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function PanelItem({
  item,
  handleOnClick,
  isLastPanel,
  activeItemIds,
}) {
  const isActivePanelItem = activeItemIds.includes(item.id);
  return (
    <Flex
      bg={isActivePanelItem && !isLastPanel ? 'gray.600' : 'transparent'}
      alignItems='center'
      gridGap='5px'
      padding='5px 20px'
      cursor='pointer'
      onClick={() => handleOnClick(item)}
      _hover={{ background: isActivePanelItem ? 'gray.600' : 'gray.700' }}
      width='250px'
    >
      {item.icon}
      <Text color='gray.100'>{item.text}</Text>
      <ChevronRightIcon />
    </Flex>
  );
}

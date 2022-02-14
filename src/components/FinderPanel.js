import { Flex } from '@chakra-ui/layout';
import React from 'react';
import PanelItem from './PanelItem';


export default function FinderPanel({ data, handleOnClick, currentLevels, isLastPanel, activeItemIds, icon }) {
  return (
    <Flex
      height='100vh'
      minWidth={isLastPanel ? '100%' : '250px'}
      overflowY='auto'
      direction='column'
      gridGap='10px'
      boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)'
      borderRight={isLastPanel && '1px solid'}
    >
      {data.map((item) => {
        if (currentLevels.includes(item.level)) {
          return (
            <PanelItem
              key={item.id}
              activeItemIds={activeItemIds}
              item={item}
              handleOnClick={handleOnClick}
              currentLevels={currentLevels}
              isLastPanel={isLastPanel}
            />
          );
        }
      })}
    </Flex>
  );
}

// have an activeContent array
// each activeContent Object will have a level property
// each activeContent object will also have a visibility property
// when an activeContent object will be clicked, that visibility property will be toggled to true
// we will map over the activeContent object array and render finderPanels
// iterate and render a finderPanel if the activeContent object's level is greater than the currentLevel state
// and if the visibility of atleast one of the objects is visible

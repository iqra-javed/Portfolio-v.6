import React, { useState } from 'react';
import { Flex } from '@chakra-ui/layout';
// import { Icon, Text } from '@chakra-ui/react';
// import { FiGrid, FiAward, FiUser, FiCode } from 'react-icons/fi';
// import { DiReact } from 'react-icons/di';
// import { SiRubyonrails } from 'react-icons/si';
// import { FaVuejs } from 'react-icons/fa';
import FinderPanel from './FinderPanel';
import Header from './Header';
import FINDER_DATA from '../constants/finderData.js';


export default function Finder() {
  const [currentLevels, setCurrentLevels] = useState([1]);
  const [activeItemIds, setActiveItemIds] = useState(['0']);
  const [finderItems, setFinderItems] = useState(FINDER_DATA);

  const sortFinderPanelItems = (items) =>
    items.sort((a, b) => parseInt(a.id) - parseInt(b.item));

  const handleOnClick = (item) => {
    const finderItemsCopy = [...finderItems];
    const clickedItem = finderItemsCopy.find((copy) => copy.id === item.id);

    const isClickItemInPreviousPanel =
      item.level < [...currentLevels].splice(-1)[0];
    // if user clicks on an item in a previous panel
    if (isClickItemInPreviousPanel) {
      if (item.level === currentLevels[currentLevels.length - 1]) {
        const activeItemIdsCopy = [...activeItemIds];
        activeItemIdsCopy[activeItemIdsCopy.length - 1] = item.id;
        setActiveItemIds(activeItemIdsCopy);
      } else {
        // find the level of the item
        const level = item.level;
        const activeItemIdsCopy = [...activeItemIds];
        const updated = activeItemIdsCopy.slice(0, level);
        updated.push(item.id);
        setActiveItemIds(updated);
        const filteredLevels = currentLevels.slice(0, level + 2);
        setCurrentLevels(filteredLevels);
      }
    } else if (!currentLevels.includes(item.level + 1)) {
      if (item.level === currentLevels[currentLevels.length - 2]) {
      } else {
        setCurrentLevels((prev) => [...prev, clickedItem.level + 1]);

        setActiveItemIds((prev) =>
          prev.indexOf(item.id) < 0 ? [...prev, item.id] : [...prev]
        );
      }
    }

    // setFinderItems((prevItems) => [...prevItems, clickedItem]);
  };

  const activeId = activeItemIds.slice(-1)[0];

  const activeItem = finderItems.find((item) => item.id === activeId);

  return (
    <>
      <Header
        setFinderItems={setFinderItems}
        finderItems={finderItems}
        title={activeItem?.text}
        icon={activeItem?.icon}
      />
      <Flex bg='#2b2d2f'>
        {currentLevels.map((currLevel, index) => (
          <FinderPanel
            key={currLevel}
            data={finderItems.filter(
              (panelItem) =>
                panelItem.level === currLevel &&
                activeItemIds.includes(panelItem.parentId)
            )}
            activeItemIds={activeItemIds}
            handleOnClick={handleOnClick}
            currentLevels={currentLevels}
            isLastPanel={index === currentLevels.length - 1}
          />
        ))}
      </Flex>
    </>
  );
}

// have an activeContent array
// each activeContent Object will have a level property
// each activeContent object will also have a visibility property
// when an activeContent object will be clicked, that visibility property will be toggled to true
// we will map over the activeContent object array and render finderPanels
// iterate and render a finderPanel if the activeContent object's level is greater than the currentLevel state
// and if the visibility of atleast one of the objects is visible

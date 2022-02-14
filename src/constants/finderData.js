import { Icon, Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import { FiGrid, FiAward, FiUser, FiCode } from 'react-icons/fi';
import { DiReact } from 'react-icons/di';
import { SiRubyonrails } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';

const FINDER_DATA = [
    {
      id: '1',
      parentId: '0',
      level: 1,
      text: 'Projects',
      icon: <Icon as={FiCode} color='gray.100' mr={1} />,
    },
    {
      id: '2',
      parentId: '0',
      level: 1,
      text: 'Skills',
      icon: <Icon as={FiAward} color='gray.100' mr={1} />,
    },
    {
      id: '3',
      parentId: '0',
      level: 1,
      text: 'About',
      icon: <Icon as={FiUser} color='gray.100' mr={1} />,
    },
    {
      id: '4',
      parentId: '0',
      level: 1,
      text: 'Contact',
      icon: <Icon as={FiGrid} color='gray.100' mr={1} />,
    },
    {
      id: '5',
      parentId: '1',
      level: 2,
      text: 'React',
      icon: <Icon as={DiReact} color='gray.100' mr={1} />,
    },
    {
      id: '6',
      parentId: '1',
      level: 2,
      text: 'React Native',
      icon: (
        <Flex flexDirection='column' alignItems='center' justifyContent='center'>
          <Icon as={DiReact} color='gray.100' mr={1} />
          <Text color='gray.100' fontSize='8px' mr={1}>
            RN
          </Text>
        </Flex>
      ),
    },
    {
      id: '7',
      parentId: '1',
      level: 2,
      text: 'Vue JS',
      icon: <Icon as={FaVuejs} color='gray.100' mr={1} />,
    },
    {
      id: '9',
      parentId: '1',
      level: 2,
      text: 'Rails',
      icon: <Icon as={SiRubyonrails} color='gray.100' mr={1} />,
    },
    {
      id: '10',
      parentId: '5',
      level: 3,
      text: 'React Project 1',
    },
    {
      id: '11',
      parentId: '5',
      level: 3,
      text: 'React Project 2',
    },
    {
      id: '12',
      parentId: '5',
      level: 3,
      text: 'React Project 3',
    },
    {
      id: '13',
      parentId: '6',
      level: 3,
      text: 'React Native Project 1',
    },
    {
      id: '14',
      parentId: '6',
      level: 3,
      text: 'React Native Project 2',
    },
    {
      id: '15',
      parentId: '6',
      level: 3,
      text: 'React Native Project 3',
    },
  ];
  
  export default FINDER_DATA;
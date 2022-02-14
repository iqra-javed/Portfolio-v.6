import { Flex, IconButton, Button, Text } from '@chakra-ui/react';
import {
  SmallCloseIcon,
  MinusIcon,
  ArrowUpDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons';
import RoundButton from './RoundButton';
import SearchInput from './SearchInput';

export default function Header({ setFinderItems, finderItems, title, icon }) {
  return (
    <Flex
      bg='linear-gradient(to right, #2b2d2f, #44464a)'
      padding='8px'
      // height='55px'
      direction='column'
      justifyContent='space-between'
      borderBottom='1px solid'
    >
      <Flex>
        <Flex gridGap='5px'>
          <RoundButton bg='#EE4B2B' icon={<SmallCloseIcon display='none' />} />
          <RoundButton bg='#FFCC00' icon={<MinusIcon display='none' />} />
          <RoundButton
            bg='#4CBB17'
            icon={
              <ArrowUpDownIcon
                display='none'
                transform='rotate(45deg)'
                w='10px'
                mr='1px'
                mt='-1px'
              />
            }
          />
        </Flex>
        <Flex alignItems='center'>
          <Flex
            m={0}
            // width='100%'
            color='#D3D3D3'
            fontSize='12px'
            position='absolute'
            textAlign='center'
            ml='43%'
            mt={1}
          >
            {icon}
          </Flex>
          <Text
            m={0}
            width='100%'
            color='#D3D3D3'
            fontSize='12px'
            position='absolute'
            ml={icon ? '45%' : '42%'}
            // textAlign={icon ? 'left' : 'center'}
          >
            {title}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent='space-between' alignItems='center'>
        <Flex gridGap='2px'>
          <IconButton
            icon={<ChevronLeftIcon />}
            bg='#6A6C6E'
            color='#fff'
            borderRadius='2px'
            // border='none'
            size='sm'
            // w='20px'
            // h='20px'
          />
          <IconButton
            icon={<ChevronRightIcon />}
            bg='#6A6C6E'
            color='#fff'
            borderRadius='2px'
            // border='none'
            size='sm'
          />
        </Flex>
        <SearchInput
          setFinderItems={setFinderItems}
          finderItems={finderItems}
        />
      </Flex>
    </Flex>
  );
}

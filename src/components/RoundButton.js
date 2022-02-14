import { IconButton } from '@chakra-ui/react';

export default function RoundButton({ ...props }) {
  return (
    <IconButton
      isRound
      size="xs"
      border='none'
      //   display="flex"
      //   justifyContent="center"
      //   alignItems="center"

      _hover={{ '>svg': { display: 'block' } }}
      {...props}
    />
  );
}

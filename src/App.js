import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import Finder from './components/Finder';

export const theme = extendTheme({
  colors: {
    gray: {
      50: '#f2f2f8',
      100: '#d7d9da',
      200: '#bebfbf',
      300: '#a5a6a6',
      400: '#8b8b8c',
      500: '#727273',
      600: '#58595a',
      700: '#3f4041',
      800: '#252628',
      900: '#040f0f',
    },
  },

  components: {
    Button: {
      sizes: {
        lg: {
          h: 20,
          minW: 20,
          fontSize: 'lg',
          px: 6,
        },
        md: {
          h: 12,
          minW: 12,
          fontSize: 'md',
          px: 6,
        },
        sm: {
          h: 6,
          minW: 6,
          fontSize: 'sm',
          px: 3,
        },
        xs: {
          h: 4,
          minW: 4,
          fontSize: 'xs',
          px: 2,
        },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Finder />
    </ChakraProvider>
  );
}

export default App;

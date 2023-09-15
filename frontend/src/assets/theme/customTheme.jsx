import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.100', 'gray.800')(props),
      },
    }),
  },
  components: {
    Button: {
      // Define gradient background for the button
      baseStyle: {
        bgGradient: 'linear(to-r, purple.700, purple.300)',
        color: 'whiteAlpha.900',
        _hover: {
          bgGradient: 'linear(to-r, purple.300, purple.700)',
        },
      },
    },

    Input: {
      baseStyle: {
        _placeholder: {
          color: 'purple.700',
          fontSize: '70px',
          fontWeight: 'bold',
        },
        border: '2px solid purple',
        borderRadius: '4px',
        _focus: {
          borderColor: 'purple.900'
        },

      }
    }
  },
});

export default theme;



// const theme = extendTheme({
  
//   styles: {
//     global: {
//       '.purple-gradient-button': {
//         background: 'linear-gradient(to right, #8A2BE2, #FF69B4)',
//         color: 'white',
//         transition: 'background 0.3s ease-in-out',
//         _hover: {
//           background: 'linear-gradient(to right, #FF69B4, #8A2BE2)',
//         },
//       },
//     },
//   },
  
// });
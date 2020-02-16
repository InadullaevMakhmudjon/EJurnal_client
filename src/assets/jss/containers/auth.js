import { defaultFont } from '..';

export default (theme) => ({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: -1,
    '&:after': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      background: '#000',
      opacity: '.6',
    },
  },
  container: {
    ...defaultFont,
    height: '100vh',
  },
});

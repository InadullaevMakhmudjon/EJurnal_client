
import { defaultBoxShadow } from '../../..';

export default {
  container: {
    padding: '8px',
  },
  item: {
    background: 'white',
    height: '220px',
    padding: '8px',
    border: '0.5px solid #B6B6B7',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      ...defaultBoxShadow,
      cursor: 'pointer',
      transform: 'translate(0px, -5px)',
    },
  },
  icon: {
    marginRight: '10px',
  },
  status: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    border: '2px solid #B6B6B7',
    padding: '3px',
    height: '100px',
    width: '100px',
    borderRadius: '50%',
  },
};

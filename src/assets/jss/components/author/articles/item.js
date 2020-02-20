import { title, defaultBoxShadow } from '../../..';

export default (theme) => ({
  item: {
    ...defaultBoxShadow,
    margin: '10px',
    background: 'white',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translate(0px, -5px)',
    },
  },
  customimage: {
    border: '2px solid #B6B6B7',
    margin: '5px 0px',
    borderRadius: '50%',
    padding: '5px',
    width: '100px',
    height: '100px',
  },
  title: {
    ...title,
  },
  text: {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  line: {
    width: '100%',
    overflow: 'hidden',
  },
});

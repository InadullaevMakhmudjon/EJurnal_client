import { defaultFont, primaryColor } from '../../..';

export default () => ({
  margin: { margin: '50px' },
  padding: { padding: '0px 10px' },
  itemsMaxHeight: { maxHeight: '160px' },
  orCondition: { height: '50px' },
  regular: { ...defaultFont },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    border: '5px solid #B6B6B7',
    padding: '2px',
    '&:hover': {
      borderColor: primaryColor[0],
    },
  },
});

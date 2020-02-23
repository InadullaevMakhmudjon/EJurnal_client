import { title, defaultFont } from '../..';

export default {
  title,
  icon: { width: '34px', height: '34px' },
  content: { background: 'white', borderRadius: '8px', marginTop: '20px' },
  image: { position: 'absolute' },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    width: '80px',
    background: '#3F51B5',
    position: 'relative',
    left: '20px',
    top: '-25px',
    borderRadius: '8px',
    color: 'white',
    boxShadow:
      `0 10px 20px -12px rgba(63, 81, 181, 0.42),
        0 3px 20px 0px rgba(63, 81, 181, 0.12),
        0 8px 10px -5px rgba(63, 81, 181, 0.2)`,
  },
  tableTitle: {
    ...defaultFont,
    marginLeft: '30px',
    marginTop: '10px',
  },
};

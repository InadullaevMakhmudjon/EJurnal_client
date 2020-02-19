import { defaultFont } from '..';

export default {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...defaultFont,
  },
  subtitle: {
    textAlign: 'center',
  },
  wraper: {
    marginTop: '20px',
    background: 'white',
  },
};

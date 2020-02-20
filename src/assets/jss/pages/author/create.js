import { defaultFont, defaultBoxShadow } from '../..';

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
    ...defaultBoxShadow,
    marginTop: '20px',
    background: 'white',
    padding: '24px',
    borderRadius: '5px',
  },
};

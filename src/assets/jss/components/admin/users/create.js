import { defaultFont } from '../../..';

export default {
  container: {
    paddingTop: '80px',
  },
  form: {
    background: 'white',
    borderRadius: '8px',
    boxShadow:
    `0 10px 20px -12px rgba(0, 0, 0, 0.08),
      0 3px 20px 0px rgba(0, 0, 0, 0.05),
      0 8px 10px -5px rgba(0, 0, 0, 0.02)`,
  },
  button: {
    height: '50px',
    margin: '40px 60px',
  },
  title: {
    ...defaultFont,
    marginLeft: '30px',
    marginTop: '8px',
    textTransform: 'capitalize',
  },
  icon: { width: '34px', height: '34px' },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    width: '80px',
    background: '#3F51B5',
    position: 'relative',
    left: '20px',
    top: '-35px',
    borderRadius: '8px',
    color: 'white',
    boxShadow:
      `0 10px 20px -12px rgba(63, 81, 181, 0.42),
        0 3px 20px 0px rgba(63, 81, 181, 0.12),
        0 8px 10px -5px rgba(63, 81, 181, 0.2)`,
  },
  textField: {
    margin: '24px 54px',
  },
};

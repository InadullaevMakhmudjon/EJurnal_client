import { defaultFont } from '..';

export default (theme) => ({
  container: {
    ...defaultFont,
    height: '420px',
    background: 'white',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0px 0px 8px 3px grey',
    '&:hover': {
      boxShadow: '0px 0px 10px 5px grey',
    },
  },
  header: {
    ...defaultFont,
    height: '80px',
    borderRadius: '8px',
    border: '2px solid red',
    zIndex: 4,
    background: 'red',
    position: 'relative',
    top: -50,
    boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
    '&:hover': {
      boxShadow: '0px 0px 15px rgba(0,0,0,0.5)',
    },
  },
  content: {
    padding: '8px',
  },
  textField: {
    margin: '10px',
  },
  Button: {
    width: '60%',
    marginTop: '20%',
  },
});

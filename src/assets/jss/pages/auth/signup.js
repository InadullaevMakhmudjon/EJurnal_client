import { defaultFont } from '../..';

export default () => ({
  container: {
    ...defaultFont,
    height: '520px',
    background: 'white',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0px 0px 8px 3px grey',
    '&:hover': {
      boxShadow: '0px 0px 10px 5px grey',
    },
  },
  title: {
    marginBottom: '20px',
  },
  subcontent: {
    margin: '10px',
  },
  textField: {
    margin: '15px',
    width: '80%',
  },
  submit: {
    marginTop: '30px',
    height: '50px',
    width: '60%',
    margin: '0 auto',
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

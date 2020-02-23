import { defaultBoxShadow, defaultFont } from '../../..';

export default {
  container: {
    marginTop: '8px',
    padding: '16px',
  },
  wrapper: {
    background: 'white',
    ...defaultBoxShadow,
    borderRadius: '8px',
  },
  children: {
    height: '500px',
  },
  firstContainer: {
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  secondContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  contentContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    height: '200px',
    marginBottom: '50px',
  },
  details: {
    ...defaultFont,
  },
  image: {
    width: '160px',
    height: '160px',
    padding: '3px',
    border: '5px solid #B6B6B7',
    borderRadius: '100%',
  },
};

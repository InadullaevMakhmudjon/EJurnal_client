import { container } from '../index';

export default {
  wrapper: {
    position: 'relative',
    top: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  container: {
    ...container,
  },
  content: {
    padding: '30px 15px',
    minHeight: 'calc(100vh - 123px)',
    border: '2px solid red',
  },
  mainPanel: {
    position: 'relative',
    width: 'calc(100% - 260px)',
  },
};

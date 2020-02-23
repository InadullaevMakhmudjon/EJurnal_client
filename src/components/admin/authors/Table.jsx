import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import BlockIcon from '@material-ui/icons/Block';
import Fab from '@material-ui/core/Fab';
import style from 'assets/jss/components/admin/authors/table';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(style);

const TableComponent = ({ authors, deleteAuthor, blockAuthor }) => {
  const classes = useStyle();
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">First name</TableCell>
            <TableCell align="center">Second name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Created date</TableCell>
            <TableCell align="center">Last entered</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {
              authors.map((author) => (
                <TableRow key={author.userName}>
                  <TableCell className={classes.content} align="center">{author.firstName}</TableCell>
                  <TableCell className={classes.content} align="center">{author.secondName}</TableCell>
                  <TableCell className={classes.content} align="center">{author.userName}</TableCell>
                  <TableCell className={classes.content} align="center">{author.role ? author.role.name : ''}</TableCell>
                  <TableCell className={classes.content} align="center">{author.createdAt}</TableCell>
                  <TableCell className={classes.content} align="center">{author.lastEntered ? author.lastEntered : '-'}</TableCell>
                  <TableCell className={classes.content} align="center">
                    <Grid container justify="space-around">
                      <Fab onClick={() => blockAuthor({ variables: { id: author.id, blocked: !author.blocked } })} variant="round" color={author.blocked ? 'inherit' : 'secondary'} size="small">
                        {
                          author.blocked ? <CheckCircleOutlineOutlinedIcon /> : <BlockIcon />
                        }
                      </Fab>
                      <Fab onClick={() => deleteAuthor({ variables: { where: { id: author.id } } })} variant="round" color="secondary" size="small">
                        <DeleteIcon />
                      </Fab>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  authors: PropTypes.array,
  deleteAuthor: PropTypes.func.isRequired,
  blockAuthor: PropTypes.func.isRequired,
};

TableComponent.defaultProps = {
  authors: [1, 2, 3],
};

export default TableComponent;

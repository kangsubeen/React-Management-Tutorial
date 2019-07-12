import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201904%2F20190418150724431.jpg',
    'name': '황민현',
    'birthday': '950809',
    'height': '181cm',
    'job': "NU'EST"
  },
  {
    'id': 2,
    'image': 'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201901%2F20190117122557308.jpg',
    'name': '옹성우',
    'birthday': '950824',
    'height': '179cm',
    'job': 'Actor'
  },
  {
    'id': 3,
    'image': '2w3https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F22%2F201712261720546481.jpg',
    'name': '이한결',
    'birthday': '991207',
    'height': '177cm',
    'job': 'IM'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>　이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>　키</TableCell>
              <TableCell>소속 및 직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} height={c.height} job={c.job}
                />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
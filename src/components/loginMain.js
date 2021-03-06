import React from 'react'
import logo from '../login.svg'
import '../App.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { deepOrange, green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 20px'
  }
})


function ButtonStyled() {
  const classiMM = useStyles();
  return <Button className={classiMM.root}>Deneme Butonu</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<CheckCircleOutlineIcon />}
        checkedIcon={<CheckCircleOutlineIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Onaylıyorum."
    />
  )
}

{/*
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>YAPILACAKLAR</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Ne yapılması gerekiyor?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Ekle {this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
*/}
function LoginMain() {
  return ( //TODO: CheckboxExample olarak burada başlattık

    <Container maxWidth="xs">
      <div className="App">
        <header className="App-header">
          <Typography variant="h3">
            Login Page
          </Typography>

          <Typography variant="subtitle1">
            Material UI kullanımı
          </Typography>

          <ButtonStyled />
          {/*
          <Grid container spacing={2} justify="center" >
            <Grid item xs={3} sm={4}>
              <Paper style={{ height:85, width:'100%'}} />
            </Grid>
            <Grid item xs={3} sm={4}>
              <Paper style={{ height:85, width:'100%'}} />
            </Grid>
            <Grid item xs={3} sm={4}>
              <Paper style={{ height:85, width:'100%'}} />
            </Grid>
          </Grid>
          */}

          <TextField
          />
          <Button className="classiMM"
            color="primary"
            variant="contained"
          >sad</Button>

          <CheckboxExample />
          
          <ButtonGroup>
            <Button className="classiMM"
              startIcon={<SaveIcon />}
              onClick={() => { alert('clicked') }}
              variant="contained"
              color="secondary"
              size="large"
            >
              Kaydet
          </Button>

            <Button
              startIcon={<DeleteIcon />}
              onClick={() => { alert('clicked') }}
              variant="contained"
              color="secondary"
              size="large"
            >
              Sil
          </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" style={{ width: 100, height: 100, marginTop: 100 }} />
        </header>
      </div>
    </Container>
  );
}

export default LoginMain;

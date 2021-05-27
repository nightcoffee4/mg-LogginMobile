import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo, green, deepOrange } from '@material-ui/core/colors'

import Login from './components/login'
import LoginMain from './components/loginMain.js'
import NameForm from './components/form'
import Footer from './components/Footer'
import Menum from './components/menu'
import Gonder from './components/gelen'
import WaveBorder from './components/WaveBorder'
import BoslukluGrid from './demos/grid1'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },

  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: deepOrange[300],
    }
  }
})

class App extends Component {
  render() {
    return (
      
      <React.Fragment>

        <ThemeProvider theme={theme}>
          {/* 
           <Menum />
            <Gonder /> 
         <LoginMain /> 
      */}
          <div className="App-header" >
            <Login />
          </div>
          <WaveBorder
            upperColor="#282c34"
            lowerColor="orange" //{theme.palette.common.darkBlack}
            animationNegativeDelay={4}
          />
  
        </ThemeProvider>

      </React.Fragment> 


      

    );
  }
}


export default App;

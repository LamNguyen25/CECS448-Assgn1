import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './pages/registrationForm';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0C63E7',
      main: '#8179DA',
      dark: '#263238',
      contrastText: '#fff',
    },
    secondary: {
      light: '#0A85ED',
      main: '#e07a5f',
      dark: '#212121',
      contrastText: '#fff'
    }
  },
}
)



function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={RegistrationForm}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
   
  );
}

export default App;

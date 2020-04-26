import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

import Home from './pages/home'
import Sidenav from './components/sidenav'
import Upload from './pages/upload/index.js'
import Moderation from './pages/moderation'
import Guidelines from './pages/guidelines';
import Tokens from './pages/tokens';

import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CloudUpload from '@material-ui/icons/CloudUpload';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#202020',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ffffff'
      // dark: will be calculated from palette.secondary.main,
      //contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const styles = {
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    left: 0,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#ffffff',
  }
}

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, notification: true };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  notification = () => {
    if (!this.state.notification) {
      document.getElementsByClassName("notification-div")[0].style.display = "none"
      this.setState({ notification: true })
    }
    else {
      this.setState({ notification: false })
      document.getElementsByClassName("notification-div")[0].style.display = "flex"
    }
  }


  render() {
    const { classes } = this.props;

    if (!this.state.web3) {
      return (
        <div className="app-div">
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Backdrop open={true} className={classes.backdrop}>
                <div style={{ fontSize: "50px", background: "#212121", padding: "60px", borderRadius: "10px", fontWeight: "bold" }}>Please Login With Metamask</div>
              </Backdrop>
              <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                  <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <div style={{ width: "400px" }}>
                      DAO.tv
                  </div>
                  </Link>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ height: "0px", display: "flex", alignItems: "center" }}>
                      <Link to="/">
                        <IconButton>
                          <HomeIcon color="secondary" />
                        </IconButton>
                      </Link>
                    </div>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </div>
                    <div style={{ height: "0px", display: "flex", alignItems: "center" }}>
                      <IconButton>
                        <Badge badgeContent={4} color="error" overlap="circle" variant="dot">
                          <NotificationsIcon color="secondary"></NotificationsIcon>
                        </Badge>
                      </IconButton>
                    </div>
                  </div>
                  <div style={{ width: "400px", display: "flex", justifyContent: "flex-end" }}>

                    <Link to="/upload">
                      <IconButton>
                        <CloudUpload color="secondary" />
                      </IconButton>
                    </Link>
                    <Link to="/moderation">
                      <IconButton>
                        <PeopleAltIcon color="secondary"></PeopleAltIcon>
                      </IconButton>
                    </Link>
                    <Link to="/guidelines">
                      <IconButton>
                        <GavelIcon color="secondary" />
                      </IconButton>
                    </Link>
                    <Link to="/tokens">
                      <IconButton>
                        <AttachMoneyIcon color="secondary" />
                      </IconButton>
                    </Link>
                    <IconButton>
                      <AccountCircleIcon color="secondary" />
                    </IconButton>

                  </div>
                </Toolbar>
              </AppBar>
              <div className="content-container-div">
                {/*<Sidenav></Sidenav>*/}
                <Switch>
                  <Route path="/guidelines" component={Guidelines}></Route>
                  <Route path="/tokens" component={Tokens}></Route>
                  <Route path="/upload" component={Upload}></Route>
                  <Route path="/moderation" component={Moderation}></Route>
                  <Route path="/" component={Home}></Route>
                </Switch>
              </div>
            </ThemeProvider>
          </BrowserRouter >
        </div >
      )
    }
    else {
      return (
        <div className="app-div">
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                  <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <div style={{ width: "400px" }}>
                      DAO.tv
                    </div>
                  </Link>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ height: "0px", display: "flex", alignItems: "center" }}>
                      <Link to="/">
                        <IconButton>
                          <HomeIcon color="secondary" />
                        </IconButton>
                      </Link>
                    </div>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </div>
                    <div style={{ height: "0px", display: "flex", alignItems: "center" }}>
                      <IconButton onClick={this.notification}>
                        <Badge badgeContent={4} color="error" overlap="circle" variant="dot">
                          <NotificationsIcon color="secondary"></NotificationsIcon>
                        </Badge>
                      </IconButton>
                      <div className="notification-div" style={{ position: "absolute", display: "none", width: "300px", height: "500px", background: "white", top: "40px", marginLeft: "10px" }}>HELLO</div>
                    </div>
                  </div>
                  <div style={{ width: "400px", display: "flex", justifyContent: "flex-end" }}>

                    <Link to="/upload">
                      <IconButton>
                        <CloudUpload color="secondary" />
                      </IconButton>
                    </Link>
                    <Link to="/moderation">
                      <IconButton>
                        <PeopleAltIcon color="secondary"></PeopleAltIcon>
                      </IconButton>
                    </Link>
                    <Link to="/guidelines">
                      <IconButton>
                        <GavelIcon color="secondary" />
                      </IconButton>
                    </Link>
                    <Link to="/tokens">
                      <IconButton>
                        <AttachMoneyIcon color="secondary" />
                      </IconButton>
                    </Link>
                    <IconButton>
                      <AccountCircleIcon color="secondary"></AccountCircleIcon>
                    </IconButton>

                  </div>
                </Toolbar>
              </AppBar>
              <div className="content-container-div">
                {/*<Sidenav></Sidenav>*/}
                <Switch>
                  <Route path="/guidelines" component={Guidelines}></Route>
                  <Route path="/upload" component={Upload}></Route>
                  <Route path="/moderation" component={Moderation}></Route>
                  <Route path="/tokens" component={Tokens}></Route>
                  <Route path="/" component={Home}></Route>
                </Switch>
              </div>
            </ThemeProvider>
          </BrowserRouter >
        </div >
      )
    }
  }
}

export default withStyles(styles)(App);

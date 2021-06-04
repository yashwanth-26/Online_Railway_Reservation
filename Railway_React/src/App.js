import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";


import Profile from "./components/profile.component";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/public/Home";
import Booking from "./components/public/Booking";
import Pnr from "./components/public/Pnr";
import Rail from "./components/public/Rail";
import ProcessBooking from "./components/public/ProcessBooking";
import ViewTrains from "./components/admin/ViewTrains";
import ViewUsers from "./components/admin/ViewUsers";
import UpdateTrains from "./components/admin/UpdateTrains";
import AdminHome from "./components/admin/AdminHome";
import SearchTrainByNumber from "./components/public/SearchTrainByNumber";
import Footer from "./components/Footer";
import AddTrains from "./components/admin/AddTrains";
import ViewTrainInfo from "./components/public/ViewTrainInfo";
import ViewTrainById from "./components/admin/ViewTrainById";
import DisplayTrain from "./components/admin/DisplayTrain";
import DisplayPnr from "./components/public/DisplayPnr";



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        //showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
          <i class="fas fa-train"></i> Railway Reservation
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
              <i class="fas fa-home"></i>  Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/pnr"} className="nav-link">
                PNR Status
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/trainNumber"} className="nav-link">
                Search Train
              </Link>
            </li>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin
                </Link>
              </li>
            )}

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                <i class="fas fa-user-secret"></i>  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                <i class="fas fa-sign-out-alt"></i> LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                <i class="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                <i class="fas fa-user-plus"></i> Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        {/* </div><div className="container mt-3"> */}
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
            <Route path='/booking' component={Booking} />
            <Route path='/trainNumber' component={SearchTrainByNumber} />
            <Route path='/view-train/:id' component={ViewTrainInfo} />
            <Route path='/pnr' component={Pnr} />
            <Route path='/pnrdetails/:id' component={DisplayPnr} />
            <Route path='/get-details/:id' component={Rail} />
            <Route path='/process-booking/:type/:id' component={ProcessBooking} />
            {/* <Route path='/train-id' component={} /> */}
            <Route path='/update-train/:id' component={UpdateTrains} />
            {/* <Route path='/view-users' component={ViewUsers} /> */}
            <Route path='/all-trains' component={ViewTrains} />
            <Route path='/add-train' component={AddTrains} />
            <Route path='/admin' component={AdminHome} />
            <Route path='/train-id' component={ViewTrainById} />
            <Route path='/train-info/:id' component={DisplayTrain} />
            <Route path='/footer' component={Footer} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

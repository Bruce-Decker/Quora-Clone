import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Answer from "./components/Answer/Answer";
import Answer2 from "./components/Answer/Answer2";
import Content from "./components/Content/Content";
import Question from "./components/Question/Question";
import Profile from "./components/Profile/Profile";
import Topic from "./components/Topic/Topic";
import { activeUser } from "./actions/authActions";
import jwt_decode from "jwt-decode";
import Messages from "./components/Messages/Messages";
import EditAnswer from "./components/EditAnswer/EditAnswer";
import Graph from "./components/Graphs/graphs";
import ProfileViewsGraph from "./components/Graphs/profileViewsGraph";
import SecureRoutes from './components/SecureRoutes'


if (localStorage.token) {
  if (localStorage.getItem("token") === "undefined") {
    localStorage.removeItem("token");
  }
  activeUser(localStorage.token);
  const decoded = jwt_decode(localStorage.token);

  decoded.token = localStorage.getItem("token");
  store.dispatch(activeUser(decoded));

  const time_now = Date.now() / 1000;
  // if (decoded.exp < time_now) {
  //    store.dispatch(resetProfile())
  //    store.dispatch(logout())

  //    window.location.href = '/'
  // }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Switch>
               <SecureRoutes exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
               <SecureRoutes exact path="/answer" component={Answer} />
            </Switch>
            <Switch>
               <SecureRoutes exact path="/answer2" component={Answer2} />
            </Switch>
            <Switch>
               <SecureRoutes exact path="/content" component={Content} />
            </Switch>
            <Switch>
               <SecureRoutes exact path="/question/:question_id" component={Question} />
            </Switch>
            <Switch>
               <SecureRoutes exact path="/profile/:email" component={Profile} />
            </Switch>
            <Switch>
               <SecureRoutes exact path="/messages/:email" exact component={Messages} />
            </Switch>
            <Switch>
                <SecureRoutes exact path="/editanswer" exact component={EditAnswer} />
            </Switch>
            <Switch>
                <SecureRoutes exact path="/topic/:topic_name" exact component={Topic} />
            </Switch>
            <Switch>
                <SecureRoutes exact path="/graph" exact component={Graph} />
            </Switch>
            <Switch>
                <SecureRoutes exact path="/profileviewsgraph" exact component={ProfileViewsGraph} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

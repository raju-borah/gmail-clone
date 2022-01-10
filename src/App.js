import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/Mail/EmailList";
import SendMail from "./components/Mail/SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useSelector } from "react-redux";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
function App() {
  const showSendMessageModal = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <ReactNotification />
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
            <Route path="/social">
              <h1>social</h1>
            </Route>
            <Route path="/promotions">
              <h1>promotion</h1>
            </Route>
          </Switch>
        </div>
        {showSendMessageModal && <SendMail />}
      </div>
    </Router>
  );
}

export default App;

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
function App() {
  const showSendMessageModal = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
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
          </Switch>
        </div>
        {showSendMessageModal && <SendMail />}
      </div>
    </Router>
  );
}

export default App;

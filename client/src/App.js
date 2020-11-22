import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const Form = lazy(() => import("./routes/ApplicationForm"));
const Apps = lazy(() => import("./routes/ApplicationList"));

function App() {
  return (
    <Container fluid>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/apps" component={Apps} />
          </Switch>
        </Suspense>
      </Router>
    </Container>
  );
}

export default App;

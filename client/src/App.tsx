import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page3 } from './Page3';
import { UseFormHook } from './UseFormHook';
import { Page5 } from './Page5';
import { Page6 } from './Page6';

// https://github.com/darcy-vitacca/rhf-tsc/projects/1
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
        <Route path="/page3" exact component={Page3} />
        <Route path="/UseFormHook" exact component={UseFormHook} />
        <Route path="/page5" exact component={Page5} />
        <Route path="/page6" exact component={Page6} />
      </Switch>
    </Router>
  );
}

export default App;

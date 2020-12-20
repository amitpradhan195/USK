import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

// import Home from "./pages/Home";
// import Listing from "./pages/Listing";

// export default function App() {
//   return (
//     <>
//       <Router>
//         {/* <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/listing" component={Listing} />

//           <Redirect to="/" />
//         </Switch> */}
//         <Switch>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </Router>
//     </>
//   );
// }

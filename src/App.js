
import Header from "./container/Header";
import {
BrowserRouter as Router,
 Switch,
  Route,
} from "react-router-dom";
import ProductList from "./container/ProductList";
import ProductDetail from "./container/ProductDetail";


function App() {


  return (
  <div className="App">
    <Router>
  <Header/>
 

   <Switch>
   <Route path="/" exact component={ProductList}/>
   <Route path="/product/:productId" exact component={ProductDetail}/>
   <Route>404 not found</Route>
</Switch>

  </Router>
    </div>
  );
}

export default App;

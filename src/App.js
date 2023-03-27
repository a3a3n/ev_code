import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import "./app.css";
import {BrowserRouter as Router , Routes , Route  } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/productList";
import Products from "./pages/Products/Products";
import NewProduct from "./pages/Newproduct/Newproduct";


function App() {
  return (
    <Router>
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/users" element={<UserList />}>
        </Route>
        <Route path="/users/:userId" element={<User />}>
        </Route>
        <Route path="/newUser" element={<NewUser />}>
        </Route>
        <Route path="/product" element={<ProductList />}>
        </Route>
        <Route path="/product/:productId" element={<Products />}>
        </Route>
        <Route path="/newproduct" element={<NewProduct />}>
        </Route>
        
        </Routes>
      </div>
    </div>
    </Router> 
  );
}

export default App;

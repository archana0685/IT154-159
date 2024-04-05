import "./App.css";
import Home from "./landingComponents/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { SearchHome, MealDetails, Category } from "./search-pages/index";
import Publish from "./components/Publish/Publish";
import Sidebar from "./components/Sidebar/Sidebar";
import Recipe from "./components/Publish/publishComponents/Recipe";
import Account from "./pages/Account";


function App() {
  return (
    <div className="App">
    <Router>
    <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route exact path="/register" element={<Register/>}/> 
        <Route exact path="/login" element={<Login/>}/> 
        <Route exact path = "/login/home" element = {<SearchHome />} />
        <Route exact path = "/login/home/login/home/meal/:id" element = {<MealDetails />} />
        <Route exact path = "/login/home/meal/category/:name/login/home/meal/:id" element = {<MealDetails />} />
        <Route exact path = "/login/home/meal/category/:name" element = {<Category />} />
        <Route exact path ="/login/home/publish" element={<Publish/>}/>
        <Route exact path ="/login/home/publish/recipe" element={<Recipe/>}/>
        <Route exact path ="/login/home/account" element={<Account/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
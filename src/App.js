import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
// import RecipePage from './Pages/RecipePage';
import SignupPage from './Pages/SignupPage';
import NotFoundPage from './Pages/NotFoundPage';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
<BrowserRouter>
    <div className="App">
      <h1>First react app</h1>
      <NavBar></NavBar>
      <div id="page-body">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/recipe" element={<LoginPage />}></Route>
        {/* <Route path="/recipe" element={<RecipePage/>}></Route> */}
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      </div>
    </div>
    </BrowserRouter>

   {/* <HomePage/> */}
    </>
  );
}

export default App;

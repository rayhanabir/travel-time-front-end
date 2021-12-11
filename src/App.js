import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Register/Register';
import Book from './Pages/Others/Book/Book';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Others/PrivateRoute/PrivateRoute';
import ManageOrder from './Pages/Others/ManageOrder/ManageOrder';
import MyOrder from './Pages/Others/MyOrder/MyOrder';
import AddPlaces from './Pages/Others/AddPlaces/AddPlaces';




function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
          <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home/>
              </Route>
              <PrivateRoute path="/book/:bookId">
                <Book/>
              </PrivateRoute>
              <Route path="/login">
                <Login/>
              </Route>
              <PrivateRoute path="/manage">
                <ManageOrder/>
              </PrivateRoute>
              <PrivateRoute path="/order">
                <MyOrder/>
              </PrivateRoute>
              <PrivateRoute path ='/addplaces'>
                <AddPlaces/>
              </PrivateRoute>
              <Route path="/register">
                <Register/>
              </Route>
              <Route path='*'>
                <NotFound/>
              </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

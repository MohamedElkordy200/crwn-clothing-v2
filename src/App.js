 
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/Sign-In/sign-in.component';
import {Routes,Route} from 'react-router-dom'
const App = () => {
   

  return (
    <div>
      <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='sign-in' element={<SignIn />} />
          </Route>
      </Routes>
  


    </div>
   
  );
};

export default App;
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from './pages/home/home';
import Registration from './pages/registration/registration';

import Routes from './routes';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style> 
function App() {
  return (
  <Router>
  	<div className="App">
      <Header/>
      <Routes/>
      <Footer/>
  	</div>
   </Router>
  );
}

export default App;

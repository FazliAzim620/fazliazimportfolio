import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import theme from './styles/theme';
import About from './page/About';
import Services from './page/Services';
import Experience from './page/Experience';
import Works from './page/Works';
import Contact from './page/Contact';
import Blog from './page/Blog';

function App() {
  return (

  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/experiences' element={<Experience/>}/>
        <Route exact path='/work' element={<Works/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
{/* <Home/> */}
  </ThemeProvider>

  );
}

export default App;

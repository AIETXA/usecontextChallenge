import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import Button from '../components/Button';
import { useTheme } from '../themes/ThemeContext';

const RoutesApp = () => {
    const { theme } = useTheme();

    return (
        <Router>
            <section className={`App ${theme}`}>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/MyJob"}>MyJob</Link>
                <Link to={"/Profile"}>Profile</Link>
        <Button/>
            </nav>
            <div className='content'>
                <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/MyJob' element={<MyJob/>}/>
                        <Route path='/Profile' element={<Profile/>}/>
                </Routes>
            </div>    
        </section>
        </Router>

    )
}
   
export default RoutesApp
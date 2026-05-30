import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Contact from './Contact.jsx'
import Nopage from './Nopage.jsx'

function My() {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </Router>
        </div>
    )
}
export default My;
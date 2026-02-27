// import {Link} from "react-router";

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <Link to="/">
//                 <p className="text-2xl font-bold text-gradient">SKILLBRIDGE AI</p>
//             </Link>
//             <Link to="/upload" className="primary-button w-fit">
//                 Upload Resume
//             </Link>
//         </nav>
//     )
// }
// export default Navbar



import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">
                    SKILLBRIDGE AI
                </p>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
                <Link to="/" className="text-sm font-medium hover:text-blue-600 transition">
                    Home
                </Link>

                <Link to="/upload" className="text-sm font-medium hover:text-blue-600 transition">
                    Analyze
                </Link>

                <Link to="/howitwork" className="text-sm font-medium hover:text-blue-600 transition">
                    How It Works
                </Link>

                <Link to="/about" className="text-sm font-medium hover:text-blue-600 transition">
                    About
                </Link>

                {/* Primary CTA (Keep Existing Style) */}
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
import { NavLink, Outlet } from 'react-router-dom';
import '../../src/css/Layout.css';

export const Layout = () => {
    return (
        
        <div>
            <header className="header">
                <div className="logo">
                    <span className="logo-text">PORTFOLIO</span>
                </div>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {"<"} HOME {"/>"}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                {"<"} ABOUT ME {"/>"}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link">
                                {"<"} PORTFOLIO {"/>"}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                {"<"} CONTACT {"/>"}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};


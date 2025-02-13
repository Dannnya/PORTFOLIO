import { NavLink, Outlet } from 'react-router-dom';
import '../../src/scss/Layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Layout = () => {
    return (
        
        <div>
            <header className="header">
                <div className="logo">
                    <span className="logo-text">{'{ '}PORTFOLIO{' }'}</span>
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
                <ul className="contact">
                    <li>
                        <a href="https://www.instagram.com/mind_in_awe_/#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size='2x'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/?lang=uk&mx=2" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} size='2x'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/daniil-komarovskyi-b396822a1/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} size='2x'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Dannnya" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='x'/>
                        </a>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};


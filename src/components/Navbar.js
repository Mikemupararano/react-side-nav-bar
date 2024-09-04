// Import the React library and the useState hook from React
import React, { useState } from 'react';

// Import all icons from lucide-react and store them in the FaIcons object
import * as FaIcons from 'lucide-react';

// Import SidebarData, which is likely an array of objects representing the sidebar menu items
import { SidebarData } from './SidebarData';

// Import the CSS file for styling the Navbar component
import './Navbar.css';

// Import IconContext from react-icons to set global icon properties
import { IconContext } from 'react-icons/lib';

// Import the Link component from react-router-dom to handle navigation between different routes
import { Link } from 'react-router-dom';

// Define the Navbar functional component
function Navbar() {
    // Declare a state variable 'sidebar' to track whether the sidebar is open or closed, initialized to false
    const [sidebar, setSidebar] = useState(false);

    // Define a function 'showSidebar' that toggles the sidebar state
    const showSidebar = () => setSidebar(!sidebar);

    // Return the JSX structure of the Navbar component
    return (
        <>
            {/* Provide a context for icons, setting the color to white (#fff) */}
            <IconContext.Provider value={{ color: '#fff' }}>
              
                {/* Navbar container */}
                <div className='navbar'>
                    {/* Link that contains the menu icon */}
                    <Link to='#' className='menu-bars'>
                        {/* AlignJustify icon for the hamburger menu, toggles the sidebar when clicked */}
                        <FaIcons.AlignJustify onClick={showSidebar} />
                    </Link>
                </div>
                
                {/* Sidebar navigation menu, with conditional class based on the 'sidebar' state */}
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    {/* List of sidebar items */}
                    <ul className='nav-menu-items'>
                        {/* Close button for the entire sidebar */}
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars' onClick={showSidebar}>
                                {/* X icon to close the sidebar */}
                                <FaIcons.X />
                            </Link>
                        </li>

                        {/* Map through SidebarData to dynamically create sidebar menu items */}
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    {/* Link for each sidebar item */}
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                        {/* X icon for each individual menu item to close the sidebar */}
                                        <FaIcons.X onClick={showSidebar} className="close-icon" />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

// Export the Navbar component as the default export
export default Navbar;

import React from 'react';
import './sidebar.css';


/* 
    list of items for the list, remember
    to add fa-2x class to fit the size of
    your icon if you're using awesome fonts
*/
const links = [
    {
        id: 0,
        icon: "fas fa-home fa-2x",
        text: 'Home',
        path: "#"
    },
    {
        id: 1,
        icon: "fas fa-address-card fa-2x",
        text: 'Contact',
        path: "#"
    },
    {
        id: 2,
        icon: "fas fa-question-circle fa-2x",
        text: 'Help',
        path: "https://github.com/diegoacr96/Responsive-Sidebar-for-react"
    },    
    {
        id: 3,
        icon: "fab fa-github fa-2x",
        text: 'Github',
        path: "https://github.com/diegoacr96"
    },
    {
        id: 4,
        icon: "fas fa-cog fa-2x",
        text: 'Setting',
        path: "#"
    },

]

/* 
    This is the main component, try not to change anything 
    inside here. Focus on the sidebar.css to change stuf like 
    colors and the array above to add your custom items ;)
*/

const Items = () => {
    return(
        links.map(link => {
            return (
                <li className="link-list" key={link.id}>
                    <a className="bar-item" href={link.path}>
                        <span className = {link.icon + ' icon'} />
                        <span className="bar-link">
                            {link.text}
                        </span>                 
                    </a>
                </li>  
            )
        })    
    )
}

const Sidebar = () => {
    return(
        <nav className="sidebar">
            <ul className="sidebar-bar">
                <li className="bar-item brand-logo">
                    <span className="fas fa-bahai fa-2x logo"></span>
                    <span className="bar-link">
                        My Brand
                    </span>
                </li>
                <Items />
            </ul>
        </nav>
    )
}

export default Sidebar;
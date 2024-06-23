// eslint-disable-next-line import/no-unresolved
import brageLogo from '/brage.svg';
import { useState, useEffect } from "react";
// import { SiJavascript } from "react-icons/si"
import { useNavigate } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { generateSideMenuItems } from "../../helpers/sideMenuItems.js"; 
import PropTypes from 'prop-types';
import './sideMenu.css';

export function SideMenu({ apiRoutes }) {

    const navigate = useNavigate();

    const [menuItems, setMenuItems] = useState([]);
    const [openRouteIndex, setOpenRouteIndex] = useState([0]);

    useEffect(() => {
        const generatedItems = generateSideMenuItems(apiRoutes);
        setMenuItems(generatedItems);
    }, [apiRoutes])
    
    const addSelectedClass = (index, commonClass) => {
        const selectedClass = openRouteIndex.includes(index) ? 'selected' : '';
        return `${selectedClass} ${commonClass}`.trim();
    }

    const handleSelectRoute = (selectedIndex) => {
        setOpenRouteIndex(prevState => prevState.includes(selectedIndex) 
            ? prevState.filter(index => index !== selectedIndex) 
            : [...prevState, selectedIndex]
        );
    }

    
    // const [currentIndexRoute, setCurrentIndexRoute] = useState(0);
    // const handleSelectRoute = (newIndex) => setCurrentIndexRoute(newIndex);

    // const addSelectedClass = (index, commonClass) => {
    //     const selectedClass = index === currentIndexRoute ? 'selected' : '';
    //     return `${selectedClass} ${commonClass}`.trim();
    // }

    return (
        <div className="sidemenu">
            <div 
                onClick={() => navigate('/swagger')}
                className="sidemenu-header"
            >
                {/* <span>
                    <SiJavascript/>
                </span> */}
                <span className='sidemenu-header-logo'>
                    <img 
                        src={brageLogo} 
                        alt="Brage logo" 
                    />
                </span>
                <p>Brage Tools</p>
            </div>
            <div className="sidemenu-items">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <div
                            onClick={() => handleSelectRoute(index)}
                            className={addSelectedClass(index, 'sidemenu-items-head')}
                        >
                            <p>
                                {
                                    item.mainRoute === 'ping' 
                                        ? 'Healthcare ' 
                                        : item.mainRoute.charAt(0).toUpperCase() + item.mainRoute.slice(1) + ' '
                                } 
                                Route
                            </p>
                            <span>
                                <RiArrowDownSLine/>
                            </span>
                        </div>
                        <div className={addSelectedClass(index, 'sidemenu-items-body')}>
                            {item.subRoutes.map(subRoute => (
                                <div 
                                    key={`/${item.mainRoute}${subRoute.name}`}
                                    onClick={() => navigate(`/swagger/${item.mainRoute}${subRoute.name}`)}
                                    className="sidemenu-items-body-subroute"
                                >
                                    <p className={`type-${subRoute.type}`}>{subRoute.type}</p>
                                    <p>{subRoute.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div 
                    onClick={() => navigate('/')}
                    className="sidemenu-items-footer"
                >
                    <p>Back to Home</p>
                </div>
            </div>
        </div>
    )
}

SideMenu.propTypes = {
    apiRoutes : PropTypes.array.isRequired
}
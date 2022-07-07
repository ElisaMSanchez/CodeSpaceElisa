import './admin-menu.css'
import {Link} from 'react-router-dom';
import {useState} from "react";
import {FaSignOutAlt, FaUserCircle} from "react-icons/fa";

function AdminMenu({tabConfigs, onLogout}) {
    const [tabSelected, setTabSelected] = useState(tabConfigs[0].path);

    function handleOnClick(tabKey) {
        setTabSelected(tabKey);
    }

    function handleLogoutOnClick() {
        onLogout();
    }

    console.log(tabSelected);
    return (
        <div className="admin-menu">
            <div className='admin-menu-tabs'>
                {
                    tabConfigs.map(tabConfig => {
                        const tabSelectedClass = tabSelected === tabConfig.path ? 'selected' : "";
                        return (
                            <Link to={tabConfig.path} key={tabConfig.path}
                                  className={`admin-menu-tab-link admin-menu-tab  ${tabSelectedClass}`} onClick={e => {
                                handleOnClick(tabConfig.path)
                            }}>
                                {tabConfig.label}
                            </Link>
                        )
                    })
                }
            </div>
            <div className="admin-menu-logout" onClick={handleLogoutOnClick}><FaSignOutAlt className="admin-menu-logout-icon"/></div>
        </div>

    );
}

export default AdminMenu;
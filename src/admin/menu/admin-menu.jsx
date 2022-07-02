import './admin-menu.css'
import {Link} from 'react-router-dom';
import {useState} from "react";

function AdminMenu({tabConfigs}) {
    const [tabSelected, setTabSelected] = useState(tabConfigs[0].path);

    function handleOnClick(tabKey) {
        setTabSelected(tabKey);

    }

    console.log(tabSelected);
    return (

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
    );
}

export default AdminMenu;
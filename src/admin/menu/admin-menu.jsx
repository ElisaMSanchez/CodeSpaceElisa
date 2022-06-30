import './admin-menu.css'
import {Link} from 'react-router-dom';
import {useState} from "react";

function AdminMenu({tabConfigs}) {
const [tabSelected,setTabSelected]=useState();

    function handleOnClick(tabKey){
        setTabSelected(tabKey);

    }
console.log(tabSelected);
    return (

        <div className='admin-menu-tabs'>
            {
                tabConfigs.map(tabConfig => {
                    const tabSeletedClass= tabSelected ===tabConfig.path ? 'tabSelected':"";
                    return (
                        <div key={tabConfig.path} className={`admin-menu-tab ${tabSeletedClass}`}  onClick={e=>{handleOnClick(tabConfig.path)}}>
                            <Link to={tabConfig.path} className= 'admin-menu-tab-link'>{tabConfig.label}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default AdminMenu;
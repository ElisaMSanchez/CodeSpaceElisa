import './admin-menu.css'
import {Link} from 'react-router-dom';

function AdminMenu({tabConfigs}) {
    return (
        <div className='admin-menu-tabs'>
            {
                tabConfigs.map(tabConfig => {
                    return (
                        <div key={tabConfig.path} className='admin-menu-tab'>
                            <Link to={tabConfig.path}>{tabConfig.label}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default AdminMenu;
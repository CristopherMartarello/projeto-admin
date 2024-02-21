import MenuItem from "./MenuItem";
import { HomeIcon, BellIcon, SettingsIcon, LogoutIcon } from "../icons";
import Logo from "./Logo";

export default function SideBar() {
    return (
        <aside className={'flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900'}>
            <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}>
                <Logo></Logo>
            </div>

            <ul className={`flex-grow`}>
                <MenuItem url='/' text='Home' icon={HomeIcon}/>
                <MenuItem url='/settings' text='Settings' icon={SettingsIcon}/>
                <MenuItem url='/notifications' text='Notifications' icon={BellIcon}/>
            </ul>
            <ul>
                <MenuItem onClick={() => console.log('logout')} className={`text-red-600 dark:text-red-400 hover:bg-red-500 dark:hover:text-white hover:text-white`} text='Exit' icon={LogoutIcon} />
            </ul>
        </aside>
    )
}
import { useAuth } from "../../hooks/Authentication";
import DownIcon from "../../assets/icons/down.svg?react";
import ProfileIcon from "../../assets/icons/profile.svg?react";
import SettingsIcon from "../../assets/icons/settings.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";

const Header = () => {
  const { sessionStorage } = useAuth();
  const JSON_display_name = JSON.parse(sessionStorage.getItem('display_name'));
  const display_name = JSON_display_name.key;

  return (
    <div className="flex justify-between flex-row p-4 bg-bluegray-800">
      <h1 className="text-3xl font-bold font-sans">RevTS</h1>
      <div className="flex flex-row space-x-6">
        <div className="flex flex-col">
          <p className="text-xs font-light font-sans">Hello!</p>
          <p className="text-sm font-medium font-sans m-0">{display_name}</p>
        </div>
        <DownIcon className="size-5 self-center inline-block relative"/>
        <div id="dropdownMenu" className="origin-top-right absolute right-0 mt-14 mr-10 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 space-y-0.5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="flex flex-row items-center px-4 py-2 space-x-2 hover:bg-gray-100">
              <ProfileIcon className="size-5 text-gray-700" />
              <a href="#" className=" text-sm text-gray-700" role="menuitem">Profile</a>
            </div>
            <div className="flex flex-row items-center px-4 py-2 space-x-2 hover:bg-gray-100">
              <SettingsIcon className="size-5 text-gray-700" />
              <a href="#" className=" text-sm text-gray-700" role="menuitem">Settings</a>
            </div>
            <hr className="border-t-2 border-gray-300 mx-3"/>
            <div className="flex flex-row items-center px-4 py-2 space-x-2 hover:bg-gray-100">
              <LogoutIcon className="size-5 text-gray-700" />
              <a href="#" className=" text-sm text-gray-700" role="menuitem">Sign Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header; 
import { useAuth } from "../../hooks/Authentication";
import DownIcon from "../../assets/icons/down.svg?react";
import ProfileIcon from "../../assets/icons/profile.svg?react";
import SettingsIcon from "../../assets/icons/settings.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";
import { useEffect } from "react";

const Header = () => {
  const { sessionStorage } = useAuth();
  const JSON_display_name = JSON.parse(sessionStorage.getItem('display_name'));
  const display_name = JSON_display_name.key;

  useEffect(() => {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    function handleDropdownToggle(){
      if (dropdownMenu.classList.contains('invisible')) {
        dropdownMenu.classList.remove('invisible');
        return;
      }
      dropdownMenu.classList.add('invisible');
    }

    function handleClickOutside(event){
      if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('invisible');
      }
    }
    dropdownBtn.addEventListener("click", handleDropdownToggle)
    window.addEventListener('click', handleClickOutside);

    // Cleanup function
    return () => {
      dropdownBtn.removeEventListener("click", handleDropdownToggle);
      window.removeEventListener('click', handleClickOutside);
    };
  },[])

  return (
    <div className="flex justify-between flex-row p-4 bg-bluegray-800">
      <h1 className="text-3xl font-bold font-sans">RevTS</h1>
      <div className="flex flex-row space-x-6">
        <div className="flex flex-col">
          <p className="text-xs font-light font-sans">Hello!</p>
          <p className="text-sm font-medium font-sans m-0">{display_name}</p>
        </div>
        <DownIcon className="size-5 self-center inline-block relative hover:bg-bluegray-100 hover:text-bluegray-800 cursor-pointer rounded-sm" id="dropdownBtn"/>
        <div id="dropdownMenu" className="origin-top-right absolute right-3 mt-14 mr-10 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 invisible">
          <div className="py-1 space-y-0.5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="flex flex-row items-center px-4 py-2 space-x-2 hover:bg-bluegray-800 cursor-pointer group">
              <ProfileIcon className="size-5 text-gray-700 group-hover:text-lightblue-50" />
            <a href="#" className="text-sm text-gray-700 group-hover:text-lightblue-50" role="menuitem">Profile</a>
            </div>
            <div className="flex flex-row items-center px-4 py-2 space-x-2 hover:bg-bluegray-800 cursor-pointer group">
              <SettingsIcon className="size-5 text-gray-700 group-hover:text-lightblue-50" />
              <a href="#" className="text-sm text-gray-700 group-hover:text-lightblue-50" role="menuitem">Settings</a>
            </div>
            <hr className="border-t-2 border-gray-300 mx-3"/>
            <div className="flex flex-row items-center px-4 py-2 space-x-2 hover:bg-bluegray-800 cursor-pointer group">
              <LogoutIcon className="size-5 text-gray-700 group-hover:text-lightblue-50" />
              <a href="#" className="text-sm text-gray-700 group-hover:text-lightblue-50" role="menuitem">Sign Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header; 
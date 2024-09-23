import { useAuth } from "../../hooks/Authentication";

const Header = () => {
  const { sessionStorage } = useAuth();
  const JSON_display_name = JSON.parse(sessionStorage.getItem('display_name'));
  const display_name = JSON_display_name.key;

  return (
    <div className="flex justify-between flex-row p-4 bg-bluegray-800">
      <h1 className="text-3xl font-bold font-sans">RevTS</h1>
      {/* to be handle */}
      <p className="text-sm place-self-center font-sans">Hi! {display_name}</p>
    </div>
  )
}

export default Header; 
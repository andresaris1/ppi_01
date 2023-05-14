import { useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { AppContext } from "../../context/AppContext";

// Component to display the user's profile information.
function Profile() {
  //  Get the user and setUser from the AppContext.
  const { user, setUser } = useContext(AppContext);

  //  Initialize the api hook.
  const api = useAxios();

  //  Get the user's profile information.
  useEffect(() => {
    // Make API call to get the user's profile information.
    const getProfileInfo = async () => {
      const response = await api.get(
        "https://bicimaps.herokuapp.com/api/user-detail/"
      );
      if (response.status === 200) {
        setUser(response.data);
      }
    };

    // Call the function to get the user's profile information.
    getProfileInfo();
  }, []);

  //  Return the code to display the user's profile information.
  return (
    <div className="profile_page">
      <p className="profile_item">{user.email}</p>
      <p className="profile_item">{user.first_name}</p>
      <p className="profile_item">{user.last_name}</p>
      <p className="profile_item">{user.has_bike}</p>
      <p className="profile_item">{user.is_staff}</p>
      <p className="profile_item">{user.is_active}</p>
    </div>
  );
}

export { Profile };

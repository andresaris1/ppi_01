import { useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { AppContext } from "../../context/AppContext";

function Profile() {
  // Consuming context
  const { user, setUser } = useContext(AppContext);
  const api = useAxios();

  useEffect(() => {
    // Function to fetch profile information
    const getProfileInfo = async () => {
      const response = await api.get(
        "https://bicimaps.herokuapp.com/api/user-detail/"
      );
      if (response.status === 200) {
        setUser(response.data);
      }
    };

    // Fetch profile information on component mount
    getProfileInfo();
  }, []);

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

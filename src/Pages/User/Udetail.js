import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../Components/Context";
import { getUserDetails } from "../../Services/user.service";

const Udetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const { setAppTitle } = useAppContext();
  useEffect(() => {
    setAppTitle("User Details");
    getUserDetails(id).then((res) => {
      setUser(res);
    });
  }, [id, setAppTitle]);

  return (
    <div>
      {user ? (
        <>
          <h2 style={{fontFamily:"arial"}}>{user.name}</h2>
          <p>Phone No:{user.phone}</p>
          <p style={{fontStyle:"italic"}}>{user.email}</p>
          <p>City:{user.address.city}</p>
          <p>{user.website}</p>
        </>
      ) : null}
    </div>
  );
};

export default Udetail;

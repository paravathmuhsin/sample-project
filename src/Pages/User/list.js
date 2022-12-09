import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Components/Context";
import { getUsers } from "../../Services/user.service";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { setAppTitle } = useAppContext();

  useEffect(() => {
    setAppTitle("User");
    getUsers().then((res) => {
      setUsers(res);
    });
  }, [setAppTitle]);
  return (
    <div>
      <h3>Users</h3>
      {users.map((i) => (
        <Link to={"/user/" + i.id} key={i.id}>
          <h4>{i.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default UserList;

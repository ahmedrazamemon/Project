import React from "react";
import UserData from "./UserData";
function UserList() {
  const UserData1 = [
    {
      id: 1,
      Name: "Ali",
      age: 13,
      Email: "ali@gmail.com",
    },
    {
      id: 2,
      Name: "nizam",
      age: 2,
      Email: "nizam@gmail.com",
    },
    {
      id: 3,
      Name: "Raza",
      age: 28,
      Email: "Raza@gmail.com",
    },
    {
      id: 4,
      Name: "Ahmed",
      age: 20,
      Email: "ahmed@gmail.com",
    },
  ];

  return (
    <>
      {UserData1.map((user) => {
        return <UserData key={user.id} user={user} />;
      })}
    </>
  );
}
export default UserList;

import React from "react";
import UserProfile from "./Components/UserProfile";
import './global.css'
import UserList from "./Components/UserList";
function App() {

  const UserAlert=()=>{

    console.log("Passing Function In Props")
    
  }  
  
  return (
  <>
  
<UserProfile age={"20"} isLoggedIn={true} callMe={UserAlert} username={"Ali"} foods={["Biryani","Handi","Burger"]}/>  
  {/* <h1>Hello-</h1> */}
  <UserList/>
  
  
  </>
  
  )
}
export default App;

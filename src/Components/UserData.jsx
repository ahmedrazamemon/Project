export default function UserData({user}){

    return(
        <>
         <div>
            <h3>{user.Name}</h3>
            <h3>{user.age}</h3>
            <h3>{user.Email}</h3>
         </div>
        
        </>
    )
}
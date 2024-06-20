import { useGetUsers } from "./hooks/useGetUsers"
import UserCard from "../Atoms";
import './index.css'

const Users = ()=>{

    const {users,laoading,error}=useGetUsers();
    console.log('users...',users);
    return(

        <div>

            {laoading &&<h2>Loading Users...</h2>}
            {users.length>0 && !laoading? 
                users.map((user)=>(
                    <UserCard
                    image={user.image}
                    fullName={`${user.firstName} ${user.lastName}`}
                    key={user.id}/>
                ))
            :!laoading && <h2>No users Found</h2>
            }
            {error.length>0 && <h2>Error: {error}</h2>}

        </div>
    );
}

export default Users;
const UserCard = ({image, fullName})=>{
    return (
        <div id="profile">
            <img src={image} alt={`${fullName}profile`}/>
            <h3>{fullName}</h3>
        </div>
    );
};
export default UserCard;
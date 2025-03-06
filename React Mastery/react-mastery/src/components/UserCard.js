function UserCard(props){
    return (
        <div className="user-card">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
    );
}

export default UserCard;
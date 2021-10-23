import React from 'react';

const Users = (props) => {

    return(
        <div className= 'users-wrapper'>
            {props.users.map(user => (
                 <div className= 'user-wrapper' key = {user.login.uuid}>
                   <h2> {user.name.first} </h2>
                   <img src= {user.picture.medium} alt= {`This is a picture of ${user.name}`} />
                   <p>Contact: {user.email}</p>
                   <p>Location: {user.location.state}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;
import React from 'react';

const Users = (props) => {

    return(
        <div>
            {props.users.map(user => {
               return (
                 <div key = {user.uuid}>
                   <h2> {user.name} </h2>
                   <img src= {user.picture} alt= {`This is a picture of ${user.name}`} />
                   <p>Contact: {user.contact}</p>
                   <p>Location: {user.location}</p>
                </div>
               )
            })}
        </div>
    )
}

export default Users;
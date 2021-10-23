import React from 'react';
import { useParams } from 'react-router-dom';


const User = (props) => {

    const { id } = useParams()
    const foundUser = props.users.find(user => {
        return user.login.uuid === id;
    })
    return (
        <div className= 'user-wrapper'>
            <h2>{foundUser.name.first}</h2>
            <p>{foundUser.email}</p>
            <img src = {foundUser.picture.medium}/>
        </div>
    )
}

export default User;
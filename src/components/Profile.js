import React from 'react';
import User from './User'
import Palette from './Palette';
const Profile =()=>{
    return(
        <div className="container profile">
        <User
            src='https://st4.depositphotos.com/11095424/25331/i/450/depositphotos_253317408-stock-photo-spongebob-squarepants-cartoon-blinking-one.jpg'
            alt="from krasti"
            name="Bob"
         
        />
     <Palette />
        </div>
    )
}
export default Profile;
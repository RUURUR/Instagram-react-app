import React from 'react';
import Users from './Users'
import Posts from './Posts';
export default function Feed(){
    return(

        <div className="container feed">
        <Posts />
       <Users />
        </div>
    )
}
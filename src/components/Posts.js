import React, {Component} from 'react';
import Post from './Post'
export default class Posts extends Component{
    render(){
        return(
            <div className="left">
<Post src='https://i.ytimg.com/vi/CN1oD6LryFM/maxresdefault.jpg' alt='Work work evry day' />
<Post src='https://2x2tv.ru/upload/medialibrary/046/046a090c8653afb8dee9d5561422309d.jpg' alt='Lovly day evry day ' />


            </div>
        )
    }
}
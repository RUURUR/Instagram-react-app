import React, {Component} from 'react';
import User from './User'
export default class Post extends Component{
    render(){
        return(
            <div className="post">
<User 
src='https://st4.depositphotos.com/11095424/25331/i/450/depositphotos_253317408-stock-photo-spongebob-squarepants-cartoon-blinking-one.jpg'
 alt="from krasti"
  name="Bob" 
  min 
  />
            <img src={this.props.src} alt={this.props.alt}></img>
            <div className="post__name">
            {this.props.alt}
            </div>
            <div className="post__descr">
            will uncover many web sites still ind their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on injected humour and the like


            </div>
            </div>
        )
    }
}
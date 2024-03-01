import React from "react";

class UserClass extends React.Component{ 
    constructor(){
        super()
        this.state = {
            userInfo :{
                name : "piyush",
                id : "123",
                avatar_url : "https://img/",
            }
            
        }
    }    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/piyush6842");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json,
        })
    }
    render(){
       const {login,id,avatar_url} = this.state.userInfo;
        return(
            <div>                
                <h1>
                  name:  {login}
                  </h1>
                  <h1>
                  location : {id}
                  </h1>
                  <img src={avatar_url}></img>
            </div>
        )
        
    }
 
};
export default UserClass;
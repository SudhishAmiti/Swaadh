import React from "react";
import userContext from "../utils/userContext";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                name: "",
                updated_at: "",
                avatar_url : "",
            },
        };
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/SudhishAmiti");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
    }

    render() {
        const {name,updated_at,avatar_url} = this.state.userInfo;
        return (
            <div className="User-card justify-center">
                <img className="h-50 rounded-lg" src={avatar_url}/>
                <userContext.Consumer>
                    {({loggedInUser}) => <li className="text-xl list-none">{loggedInUser}</li>}
                </userContext.Consumer>
                <div>{name}</div>
                <div>{updated_at}</div>
                
            </div>
        );
    }
}
export default UserClass;
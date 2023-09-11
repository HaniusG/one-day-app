import { Component } from "react";
import "./avatar.css"

class Avatar extends Component {
    render() {
        return (
            <div className="avatar">
                <div className="picture"></div>
                <div className="text">Lets get you set up</div>
                <span className="textSpan">Its should take only take a couple of minutes to pair with your watch</span>
                <button className="forwardButton">></button>
            </div>
        )
    }
}

export default Avatar;
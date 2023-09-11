import { Component } from "react";
import "./login.css";

class Login extends Component {
    render() {
        return (
            <div className="formDiv">
                <form className = "form">
                <div>
                    <span>Name</span>
                    <input type="text" />
                </div>
                <div>
                    <span>Gender  </span>
                    <div>
                    <span>Male</span>
                    
                    <input type="radio" />
                    <span>Female</span>
                    <input type="radio" />
                    </div>
                    
                </div>
                <div>
                    <span>Date of birth</span>
                    <input type="text" />
                </div>
                <div>
                    <span>Email</span>
                    <input type="text" />
                </div>
                <div>

                    <span>Mobile</span>
                    <input type="text" />
                </div>
                <div>
                    <span>Customer ID</span>
                    <input type="text" />
                </div>
            </form>
            <div className="buttons">
            <button className="cansel">Cancel</button>
            <button className="register">Register</button>
            </div>
            
        </div>
        )
    }
}

export default Login;
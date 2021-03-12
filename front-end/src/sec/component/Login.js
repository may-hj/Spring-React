import './Login.css';

const Login = () => 
    (<form method="post">
        <div className="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
        </div>

        <div className="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
                
            <button type="submit">Login</button>
            <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
        </div>

        <div className="container" style={{backgroundColor:"#f1f1f1"}}>
            <button type="button" class="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
    </form>)

export default Login
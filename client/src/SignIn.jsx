import './App.css';
const SignIn = ({email,setEmail,pass,setPass,handleSubmit,onFormSwitch,handleSubmitIn}) => {
    return (
    <div className="auth-form-container">
        <form onSubmit={handleSubmitIn}  className="log">
            <label htmlFor="email">email</label>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input type="password"value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="" id="password" name="email" />
            <button type="submit">
                Sign In
            </button>
        </form> 
        <button onClick={()=>onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div> 
    )
}
export default SignIn;

const SignUp = ({name,setName,email,setEmail,pass,setPass,handleSubmitUp}) =>{
    return (
    <div className="auth-form-container">
    <form onSubmit={handleSubmitUp} className="register-form" >
            <label>full name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="user name" />
            <label htmlFor="email">email</label>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input type="password"value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="" id="password" name="email" />
            <button type="submit">SignUp</button>
    </form> 
    
    </div> 
    )

}
export default SignUp;
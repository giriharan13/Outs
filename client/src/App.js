import { useState } from 'react';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
function App() {
  const [currentForm,setCurrentFrom]=useState('login')
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [name,setName] = useState("");
  const handleSubmitIn = (e) => {
        e.preventDefault();
        console.log(email);
    }
  const handleSubmitUP =(e)=>{
    e.preventDefault(name);
    console.log(name);
  }
  const toggleForm=(formname)=>{
    setCurrentFrom(formname);
  }
  return (
    <div className='auth-form-container'>
      {
      currentForm === 'login' ? <SignIn onFormSwitch={toggleForm} email={email} setEmail={setEmail} pass={pass} setPass={setPass} handleSubmitIn={handleSubmitIn}/> : <SignUp email={email} name={name} setName={setName} onFormSwitch={toggleForm} setEmail={setEmail} pass={pass} setPass={setPass} handleSubmitUp={handleSubmitUP}/>
      }
    </div>
  );
}

export default App;

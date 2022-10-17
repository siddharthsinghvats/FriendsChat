import { useState } from "react"
import axios from "axios";
const LoginForm = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
const handleSubmit= async (e)=>{
    e.preventDefault();
    const authObject = {'Project-ID':"d3f38313-a7fb-4faa-9b60-16225c722b81",'User-Name':username,'User-Secret':password};
    try {
        await axios.get('https://api.chatengine.io/chats',{headers:authObject});
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        window.location.reload();
    } catch (e) {
        setError("User does not exist!");
    }
}

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Friends Together</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required/>
                    <input className="input" type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>
                                Start Chatting!
                            </span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
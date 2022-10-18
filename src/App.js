import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const PID = process.env.REACT_APP_PID;
const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine height="100vh" 
        projectID="d3f38313-a7fb-4faa-9b60-16225c722b81"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed ={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
         />
    )
}

export default App;
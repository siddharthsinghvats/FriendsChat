import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './app.css';
import LoginForm from './components/LoginForm';

const PID = process.env.REACT_APP_PID;
const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine height="100vh" 
        projectID={PID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed ={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
         />
    )
}

export default App;
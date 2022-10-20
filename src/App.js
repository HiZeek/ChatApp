import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import Login from './components/Login';

function App() {
  if (!localStorage.getItem('username')) return <Login />
  return (
    <ChatEngine
      height='100vh'
      projectID= '6fd0d538-00cf-4d1f-a2a3-2f9c49f0da20'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } /> }
    />
  );
}

export default App;

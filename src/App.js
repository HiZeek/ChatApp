import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID= '6fd0d538-00cf-4d1f-a2a3-2f9c49f0da20'
      userName='Zeek'
      userSecret='Zeek-Tech1'
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } /> }
    />
  );
}

export default App;

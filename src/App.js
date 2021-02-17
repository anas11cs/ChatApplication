import { ChatEngine } from 'react-chat-engine';
import './App.css'


const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="a25106ec-fc8a-483c-b191-8aff088b7c81"
      userName="ChatEngine_User"
      userSecret="123456"
    />
  );
}

export default App;
// Template COMMENTED OUT
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

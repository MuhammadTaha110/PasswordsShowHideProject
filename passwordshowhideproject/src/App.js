import logo from './logo.svg';
import './App.css';
import { PasswordBox } from './PasswordBox';
import { Header } from './Header';
import { Modal } from './Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <PasswordBox/>
        <Modal/>
      </header>
    </div>
  );
}

export default App;

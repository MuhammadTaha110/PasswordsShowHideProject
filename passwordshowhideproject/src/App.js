import logo from './logo.svg';
import './App.css';
import { PasswordBox } from './PasswordBox';
import { Header } from './Header';
import { Modal } from './Modal';
import { FAQ } from './FAQ';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <PasswordBox/>
        <Modal/>
        <FAQ />
      </header>
    </div>
  );
}

export default App;

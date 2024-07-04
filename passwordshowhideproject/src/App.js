import logo from './logo.svg';
import './App.css';
import { PasswordBox } from './PasswordBox';
import { Header } from './Header';
import { Modal } from './Modal';
import { FAQ } from './FAQ';
import { Todo } from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <PasswordBox/>
        <Modal/>
        <FAQ />
        <Todo />
      </header>
    </div>
  );
}

export default App;

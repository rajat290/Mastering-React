import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
// import UserCard from './UserCard.css';

function App() {
  return (
   <div className='App'>
    <UserCard name = "Rajat Singh" age = {30} location = "New Delhi" />

   </div>
  );
}

export default App;

import './App.css';
import UserInfoValidationForm from './Components/UserinfoDefaultValue';
function App() {
  const _userData = {
    name:'Rohit Azad Malik',
    email:'rohitazadwebdesigner@gmail.com',
    phone:9953878727
  }
  return (
    <>
      <h1>Rohit Azad Malik (React js Form Validation with React Hook Form)</h1>
      <UserInfoValidationForm data={_userData} />
    </>
  );
}

export default App;

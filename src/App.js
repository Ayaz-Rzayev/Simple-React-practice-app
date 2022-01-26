import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])

  const saveNewUserHandler = (enteredUser) => {
    setUsersList(prevList => {
      return [...prevList, enteredUser]
    })
  }
  return (
    <div>
      <AddUser onSubmitUser={saveNewUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;

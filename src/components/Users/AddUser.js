import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredInput, setEnteredInput] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState('')

  const addUserHandler = event => {
    event.preventDefault()
    if (enteredInput.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        errTitle: 'Error',
        mesage: 'Please enter a valid name'
      })
      return
    } else if (+enteredAge < 1) {
      setError({
        errTitle: 'Error',
        mesage: 'Please enter a valid age'
      })
      return
    }
    props.onSubmitUser({ id: Math.random(), name: enteredInput, age: enteredAge })
    setEnteredInput('')
    setEnteredAge('')
  }

  const userNameChangeHandler = event => {
    setEnteredInput(event.target.value)
  }
  const userAgeChangeHandler = event => {
    setEnteredAge(event.target.value)
  }

  const closeModalHandler = () =>{
    setError('')
  }

  return (
    <div>
      {error && <ErrorModal errTitle={error.errTitle} message={error.mesage} onClose={closeModalHandler}></ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>

          <label htmlFor='username'>Username</label>
          <input id='username' value={enteredInput} type='text' onChange={userNameChangeHandler} />

          <label htmlFor='age'>Age (years)</label>
          <input id='age' value={enteredAge} type='number' min='0' onChange={userAgeChangeHandler} />
          <Button
            type='submit'
            onClick={addUserHandler}
          >
            Add User
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
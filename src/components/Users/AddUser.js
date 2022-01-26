import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = props => {
  const [enteredInput, setEnteredInput] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = event => {
    event.preventDefault()
    if (enteredInput.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    } else if (+enteredAge < 1) {
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

  return (
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
  )
}

export default AddUser
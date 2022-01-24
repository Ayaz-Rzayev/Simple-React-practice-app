import React from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>

        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />

        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' min='0' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  )
}

export default AddUser
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import styles from './ErrorModal.module.css'
import Card from './Card'
import Button from './Button'


const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.errTitle}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.querySelector('#backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay errTitle={props.errTitle} message={props.message} onClose={props.onClose}/>, document.querySelector('#overlay-root'))}
    </Fragment>
  )
}

export default ErrorModal
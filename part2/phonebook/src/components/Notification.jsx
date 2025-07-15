import React from 'react'

const Notification = ({ message, messageType }) => {
    if (message === null) {
        return null
    }
    const type = messageType === 'error' ? 'error' : 'success'
    return (
    <div className={type}>
        {message}
    </div>
  )
}

export default Notification
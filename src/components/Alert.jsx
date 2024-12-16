import React from 'react'

export default function Alert({alert}) {
  return (
    <div style={{height: 50}}>
      {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        {alert.msg}
    </div>}
    </div>
  )
}

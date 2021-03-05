import React, { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap';
const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )


  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <div className="container-fluid">
    <Form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
    <Form.Group controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" 
                    name="username"
                    placeholder="Username"  
                    value={user.username} 
                    onChange={handleInputChange}/>
                    
                </Form.Group>
        
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                     name="email" 
                    placeholder="Enter email"  
                    value={user.email} 
                    onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                  
                    </Form.Text>
                </Form.Group>
        
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                     name="password"
                    placeholder="Password" 
                    value={user.password} 
                    onChange={handleInputChange} />
                </Form.Group>
                
                <Form.Group controlId="formBasicMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number"
                    name = "mobilenumber"
                     placeholder="Mobile number"
                     value={user.mobilenumber} 
                     onChange={handleInputChange} />
                </Form.Group>
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </Form>
    </div>
  )
}

export default EditUserForm

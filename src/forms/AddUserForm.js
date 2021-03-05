import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap';
const AddUserForm = props => {
	const initialFormState = { id: null, username: '', email: '', password:'', mobilenumber:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!user.username || !user.email || !user.password|| !user.mobilenumber ) return

				props.addUser(user)
				setUser(initialFormState)
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
			<button>Add new user</button>
		</Form>
	)
}

export default AddUserForm

import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import {Button}  from 'react-bootstrap';

const App = () => {

	const usersData = [];

	const initialFormState = { id: null,username: '', email: '', password:'', mobilenumber:'' }

	
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const [dataclick,setdataclick]=useState(false);
	const [listclick,setlistclick]=useState(false);

	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
    setCurrentUser({ id: user.id, username: user.username,email:user.email,password: user.password,mobilenumber:user.mobilenumber })
	}

	return (<>
		<div className="container">
			<h1 className="text-center">Welcome page</h1>
		<Button onClick={() => setdataclick(!dataclick)}  variant="primary" size="lg">Add User</Button>{' '}
		{editing ? (
		
			<Fragment>
				<EditUserForm
					editing={editing}
					setEditing={setEditing}
					currentUser={currentUser}
					updateUser={updateUser}/></Fragment>
		) : (
			<Fragment>
				<Button onClick={() => setlistclick(!listclick)}  variant="primary"  size="lg">View User</Button>{' '}
				{ dataclick && ( <div><AddUserForm addUser={addUser}/> </div>)}
			</Fragment>
					)}
				</div>
				<div className="flex-large">
				
					{listclick && ( <div><UserTable users={users} editRow={editRow} deleteUser={deleteUser} /> </div>  )} 
				</div>
				</>
		
	)
}

export default App
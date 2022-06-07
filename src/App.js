import React, {useState, Fragment} from 'react';
import User from './table/user';
import EditUser from './view/editUser';
import AddUser from './view/addUser';

function App() {

  // Data
	const Data = [
		{ id: 1, name: 'Velimir', email: 'Konam513@outlook.com' },
		{ id: 2, name: 'Jack', email: 'silicon43@outlook.com' },
		{ id: 3, name: 'Ben', email: 'benis08@outlook.com' },
	]

	const initialFormState = { id: null, name: '', email: '' }

	// Setting state
	const [ users, setUsers ] = useState(Data)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  // CRUD operations
  const addUser = (user) => {
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

		setCurrentUser({ id: user.id, name: user.name, email: user.email })
	}
  return (
    <div className="container">
      <div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2 className='text-center'>Edit Student</h2>
							<EditUser
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2 className='text-center'>Add Student</h2>
							<AddUser addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2 className='text-center'>View Student</h2>
					<User users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
    </div>
  );
}

export default App;

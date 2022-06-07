import React, {useState} from "react";

export default function AddUser(props){

    const initialFormState = { id: null, name: '', email: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.email) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input className="form-control" type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Email</label>
			<input className="form-control" type="text" name="email" value={user.email} onChange={handleInputChange} />
			<button className="btn btn-outline-primary">Add</button>
		</form>
	)
}
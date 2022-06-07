import React from "react";

export default function User(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        props.editRow(user)
                                    }}
                                    className="btn btn-outline-primary"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => props.deleteUser(user.id)}
                                    className="btn btn-outline-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No students</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
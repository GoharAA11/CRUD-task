
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { IUser } from "./types"
import axios from "axios"

export const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        axios.get("/users")
            .then(res => {
                setUsers(res.data)
            })
            .catch(error => {
                console.error("Error fetching users:", error)
            })
    }, [])


    return (
        <>
            <h3 className="is-size-3">UserList</h3>
            <Link href="/users/add">Add User</Link>
            {users.map(user => (
                <div key={user.id} style={{ marginTop: 30, background: 'lightgray' }}>
                    <p>{user.name} {user.surname}</p>
                    <strong>{user.salary} AMD</strong>
                    <br />
                    <Link href={`/users/${user.id}/details`}>Account</Link>
                    <br />
                    <Link href={`/users/ ${user.id}/delete`}> Delete</Link>
                </div>
            ))}
        </>
    )
}


"use client"
import { InputUser } from "@/lib/types"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

export interface Props {
    params: { key: number }
}
export default function Page({ params }: Props) {

    const router = useRouter()
    const [user, setUser] = useState<InputUser>({ name: "", surname: "", salary: 0 })
    const [error, setError] = useState("")

    const handleUpdate = (event: React.FormEvent) => {
        event.preventDefault()
        if (!user.name.trim() || !user.surname.trim() || !user.salary) {
            setError("Please fill all the fields")
        } else {
            setError("")
            axios
                .put("/users/" + params.key, user)
                .then(res => {
                    router.push("/")
                })
        }
    }
    return (
        <main className="p-4 px-6 mx-6">
            <h1 className="is-size-3">Update User No_ {params.key}</h1>
            <div className="columns">
                <div className="column is-two-fifths p-4">
                    <form className="box" onSubmit={handleUpdate}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="field my-4">
                            <input
                                type="text"
                                className="input is-dark"
                                placeholder="please enter your name"
                                name="name"
                                value={user.name}
                                onChange={e => setUser({ ...user, name: e.target.value })}
                            />
                        </div>
                        <div className="field my-4">
                            <input
                                type="text"
                                className="input is-dark"
                                placeholder="please enter your surname"
                                name="surname"
                                value={user.surname}
                                onChange={e => setUser({ ...user, surname: e.target.value })}
                            />
                        </div>
                        <div className="field my-4">
                            <input
                                type="number"
                                className="input is-dark"
                                placeholder="please enter your salary"
                                name="salary"
                                value={user.salary}
                                onChange={e => setUser({ ...user, salary: + e.target.value })}
                            />
                        </div>
                        <button className="button is-dark" type="submit">Update</button>
                    </form>
                </div>
            </div>
        </main>
    )
}


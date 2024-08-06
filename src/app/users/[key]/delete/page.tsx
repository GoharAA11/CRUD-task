
"use client"

import axios from "axios";
import { useRouter } from "next/navigation";

interface IProps {
    params: { key: number }
}

export default function Page({ params }: IProps) {
    const router = useRouter();

    const handleDelete = async () => {

        await axios.delete("/users/" + params.key).then((res) => {
            router.push("/")
        })
    }

    return (
        <>
            <p className="is-size-2">Are you sure you want to delete the {params.key}th user?</p>

            <button className="button is-dark" onClick={handleDelete}>Delete</button>
        </>
    );
}

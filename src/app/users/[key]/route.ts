
import { updateUser } from "@/lib/api"
import { deleteUser } from "@/lib/api"
interface Props {
    params: { key: number }
}

export const PUT = async (req: Request, { params }: Props) => {
    const user = await req.json()
    const result = updateUser(params.key, user)
    return Response.json(result)

}

export const DELETE = async (req: Request, { params }: Props) => {
    const result = deleteUser(params.key)
    return Response.json(result)


}
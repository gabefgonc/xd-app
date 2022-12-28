import { redirect } from "@sveltejs/kit";
import type { ActionData } from "../../types/action";

export const POST = ({ locals }: ActionData) => {
    locals.pb.authStore.clear()
    locals.user = undefined

    throw redirect(303, '/login')
}
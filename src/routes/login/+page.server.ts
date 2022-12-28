import { redirect } from "@sveltejs/kit";
import type { ActionData } from "../../types/action";

export const actions = {
    login: async ({ request, locals }: ActionData) => {
        const formData = await request.formData()
        let data = {
            email: '',
            password: ''
        }
        formData.forEach((value, key) => data[key] = value)

        try {
            await locals.pb.collection('users').authWithPassword(data.email, data.password)
        } catch(err) {
            console.log('Error: ', err)
            return {
                error: true, 
                email: data.email
            }
        }
        throw redirect(303, '/')
    }
}
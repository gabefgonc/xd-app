import { redirect } from "@sveltejs/kit";
import type { ActionData } from "../../types/action";

export const actions = {
    register: async ({ locals, request }: ActionData) => {
        const formData = await request.formData()
        let data = {
            email: '',
            password: ''
        }
        formData.forEach((value, key) => data[key] = value)
        try {
            const newUser = await locals.pb.collection('users').create(data)

            const authData = await locals.pb.collection('users').authWithPassword(data.email, data.password)
            
            console.log(locals.pb.authStore)
        }catch(err){
            console.log('err: ', err)
            return {
                error: true,
                message: err
            }
        }

        throw redirect(303, '/login')
    }
}
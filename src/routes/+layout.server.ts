import { serializeNonPOJO } from "../lib/helpers";
import type { ActionData } from "../types/action";

export const load = ({locals}: ActionData) => {
    if(locals.user && locals.user.name) {
        return {
            user: serializeNonPOJO(locals.user)
        }
    }else {
        return {
            user: null
        }
    }
}
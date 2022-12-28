import type { EventLocals } from "./locals"

export type ActionData = {
    locals: EventLocals,
    request: {
        formData: () => Promise<FormData>
    }
}
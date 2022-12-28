import type { Collection } from "pocketbase"
import type pocketbaseEs from "pocketbase"

export type EventLocals = {
    pb: pocketbaseEs,
    user: any
}
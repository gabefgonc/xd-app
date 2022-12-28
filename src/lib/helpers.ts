export const serializeNonPOJO = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}
import jwtDecode from 'jwt-decode'

interface IJWT{
    basketId: number
    email: string
}

export const appJwtDecode = (token: string | null):IJWT => {
    return jwtDecode(String(token))
}
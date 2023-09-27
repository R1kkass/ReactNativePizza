import jwtDecode from 'jwt-decode'

interface IJWT{
    basketId: number
}

export const appJwtDecode = (token: string | null):IJWT => {
    return jwtDecode(String(token))
}
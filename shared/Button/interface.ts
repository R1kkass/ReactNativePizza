export interface IButton{
    children: React.ReactNode
    color?: boolean
    large?: boolean
    onPress?: (...args:any)=>any
}
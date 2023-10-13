import * as React from 'react'

export interface IButton extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>{
    children: React.ReactNode
    color?: boolean
    large?: boolean
    onPress?: (...args:any)=>any;

}
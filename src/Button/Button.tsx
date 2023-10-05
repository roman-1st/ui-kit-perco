import React, {FC} from 'react';
import "./Button.scss"
import "../scss/components/button.scss"


export interface ButtonProps {
    className: string,
    children: React.ReactNode,
}
export const Button: FC<ButtonProps> = ({children,className , ...props}) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};
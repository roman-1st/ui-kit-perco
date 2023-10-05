import React, {FC} from 'react';
import "../scss/components/input.scss"
// import "../UniversalStyle/sizes.css"

export interface InputProps {
    children?: React.ReactNode,
    labelClassName?: string,
    inputClassName?: string,
    removeButtonClassName: string,
    placeholder?: string
}

export const Input: FC<InputProps> = ({children,
                                          inputClassName,
                                          labelClassName,
                                          removeButtonClassName,
                                          placeholder}) => {
    return (
        <label className={labelClassName}>
            <input className={inputClassName} placeholder={placeholder}/>
            {removeButtonClassName && (<span className={removeButtonClassName}>&times;</span>) }
        </label>
    );
};
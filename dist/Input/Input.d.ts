import React, { FC } from 'react';
import "../scss/components/input.scss";
export interface InputProps {
    children?: React.ReactNode;
    labelClassName?: string;
    inputClassName?: string;
    removeButtonClassName: string;
    placeholder?: string;
}
export declare const Input: FC<InputProps>;

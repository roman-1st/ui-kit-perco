import React, { FC } from 'react';
import "./Button.scss";
import "../scss/components/button.scss";
export interface ButtonProps {
    className: string;
    children: React.ReactNode;
}
export declare const Button: FC<ButtonProps>;

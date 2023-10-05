import React, { FC } from 'react';
import './PrimaryBtn.module.scss';
export interface PrimaryBtnProps {
    children: React.ReactNode;
    size?: string;
}
export declare const PrimaryBtn: FC<PrimaryBtnProps>;

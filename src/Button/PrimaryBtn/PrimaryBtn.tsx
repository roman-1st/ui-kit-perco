import React, {FC, memo} from 'react';
import './PrimaryBtn.module.scss';

export interface PrimaryBtnProps {
    children: React.ReactNode
    size?: string,
}

export const PrimaryBtn: FC<PrimaryBtnProps> = memo(({children, ...props}) => {

    return (
        <button {...props}>
            {children}
        </button>
    );
});
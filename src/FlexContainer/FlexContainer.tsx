import React, {FC} from 'react';
import "../scss/components/container.scss"

export interface FlexContainerProps {
    children: React.ReactNode,
    className: string
}
export const FlexContainer: FC<FlexContainerProps> = ({children, className, ...props}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
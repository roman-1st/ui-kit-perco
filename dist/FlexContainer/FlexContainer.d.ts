import React, { FC } from 'react';
import "../scss/components/container.scss";
export interface FlexContainerProps {
    children: React.ReactNode;
    className: string;
}
export declare const FlexContainer: FC<FlexContainerProps>;

import React from "react";

import { ComponentStory, ComponentMeta} from "@storybook/react";

import {Button} from "../Button/Button";

export default {
    title: "Example/Button",
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})

PrimaryButton.args = {
    children: "primary button",
    className: "btn-primary"
}


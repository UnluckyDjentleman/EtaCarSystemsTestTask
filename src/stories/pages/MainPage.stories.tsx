import { Meta, StoryObj } from "@storybook/react";
import MainPage from "../../pages/mainPage";
import axios from 'axios'

const meta: Meta<typeof MainPage> = {
    title: 'pages/mainPage',
    component: MainPage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        axios: {
            handlers: [
                axios.get('https://api.coincap.io/v2/assets?limit=20&offset=0').then(response=>response.data),
            ],
        },
    },
};
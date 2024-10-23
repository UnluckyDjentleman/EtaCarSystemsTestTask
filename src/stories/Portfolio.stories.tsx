import { Meta, StoryObj } from "@storybook/react";
import Portfolio from "../components/header/portfolio/portfolio";


const meta: Meta<typeof Portfolio> = {
    title: 'Components/header/portfolio/portfolio',
    component: Portfolio,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    
    render: () => (
        <div style={{ margin: 'auto' }}>
            <Portfolio />
        </div>
    ),
};
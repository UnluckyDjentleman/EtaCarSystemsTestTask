import { Meta, StoryObj } from "@storybook/react";
import Loader from "../components/loader/loader";


const meta: Meta<typeof Loader> = {
    title: 'Components/loader/loader',
    component: Loader,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    
    render: () => (
        <div style={{ margin: 'auto' }}>
            <Loader />
        </div>
    ),
};
import { Meta, StoryObj } from "@storybook/react";
import Table from "../components/table/table"
import { coins } from "./shared/coins";
import Assets from "../constants/types/assets";

const mock=coins.data

const meta: Meta<typeof Table> = {
    title: 'Components/table/table',
    component: Table,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: mock as Assets[]
    },
    render: (args) => (
        <div style={{ margin: 'auto' }}>
            <Table {...args} />
        </div>
    ),
};
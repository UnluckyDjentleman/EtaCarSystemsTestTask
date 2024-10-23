import { Meta, StoryObj } from "@storybook/react";
import PopularCoinItem from "../components/header/popularCoins/popularCoinItem";
import { coin } from "./shared/coin";
import Assets from "../constants/types/assets";


const meta: Meta<typeof PopularCoinItem> = {
    title: 'Components/header/popularCoins/popularCoinItem',
    component: PopularCoinItem,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        item: coin as Assets
    },
    render: (args) => (
        <div style={{ margin: 'auto' }}>
            <PopularCoinItem {...args} />
        </div>
    ),
};
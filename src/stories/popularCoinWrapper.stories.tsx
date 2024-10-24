import { Meta, StoryObj } from "@storybook/react";
import PopularCoinWrapper from "../components/header/popularCoins/popularCoinsWrapper";
import { coins } from "./shared/coins";
import Assets from "../constants/types/assets";

const meta: Meta<typeof PopularCoinWrapper> = {
  title: "Components/header/popularCoins/popularCoinWrapper",
  component: PopularCoinWrapper,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: coins.data as Assets[],
  },
  render: (args) => (
    <div style={{ margin: "auto" }}>
      <PopularCoinWrapper {...args} />
    </div>
  ),
};

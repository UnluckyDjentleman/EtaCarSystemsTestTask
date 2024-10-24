import { Meta, StoryObj } from "@storybook/react";
import CoinDescription from "../components/info/coinInfo";
import { coin } from "./shared/coin";

const mock = coin;

const meta: Meta<typeof CoinDescription> = {
  title: "Components/Info/CoinInfo",
  component: CoinDescription,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: mock,
  },
  render: (args) => (
    <div style={{ margin: "auto" }}>
      <CoinDescription {...args} />
    </div>
  ),
};

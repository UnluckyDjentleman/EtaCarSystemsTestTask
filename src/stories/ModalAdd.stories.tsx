import { Meta, StoryObj } from "@storybook/react";
import ModalAdd from "../components/modals/modalAdd";
import { coin } from "./shared/coin";

const mock = coin;

const meta: Meta<typeof ModalAdd> = {
  title: "Components/table/ModalAdd",
  component: ModalAdd,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    coin: mock,
  },
  render: (args) => (
    <div style={{ margin: "auto" }}>
      <ModalAdd {...args} />
    </div>
  ),
};

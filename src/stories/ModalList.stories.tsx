import { Meta, StoryObj } from "@storybook/react";
import ModalPortfolio from "../components/modals/modalPortfolio";

const meta: Meta<typeof ModalPortfolio> = {
  title: "components/modals/modalPortfolio",
  component: ModalPortfolio,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ margin: "auto" }}>
      <ModalPortfolio />
    </div>
  ),
};

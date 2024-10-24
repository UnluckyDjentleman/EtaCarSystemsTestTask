import { Meta, StoryObj } from "@storybook/react";
import Header from "../components/header/header";

const meta: Meta<typeof Header> = {
  title: "Components/header/header",
  component: Header,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ margin: "auto" }}>
      <Header />
    </div>
  ),
};

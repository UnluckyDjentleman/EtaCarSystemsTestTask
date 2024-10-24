import { Meta, StoryObj } from "@storybook/react";
import Input from "../components/searchBar/input";

const meta: Meta<typeof Input> = {
  title: "Components/SearchBar/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ margin: "auto" }}>
      <Input />
    </div>
  ),
};

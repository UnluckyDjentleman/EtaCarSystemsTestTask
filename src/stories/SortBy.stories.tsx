import { Meta, StoryObj } from "@storybook/react";
import SortBy from "../components/searchBar/sortBy";

const meta: Meta<typeof SortBy> = {
  title: "Components/SearchBar/SortBy",
  component: SortBy,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ margin: "auto" }}>
      <SortBy />
    </div>
  ),
};

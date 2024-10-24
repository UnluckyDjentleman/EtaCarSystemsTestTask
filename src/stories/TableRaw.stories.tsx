import { Meta, StoryObj } from "@storybook/react";
import TableRaw from "../components/table/tableRaw";
import { coin } from "./shared/coin";

const mock = coin;

const meta: Meta<typeof TableRaw> = {
  title: "Components/table/tableRaw",
  component: TableRaw,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: mock,
  },
  render: (args) => (
    <div style={{ margin: "auto" }}>
      <TableRaw {...args} />
    </div>
  ),
};

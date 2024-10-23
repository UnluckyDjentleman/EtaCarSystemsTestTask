import { Meta, StoryObj } from "@storybook/react";
import HistoryChart from "../components/history/historyChart"
import DataAssetsHistory from "../constants/types/dataAssetsHistory";
import { mockHistory } from "./shared/mockHistory";

const mock=mockHistory

const meta: Meta<typeof HistoryChart> = {
    title: 'Components/History/HistoryChart',
    component: HistoryChart,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: mock.data.map(el=>(
            {
                priceUsd: el.priceUsd,
                time: el.time.toString()
            } as DataAssetsHistory
        ))
    },
    render: (args) => (
        <div style={{ margin: 'auto' }}>
            <HistoryChart {...args} />
        </div>
    ),
};
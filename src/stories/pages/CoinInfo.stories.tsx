import { Meta, StoryObj } from "@storybook/react";
import CoinInfo from "../../pages/coinInfo";
import { http, HttpResponse } from "msw";
import { coin } from "../shared/coin";
import { mockHistory } from "../shared/mockHistory";

const meta: Meta<typeof CoinInfo> = {
  title: "pages/coinInfo",
  component: CoinInfo,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://api.coincap.io/v2/assets/bitcoin", () => {
          return HttpResponse.json({ data: coin });
        }),
        http.get("https://api.coincap.io/v2/assets/bitcoin/history", () => {
          return HttpResponse.json(mockHistory);
        }),
      ],
    },
  },
};

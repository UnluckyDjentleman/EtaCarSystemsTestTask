import type { Preview } from "@storybook/react";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { ModalProvider } from "../src/components/modals/context/modal.context";
import React from "react";
import "../src/index.css";
import { store } from "../src/store/store"; // Adjust the path to your store

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({
      location: {
        pathParams: {
          id: "bitcoin",
        },
      },
      routing: {
        path: "coins/:id",
      },
    }),
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ModalProvider>
          <Story />
        </ModalProvider>
      </Provider>
    ),
    withRouter,
  ],
};

export default preview;

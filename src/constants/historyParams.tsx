import FilterHistoryOptions from "./types/filterHistoryOptions";

export const HistoryParams: FilterHistoryOptions[] = [
  {
    value: {
      interval: "h6",
      start: Date.now() - 24 * 60 * 60 * 1000,
      end: Date.now(),
    },
    option: "Day",
  },
  {
    value: {
      interval: "h2",
      start: Date.now() - 12 * 60 * 60 * 1000,
      end: Date.now(),
    },
    option: "12 Hours",
  },
  {
    value: {
      interval: "m15",
      start: Date.now() - 60 * 60 * 1000,
      end: Date.now(),
    },
    option: "Hour",
  },
];

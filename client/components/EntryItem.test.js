import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "../testing/utils";

import EntryItem from "./EntryItem";
import mockEntries from "../testing/mockEntries";

test("<EntryItem> includes name in <li>", async () => {
  renderWithRedux(<EntryItem entry={mockEntries[0]} />);
  const entry = await screen.findByText("mocked entry 1");
  expect(entry).toBeInTheDocument();
  expect(entry).toMatchSnapshot();
});

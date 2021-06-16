import App from "../App";
import Categories from "../Catogories";
import { getAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as React from "react";

describe("App", () => {
  it("Should display logo", () => {
    const { container } = render(<App />);
    expect(
      container.querySelector(
        'img[src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"]'
      )
    ).toBeInTheDocument();
  });

  it("Should display 6 img", () => {
    render(<Categories />);
    const lists = screen.getAllByRole("list");
    expect(lists).toHaveLength(6);

    lists.forEach((listContainer) => {
      const items = getAllByRole(listContainer, "listitem");
      expect(items.length).toBeGreaterThan(0);
    });
  });

  it("Should display titles", () => {
    const titles = [
      "Emissions TV",
      "Séries françaises",
      "Comédies",
      "Nouveautés",
      "Documentaires",
      "Séries US",
    ];
    render(<Categories />);

    for (let i = 0; i < titles.length; i++) {
      const text = screen.getByText(titles[i]);
      expect(text).toBeInTheDocument();
    }
  });
});

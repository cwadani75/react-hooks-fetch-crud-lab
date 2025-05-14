import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("creates a new question when the form is submitted", async () => {
  render(<App />);

  // Switch to New Question form if needed
  fireEvent.click(screen.getByText("New Question"));

  // Fill out form
  fireEvent.change(screen.getByLabelText(/Prompt:/i), {
    target: { value: "Test Prompt" },
  });
  fireEvent.change(screen.getByLabelText(/Answer 1:/i), {
    target: { value: "A" },
  });
  fireEvent.change(screen.getByLabelText(/Answer 2:/i), {
    target: { value: "B" },
  });
  fireEvent.change(screen.getByLabelText(/Answer 3:/i), {
    target: { value: "C" },
  });
  fireEvent.change(screen.getByLabelText(/Answer 4:/i), {
    target: { value: "D" },
  });
  fireEvent.change(screen.getByLabelText(/Correct Answer:/i), {
    target: { value: "1" },
  });

  // Submit form
  fireEvent.click(screen.getByText("Submit Question"));

  // Switch to question list view
  fireEvent.click(screen.getByText("View Questions"));

  // Wait for the new question to appear
  await waitFor(() => {
    expect(screen.getByText("Test Prompt")).toBeInTheDocument();
  });
});

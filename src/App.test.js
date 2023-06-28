import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./components/Form/Form";


  test("submits the form with valid input", () => {
    const { getByLabelText, getByText } = render(<Form />);
    
    // Fill in form inputs
    fireEvent.change(getByLabelText("Name: *"), { target: { value: "John Doe" } });
    fireEvent.change(getByLabelText("Email: *"), { target: { value: "johndoe@example.com" } });
    fireEvent.change(getByLabelText("Date: *"), { target: { value: "2023-06-20" } });

    // Submit the form
    fireEvent.click(getByText("Reserve"));

    // Assertions
    expect(window.alert).toHaveBeenCalledWith("Thanks John Doe, your table is reserved");
    // Add more assertions to test the form's behavior after submission
  });

  test("disables the submit button when the form is invalid", () => {
    const { getByLabelText, getByText } = render(<Form />);
    
    // Fill in form inputs
    fireEvent.change(getByLabelText("Name: *"), { target: { value: "John Doe" } });
    fireEvent.change(getByLabelText("Email: *"), { target: { value: "" } });
    fireEvent.change(getByLabelText("Date: *"), { target: { value: "2023-06-20" } });

    // Assertions
    expect(getByText("Reserve")).toBeDisabled();
  });

  test("clears the form after submission", () => {
    const { getByLabelText, getByText } = render(<Form />);
    
    // Fill in form inputs
    fireEvent.change(getByLabelText("Name: *"), { target: { value: "John Doe" } });
    fireEvent.change(getByLabelText("Email: *"), { target: { value: "johndoe@example.com" } });
    fireEvent.change(getByLabelText("Date: *"), { target: { value: "2023-06-20" } });

    // Submit the form
    fireEvent.click(getByText("Reserve"));

    // Check if the form inputs are cleared
    expect(getByLabelText("Name: *")).toHaveValue("");
    expect(getByLabelText("Email: *")).toHaveValue("");
    expect(getByLabelText("Date: *")).toHaveValue("");
  });


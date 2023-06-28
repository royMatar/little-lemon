import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./components/Form/Form";

describe('Form', () => {
  test('renders form inputs', () => {
    render(<Form />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/comments/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/i agree to the cancellation policy/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reserve/i })).toBeInTheDocument();
  });

  test('displays error messages on form submission with invalid data', () => {
    render(<Form />);

    fireEvent.click(screen.getByRole('button', { name: /reserve/i }));

    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
    expect(screen.getByText(/please select the number of guests/i)).toBeInTheDocument();
    expect(screen.getByText(/please agree to the cancellation policy/i)).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    render(<Form />);

    const nameInput = screen.getByLabelText(/name/i);
    const dateInput = screen.getByLabelText(/date/i);
    const emailInput = screen.getByLabelText(/email/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const agreeCheckbox = screen.getByLabelText(/i agree to the cancellation policy/i);
    const reserveButton = screen.getByRole('button', { name: /reserve/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dateInput, { target: { value: '2023-06-30' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(guestsInput, { target: { value: '5' } });
    fireEvent.click(agreeCheckbox);
    fireEvent.click(reserveButton);

    // Assert that the form data is cleared
    expect(nameInput.value).toBe('');
    expect(dateInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(guestsInput.value).toBe('1'); // The default value
    expect(agreeCheckbox.checked).toBe(false);

    // Assert that the alert message is displayed
    expect(screen.getByText(/thanks john doe, your table is reserved/i)).toBeInTheDocument();
  });
});



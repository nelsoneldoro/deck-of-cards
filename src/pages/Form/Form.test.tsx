import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';
import each from 'jest-each';

describe('Form', () => {
  test('render empty desk', async () => {
    render(<Form />);

    const deskElement = screen.getByTestId('desk');
    expect(deskElement).toBeInTheDocument();

    const cardElements = screen.queryByTestId('card');
    expect(cardElements).toBe(null);
  });

  test('inset up to 2 chars in text field', async () => {
    render(<Form />);

    const textInputEl = screen.getAllByPlaceholderText('Card name')[0];

    fireEvent.change(textInputEl, {target: {value: '1'}});
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();

    fireEvent.change(textInputEl, {target: {value: '123'}});
    expect(screen.queryByDisplayValue('12')).toBeInTheDocument();
    expect(screen.queryByDisplayValue('123')).not.toBeInTheDocument();
  });

  test('add cards to desk', async () => {
    render(<Form />);
    const code1 = 'AS';
    const code2 = 'JH';

    const textInputEl = screen.getAllByPlaceholderText('Card name')[0];
    const addButtonEl = screen.getByText('Add');

    fireEvent.change(textInputEl, {target: {value: code1}});
    fireEvent.click(addButtonEl);
    expect(textInputEl).toHaveAttribute('value', '');

    const deskEl = screen.getByTestId('desk');
    expect(deskEl).toBeInTheDocument();
    expect(screen.queryAllByTestId('card').length).toBe(1);

    const cardEl = screen.queryByTitle(code1);
    expect(cardEl).toBeInTheDocument();

    fireEvent.change(textInputEl, {target: {value: code2}});
    fireEvent.click(addButtonEl);

    expect(screen.queryAllByTestId('card').length).toBe(2);
    const card2El = screen.queryByTitle(code2);
    expect(card2El).toBeInTheDocument();
  });

  each(['XY', 'J', ' ']).test('invalid add card', async (code) => {
    render(<Form />);

    const textInputEl = screen.getAllByPlaceholderText('Card name')[0];
    const addButtonEl = screen.getByText('Add');

    fireEvent.change(textInputEl, {target: {value: code}});
    fireEvent.click(addButtonEl);
    expect(screen.getByText('Invalid card')).toBeInTheDocument();
  });
});

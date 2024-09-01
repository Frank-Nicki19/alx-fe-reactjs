import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders the TodoList component', () => {
  render(<TodoList />);
  const heading = screen.getByText(/Todo List/i);
  expect(heading).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const todoItem = screen.getByText(/New Todo/i);
  expect(todoItem).toBeInTheDocument();
});

test('toggles a todo completion status', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const todoItem = screen.getByText(/New Todo/i);
  fireEvent.click(todoItem);

  // Assuming the completed item has a 'completed' class or similar identifier
  expect(todoItem).toHaveClass('completed');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText(/Delete/i); // Adjust this selector based on your implementation
  fireEvent.click(deleteButton);

  const todoItem = screen.queryByText(/New Todo/i);
  expect(todoItem).not.toBeInTheDocument();
});
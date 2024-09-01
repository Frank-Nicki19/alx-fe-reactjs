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
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  const newTodo = screen.getByText(/New Todo/i);
  expect(newTodo).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(todo).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  const deleteButton = todo.nextSibling;

  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
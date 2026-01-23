import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Header from '../components/Header';

describe('Header Component', () => {
  it('should display the correct brand name', () => {
    render(
      <BrowserRouter>
        <Header onCreateClick={vi.fn()} />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/CA MONK/i)).toBeInTheDocument();
  });

  it('should have a functional Create Blog button', () => {
    const mockOnCreate = vi.fn();
    render(
      <BrowserRouter>
        <Header onCreateClick={mockOnCreate} />
      </BrowserRouter>
    );

    const button = screen.getByText(/Create Blog/i);
    expect(button).toBeInTheDocument();
  });

  it('should have a profile link', () => {
    render(
      <BrowserRouter>
        <Header onCreateClick={vi.fn()} />
      </BrowserRouter>
    );

    const profileBtn = screen.getByText(/Profile/i);
    expect(profileBtn.closest('a')).toHaveAttribute('href', '/profile');
  });
});
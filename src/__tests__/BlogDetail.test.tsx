import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlogDetail from '../components/BlogDetail';
import { mockBlogs } from '../test/mockData';

describe('BlogDetail Component', () => {
  it('shows loading state when isLoading is true', () => {
    render(<BlogDetail blog={undefined} isLoading={true} />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders full blog content and author details correctly', () => {
    render(<BlogDetail blog={mockBlogs[0]} isLoading={false} />);
    expect(screen.getByText(/Future of Fintech/i)).toBeInTheDocument();
    const financeElements = screen.getAllByText(/FINANCE/i);
    expect(financeElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Full content of the fintech blog.../i)).toBeInTheDocument();
  });

  it('displays fallback message if no blog is selected', () => {
    render(<BlogDetail blog={undefined} isLoading={false} />);
    expect(screen.getByText(/Select an article to read/i)).toBeInTheDocument();
  });
});
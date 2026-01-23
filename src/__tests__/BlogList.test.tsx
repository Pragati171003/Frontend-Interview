import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BlogList from '../components/BlogList';
import { mockBlogs } from '../test/mockData';

describe('BlogList Component', () => {
  it('renders all blog titles from the provided data', () => {
    render(
      <BlogList 
        blogs={mockBlogs} 
        onSelect={vi.fn()} 
        selectedId="1" 
      />
    );

    expect(screen.getByText('Future of Fintech')).toBeInTheDocument();
  });

  it('calls onSelect with correct ID when a card is clicked', () => {
    const mockOnSelect = vi.fn();
    render(
      <BlogList 
        blogs={mockBlogs} 
        onSelect={mockOnSelect} 
        selectedId="null" 
      />
    );

    const card = screen.getByText('Future of Fintech');
    fireEvent.click(card);

    expect(mockOnSelect).toHaveBeenCalledWith("1");
  });
});
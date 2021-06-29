import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Song } from './Song';

describe("Song component", () => {
  const props = { 
    id: "1",
    name: "name",
    artist: "artist",
    url: "url",
    image: "image",
    likesCount: 2,
    onClick: jest.fn()
  }
  beforeEach(() => {
    render(<Song {...props}/>)
  })
  test("should display the props", () => {
    expect(screen.getByText("likes: 2")).toBeDefined()
    expect(screen.getByText("url")).toBeDefined()
    expect(screen.getByText("name")).toBeDefined()
    expect(screen.getByAltText(`thumbnail for song: ${props.name}`)).toBeDefined()
  })

  test("should call onClick", () => {
    userEvent.click(screen.getByText("url"))
    expect(props.onClick).toHaveBeenCalledWith(props.id)
  })
})
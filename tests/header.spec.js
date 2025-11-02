const Header = require('../src/components/Header.cjs')

describe('Header component props', () => {
  test('se pasa el título como prop', () => {
    expect(Header.props).toBeDefined()
    expect(Header.props.title).toBeDefined()
    expect(Header.props.title.type).toBe(String)
    expect(Header.props.title.required).toBe(true)
  })

  test('se pasan título y color como props', () => {
    expect(Header.props.title).toBeDefined()
    expect(Header.props.color).toBeDefined()
    expect(Header.props.color.type).toBe(String)
  })
})

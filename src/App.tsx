import { useState } from 'react'

export const App = () => {
  const [color, setColor] = useState<string>('')

  const randomColor = () => {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`

    setColor(color)
  }

  return (
    <div style={{ backgroundColor: color, width: '100vw', height: '100vh' }}>
      <h3>Color Flipper</h3>
      <button
        id='green'
        onClick={() => setColor('green')}
      >
        Green
      </button>
      <button
        id='red'
        onClick={() => setColor('red')}
      >
        Red
      </button>
      <button
        id='blue'
        onClick={() => setColor('blue')}
      >
        Blue
      </button>

      <button onClick={randomColor}>Random</button>

      <button
        id='reset'
        onClick={() => setColor('')}
      >
        Reset
      </button>
    </div>
  )
}

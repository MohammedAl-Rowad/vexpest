import React, { useState } from 'react'
import { Rnd } from 'react-rnd'

export default function DragDrop({ child, data, ...reset }) {
  const [state, setState] = useState({
    x: reset.x,
    y: reset.y,
    width: '100%',
    height: 500
  })

  const { height, x, y, width } = state
  const childWithProps = React.cloneElement(child, { height, width, data })
  return (
    <Rnd
      minHeight={height}
      maxHeight={height}
      minWidth={'50%'}
      style={{ background: '#444444', boxShadow: '0px 0px 10px #595959' }}
      onResize={(e, direction, ref, delta, position) => {
        setState({
          ...reset,
          height: ref.offsetHeight,
          width: ref.offsetWidth
        })
      }}
      default={{
        x,
        y,
        width,
        height,
        minHeight: 500
      }}
    >
      {childWithProps}
    </Rnd>
  )
}

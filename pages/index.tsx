import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 });

  const handleChange = (event) => {
    setColor({
      ...color,
      [event.target.name]: event.target.value
    });
  }

  useEffect(() => {
    console.log(color)
  }, [color])
  


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className='container' 
          style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`}}>
        <div className='left'>Left</div>
        <div className='right'>
        <div>
      <label>
        Red:
        <input
          type="number"
          name="r"
          value={color.r}
          min={0}
          max={255}
          onChange={(e)=> handleChange(e)}
        />
      </label>
      <br />
      <label>
        Green:
        <input
          type="number"
          name="g"
          value={color.g}
          min={0}
          max={255}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Blue:
        <input
          type="number"
          name="b"
          value={color.b}
          min={0}
          max={255}
          onChange={handleChange}
        />
      </label>
    </div>
        </div>
      </div>
    </>
  )
}

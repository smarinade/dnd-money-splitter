import React, { useEffect } from "react";

function Coffee() {
  useEffect(() => {
    const script = document.createElement('script')
    const coffeeElement = document.getElementById('buyMeCoffee')

    script.setAttribute('src', 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js')
    script.setAttribute('data-name', 'BMC-Widget')
    script.setAttribute('data-cfasync', 'false')
    script.setAttribute('data-id', 'looters')
    script.setAttribute('data-description', 'Support me on Buy me a coffee!')
    script.setAttribute(
      'data-message',
      'Buying me a single coffee is like getting a huge dragon hoard. ',
    )
    script.setAttribute('data-color', '#FFDD00')
    script.setAttribute('data-position', 'Right')
    script.setAttribute('data-x_margin', '20')
    script.setAttribute('data-y_margin', '20')

    script.onload = () => {
      const evt = document.createEvent('Event')
      evt.initEvent('DOMContentLoaded', false, false)
      window.dispatchEvent(evt)
    }

    if (coffeeElement) {
      coffeeElement.appendChild(script)
    } else {
      console.error('Coffee could not find its element.')
    }
  }, [])

  return <article id='buyMeCoffee'></article>
}

export default Coffee

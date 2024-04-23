import * as React from 'react';

interface Props {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ type, variant = 'primary' }: Props) => {
  const handleClick: React.MouseEventHandler = (e) => {
    const payload = {
      event: e,
      variant
    }

    const click = new CustomEvent('remote_click', {
      detail: payload
    })

    window.dispatchEvent(click)
  }

  return (
    <button type={type} onClick={handleClick}>
      App 2 Button {variant}
    </button>
  )
}

export default Button;

import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-sky-300' : 'text-sky-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-sky-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Netherlands" invert={invert}>
          Eindhoven
          <br />
          5615, Eindhoven, Netherlands
        </Office>
      </li>
      <li>
        <Office name="Philippines" invert={invert}>
          Manila
          <br />
          Philippines
        </Office>
      </li>
    </ul>
  )
}

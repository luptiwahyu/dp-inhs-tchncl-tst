import { FC, InputHTMLAttributes } from 'react'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>

interface CustomProps {
  className?: string
}

type ToggleProps = InputProps & CustomProps

const DpToggle: FC<ToggleProps> = ({ className, ...props }) => {
  return (
    <div className={`h-6 ${className}`}>
      <label className="relative inline-block w-11 h-6 cursor-pointer">
        <input type="checkbox" className="peer sr-only" {...props} />
        <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-green-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
        <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full" />
      </label>
    </div>
  )
}

export default DpToggle

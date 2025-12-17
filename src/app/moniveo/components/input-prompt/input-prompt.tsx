import { FC } from 'react'
import DpButton from '../button/button'
import { GlobeIcon, MicIcon, PlusIcon, SparklesIcon } from 'lucide-react'

type Color = 'white' | 'gray'

interface InputPromptProps {
  className?: string
  color?: Color
}

const DpInputPrompt: FC<InputPromptProps> = ({
  className,
  color = 'white',
}) => {
  const variant = color === 'gray' ? 'secondary' : 'default'

  return (
    <div className={className}>
      <div
        className={`w-full rounded-xl ${
          color === 'white' ? 'border-2 border-white' : ''
        }`}
      >
        <div
          className={`p-4 rounded-xl border ${
            color === 'white'
              ? 'bg-white border-gray-100'
              : 'bg-gray-400/20 border-gray-600'
          }`}
        >
          <textarea
            placeholder="Ask anythings..."
            className={`outline-none resize-none w-full ${
              color === 'gray' ? 'placeholder:text-gray-500' : ''
            }`}
            rows={2}
          />
          <div className="flex items-center justify-between space-x-2 pt-4">
            <div className="flex items-center space-x-2">
              <DpButton size="small" variant={variant} className="w-9 p-0!">
                <PlusIcon className="size-4" />
              </DpButton>
              <DpButton size="small" variant={variant}>
                <GlobeIcon className="size-4" />
                Web Search
              </DpButton>
            </div>
            <div className="flex items-center space-x-2">
              <DpButton size="small" variant={variant} className="w-9 p-0!">
                <MicIcon className="size-4" />
              </DpButton>
              <DpButton size="small" variant="primary" className="w-9 p-0!">
                <SparklesIcon className="size-4" />
              </DpButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DpInputPrompt

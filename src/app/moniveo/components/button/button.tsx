import { cn } from '@/shared/lib/utils'
import { cva } from 'class-variance-authority'
import { ComponentProps, FC, ReactNode } from 'react'
import styles from './button.module.css'
import classNames from 'classnames/bind'

type Variant = 'default' | 'primary' | 'secondary'
type Size = 'small' | 'medium' | 'large'

interface ButtonProps extends ComponentProps<'button'> {
  className?: string
  variant?: Variant
  size?: Size
  children: ReactNode
}

const cx = classNames.bind(styles)

const buttonVariant = cva(cx('dp-button'), {
  variants: {
    variant: {
      default: cx('dp-button--default'),
      primary: cx('dp-button--primary'),
      secondary: cx('dp-button--secondary'),
    },
    size: {
      small: cx('dp-button--small'),
      medium: cx('dp-button--medium'),
      large: cx('dp-button--large'),
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
})

const DpButton: FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariant({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  )
}

export default DpButton

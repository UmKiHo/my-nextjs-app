import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'custom'
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'flex min-w-[120px] items-center justify-center rounded-md px-4 py-2 font-medium transition-all',
        {
          'bg-teal-800 text-white hover:bg-teal-700 disabled:bg-teal-800/50': variant === 'primary',
          'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:bg-gray-100': variant === 'secondary',
          '': variant === 'custom',
        },
        className
      )}
    >
      {children}
    </button>
  )
}

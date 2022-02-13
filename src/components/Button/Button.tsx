import React from 'react'
import { IButtonProps } from './Button.types'
import classNames from 'classnames'

const Button: React.FC<IButtonProps> = ({
	className,
	children,
	variant,
	...props
}) => {
	const buttonClasses = classNames(
		'button',
		{ 'button-primary': variant === 'primary' },
		className
	)
	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	)
}

export default Button

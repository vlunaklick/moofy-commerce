import { Link as RouterLink } from 'react-router-dom'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  disabled?: boolean
}

export default function Link({ children, ...props }: LinkProps) {
  if (props.disabled) {
    return <span {...props}>{children}</span>
  }

  return <RouterLink {...props}>{children}</RouterLink>
}

import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Children, cloneElement } from 'react'
import { ReactElementLike } from 'prop-types'

interface IActiveLinkProps {
  children: ReactElementLike
  href: string
  activeClassName: string
}

const ActiveLink: FC<IActiveLinkProps> = ({
  children,
  ...props
}): JSX.Element => {
  const child = Children.only(children)
  const router = useRouter()

  let className = child.props.className || ''
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className}${props.activeClassName}`.trim()
  }

  delete props.activeClassName

  return <Link {...props}>{cloneElement(child, { className })}</Link>
}

export default ActiveLink

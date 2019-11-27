import { useEffect, useRef } from 'react'
import { useSidebarValue } from '../context/Sidebar/Provider'

export const useClickOutside = (type: string) => {
  const [_, dispatch] = useSidebarValue()
  const ref = useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch({ type })
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref }
}

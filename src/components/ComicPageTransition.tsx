import { useState, useEffect } from 'kiru'
import type { ReactNode } from 'react'
import { usePageState } from '$/context/pageStateContext'

export function ComicPageTransition({ children }: { children: ReactNode }) {
  const { currentPageIndex } = usePageState()
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [prevPageIndex, setPrevPageIndex] = useState(currentPageIndex)
  const [content, setContent] = useState(children)
  
  useEffect(() => {
    if (currentPageIndex !== prevPageIndex) {
      setDirection(currentPageIndex > prevPageIndex ? 'right' : 'left')
      setIsAnimating(true)

      setTimeout(() => {
        setContent(children)
        setPrevPageIndex(currentPageIndex)

        setTimeout(() => {
          setIsAnimating(false)
        }, 50)
      }, 300)
    } else if (children !== content) {
      setContent(children)
    }
  }, [children, currentPageIndex, prevPageIndex])
  
  return (
    <div 
      className={`
        transition-all duration-300 relative
        ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        ${isAnimating && direction === 'right' ? 'translate-x-10' : ''}
        ${isAnimating && direction === 'left' ? '-translate-x-10' : ''}
      `}
    >
      {content}
    </div>
  )
}
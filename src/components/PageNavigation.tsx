import { useState, useEffect } from 'kiru'
import type { ChangeEvent } from 'react'

interface PageNavigationProps {
  pages: string[]
  currentPage: number
  onPageChange: (pageIndex: number) => void
}

export function PageNavigation({ pages, currentPage, onPageChange }: PageNavigationProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  
  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pages.length && !isAnimating) {
      setIsAnimating(true)
      onPageChange(pageIndex)
      
      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    }
  }
  
  const goToPrevPage = () => {
    goToPage(currentPage - 1)
  }
  
  const goToNextPage = () => {
    goToPage(currentPage + 1)
  }
  
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    goToPage(parseInt(e.target.value, 10))
  }
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevPage()
      } else if (e.key === 'ArrowRight') {
        goToNextPage()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentPage])
  
  return (
    <div className="page-navigation">
      <button 
        onClick={goToPrevPage} 
        disabled={currentPage === 0 || isAnimating}
        className={currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}
      >
        ← Previous
      </button>
      
      <div className="flex items-center">
        <span className="mr-2 font-bold">Page:</span>
        <select 
          value={currentPage} 
          onChange={handleSelectChange}
          disabled={isAnimating}
          className="page-select"
        >
          {pages.map((page, index) => (
            <option key={index} value={index}>
              {index + 1}: {page}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        onClick={goToNextPage} 
        disabled={currentPage === pages.length - 1 || isAnimating}
        className={currentPage === pages.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}
      >
        Next →
      </button>
    </div>
  )
}
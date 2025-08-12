import { createContext, useContext, useState, useEffect } from 'kiru'
import type { ReactNode } from 'react'
import { usePageContext } from './pageContext'

interface PageState {
  currentPageIndex: number
  pageCount: number
  pageNames: string[]
  setCurrentPage: (index: number) => void
  nextPage: () => void
  prevPage: () => void
  isFirstPage: boolean
  isLastPage: boolean
}

const PageStateContext = createContext<PageState | undefined>(undefined)

interface PageStateProviderProps {
  children: ReactNode
  initialPages?: string[]
}

export function PageStateProvider({ 
  children, 
  initialPages = ['Home', 'Events', 'Music', 'Racing', 'Development', 'About', 'Contact']
}: PageStateProviderProps) {
  const { urlPathname } = usePageContext()
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [pageNames, setPageNames] = useState(initialPages)
  
  useEffect(() => {
    const pathSegment = urlPathname.split('/')[1] || ''
    const pageIndex = pageNames.findIndex(
      (name) => name.toLowerCase() === (pathSegment || 'home')
    )
    
    if (pageIndex !== -1) {
      setCurrentPageIndex(pageIndex)
    }
  }, [urlPathname, pageNames])
  
  const setCurrentPage = (index: number) => {
    if (index >= 0 && index < pageNames.length) {
      setCurrentPageIndex(index)
      
      const path = index === 0 ? '/' : `/${pageNames[index].toLowerCase()}`
      window.history.pushState({}, '', path)
      
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
    }
  }
  
  const nextPage = () => {
    if (currentPageIndex < pageNames.length - 1) {
      setCurrentPage(currentPageIndex + 1)
    }
  }
  
  const prevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPage(currentPageIndex - 1)
    }
  }
  
  const value: PageState = {
    currentPageIndex,
    pageCount: pageNames.length,
    pageNames,
    setCurrentPage,
    nextPage,
    prevPage,
    isFirstPage: currentPageIndex === 0,
    isLastPage: currentPageIndex === pageNames.length - 1
  }
  
  return (
    <PageStateContext.Provider value={value}>
      {children}
    </PageStateContext.Provider>
  )
}

export function usePageState() {
  const context = useContext(PageStateContext)
  if (context === undefined) {
    throw new Error('usePageState must be used within a PageStateProvider')
  }
  return context
}
import { Footer } from "$/components/Footer"
import { ThemeToggleButton } from "$/components/ThemeToggleButton"
import { PageNavigation } from "$/components/PageNavigation"
import { ComicPageTransition } from "$/components/ComicPageTransition"
import { usePageContext } from "$/context/pageContext"
import { PageStateProvider, usePageState } from "$/context/pageStateContext"

function ComicLayout({ children }: { children: JSX.Children }) {
  const { urlPathname } = usePageContext()
  const pageState = usePageState()
  const isHome = urlPathname === '/'
  const now = new Date()
  const dateStr = now.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })
  
  const handlePageChange = (pageIndex: number) => {
    pageState.setCurrentPage(pageIndex)
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-comic">
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto comic-page">
          <header className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm">{dateStr}</span>
              <div className="flex items-center gap-3">
                <span className="font-bold">Naithcape.com</span>
                <ThemeToggleButton />
              </div>
            </div>
            
            <h1 className="title text-center">Naithcape</h1>
            <p className="subtitle text-center">Exploring technology, creativity, and passion</p>
            
            <PageNavigation 
              pages={pageState.pageNames}
              currentPage={pageState.currentPageIndex}
              onPageChange={handlePageChange}
            />
          </header>

          <ComicPageTransition>
            {children}
          </ComicPageTransition>
          
          <Footer />
        </div>
      </main>
    </div>
  )
}

export function Layout({ children }: { children: JSX.Children }) {
  return (
    <PageStateProvider>
      <ComicLayout>{children}</ComicLayout>
    </PageStateProvider>
  )
}

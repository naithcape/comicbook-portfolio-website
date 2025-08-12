export function Layout({ children }: { children: JSX.Children }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-6xl mx-auto paper rounded-sm">
        {/* Content only - no header or footer */}
        {children}
      </div>
    </div>
  )
}

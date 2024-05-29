export function Down ({ className }: { className?: string }): JSX.Element {
  return (
    <svg fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className={className}>
      <path stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
    </svg>
  )
}

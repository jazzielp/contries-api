export function CardLoading (): JSX.Element {
  return (
    <article className='w-[264px] h-[336px] mx-auto rounded-lg bg-white shadow-md overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-300 dark:bg-dark-elements'>
      <div className='w-full h-1/2 bg-light-input animate-pulse' />
      <div className='p-6'>
        <div className='h-6 bg-light-input animate-pulse mb-4 rounded' />
        <div className='h-4 bg-light-input animate-pulse mb-2 rounded' />
        <div className='h-4 bg-light-input animate-pulse mb-2 rounded' />
        <div className='h-4 bg-light-input animate-pulse rounded' />
      </div>
    </article>
  )
}

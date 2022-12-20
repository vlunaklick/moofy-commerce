import { AiOutlineArrowUp } from 'react-icons/ai'

const ButtonTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', () => {
    const button = document.querySelector('.animate-bounce')
    if (window.scrollY > 100) {
      button?.classList.remove('hidden')
    } else {
      button?.classList.add('hidden')
    }
  })

  return (
    <button
      onClick={handleScrollToTop}
      className={
        'fixed z-10 p-3 bg-zinc-100 rounded-full shadow-md bottom-10 right-10 animate-bounce hidden'
      }
    >
      <AiOutlineArrowUp className="text-zinc-800" />
    </button>
  )
}

export default ButtonTop

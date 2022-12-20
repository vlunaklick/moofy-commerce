import Button from '../../Button'
import useInput from '../../../hooks/useInput'

const FormAbout = () => {
  const {
    value: email,
    handleChangeInput: bindEmail,
    reset: resetEmail,
  } = useInput()

  const {
    value: message,
    handleChangeTextArea: bindMessage,
    reset: resetMessage,
  } = useInput()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    resetMessage()
    resetEmail()
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label htmlFor="email">
        <span className="text-zinc-500 text-sm md:text-base">Email</span>
      </label>
      <input
        id="email"
        className="p-2 w-full border outline-none border-zinc-200 text-zinc-800 rounded-md transition-colors hover:border-zinc-300 active:border-zinc-400 focus:border-zinc-400"
        type="email"
        onChange={bindEmail}
        value={email}
      />
      <label htmlFor="message">
        <span className="text-zinc-500 text-sm md:text-base">Message</span>
      </label>
      <textarea
        id="message"
        className="p-2 w-full border outline-none border-zinc-200 text-zinc-800 rounded-md transition-colors hover:border-zinc-300 active:border-zinc-400 focus:border-zinc-400"
        rows={5}
        onChange={bindMessage}
        value={message}
      />
      <Button full={true} text={'Send'} />
    </form>
  )
}

export default FormAbout

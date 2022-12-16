import Button from '../../Button'
import useInput from '../../../hooks/useInput'

type Props = {
  text?: string
}

const FormNewsletterAbout = ({ text = 'placeholder' }: Props) => {
  const {
    value: email,
    handleChangeInput: bindEmail,
    reset: resetEmail,
  } = useInput()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    resetEmail()
  }

  return (
    <>
      <p className="text-zinc-700 text-sm md:text-base">
        Sign up for our newsletter to get exclusive discounts, early access to
        new products, and helpful tips and resources straight to your inbox.
        Don't miss out - suscribe now! 🍻
      </p>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          className="p-2 w-full border outline-none border-zinc-200 text-zinc-800 rounded-md transition-colors hover:border-zinc-300 active:border-zinc-400 focus:border-zinc-400"
          placeholder={'Email'}
          type="text"
          value={email}
          onChange={bindEmail}
        />
        <Button full={true} text={'Suscribe'} />
      </form>
    </>
  )
}

export default FormNewsletterAbout

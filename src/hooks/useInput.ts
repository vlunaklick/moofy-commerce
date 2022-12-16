import { useState } from 'react'

const useInput = () => {
  const [value, setValue] = useState('')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    value,
    handleChangeInput,
    handleChangeTextArea,
    reset,
  }
}

export default useInput

import { useState } from "react"

export default function useToggle(defaultValue: boolean = false) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value?: boolean | undefined) {
    console.log('value', value)
    setValue((prevValue) => typeof value === 'boolean' ? value : !prevValue)
  }

  return [value, toggleValue] as const
}
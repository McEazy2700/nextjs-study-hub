import { Switch } from "@headlessui/react"
import { useEffect, useState } from "react"

interface ToggleProps {
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  label: String;
  message?: string;
}
const Toggle = ({ setValue, label, message }: ToggleProps)=>{
  const [enabled, setEnabled] = useState(false)

  useEffect(()=>{
    setValue(enabled)
  },[enabled])
  return (
    <div className="flex gap-2 items-center">
      <span className="">{label}</span>
      <Switch
        className={`${enabled ? 'bg-green-700' : 'bg-blue-600'} relative inline-flex h-6 w-11 items-center rounded-full`}
        onChange={setEnabled}
        checked={enabled}>
        <span className="sr-only">{message}</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  )
}

export default Toggle

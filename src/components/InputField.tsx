import React from 'react'

interface InputProps {
    type?: string,
    placeholder?: string,
    label: string,
    id: string
    inputComplement?: any,
    error?: string | undefined
}

export default function InputField(props: InputProps) {
    const { id, type, placeholder, label, inputComplement, error } = props

  return (
    <div>
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
        <div className="mt-2">
            <input id={id}
                name={label} 
                type={type} 
                autoComplete={type} 
                {...inputComplement} 
                placeholder={placeholder}
                className="pl-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            <p>{error}</p>
        </div>
    </div>
  )
}

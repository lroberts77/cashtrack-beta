import { useState, useEffect } from "react"

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) :
        typeof defaultValue == 'function' ? defaultValue() :
        defaultValue
    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
    return [value, setValue]
}
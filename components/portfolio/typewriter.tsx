"use client"

import { useEffect, useState } from "react"

export function Typewriter({
  strings,
  typeSpeed = 60,
  deleteSpeed = 35,
  pauseMs = 1400,
}: {
  strings: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseMs?: number
}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[index % strings.length]

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(pause)
    }

    if (deleting && text === "") {
      setDeleting(false)
      setIndex((i) => (i + 1) % strings.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
      },
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, index, strings, typeSpeed, deleteSpeed, pauseMs])

  return (
    <span>
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-current ml-1 align-middle animate-pulse" aria-hidden="true" />
    </span>
  )
}

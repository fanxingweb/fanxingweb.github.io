import { useCallback, useRef, useState } from 'react'

// 延时渐显式动画
export function useProgressiveDisplay(className) {
  const [isDisplay, setIsDisplay] = useState(false)
  const timer = useRef(null)
  
  const display = useCallback(() => {
    const doms = document.getElementsByClassName(className)[0]
    const children = doms.children

    let i = 0
    timer.current = setInterval(() => {
      if (i <= children.length - 1) {
        children[i].classList.add('progressive-display')
        i++
      } else {
        clearInterval(timer.current)
        setIsDisplay(true)
        i = 0
      }
    }, 100)
  }, [className])

  return [isDisplay, display]
}
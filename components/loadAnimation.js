'use client'
import { useState, useEffect,  } from 'react'
import { schemeMapping } from '@/lib/data-config';

export default function LoadAnimation({ children }) {
  const [initLoading, setInitLoading] = useState(true);
  const [schemeColor, setSchemeColor] = useState('#8c4356');

  function getColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // 深色模式
      return 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // 浅色模式
      return 'light';
    } else {
      // 颜色模式未知或浏览器不支持prefers-color-scheme
      return 'no-preference';
    }
  }

  useEffect(() => {
    const currentScheme = getColorScheme();
    const color = schemeMapping?.[currentScheme];
    
    if(color) setSchemeColor(color);
  }, [])

  useEffect(() => {
    const progressDom = document.getElementById('progress')
    const textDom = document.getElementsByClassName('logo-text')[0]
    const wrapDom = document.getElementsByClassName('loading_animate_wrapper')[0]
    const progressLength = progressDom.getTotalLength()
    progressDom.style['stroke-dasharray'] = progressLength
    progressDom.style['stroke-dashoffset'] = progressLength // 设置偏移量，默认偏移周长大小（即不显示，通过设置偏移量实现进度条效果）

    // 文字消失回调，添加wrap缩放隐藏动画
    textDom.addEventListener('animationend', (event) => {
      event.stopPropagation();
      const timer2 = setTimeout(() => {
        wrapDom.classList.add('loading_animate_wrapper-hidden')
        clearTimeout(timer2)
      }, 200)
    })

    // 缩放隐藏回调，隐藏wrap
    wrapDom.addEventListener('animationend', (event) => {
      event.stopPropagation();
      setInitLoading(false)
    })

    let p = 0, i = 0.3
    const timer = setInterval(() => {
      const speed = progressLength - progressLength * (p / 100)
      progressDom.style['stroke-dashoffset'] = speed > 0 ? speed : 0
      if (p >= 100) {
        p = 0, i = 0.5
        clearInterval(timer)
        textDom.classList.add('logo-text-show') // 进度条达到100之后，显示文本
      } else {
        if (p >= 15) i = 1.5
        if (p >= 92) i = 0.15

        p = Math.min(p + i, 100)
      }
    }, 10)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {
        initLoading ? (
          <div className='h-screen flex justify-center items-center'>
            <div className='loading_animate_wrapper'>
              <svg viewBox="0 0 84 96" width="100" height="100">
                <polygon id='progress' stroke={schemeColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 2 0 22 0 67 39 90 78 68 78 23" fill='none' ></polygon>
                <text className='logo-text' x='39' y='48' fontSize='34' fill={schemeColor} textAnchor="middle" alignmentBaseline="middle">F</text>
              </svg>
            </div>
          </div>
        ) : <div className='next-document-wrapper'>{children}</div>
      }
    </>
  )
}
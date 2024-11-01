"use client"

import { CoistomBtnProps } from '@/types'
import React from 'react'

const CoustomBtn = ({title, containerStyle, handleClick, btnType}:CoistomBtnProps) => {
  return (
    <button
    disabled={false}
    type={btnType || 'button'}
    className={`custom-btn ${containerStyle}`}
    onClick={() =>{handleClick}}
    >
        <span className='flex-1'>{title}</span>
    </button>
  )
}

export default CoustomBtn
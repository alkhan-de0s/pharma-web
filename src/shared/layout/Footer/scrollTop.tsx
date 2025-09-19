'use client'
import React from 'react'
import { ArrowTop } from '@/shared/icons'
const ScroolToTop = () => {


    const handleToTop = () => {
        if (typeof window != 'undefined') {
            window.scrollTo({
              behavior:'smooth',
              top:0
            })
        }
    }

    return (
        <div  onClick={handleToTop}>
            <ArrowTop />
            <span>Scroll</span>
        </div>
    )
}

export default ScroolToTop
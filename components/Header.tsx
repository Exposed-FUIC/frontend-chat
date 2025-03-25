import React from 'react'
import { Button } from './ui/button'

function Header() {
  return (
    <div className='flex w-full items-center justify-between h-[70px] absolute border shadow-xs px-5'>
        <div>
            Logo?
        </div>
        <Button variant={'ghost'}>
          UserProfile?
        </Button>
    </div>
  )
}

export default Header
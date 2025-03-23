import React from 'react'
import { Button } from './ui/button'

function Header() {
  return (
    <div className='flex items-center justify-between h-[70px] border shadow-xs px-5'>
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
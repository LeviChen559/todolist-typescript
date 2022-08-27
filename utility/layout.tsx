import React from 'react'
import Link from 'next/link'


const  Layout =({children}:{children:React.ReactNode})=> {
  return (
  <div>
  <nav>
<Link href={"/"}>
    <a>API CALL</a>
</Link>
<Link href={"/todolist"}>
    <a>ToDoList</a>
</Link>
  </nav>
    {children}
    </div>
  )
}

export default Layout
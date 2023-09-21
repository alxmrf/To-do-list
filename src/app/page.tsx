import Image from 'next/image'
import Link from 'next/link'
import { Item } from './Components/todoList'
import {hello} from "./TESTE/HELLO"
export default function Home() {

  let dataBaseJSON = localStorage.getItem("todolist")

  return (
    <> 
    <header className ="flex space-between">
      <h1 className="text-5xl">To-Do List</h1>
      <Link className="border px-4 text-right py-2 rounded bg-[#EADBC8] hover:bg-[#DAC0A3] focus:bg-[#DAC0A3] float-right  text-align-right" href="/New">Add to your to-Do List</Link>
    </header>
    <hr className="text-white"/>
    <h1>{dataBaseJSON}</h1>

    </>
  )
}

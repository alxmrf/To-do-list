"use client"
import { todo } from "node:test"
import  {useState} from "react"

interface IItem {
    content : string
    marked: boolean
}
export default function New() {

    const [todoList, setTodoList] = useState<IItem[]>([{}])
    const [inputValue, setInputValue] = useState("")
    export const database = todoList
    const handleAddTodoItem =() =>{
        setTodoList([
            ...todoList,{
                content: inputValue,
                marked: false
            }]);  console.log(todoList);
    }
    const jsonToDoList = JSON.stringify(todoList)
    localStorage.setItem("todolist", jsonToDoList)
    return(
        <div className="flex">
            <input type="text " value={inputValue} onChange={(e)=> setInputValue(event.target.value)} />
            <button 
            className="round  hover:bg-[#DAC0A3] focus:bg-[#DAC0A3] bg-[#EADBC8]" 
            onClick={handleAddTodoItem}>
            Click here to add</button>
            
        </div>
    )

}







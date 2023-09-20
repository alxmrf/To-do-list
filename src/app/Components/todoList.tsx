
type TodoItemProps = {
    id : string
    title : string
    complete : Boolean
}

export function Item({id, title,complete}: TodoItemProps){
    return(
        <li className="flex gap-1 items-center text-2xl ">
            <input id = {id} type="checkbox" className="cursor-pointer peer"/>
            <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">{title}</label>
        </li>
    )
}
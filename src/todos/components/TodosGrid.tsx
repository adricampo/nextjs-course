'use client'

import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

import * as todosApi from '@/todos/helpers/todos'
// IMPORTANTE: usar el useRouter del navigation y no del router (versiones de next 13 o +)
import { useRouter } from "next/navigation"

interface TodosGridProps {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {

    const router = useRouter();

    const toggleTodo = async(id: string, complete: boolean) => {
        // se genera una función adicional para decirle a next que recargue la ruta actual
        // esto hará que no se involucren otros componentes en la recarga
        const updatedTodo = await todosApi.updateTodo(id, complete);

        // vemos como actualiza solo (y de forma óptima) el componente correspondiente
        console.log(updatedTodo)

        // no es un refresh destructivo, no perdemos el estado. es una nueva request al server (reRenderiza los servercomponents)
        router.refresh()
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} updateTodo={ toggleTodo }/>
            ))}
        </div>
    );
};
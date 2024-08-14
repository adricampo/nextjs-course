import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"
import { NextResponse } from "next/server"
import { boolean, object, string } from "yup"

interface Segments {
  params: {
    id: string;
  }
}

const getTodo = async( id: string ): Promise<Todo | null> => {
  
  const todo = await prisma.todo.findFirst({ where: { id } })

  return todo
}


export async function GET(request: Request, { params }: Segments) {
  
  const todo = await getTodo(params.id)

  if (!todo) {
    return NextResponse.json(
      { message: `El valor ${params.id} no responde a una id` },
      { status: 404 }
    );
  } else {
    console.log(request)
  }
  return NextResponse.json({
    message: "campo visible",
    todo
  });
}

const putSchema = object({
  complete: boolean().optional(),
  description: string().optional()
})

export async function PUT(request: Request, { params }: Segments) {
  
  const todo = await getTodo(params.id)

  if (!todo) {
    return NextResponse.json(
      { message: `El valor ${params.id} no responde a una id` },
      { status: 404 }
    )
  }

  try {
    const { complete, description } = await putSchema.validate(await request.json());

    const updatedTodo = await prisma.todo.update({ 
      where: { id: params.id }, 
      data: { complete, description } 
    });

    return NextResponse.json(updatedTodo);

  } catch (error) {

    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'An error occurred' },
      { status: 400 }

    )
  }
}

import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { boolean, object, string } from "yup";

interface Segments {
  params: {
    id: string;
  };
}
export async function GET(request: Request, { params }: Segments) {
  const { id } = params;
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (todo === null) {
    return NextResponse.json(
      {
        message: `El valor ${id} no responde a una id`
      },
      {
        status: 404
      }
    );
  }
  return NextResponse.json({
    message: "campo visible",
    todo
  });
}
const putSchema = object({
  complete: boolean().optional(),
  description: string().optional()
});

export async function PUT(request: Request, { params }: Segments) {
  const { id } = params;
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    return NextResponse.json(
      {
        message: `El valor ${id} no responde a una id`
      },
      {
        status: 404
      }
    );
  }
  try {
    const body = await putSchema.validate(await request.json());

    const updatedTodo = await prisma.todo.update({ where: { id }, data: body });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error),{status:400};
  }
}

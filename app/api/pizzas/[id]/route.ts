import pizzas from "@/data/pizzas.json";
import { PizzaType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const pizza = pizzas.pizzas.find(
      (item: PizzaType) => item.id.toString() === params.id.toString()
    );

    if (!pizza) {
      return new NextResponse("not found", { status: 404 });
    }

    return NextResponse.json({
      pizza,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

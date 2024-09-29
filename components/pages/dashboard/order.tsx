import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Package } from "lucide-react";
import { OrderDetailsModal } from "./order-details-modal";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TOrder = {
    status: "Em rota"|"Finalizado"|"Avaliado"
}

export function Order (
    {status}:TOrder
) {
    return (
            <Card className="min-w-fit overflow-hidden">
              <CardContent className="grid grid-cols-4 items-center gap-4 py-4">
                <div className="flex items-center gap-2 col-span-3">
                  <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/bag.png"
                    width="64"
                  />
                  <div className="">
                    <div className="font-medium">Pedido #1456</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      IFood - Restaurante Sabor Caseiro
                    </div>
                  </div>
                </div>
                <OrderDetailsModal>
                  <button className="ml-auto bg-primary p-2 rounded-full">
                    <Package className="text-white" />
                  </button>
                </OrderDetailsModal>
              </CardContent>
              <CardFooter className={cn("p-0 py-1 ", status == "Em rota"?"bg-red-500" :status == "Finalizado"?"bg-green-500" :status == "Avaliado"?"bg-primary" :"")  }>
                <p className="mx-auto font-semibold text-white">{status}</p>
              </CardFooter>
            </Card>
    )   
}
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CondominiumCard(){
    return(
        <Card>
            <CardContent className="flex rounded-lg p-0 relative overflow-hidden">
                <Image
                    alt="Product image"
                    className="aspect-video object-cover"
                    height="1920"
                    src="/dashboard/condominio.png"
                    width="1920"
                />
                <div className="absolute bottom-0 w-full px-6 pb-4 pt-8 bg-gradient-to-t from-gray-900 text-white font-semibold">
                    <p>Residencia das Flores</p>
                    <p>Rua das Acácias, 123</p>
                </div>
            </CardContent>
        </Card>
    )
}
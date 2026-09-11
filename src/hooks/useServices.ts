"use client";

import { useLocale } from "next-intl";
import { SingleServicesEnglish, DataServicesEnglish, DataServicesSpanish, SingleServicesSpanish } from "@/data/services";
import { CartItem } from "@/context/CartContext";
import { formatPrice } from "@/lib/price";

export function useProduct(id: string) {
    console.log(id)
    const locale = useLocale()

    const services = locale == "es" ? SingleServicesSpanish : SingleServicesEnglish;
    const data = locale == "es" ? DataServicesSpanish : DataServicesEnglish;

    const target: CartItem = {
        id: 0,
        nombre: "",
        precio: 0,
        precioFormateado: "",
        imagen: "",
        cantidad: 1
    };

    for (const service of services) {
        if (service.id.toString() == id) {
            target.id = service.id;
            target.nombre = service.nombre;
            target.precio = service.precio;
            target.precioFormateado = formatPrice(service.precio);
            target.imagen = service.imagen;
        }
    }

    for (const pack of data) {
        if (pack.id.toString() == id) {
            target.id = pack.id;
            target.nombre = pack.nombre;
            target.precio = pack.precio;
            target.precioFormateado = formatPrice(pack.precio);
            target.imagen = pack.imagen;
        }
    }

    return target;
}
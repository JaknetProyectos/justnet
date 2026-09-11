import { useProduct } from "@/hooks/useServices";
import { useTranslations } from "next-intl";


export function CartItemRow({ item, formatPrice }: { item: any, formatPrice: (val: number) => string }) {
    const t = useTranslations("cart");
    // Si necesitas llamar a un Hook para obtener o sincronizar los datos del servicio en tiempo real:
    // const serviceData = useService(item.id);
    const serviceData = useProduct(item.id)
    const qty = serviceData.cantidad ?? item.quantity ?? 1;
    const lineTotal = serviceData.precio * qty;

    return (
        <div
            key={serviceData.id}
            className="flex gap-4 rounded-[28px] border border-zinc-800 bg-zinc-950 p-4 transition-transform duration-300 hover:-translate-y-0.5"
        >
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                <img
                    src={serviceData.imagen}
                    alt={serviceData.nombre}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h4 className="text-lg font-bold leading-tight text-zinc-100">
                            {serviceData.nombre}
                        </h4>
                        <p className="mt-1 text-sm text-zinc-400">
                            {t("quantity")}: {qty}
                        </p>
                    </div>

                    <div className="shrink-0 text-right">
                        <p className="text-sm text-zinc-400">
                            {t("subtotal")}
                        </p>
                        <p className="font-bold text-amber-400">
                            {formatPrice(lineTotal)}
                        </p>
                    </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                    $ {serviceData.precio} MXN {t("beforeVat")}
                </p>
            </div>
        </div>
    );
}
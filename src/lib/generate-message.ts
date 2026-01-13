import { useCartStore } from "@/stores/cart-store"
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = () => {
    const { name, address } = useCheckoutStore.getState()
    const { cart } = useCartStore.getState()

    const orderProducts = []
    for(const item of cart) {
        orderProducts.push(`${item.quantity}x ${item.product.name}`)
    }

    return `**Dados do cliente:**
Nome: ${name}
Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
------
**Pedido:**
${orderProducts.join("\n")}
`
}
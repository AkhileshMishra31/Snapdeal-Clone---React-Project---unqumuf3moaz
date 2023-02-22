
export const getTotalQuantity = (cart) => {
    let total = 0
    cart.forEach(item => {
        total += item.quantity
    })
    return total
}

export const getTotal = (cart) => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
        totalPrice += item.price * item.quantity
    })
    return totalPrice;
}

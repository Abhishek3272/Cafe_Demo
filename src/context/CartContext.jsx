import { createContext, useContext, useState, useCallback } from 'react'
import { useToast } from './ToastContext.jsx'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [activeOrder, setActiveOrder] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const { showToast } = useToast()

  const openCart = useCallback(() => setCartOpen(true), [])
  const closeCart = useCallback(() => setCartOpen(false), [])

  const addToCart = useCallback(
    (item, quantityToAdd = 1) => {
      // Returning to the cart view resets any previously displayed order confirmation
      setActiveOrder(null)

      setCart((prev) => {
        const existing = prev.find((i) => i.name === item.name)
        if (existing) {
          return prev.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + quantityToAdd } : i
          )
        }
        return [...prev, { ...item, quantity: quantityToAdd }]
      })

      showToast(`Added ${quantityToAdd > 1 ? `${quantityToAdd}x ` : ''}${item.name} to your cart! 🧈`)
    },
    [showToast]
  )

  const updateDishQty = useCallback((dishName, delta) => {
    setCart((prev) => {
      const next = prev.map((item) => {
        if (item.name === dishName) {
          return { ...item, quantity: item.quantity + delta }
        }
        return item
      })
      return next.filter((item) => item.quantity > 0)
    })
  }, [])

  const getDishQty = useCallback(
    (dishName) => {
      const item = cart.find((i) => i.name === dishName)
      return item ? item.quantity : 0
    },
    [cart]
  )

  const adjustQty = useCallback((index, delta) => {
    setCart((prev) => {
      const next = prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + delta } : item
      )
      return next.filter((item) => item.quantity > 0)
    })
  }, [])

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const checkout = useCallback(() => {
    if (cart.length === 0) {
      showToast('Your cart is empty! Add items first.')
      return
    }

    const orderId = Math.floor(100000 + Math.random() * 900000)
    setActiveOrder({
      orderId,
      items: cart,
      totalAmount: totalPrice,
      status: 'Preparing',
    })
    setCart([])
  }, [cart, totalPrice, showToast])

  const trackOrder = useCallback(() => {
    if (!activeOrder) return
    showToast(
      `🍳 Order #${activeOrder.orderId} is being prepared by Chef Samadhan Patil! Est. time: 15 mins.`
    )
  }, [activeOrder, showToast])

  const continueShopping = useCallback(() => {
    setActiveOrder(null)
    setCartOpen(false)
  }, [])

  const value = {
    cart,
    activeOrder,
    cartOpen,
    openCart,
    closeCart,
    addToCart,
    adjustQty,
    updateDishQty,
    getDishQty,
    totalCount,
    totalPrice,
    checkout,
    trackOrder,
    continueShopping,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}

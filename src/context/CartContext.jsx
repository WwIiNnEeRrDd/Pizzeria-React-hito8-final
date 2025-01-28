import { createContext, useState } from "react";
import { pizzaCart } from "../utils/pizzas";
import { formatter } from "../utils/formatter";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [pizzaCartTotal, setPizzaCartTotal] = useState(pizzaCart);

    const handleAddCount = (id) => {      
        setPizzaCartTotal((prevCart) => {
            return prevCart.map((cart) => {
                if(cart.id === id){
                    return {...cart, count: cart.count + 1 };
                }else{
                    return cart;
                }
            })
        })
    }

    const handleRestCount = (id) => {
    
        setPizzaCartTotal((prevCart) => {

            return prevCart.map((cart) => {
                if(cart.id === id && cart.count > 0){
                    return {...cart, count: cart.count - 1 };
                }else{
                    return cart
                }
            }).filter((cart) => cart.count > 0);
        })
    }

    const calculateTotal = () => {
        let totalPrice = 0;
        pizzaCartTotal.forEach(cart => {
            totalPrice += cart.price * cart.count;
        });
        return formatter(totalPrice);
    }

    const addToCart = (product) => {
        setPizzaCartTotal((prevCart) => {
            const pizzaExists = prevCart.find((item) => item.id === product.id);
    
            if (pizzaExists) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                const newProduct = { ...product, count: 1 };
                return [...prevCart, newProduct];
            }
        });
    };
    
    const values = {
        handleAddCount,
        handleRestCount,
        calculateTotal,
        addToCart,
        pizzaCartTotal
    }

    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )

}


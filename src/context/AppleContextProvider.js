"use client"
import { useContext, createContext, useState } from 'react';


const AppleContext = createContext(null);

const AppleContextProvider = ({ children }) => {
    const [Cart, SetCart] = useState([]);
    const HandleDelete = (id) => {
        const filterdata = Cart.filter((val) => val.id !== id);
        SetCart(filterdata);
    }
    const HandleQuantity = (id, Quan) => {
        const updatedCart = Cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: Quan };
            }
            return item;
        });
        SetCart(updatedCart);
    }
    function calculateInstallment(fullPrice, annualInterestRate, numberOfMonths) {
        let totalPayable = fullPrice;
        let interest = (totalPayable * annualInterestRate * numberOfMonths) / 100;
        let totalAmount = totalPayable + interest;
        let installment = totalAmount / numberOfMonths;
        return installment.toFixed(2);
    }
    const State = { Cart, SetCart, HandleDelete, HandleQuantity, calculateInstallment };
    return <AppleContext.Provider value={State}>
        {children}
    </AppleContext.Provider>
}

const useApple = () => {
    const apple = useContext(AppleContext);
    if (!apple) throw new Error("useApple must be used within an AppleContextProvider");
    return apple;
};



export { AppleContextProvider, useApple };
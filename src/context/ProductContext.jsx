import { createContext, useState } from "react";


const ProductContext = createContext();


const ProductProvider = ({children}) => {

    const [categoryActive, setCategoryActive] = useState(0);

    return (
        <ProductContext.Provider value={{
            categoryActive,
            setCategoryActive
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export {
    ProductProvider
}
export default ProductContext;
const ProductReducer =(state,action)=>
{
    switch(action.type){
        case "API_LOADING":
            
                return {
                    ...state,
                    isLoading: true,
                };
            
         case "SET_API_DATA":
                    
                        const featureData = action.payload.filter((curElem)=>{
                           return curElem.featured === true;
                        })
                        return {
                            ...state,
                            isLoading: false,
                            products: action.payload,
                            featuredproducts: featureData,
                            
                        };

                        case "API_ERROR":
                
                        return {
                            ...state,
                            isLoading: false,
                            isError: true,
                        }
                    

                    default:
                        return state;
    }
};

export default ProductReducer;
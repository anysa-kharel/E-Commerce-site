import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productreducer";

const AppContext= createContext();

const API="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading: false,
    isError: false,
    products: [],
    featuredproducts: [],
}

const AppProvider = ({children}) =>
{

    const[state,dispatch]=useReducer(reducer,initialState);

    const getProducts=async (URL)=>
    {
     dispatch({type:"API_LOADING"});
 try{
    const res= await axios.get(URL);
        const products= await res.data;

        dispatch({type:"SET_API_DATA", payload: products});
 }   
 catch(error){
    dispatch({type:"API_ERROR"});
 }    

    } ;
      
    

    useEffect(()=> {
        getProducts(API);
    },[])


    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext =() =>
{
    return useContext(AppContext);
}

export {AppProvider, useAppContext}
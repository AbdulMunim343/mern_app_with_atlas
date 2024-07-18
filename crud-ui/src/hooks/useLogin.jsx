import { useState } from "react";
import {useAuthContext} from './useAuthContext';
import { toast } from "react-toastify";

export const useLogin = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoding] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async(email,password) =>{
        setIsLoding(true);
        setError(null);

        const response = await fetch('https://mern-app-with-atlas.vercel.app/api/user/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json',},
            body: JSON.stringify({email,password})
        });

        const data = await response.json();

        if(!response.ok){
            setIsLoding(false);
            setError(data.error);
        }

        if(response.ok){
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(data));

            //updated the auth context
            dispatch({type:'LOGIN',payload:data});
            toast.success("Logged in successfully!");
            setIsLoding(false);
        }

    }

    return {signup,isLoading,error};
}
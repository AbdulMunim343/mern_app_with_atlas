import { useState } from "react";
import {useAuthContext} from './useAuthContext';
import { toast } from "react-toastify";
import APP_BASE_URL from "../../config";

export const useSignup = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async(email,password) =>{
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${APP_BASE_URL}/api/user/signup`,{
            method:'POST',
            headers:{'Content-Type': 'application/json',},
            body: JSON.stringify({email,password})
        });

        const data = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(data.error);
        }

        if(response.ok){
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(data));

            //updated the auth context
            dispatch({type:'LOGIN',payload:data});
            toast.success("Account created successfully!")
            setIsLoading(false);
        }

    }

    return {signup,isLoading,error};
}
import { useEffect, useState } from "react"


export const IsOnline = () =>
{
    const [status,setStatus] = useState(true);

    useEffect(()=>
    {  
        const checkOnline = () =>
        {
           setStatus(true);
        }
        const checkOffline = () =>
        {
            setStatus(false);
        }

        window.addEventListener("online",checkOnline);
        window.addEventListener("offline",checkOffline);
     
    // return () =>
    // {
    //     window.removeEventListener("online",checkOnline);
    //     window.removeEventListener("offline",checkOffline);
    // }

    },[]);
    return status;
}

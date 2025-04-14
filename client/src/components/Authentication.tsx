"use client"
import React, { ReactNode, useEffect } from 'react'
import Spinner from './Spinner';

const Authentication = ({children}:{children:React.ReactNode}) => {
    const [flag,setFlag] = React.useState(false);
    const [loading,setLoading] = React.useState(true);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setFlag(true);
        } else {
            setFlag(false);
        }
        setLoading(false);
    },[]);

    if(loading){
        return <div><Spinner/></div>
    }

    if(flag){
        return <>{children}</>
    }

  return (
    <div>Not Authentication</div>
  )
}

export default Authentication
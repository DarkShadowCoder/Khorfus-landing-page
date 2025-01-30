import RootLayout from "./layout";
import React from "react";

export default function SignIn(
    {
        children
    }:{
            children: React.ReactElement
        }
){
    return(
        <div className=" w-screen ">
            <RootLayout className="bg-neutral-900 text-white/85" >
                <main className=" w-full h-full flex items-center justify-center">
                    {children}
                </main>
            </RootLayout>
        </div>
    )
}
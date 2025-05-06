import { Navbar } from "./elements/Navbar";
import {Footer} from "./elements/Footer"
import { useEffect } from "react";

interface LayoutProps{
    title:string;
    // since the layout is wrapper component we gonna make it accept childrens
    children:React.ReactNode;
}

export const Layout = ({title, children}:LayoutProps ) =>{
    useEffect(()=>{
        document.title=title;
        // run some code when the component is mnted--in thiz case wen the title changes
    }, [title])

    // return jsx Fragment
    return <>
    {/* put the structure of our website */}
        <Navbar/>

        {/* wrapping the childr with some style that will apply in all the section  */}
        <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
            {children}
        </main> 
        {/*will be all the sections in our website */}

        <Footer/>
    </>
}
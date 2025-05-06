
interface ContainerProps{
    // we gonna need children bcz we are going to wrap around smething
    children:React.ReactNode;
    // and also there gonna accept a className wich is optional
    className?:string
    // means if u want to extend some custom styling to [Container] the do so if u want
}

export const Container = ({ children,className="" }:ContainerProps) =>{
    return(
        <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>
            {children}
        </div>
    )
};

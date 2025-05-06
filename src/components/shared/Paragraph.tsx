
interface ParagraphProps{
    // we gonna need children bcz we are going to wrap around smething
    children:React.ReactNode;
    // and also there gonna accept a className wich is optional
    className?:string
    // means if u want to extend some custom styling to [Container] the do so if u want
}

// I want every Paragraph to take children nodes/elements and to be a text and be of a certain color
export const Paragraph = ({ children,className="" }:ParagraphProps) =>{
    return(
        <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>
    )
};

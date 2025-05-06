
interface ButtonProps{
    className?:string;
    children:React.ReactNode;
    onClick?:() => void;
}

export const Button = ({ onClick, children, className="" }:ButtonProps) =>{
    return(
        <button 
        onClick={onClick}
        className={` px-6 py-5 rounded-full outline-none cursor-pointer relative overflow-hidden
                    border border-transparent bg-violet-600 ${className}`}
        >
            {children}
        </button>
    )
};

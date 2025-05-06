import { create } from "zustand";
import { persist } from "zustand/middleware";


type Theme = "light" | "dark";

interface ThemeStore{
    theme:Theme;
    toggleTheme:()=>void;
}

// to create a store in zustand, it's going to be represented by a custom hook. The create() function allows us to
// specify how a theme/store it's going to look like....persist() middleware help in making sure that the theme
// is still available even after create() finish executing or user refreshes the app

//persist takes 2 argument, a callback function ....persist(()=>({}).... and an object ...{ name:"theme"}... with the
// value of the current state of the theme from the local storage ------name:"current_theme"----
export const useThemeStore = create<ThemeStore>()(
    persist((set, get)=>({
        // check if the user has the theme undefined, if so check whether the user prefers theme dark or light
        theme:typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" :"light",
        toggleTheme:()=>{
            // bt the wen we toggle the theme, then we 1st need to get the current state of the theme
            const newTheme:Theme=get().theme === "light" ? "dark" :"light";
            if(typeof document !=="undefined"){
                document.documentElement.classList.toggle("dark", newTheme==="dark");
            }
            set({theme:newTheme});
            // now the above code wil manualy change the theme
        },
    }), { name:"theme", onRehydrateStorage:()=>(state)=>{
        if (state?.theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    }})
);
'use client'
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </Provider>
        </>
    )
}
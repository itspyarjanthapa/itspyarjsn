import { createContext, useContext, useEffect, useState } from "react"

export type ThemeColor = "default" | "rose" | "blue" | "green" | "orange" | "violet"

type ThemeColorProviderProps = {
    children: React.ReactNode
    defaultThemeColor?: ThemeColor
    storageKey?: string
}

type ThemeColorProviderState = {
    themeColor: ThemeColor
    setThemeColor: (theme: ThemeColor) => void
}

const initialState: ThemeColorProviderState = {
    themeColor: "default",
    setThemeColor: () => null,
}

const ThemeColorProviderContext = createContext<ThemeColorProviderState>(initialState)

export function ThemeColorProvider({
    children,
    defaultThemeColor = "default",
    storageKey = "vite-ui-theme-color",
}: ThemeColorProviderProps) {
    const [themeColor, setThemeColor] = useState<ThemeColor>(
        () => (localStorage.getItem(storageKey) as ThemeColor) || defaultThemeColor
    )

    useEffect(() => {
        const root = window.document.body
        root.setAttribute("data-theme-color", themeColor)
    }, [themeColor])

    const value = {
        themeColor,
        setThemeColor: (theme: ThemeColor) => {
            localStorage.setItem(storageKey, theme)
            setThemeColor(theme)
        },
    }

    return (
        <ThemeColorProviderContext.Provider value={value}>
            {children}
        </ThemeColorProviderContext.Provider>
    )
}

export const useThemeColor = () => {
    const context = useContext(ThemeColorProviderContext)

    if (context === undefined)
        throw new Error("useThemeColor must be used within a ThemeColorProvider")

    return context
}

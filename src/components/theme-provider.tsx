import { createContext, useContext, useLayoutEffect, useState } from "react"
import { flushSync } from "react-dom"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

type DocumentWithViewTransition = Document & {
    startViewTransition?: (callback: () => void) => void
}

const applyThemeToDocument = (theme: Theme) => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light"

        root.classList.add(systemTheme)
    } else {
        root.classList.add(theme)
    }
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    useLayoutEffect(() => {
        applyThemeToDocument(theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (nextTheme: Theme) => {
            localStorage.setItem(storageKey, nextTheme)

            const updateTheme = () => {
                applyThemeToDocument(nextTheme)
                setThemeState(nextTheme)
            }

            const transitionDocument = document as DocumentWithViewTransition
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches

            if (transitionDocument.startViewTransition && !prefersReducedMotion) {
                transitionDocument.startViewTransition(() => {
                    flushSync(updateTheme)
                })
            } else {
                updateTheme()
            }
        },
    }

    return (
        <ThemeProviderContext.Provider value={value} >
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}

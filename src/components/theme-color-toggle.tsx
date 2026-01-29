import { useThemeColor, ThemeColor } from "@/components/theme-color-provider"
import { cn } from "@/lib/utils"
import { Palette } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const availableColors: { name: ThemeColor; color: string }[] = [
    { name: "default", color: "hsl(189 95% 40%)" },
    { name: "rose", color: "hsl(340 75% 45%)" },
    { name: "blue", color: "hsl(221 83% 53%)" },
    { name: "green", color: "hsl(142 76% 36%)" },
    { name: "orange", color: "hsl(24 95% 50%)" },
    { name: "violet", color: "hsl(262 83% 48%)" },
]

export function ThemeColorToggle() {
    const { themeColor, setThemeColor } = useThemeColor()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="fixed top-16 right-4 z-50 rounded-full backdrop-blur-md bg-background/50 border-white/20">
                    <Palette className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle theme color</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Theme Color</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="p-2 grid grid-cols-3 gap-2">
                    {availableColors.map(({ name, color }) => (
                        <DropdownMenuItem
                            key={name}
                            className={cn(
                                "flex items-center gap-2 cursor-pointer rounded-md p-2 focus:bg-accent focus:text-accent-foreground",
                                themeColor === name && "bg-accent/20"
                            )}
                            onClick={() => setThemeColor(name)}
                        >
                            <div
                                className="h-6 w-6 rounded-full border border-border"
                                style={{ backgroundColor: color }}
                            />
                        </DropdownMenuItem>
                    ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

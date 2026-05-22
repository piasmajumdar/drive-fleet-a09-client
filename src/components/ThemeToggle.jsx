"use client";
import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();


    return (
        <Switch onChange={() => setTheme(theme === "light" ? "dark" : "light")}>
            {({ isSelected }) => (
                <>
                    <Switch.Control
                        className={`h-[31px] w-[51px] bg-red-500 ${isSelected ? "bg-transparent shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                    >
                        <Switch.Thumb
                            className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
                        >
                            <Switch.Icon className="rounded-full">
                                {isSelected ? (
                                    <Sun className="size-4 rounded-full text-red-600" />
                                ) : (
                                    <Moon className="size-4 rounded-full text-red-600" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </>
            )}
        </Switch>
    );
};

export default ThemeToggle;
import { useRouter } from 'next/router'

export function switchThemeDark() {
        document.documentElement.dataset.theme = "dark";
    }

export function switchThemeLight() {
        document.documentElement.dataset.theme = "light";
    }

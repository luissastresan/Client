import NavBar from '../../components/NavBar/NavBar'
import Card from '../../components/Card/Card'
import { switchThemeDark } from '../../helpers/helpers'
import { switchThemeLight } from '../../helpers/helpers'
import { useRouter } from 'next/router'

export default function MainPage() {

    const router = useRouter()

    function redirectToCatalogMovie() {
        router.push('/CatalogMoviePage')
    }

    return (
        <div>
            <NavBar switchThemeDark={switchThemeDark} switchThemeLight={switchThemeLight}/>
            <Card redirectToCatalogMovie={redirectToCatalogMovie}/>
            <style jsx global>{`
                :root {
                    --bg-color: white;
                    --primary-color: black;
                    --secondary-color: rgb(113, 128, 150);
                }

                [data-theme="dark"] {
                    --bg-color: #121212;
                    --primary-color: #f4f4f6;
                    --secondary-color: #8999b0;
                }

                body {
                    background: var(--bg-color);
                    transition: background 0.5s;
                }

                h1 {
                    color: var(--primary-color);
                }

                h3 {
                    color: var(--secondary-color);
                }
            `}</style>
        </div>
    )
}
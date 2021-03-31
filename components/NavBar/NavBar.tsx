import { useRouter } from 'next/router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BiExit } from "react-icons/bi"




export default function NavBar( { switchThemeDark, switchThemeLight} ) {
    const router = useRouter()

     const logOut = () => {
        router.push('/LoginPage')
    }

    const stylesIcon = {
        marginLeft: "10px",
        cursor: "pointer",
        fontSize: "xx-large"
    }

    const stylesDarkMode = {
        marginRight: "800px"
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>FlySense</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav style={{alignItems: "center"}}>
                    <Nav.Link onClick={switchThemeLight}>Light mode</Nav.Link>
                    <Nav.Link onClick={switchThemeDark} style={stylesDarkMode}>
                        Dark mode
                    </Nav.Link>
                        <Navbar.Text>
                            Signed in as: <span>Admin</span>
                            <BiExit  onClick={logOut} style={stylesIcon}/>
                        </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
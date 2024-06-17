import Link from 'next/link'

const navItems = [
    { path: '/pages/about', text: 'About' },
    { path: '/pages/contact', text: 'Contact' },
]

export const Navbar = () => {
    return (
        <nav>
            <Link href='/'>Home</Link>

            {navItems.map(({ path, text }) => (
                <Link key={path} href={path}>{text}</Link>
            ))}
        </nav>
    )
}
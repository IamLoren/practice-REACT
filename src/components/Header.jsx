export const Header = ({title}) => {
    return (
        <header>
            <a href="#">
                {title}
            </a>
            <nav>
                <ul>
                    <li>Home page</li>
                    <li>ToDo</li>
                    <li>Users</li>
                </ul>
            </nav>
        </header>
    )
}
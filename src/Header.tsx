import PropsType from "./PropsType";

function Header(props: PropsType) {
    return (
        <header>
            <h2>
                {props.name}
            </h2>
        </header>
    )
}

export default Header;
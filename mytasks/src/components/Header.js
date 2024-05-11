import Logo from "../assets/logo.png"

export const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="MyTasks Logo" />
                <span>MyTasks</span>
            </div>
        </header>
    )
}
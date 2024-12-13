import "./headerStyle.css";

const Header = () => {
    return (
        <section>
            <header className="mx-auto max-w-7xl text-white">
                <nav className="p-6 flex justify-between items-center">
                    <h1 className="text-xl font-semibold tracking-widest text-pink-400">ITMIVHS</h1>
                    <ul className="flex flex-row gap-8 justify-end font-medium text-sm">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#project">Project</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="#regist">Gabung</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    );
};

export default Header;

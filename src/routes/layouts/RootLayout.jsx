import { Outlet } from "react-router";
import { root } from "../../main.jsx";
import { NavLink } from "react-router";

function MainDesktopNavigation() {
    return (
        <>
            <nav
                className="hidden md:grid md:grid-cols-3 text-xl font-medium"
                aria-label="main"
            >
                <NavLink to='/' end
                    className="hover:bg-bg-primary/50 hover:duration-300 border-l-4 border-accent-dark pl-2"
                >
                    Index
                </NavLink>
                <NavLink to='/about' end
                    className="hover:bg-bg-primary/50 hover:duration-300 border-l-4 border-accent-dark pl-2"
                >
                    About
                </NavLink>
                <NavLink to='/projects' end
                    className="hover:bg-bg-primary/50 hover:duration-300 border-l-4 border-accent-dark pl-2"
                >
                    Projects
                </NavLink>
            </nav>
        </>
    );
}

function RootLayout() {
    root.className += "min-h-screen grid grid-col-1 grid-rows-[min-content_1fr_min-content] justify-stretch";
    return (
        <>
            <header className="bg-bg-secondary text-txt-lg sticky top-0 z-10 drop-shadow-lg">
                <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
                    <a
                        href="#hero"
                        className="flex items-center space-x-4 max-w-md"
                    >
                        <img
                            className="w-1/5"
                            src="#"
                            alt="logo"
                            title="logo"
                        />
                        <h1 className="text-3xl font-medium">evanmico.dev</h1>
                    </a>
                    <div className="min-w-fit">
                        <button
                            id="mobile-open-button"
                            className="text-3xl md:hidden focus:outline-none"
                        >
                            &#9776;
                        </button>
                        <MainDesktopNavigation/>
                    </div>
                </section>
            </header>
            <main className="bg-bg-primary flex flex-col justify-center items-center gap-y-2">
                <Outlet />
            </main>
            <footer className="to-bg-secondary bg-gradient-to-b from-bg-primary text-txt-lg sticky sm:static bottom-0 z-10 shadow-lg hover:duration-500 transition duration-200 hover:bg-bg-secondary">
                <section className="max-w-5xl mx-auto p-4 flex justify-center lg:justify-between items-center">
                    <a
                        href="#hero"
                        className="hidden lg:flex items-center space-x-2 max-w-md"
                    >
                        <img
                            className="w-1/6 -scale-x-100"
                            src="#"
                            alt="logo"
                            title="logo"
                        />
                        <h1 className="text-xl font-medium">My Socials:</h1>
                    </a>
                    <div className="min-w-full sm:min-w-max">
                        <button
                            id="mobile-open-button"
                            className="text-4xl sm:hidden focus:outline-none text-txt-sm flex justify-between min-w-full"
                        >
                            <p>⮝</p>
                            <p>⮝</p>
                        </button>
                        <nav
                            className="hidden sm:flex space-x-8 text-xl font-medium"
                            aria-label="socials"
                        >
                            <a
                                href="https://www.instagram.com/"
                                className="hover:opacity-90 border-l-4 border-accent-dark pl-2 flex space-x-2 place-items-center"
                            >
                                <img
                                    className="min-w-6"
                                    src="#"
                                    alt="logo"
                                    title="logo"
                                />
                                <p>Instagram</p>
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                className="hover:opacity-90 border-l-4 border-accent-dark pl-2 flex space-x-2 place-items-center"
                            >
                                <img
                                    className="min-w-6"
                                    src="#"
                                    alt="logo"
                                    title="logo"
                                />
                                <p>Instagram</p>
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                className="hover:opacity-90 border-l-4 border-accent-dark pl-2 flex space-x-2 place-items-center"
                            >
                                <img
                                    className="min-w-6"
                                    src="#"
                                    alt="logo"
                                    title="logo"
                                />
                                <p>Instagram</p>
                            </a>
                        </nav>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default RootLayout;



function Header() {

    return (
        <header>
            <nav className="navbar navbar-light bg-light fixed-top bg-primary-subtle">
                <a className="navbar-brand" href="/">
                        <img src="find-that-anime-main-logo.png" alt=""></img>
                        <img src="find-that-anime-logo.png" alt=""></img>
                        {/* <img src="src/assets/find-that-anime-logo.png" alt=""></img> */}
                </a>
                <img id="light-and-dark-mode" src="dark-mode.png" height="30" onClick={changeMode}></img>
                {/* <img id="light-and-dark-mode" src="src/assets/dark-mode.png" height="30" onClick={changeMode}></img> */}
                {/* <div className="form-check form-switch mx-4">
                    <input className="form-check-input p-2 checkbox" type="checkbox" role="switch" id="light-and-dark-mode-checkbox" defaultChecked onClick={myFunction}></input>
                    <label for="light-and-dark-mode-checkbox" class="checkbox-label">
                        <img src="src/assets/dark-mode.png" height="30"></img>
                    </label>
                </div> */}
            </nav>

        </header>
    );
}

export default Header

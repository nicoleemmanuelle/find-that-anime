
function Footer() {
    return (
        <footer>
            <footer className="bg-primary-subtle text-center text-lg-start">
                <div className="text-center p-3 text-primary" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    &copy; {new Date().getFullYear()} Copyright:&nbsp;
                    <a className="text-primary" href="/"><strong>find that anime</strong></a>
                    &nbsp;| Developed by:&nbsp;
                    <a className="text-primary" href="https://www.linkedin.com/in/nicole-emmanuelle-do%C3%B1a/" target="_blank"><strong>Nicole Emmanuelle B. Doña</strong></a>
                    &nbsp;| API used:&nbsp; 
                    <a className="text-primary" href="https://soruly.github.io/trace.moe-api/#/" target="_blank"><strong>trace.moe</strong></a>
                </div>
            </footer>
        </footer>
    );
}

export default Footer
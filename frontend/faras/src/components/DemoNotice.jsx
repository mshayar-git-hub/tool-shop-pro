import "./DemoNotice.css";

function DemoNotice() {
    const closeDemoNotice = () => {
        document.getElementById("demo-notice").style.display = "none";
    };

    return (
        <div id="demo-notice" className="demo-overlay">
            <div className="demo-modal">

                <div className="demo-icon">🚀</div>

                <h2>Portfolio Demo Website</h2>

                <p>
                    Welcome! This website is a <strong>demo project</strong>{" "}
                    developed as part of my software development portfolio.
                </p>

                <p>
                    This project demonstrates various aspects of modern web
                    development, including the user interface, backend
                    functionality, API integration, authentication, and other
                    development concepts.
                </p>

                <p className="demo-note">
                    Please note that this is <strong>not a production website</strong>.
                    Some features, data, accounts, payments, or other
                    functionality may be limited, simulated, or provided
                    for demonstration purposes only.
                </p>

                <p>
                    Thank you for visiting and taking the time to explore my work. ❤️
                </p>

                <button onClick={closeDemoNotice}>
                    Continue to Website
                </button>

                <div className="demo-footer">
                    Developed for portfolio & demonstration purposes
                    <br/>- mshayar
                </div>

            </div>
        </div>
    );
}

export default DemoNotice;
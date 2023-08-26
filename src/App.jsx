import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <div>
                <header>
                    <Header />
                </header>
                <section>
                    <Home />
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}

export default App;

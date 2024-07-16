import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProviderSearch from "./pages/providerSearch";

function App() {

    


    return (
        <BrowserRouter>
            <div className="app">
                <Navigation />
                <div className="Main-Content">
                    <main className="content">
                        <div className="inner-content">
                            <Routes>
                                <Route path="/" element={<ProviderSearch />} />

                            </Routes>
                        </div>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
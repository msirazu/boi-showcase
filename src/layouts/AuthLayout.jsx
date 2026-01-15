import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <header>
              
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default AuthLayout;
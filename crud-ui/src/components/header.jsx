import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const HeaderNavbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const gotToLogin = () => {
        navigate('/login')
    }

    const goToSignup = () => {
        navigate('/signup')
    }

    const logoutUser = () => {
        logout()
    }
    return (
        <>
            <div className="w-full bg-blue-800 fixed top-0 font-mono">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2">
                        <img src='/devlogic-white.png' className='w-10 h-15' />
                        <span className="font-bold">Devlogic</span>
                    </div>

                    <div>
                        {!user && (
                            <>
                                <button type="button" onClick={gotToLogin} className="rounded-md mr-2.5 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Login</button>
                                <button type="button" onClick={goToSignup} className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Signup</button>
                            </>
                        )}

                        {user && (
                            <>
                                <span className="font-bold mr-2.5">{user ? user.email:''}</span>
                                <button type="button" onClick={logoutUser} className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Logout</button>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeaderNavbar;
import { useState } from "react";

function Hero() {
    const [user ,setUser] = useState()
    console.log({user})
    const handleLogin = () => {
        setUser({firstName: 'Adi', email: 'adi@gmail.com'})
    }
    const handleLogout = () => {
        setUser(null) //can put undefined or ()-falsy
    }
    // user    === undefined .(falsy)user is falsy (undefine)
    // !user   === truthy .not user is opposite so its truthy
    // !!user  === false (boolean)
    // !!!user === true (boolean)
    if(!user) { //if no user
        return <button onClick={handleLogin}>Login</button>
    }
    return (
        <>
        <h1>Hello {user.firstName}</h1>
        <button onClick={handleLogout}>Log out</button>
        </>
    )
}

export default Hero
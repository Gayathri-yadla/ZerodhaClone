import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const senddetails = async (e) => {
        e.preventDefault()
        const jwttoken = localStorage.getItem('token')

        const response = await fetch('https://ecommerce-65iw.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${jwttoken}`,
            },
            body: JSON.stringify({ username, password }),
        })

        const data = await response.json()
        alert(data.msg)
    }

    return (
        <>
            <section style={{ textAlign: 'center' }}>
                <h1 class='text-red-400'>Login to your account</h1>
                <form onSubmit={senddetails}>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type='text'
                        placeholder='username'
                    />
                    <br />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='password'
                    />
                    <br />
                    <button type='submit' class='bg-sky-400 rounded-b-md'>Login</button>
                </form>
            </section>
        </>
    )
}

export default Login
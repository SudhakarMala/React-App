import "./Login.css"

export function Login(){
    return(
        <>
            <main>
                <form>
                    <h1>User Login</h1>
                    <dl>
                        <dt>UserName</dt>
                        <dd><input type="text"/></dd>
                        <dt>Email</dt>
                        <dd><input type="email"/></dd>
                        <dt>Password</dt>
                        <dd><input type="password"/></dd>
                    </dl>
                    <button className="btn_login">Login</button>
                </form>
            </main>
        </>
    )
}
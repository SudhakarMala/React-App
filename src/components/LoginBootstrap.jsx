export function LoginBootstrap(){
    return(
        <>
            <main className="d-flex justify-content-center mt-4">
                <form className="border border-2 border-dark rounded p-4">
                    <h1 className="bi bi-person-fill">User Login</h1>
                    <dl>
                        <dt>UserName</dt>
                        <dd><input type="text" className="form-control"/></dd>
                        <dt>Email</dt>
                        <dd><input type="email" className="form-control"/></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control"/></dd>
                    </dl>
                    <button className="btn btn-primary w-100">Login</button>
                </form>
            </main>
        </>
    )
}
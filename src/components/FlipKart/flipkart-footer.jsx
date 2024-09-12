import './flipkart-footer.css'

export function FlipkartFooter(){
    return(
        <form className="mt-4 w-50" action="https://www.google.com" target='_blank'>
            <p className="footer-text">Ready to shop? Enter your email and regester/login.</p>
            <div className="input-group input-group-lg">
                <input type="text" placeholder="Your email address" className="form-control"/>
                <button type="email" className="btn btn-danger ms-2">
                    Get Started <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </form>
    )
}
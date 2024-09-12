import './flipkart-header.css'

export function FlipkartHeader(){
    return(
        <header className="p-4 text-white d-flex justify-content-between">
            <div>
                <span className="brand-title">FL!PC@₹T</span>
            </div>
            <div className="d-flex">
                <div className="input-group">
                    <span className="bi bi-translate input-group-text"></span>
                    <select className="form-select">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>
                <button className="btn btn-danger ms-2">Signin</button>
            </div>
        </header>
    )
}
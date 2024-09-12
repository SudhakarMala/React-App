import './flipkart-body.css'
import { FlipkartFooter } from './flipkart-footer'

export function FlipkartBody(){
    return(
        <main>
            <div className="main-title">Shop and get unlimited offers and discounts.</div>
            <div className="main-subtitle">Get anything starts from ₹199 only.</div>
            <FlipkartFooter />
        </main>
    )
}
import { FlipkartHeader } from './flipkart-header';
import { FlipkartBody } from './flipkart-body';
import './flipkart-index.css';

export function FlipkartIndex(){
    return(
        <div className="bg-image">
            <div className="bg-shade">
                <FlipkartHeader />
                <FlipkartBody />
            </div>
        </div>
    )
}
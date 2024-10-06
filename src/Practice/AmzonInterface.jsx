export function AmazonInterface() 
{
	var mobiles = [
		{Title: "Apple iPhone 16 Pro Max (256 GB) - Natural Titanium", Features: ["iOS 17", "256 GB", "6.9 Inches"], Rating: 5.0, InStock: true, Photo: "iProMax.jpg", Price: 167999},
		{Title: "Apple iPhone 16 Pro (128 GB) - White Titanium", Features: ["iOS 17", "256 GB", "6.3 Inches"], Rating: 3.3, InStock: false, Photo: "iPro.jpg", Price: 126999},
		{Title: "Apple iPhone 16 (128 GB) - Black", Features: ["iOS 17", "256 GB", "6.1 Inches"], Rating: 4.8, InStock: true, Photo: "i16.jpg", Price: 107999}
	]
	
	return(
		<>
			<h2 className="text-center mb-5 mt-5">New iPhones</h2>
			{
				mobiles.map(mobile => 
					<>
						<div className="row">
							<div className="col-3">
								<img src={mobile.Photo} style={{width: "100%"}}/>
							</div>
							<div className="col-6">
								<h3 className="text-primary">{mobile.Title}</h3>
								<div className="bg-success text-white p-1 rounded-pill text-center" style={{width: "70px"}}>
									{mobile.Rating} <span className="bi bi-star-fill text-white"/>
								</div>
								<div>{mobile.InStock == true ? <b className="text-success">In stock</b> : <b className="text-danger blink">Out of stock</b>}</div>
								<div className="mt-2">
									<ul>
										{
											mobile.Features.map(feature =>
												<li>{feature}</li> 
											)
										}
									</ul>
								</div>
							</div>
							<div className="col-3 h1">
								{mobile.Price.toLocaleString("en-in", {style: "currency", currency: "INR"})}
							</div>
						</div>
						<hr/>
					</>
				)
			}
		</>
	)
}
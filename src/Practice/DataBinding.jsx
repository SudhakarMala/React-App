export function DataBinding(){
    var category = ["Students", "Teachers", "Workers"];
	let obj = {
		Name: "Sudhakar",
		Exp: 2,
		Qualification: "BSc",
		Cities: ["Hyd", "Chennai","Mumbai"],
		Married: false,
		Skills:{Java: 5, CSS: 3}
	}
	var items = new Map();
	items.set(13, "It is roll number");
	items.set("Name", 11);
	
	items.delete(13);
    return(
        <>
            <h2>Data Binding</h2>
			<div className="btn-group-vertical">
				{
					category.map((cat) => 
						<button key={cat} className="btn btn-danger mb-2">{cat}</button>
					)
				}
			</div>
            <ol>
                {
                    category.map((cat) =>
                        <li key={cat}>{cat}</li>
                    )
                }
            </ol>

            <select>
                {
                    category.map(cat => 
                        <option key={cat}>{cat}</option>
                    )
                }
            </select>

            <ul className="list-unstyled">
                {
                    category.map(cat => 
                        <li key={cat}>
                            <input type="checkbox"/> <label>{cat}</label>
                        </li>
                    )
                }
            </ul>

            <table className="table table-hover w-25">
                <thead>
                    <tr>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map(cat =>     
                            <tr key={cat}>
                                <td className="d-flex justify-content-between">{cat} <button className="bi bi-trash btn btn-danger"></button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
			
			<label>Object Details</label>
			<div>{obj.Name}</div>
			<div>{(obj.Married) == true ? "Married" : "Unmarried"}</div>
			<dt>Cities</dt>
			<dd>
				<ol>
					{
						obj.Cities.map(city => 
							<li key={city}>{city}</li>
						)
					}
				</ol>
			</dd>
			
			<dt>Skills</dt>
			<dd>
				<ol>
					{ obj.Skills.Java }
				</ol>
			</dd>
			
			<label>Map Properties</label>
			<div>{items.get(13)}</div>
			<div>{items.get("Name")}</div>
        </>
    )
}
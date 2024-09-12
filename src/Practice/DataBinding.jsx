export function DataBinding(){
    var category = ["Students", "Teachers", "Workers"];
    return(
        <>
            <h2>Data Binding</h2>
            <ol>
                {
                    category.map((cat) =>
                        <li>{cat}</li>
                    )
                }
            </ol>

            <select>
                {
                    category.map(cat => 
                        <option>{cat}</option>
                    )
                }
            </select>

            <ul className="list-unstyled">
                {
                    category.map(cat => 
                        <li>
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
                            <tr>
                                <td>{cat}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
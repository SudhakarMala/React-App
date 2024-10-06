import React from "react"

export function DataBinding1() 
{
	var options = [
		{Title: "HTML", Description: "It is a markup language."},
		{Title: "CSS", Description: "It configures style for HTML."},
		{Title: "JavaScript", Description: "It is Scripting Language."}
	]
	
	return(
		<>
			<dl>
				{
					options.map(option =>
						<React.Fragment key={option.Title}>
							<dt>{option.Title}</dt>
							<dd>{option.Description}</dd>
						</React.Fragment> 
					)
				}
			</dl>
		</>
	)
}
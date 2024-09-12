export function Object1(){
    var data = {
        Id: 112,
        Name: "Sudhakar",
        Skills: "Java, CSS, HTML"
    }

    return(
        <>
            <h2>Member Details</h2>
            <dl>
                <dt>Id</dt>
                <dd>{data.Id}</dd>
                <dt>Name</dt>
                <dd>{data.Name}</dd>
                <dt>Skills</dt>
                <dd>{data.Skills}</dd>
            </dl>
        </>
    )
}
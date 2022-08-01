export function DropDown({ title, listItems }) {
    console.log(title, listItems);
    return (<>
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {title}
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {listItems.map((item, index) => (
                    <li key={index}><a className="dropdown-item" href="#">{item}</a></li>
                ))}
            </ul>
        </div> <br />
    </>
    );
}

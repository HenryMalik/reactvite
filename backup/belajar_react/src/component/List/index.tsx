function List(props) {
    const {data, display} = props;

    if (display) {
        return (
            <ul>
                {data.map((item) =>{
                    return <li>{item.name}</li>;
                })}
            </ul>
        )
    }
}

    export default List
function Flatlist(props) {
    const {title,children} = props
    return (
        <div>

            <span>{title}</span>

            {children}
        </div>
    )
}

export default Flatlist
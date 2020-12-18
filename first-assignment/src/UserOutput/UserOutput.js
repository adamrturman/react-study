import './UserOutput.css'

const UserOutput= (props) => {
    
    const { name } = props
    
    return (
        <div className="UserOutput">
            <h2>Input will appear below</h2>
            <p>{name}</p>
        </div>
    )
        
        
}

export default UserOutput
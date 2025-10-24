import "./Users.css"

export const User = ( {user}) => {
    return (
        <div className="user">
            <div>
                <div>Name</div>
                <div className="user-info">{user.fullName}</div>
            </div>
            <div>
                <div>Email</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
}
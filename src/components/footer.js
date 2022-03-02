import React from "react"

const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <p>&copy; All rights reserved {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer
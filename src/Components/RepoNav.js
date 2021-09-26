import React from 'react'
import { Link } from "react-router-dom"



function RepoNav() {
    return (
        <div>
            <ul className="repoNav">
                <Link to="/code" style={{ textDecoration: 'none' }} className="">
                    <li>
                        <img src="https://img.icons8.com/ios/20/3d3d3a/source-code.png"/>
                        <div>
                            Code
                        </div>
                    </li>
                </Link>
                <Link to="/ssues" style={{ textDecoration: 'none' }} className="focuse">
                    <li>
                        <img src="https://img.icons8.com/material-sharp/20/3d3d3a/security-guard.png"/>
                        <div>Issues</div> 
                        <span> 119</span>
                    </li>
                </Link>
                <Link to="/ull-requests" style={{ textDecoration: 'none' }}>
                    <li>
                        <img src="https://img.icons8.com/material-outlined/20/3d3d3a/pull-request.png"/>
                        <div>Pull requests</div> 
                        <span> 119</span>
                    </li>
                </Link>
                <Link to="/discussions" style={{ textDecoration: 'none',}}>
                    <li>
                        <img src="https://img.icons8.com/ios-glyphs/20/3d3d3a/communication.png"/>
                        <div>Discussions</div>
                    </li>
                </Link>
                <Link to="/actions" style={{ textDecoration: 'none' }}>
                    <li>
                        <img src="https://img.icons8.com/ios/20/3d3d3a/circled-play--v1.png"/>
                        <div>Actions</div>
                    </li>
                </Link>
                <Link to="/project" style={{ textDecoration: 'none' }}>
                    <li>
                        <img src="https://img.icons8.com/dotty/20/3d3d3a/project.png"/>
                        <div>Project</div> 
                        <span> 3</span>
                    </li>
                </Link>
                {/* <li><img src="https://img.icons8.com/material-outlined/20/3d3d3a/more.png"/></li> */}
            </ul>
        </div>
    )
}

export default RepoNav

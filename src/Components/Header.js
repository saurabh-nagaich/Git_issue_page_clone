import React from 'react'
import HeaderSection from './HeaderSection'
import Nav from './Nav'
import RepoNav from './RepoNav'

function Header() {
    return (
        <div className="header">
            <Nav />
            <HeaderSection />
            <RepoNav />
        </div>
    )
}

export default Header

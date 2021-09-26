import React from 'react'



function SearchBar() {
    return (
        <div className="searchBar">
            <div className="inputSearch">
                <div>                
                    <button id="filter-button" class="button">Filters</button>
                </div>
                <div class="searchBarMain">
                    <i class="material-icons searchBarSearchIcon noUserSelect">search</i>
                    <input type="text" name="header-search" value="" id="searchBarInput" placeholder="is:issue is:open" />
                    <i class="material-icons clearSearchBarField noUserSelect" onClick="resetInput()">clear</i>
                </div>
            </div>
            <div className="newIssuseBtn">
                <div className="searchBarBtn">
                    <div className="searchBarBtnmain1 searchBarBtnmain">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/20/3d3d3a/external-label-ecommerce-kiranshastry-lineal-kiranshastry-1.png"/>                        <div style={{marginLeft:"2px"}}>Labels</div>
                        <span> 119</span>
                    </div>
                    <div className="searchBarBtnmain2 searchBarBtnmain">
                        <img src="https://img.icons8.com/material-outlined/20/3d3d3a/valorant.png"/>                        <div style={{marginLeft:"2px"}}>Milestones</div>
                        <span> 119</span>
                    </div>
                </div>
                {/* <div className="btnIssue searchBarBtnmain">New issues</div> */}
            </div>

        </div>
    )
}

export default SearchBar

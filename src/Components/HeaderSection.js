import React from 'react'
import { connect } from 'react-redux'
import { fork, star, watch } from '../redux/Count/countAction'

function HeaderSection(props) {
    return (
        <div className="HeaderSection">
            <div className="headTitle">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADdElEQVRIieWWX0xTdxTHv6fthc4MdLRGksmfDH0ZvJisIyTleplDspA9jEySBY36gFtn3IMP2yDhbcl8WJMlzphlbIvNHtzA6JI2wULITWNoYiEmKlrIRBFBSFqUSlukvb+zB8FBW/snlr7s+/g7v3s+v9/5fXPuAf5vonRBRVEMAHYb4nFdrolFUZFmMpke9fX1aVmDGxoa3iguLv6+rrb2y8qqKkmny5kLTdNw986dpQfT04dVVXVm9VFTU9PP7qtX+XUVi8X4RGdnWFGUNxMZSVdRFGXH+xZLZ/PBgznfMlEGgwEWi2UbgLqkWNJJhHh3z969L59gfn6enU4nlZSUoL29HURpbZEkSZJARMUZwazXS5Lhv2WHw0EDLlerIOqor6//rLq6OjfyK5TRNUWSBBBZdUSVRqMxH0wAKW6cqC9sNrxnsXSZTSaUl5cXDmw0GmG1WvMGXFfGUvt8Pnx16tRKd3e3trq6Wjiw2+2G/8aNGq/X++PMzAznC5yx1FWVlYgZDL2lpaW1ZrM5L47OCnz4yBF8eujQR5IkQa/X54ubudRbpYzg/v5+fNza6m5ra3u4tLRUOLDf7wc9f348FAr1BQKBwplL2b8f848f3yvdvl2qqKgonLmsjY2wNjbmr1euacvNJYQAMydNIVsOHh8fFwD8ietpSx2JRODxeBCPxXIGapqG0bExHhsd/Vr1eAIZwUKIyMrKCgDAceEC/rx48RIR3WTmaSKqF8CmLkJEDGAUQpiY6J31dR2gMdH1knD4r1QHS+VSXUdHx5zD4dgVCATgcjoxPDysPZqd/aGlpeWbsrKyTZuj0Sj+vnz5F/POnZ982Nxs3hhjITA0NDQ1OzdX5/V6o6+uz5oUWT75a28vCyGYmbm7q4sVWT4/OTmZNNAFg0FWFOUPm80WSTXw/XT2LMuyvC+RkfKNVY/nHHS6t677fD01NTVFU/fvR5loda2sm6q0PoMtLCws2u32tzfG4rEYRkZGfLuCwfGswACgqup3AM5MTEzs1uv1z4j5W2Ym4MU/+lkohA8OHAD4RTNbXFysG7hypSwhTXzo2rUZAEkdL62rVVWNA3gAAIosY3l5GXa7HS6X6zdmfjI4OHj66LFjtLb3KYCn6fJlDd4oJprq6el5GA6HP1dVdQAAmPnS7Vu3fgfwT7Z51vUvOQ63WoEG4MsAAAAASUVORK5CYII=" />        
                <div className="headSection_text text">
                    <h3 style={{fontWeight:"normal",marginLeft:"5px"}}>facebook</h3>
                    <div style={{"margin-left":"5px","margin-right":"5px",fontSize:"1.4rem"}}>/</div>
                    <h3>Create-react-app</h3>       
                </div>
            </div>
            <div className="btn_collection">
                <div className="navBtn">
                    <div className="left_side_of_btn center" onClick={props.incWatch} >
                        <img src="https://img.icons8.com/material-outlined/20/3d3d3a/visible--v1.png"/>
                        <div style={{marginLeft:"2px"}}>Watch</div>
                    </div>
                    <div className="right_side_of_btn center">{props.watch}</div>
                </div>
                <div className="navBtn">
                    <div className="left_side_of_btn center" onClick={props.incStar} >
                        <img src="https://img.icons8.com/material-outlined/20/3d3d3a/star--v2.png"/>
                        <div style={{marginLeft:"3px"}}>Star</div>
                    </div>
                    <div className="right_side_of_btn center">{props.star}</div>
                </div>
                <div className="navBtn">
                    <div className="left_side_of_btn center"  onClick={props.incFork} >
                        <img src="https://img.icons8.com/ios-glyphs/20/3d3d3a/code-fork.png"/>
                        <div style={{marginLeft:"2px"}} >Fork</div>
                    </div>
                    <div className="right_side_of_btn center">{props.fork}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        fork: state.count.fork,
        star: state.count.star,
        watch: state.count.watch
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        incStar:()=>dispatch(star()),
        incFork:()=>dispatch(fork()),
        incWatch:()=>dispatch(watch()),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(HeaderSection)

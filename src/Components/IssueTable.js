import React, { useEffect, useState } from 'react'
import axios from "axios"

function IssueTable() {
    const [data,setData] = useState([])

    useEffect(async ()=>{
            const data = await axios("https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}");
            setData(data.data.items)
    },[])
    console.log(data);

    function gethours(timestamp){
        return new Date(timestamp).getHours()
    }
    return (
        <div className="issueTable">
            <div className="table_row">
                <ul>
                    <li>Author</li>
                    <li>Lable</li>
                    <li>Project</li>
                    <li>Milestonnes</li>
                    <li>Assignee</li>
                    <li>Sort</li>
                </ul>
            </div>
            <div className="table_body">
                {
                    data?data.map(el=>(el.body?
                        <div className="table_row">
                            <img className="exclamation_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADV0lEQVRIie2WTW8bVRSGn3M9sdrSVEJCqDRNBVWEkOLYqHYEvwFK3KjLblCXCNqOQ5pVq7CDtJHD1xLYwKqiiYv8J2I7TeIgJKS0grYq2xLaKJ6Ze1jYBH/MTByE2k3P6ujeM+9z35kz9154Hk8ppN/C1HJhWETzAu8ivAoMt6buIdxVtCxeUFp/+8v7/ws4s+oO4XFVhfOAs0e5FfjRGDN9+9T8b/8ZnK4UJhD9HhgEGqgugiyBvU1yoOms4R0HOQXkEZkEksAWwrn1bPGnfYMz1UsfKbIAGIEbGiRm1t+6fjduoWMV96QY5lDOAlaVi/Xx4ld9g1tOFwFVZbo+XizGAXsX7U4pfAYIwpkw5z3gzKo7pD6/AIOqFPYL7YJfV/gzib5Ryy08bJ833Q+ozyfAoMCNKGhqxc2lq66mq66mVtxcWM1arjiPclPgiK8y2z3fAU4tF4aB94GGBomZKDdi2QnLu8OKcxloqHA+s+oORYJFNA8kUF2MayRR2wjLu2Mjd21ToAQ46pOPBhveaaWlKDEA48hOWB4WVrQEoOxq94JRRgACI5U4MdHkrstEEP2qAcRqFUBoaoeD4RUADuz8ESe27T3ehT0OvMhXDRAc8h600uhvDGicyG6R98K/jg9rrOPDWwnTErZx4IcAzl8HjsWJOS8eaoO9HOv4iZM8BiDwoH28c9MXNlFeV2OzwK9RYj+Pzjbo92STIIsKCnfahzscK1pupR2tHxajy9NHR5enj+5VZ1TyAIKUO8Y7FucFJcBHZHKs4p6MEkvVLqYTxr+XMP7v6cqFVOTiau6INk344uitSHDrEP8OSIphLkpQ1Ch9NKJR5oCkin6z9max4xv37NUJMzALbKGczVTdqTDBeq5YD6xzIrDOifXxLzbCatLVSx8LTAKPbDDQs1eHH4s19z2UJUAFZtZyxfm93HVDQT4FxKATq7mFcndNZGeOVdwPRfgcMCg3rTiXN3LXNuOAozV3xChzLadWRS/Uswtfh9XG/hKZWuG0Vf1B4AjQEChZWAKzYg9u3wcw2wePI0FWVM7QbKQB4JFBz4U57QsMkK1OveRhrwAfsPdlzxflW0d0tvvg3zf4n2jeTGQC9DTwGm3XW4U7gpTF0Vvd3fs8nnn8DUjKTJdfHbjqAAAAAElFTkSuQmCC" />
                            <div className="row_data">
                                <h4>
                                    {el.body}
                                    {el.labels.length>0?el.labels.map(lab=>(lab.description?<span style={{background:`#${lab.color}`}}>{lab.description}</span>:null )):null}
                                </h4>
                                <p>#{el.user.id} opened {gethours(el.created_at)} hours ago by {el.user.login}</p>
                            </div>
                            <img className="message" src="https://img.icons8.com/material-outlined/24/000000/topic--v2.png"/>
                        </div>
                    :null)):null
                }
            </div>
        </div>
    )
}

export default IssueTable


{/* <div className="table_row">
                    <img className="exclamation_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADV0lEQVRIie2WTW8bVRSGn3M9sdrSVEJCqDRNBVWEkOLYqHYEvwFK3KjLblCXCNqOQ5pVq7CDtJHD1xLYwKqiiYv8J2I7TeIgJKS0grYq2xLaKJ6Ze1jYBH/MTByE2k3P6ujeM+9z35kz9154Hk8ppN/C1HJhWETzAu8ivAoMt6buIdxVtCxeUFp/+8v7/ws4s+oO4XFVhfOAs0e5FfjRGDN9+9T8b/8ZnK4UJhD9HhgEGqgugiyBvU1yoOms4R0HOQXkEZkEksAWwrn1bPGnfYMz1UsfKbIAGIEbGiRm1t+6fjduoWMV96QY5lDOAlaVi/Xx4ld9g1tOFwFVZbo+XizGAXsX7U4pfAYIwpkw5z3gzKo7pD6/AIOqFPYL7YJfV/gzib5Ryy08bJ833Q+ozyfAoMCNKGhqxc2lq66mq66mVtxcWM1arjiPclPgiK8y2z3fAU4tF4aB94GGBomZKDdi2QnLu8OKcxloqHA+s+oORYJFNA8kUF2MayRR2wjLu2Mjd21ToAQ46pOPBhveaaWlKDEA48hOWB4WVrQEoOxq94JRRgACI5U4MdHkrstEEP2qAcRqFUBoaoeD4RUADuz8ESe27T3ehT0OvMhXDRAc8h600uhvDGicyG6R98K/jg9rrOPDWwnTErZx4IcAzl8HjsWJOS8eaoO9HOv4iZM8BiDwoH28c9MXNlFeV2OzwK9RYj+Pzjbo92STIIsKCnfahzscK1pupR2tHxajy9NHR5enj+5VZ1TyAIKUO8Y7FucFJcBHZHKs4p6MEkvVLqYTxr+XMP7v6cqFVOTiau6INk344uitSHDrEP8OSIphLkpQ1Ch9NKJR5oCkin6z9max4xv37NUJMzALbKGczVTdqTDBeq5YD6xzIrDOifXxLzbCatLVSx8LTAKPbDDQs1eHH4s19z2UJUAFZtZyxfm93HVDQT4FxKATq7mFcndNZGeOVdwPRfgcMCg3rTiXN3LXNuOAozV3xChzLadWRS/Uswtfh9XG/hKZWuG0Vf1B4AjQEChZWAKzYg9u3wcw2wePI0FWVM7QbKQB4JFBz4U57QsMkK1OveRhrwAfsPdlzxflW0d0tvvg3zf4n2jeTGQC9DTwGm3XW4U7gpTF0Vvd3fs8nnn8DUjKTJdfHbjqAAAAAElFTkSuQmCC" />
                    <div className="row_data">
                        <h4>npx Create-react-app myapp is causing problem it is not starting please help <span className="yellow">issue:bug report</span> <span className="red">needs triage</span></h4>
                        <p>#92264 opened 3 hours ago by kandpalpankaj</p>
                    </div>
                    <img className="message" src="https://img.icons8.com/material-outlined/24/000000/topic--v2.png"/>
                </div> */}
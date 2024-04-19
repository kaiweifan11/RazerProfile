import React from 'react';
import { getActiveProfile } from '../../utils';

const RightPanel = (props) =>{
    const { profiles, active, interimProfile } = props;

    return (
        <div className="thx-window">
            <div className="sub-title flex">
                <h1 id="eqTitle" className="eq-title">{interimProfile?.name || getActiveProfile(profiles, active).name}</h1>
            </div>
            <div className="salute">
                Here's me paying a salute to everyone working in Razer. I've been using the Razer gaming mouse for years. Love your products and your brand.
                
                <br/><br/>  Thank you for the oppurtunity for this challenge. I thoroughly enjoyed it and I hope my solution is what you're looking for. Looking forward to hearing from you.
            </div>
        </div>
    )
}

export default RightPanel;
import React from 'react';
import { getIcon } from '../../utils';

const Profile = (props) =>{
    const { profile, index, isActive, handleClickProfile, interimProfile, handleProfileRename } = props;

    return (
        <div key={'profile' + index} className={`profile-item ${isActive? "active": ""}`} onClick={()=>handleClickProfile(profile.id)}>
            <div className="profile-row-item profile-icon">{getIcon(profile.name, isActive)} </div>
            {interimProfile && isActive? 
                (<input
                    autoFocus 
                    id="profileRename"
                    className="profile-item show"
                    placeholder="Enter Profile Name"
                    maxlength="25"
                    value={interimProfile.name !== "New Profile"? interimProfile.name : ''}
                    onChange={(e)=>handleProfileRename(e.target.value)}
                />) :
                (<div id={"profile_label_" + index}  className="profile-row-item profile-label">
                    {profile.name || "New Profile"}
                </div>)
            }
            
        </div>
    )
}

export default Profile;
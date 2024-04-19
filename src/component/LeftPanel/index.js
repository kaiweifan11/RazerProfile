import React, { useState } from 'react';
import "../../../assets/css/newProfile.css";
import { getToolbarIcon, getLastIndex, getProfilePosition, getActiveProfile, swap, getIsDefault } from '../../utils';
import Profile from '../Profile';
import { RazerIcon } from '../../utils/icons';

const LeftPanel = (props) =>{
    const { profiles, setProfiles, active, setActive, interimProfile, setInterimProfile, save } = props;
    const [ isShowDeleteCfm, setIsShowDeleteCfm ] = useState(false);

    const handleClickProfile = (id) =>{
        setActive(id)
    }
    
    const handleAdd = () =>{
        const newId = getLastIndex(profiles) + 1;
        const tempProfiles = [...profiles];
        const newProfile = {
            id: newId,
            name: "New Profile"
        }
        tempProfiles.push(newProfile)
        setProfiles(tempProfiles);
        setActive(newId);
        setInterimProfile(newProfile);
        save(tempProfiles);
    }

    const handleDelete = () =>{
        const tempProfiles = [...profiles];
        const index = getProfilePosition(profiles, active);
        tempProfiles.splice(index, 1);
        
        setProfiles(tempProfiles);
        setActive(tempProfiles[index-1].id);
        setIsShowDeleteCfm(false);
        save(tempProfiles);
    }

    const handleUp = () =>{
        if(isDisabled(0)) return;
        const index = getProfilePosition(profiles, active);
        const tempProfiles = swap([...profiles], index, index-1);
        setProfiles(tempProfiles);
        save(tempProfiles);
    }

    const handleDown = () =>{
        if(isDisabled(profiles.length-1)) return;
        const index = getProfilePosition(profiles, active);
        const tempProfiles = swap([...profiles], index, index+1);
        setProfiles(tempProfiles);
        save(tempProfiles);
    }

    const isDisabled = (index) =>{
        return getProfilePosition(profiles, active) === index;
    }

    const handleProfileRename = (val) =>{
        const tempProfile = {...interimProfile};
        tempProfile.name = val;
        setInterimProfile(tempProfile)
    }

    return (
        <div className="thx-drawer flex">
            <div className="main">
                <div className='razer-logo'>
                    <RazerIcon />
                </div>
                <div className="main-title">
                    Profile List
                </div>
            </div>
            <div id="profileWrapper" className="drawer-select flex">
                <div id="profileList" className="scrollable">
                    {profiles.map((profile, index)=>{
                        return (
                            <Profile 
                                key={'profile_' + index} 
                                profile={profile} 
                                index={index} 
                                isActive={active === profile.id} 
                                handleClickProfile={handleClickProfile}
                                interimProfile={interimProfile}
                                handleProfileRename={handleProfileRename}
                            />
                        )
                    })}
                </div>
                <div className="toolbar flex">
                    <div onClick={handleAdd} className="icon add" id="profileAdd">{getToolbarIcon("Add", false)}</div>
                    <div  className={`icon edit ${getIsDefault(active)? "hide": ""}`} id="profileEdit">{getToolbarIcon("Edit", false)}</div>
                    <div onClick={()=>setIsShowDeleteCfm(true)} className={`icon delete ${getIsDefault(active)? "hide": ""}`}>{getToolbarIcon("Delete", false)}</div>

                    <div onClick={handleDown} className={`icon down ${isDisabled(profiles.length-1) ? "disabled": ""}`} id="profileDown">{getToolbarIcon("ArrowDown", false)}</div>
                    <div onClick={handleUp} className={`icon up ${isDisabled(0) ? "disabled": ""}`} id="profileUp">{getToolbarIcon("ArrowUp", false)}</div>
                </div>
                <div id="profileDelCfm" className={`profile-del alert flex ${isShowDeleteCfm? 'show': ''}`}>
                    <div className="title">delete eq</div>
                    <div className="body-text t-center" id="delName">{getActiveProfile(profiles, active)?.name}</div>
                    <div onClick={handleDelete} className="thx-btn" id="cfmDelete">delete</div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;
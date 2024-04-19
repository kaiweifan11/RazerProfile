import React, { useEffect, useState } from 'react';
import LeftPanel from "../component/LeftPanel";
import RightPanel from "../component/RightPanel";
import { getProfilePosition, getActiveProfile, debounce } from '../utils';
import { DEFAULTPROFILES } from "../utils/constants";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateStore } from '../reducers';

const Profiles = () =>{
    const profiles = useSelector((state) => state.profiles)
    const dispatch = useDispatch();
    const setProfiles = (newProfiles) => dispatch(updateStore(newProfiles));

    const [ active, setActive ] = useState(0); // active profile id
    const [ interimProfile, setInterimProfile ] = useState(null);

    useEffect(()=>{
        const existingProfiles = JSON.parse(window.localStorage.getItem('profiles'));
        if(existingProfiles) setProfiles(existingProfiles);
    }, [])

    const handleClick = (e) =>{
        const targetId = e.target.id;
        
        if(!targetId.includes('profileEdit')) {
            if(interimProfile && !targetId.includes('profileRename')) {
                // save profile
                const tempProfiles = [...profiles];
                const index = getProfilePosition(profiles, active);
                interimProfile.name = interimProfile.name.trim();
                tempProfiles[index] = interimProfile;
                setProfiles(tempProfiles);
                setInterimProfile(null);

                save(tempProfiles);
            }
        } else if(interimProfile){
            setInterimProfile(null);
        } else {
            handleEdit();
        }
    }

    const handleEdit =() =>{
        setInterimProfile(getActiveProfile(profiles, active))
    }

    const save = (newProfiles) =>{
        window.localStorage.setItem('profiles', JSON.stringify(newProfiles));
        debounce(() => updateProfiles(newProfiles));
    }

    const updateProfiles = (newProfiles) =>{
        axios.post('https://633d3476f2b0e623dc6eaf7f.mockapi.io/profiles', newProfiles)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="main-container" onMouseDown={(e)=>{handleClick(e)}}>
            <div className="thx-wrapper flex">
                <LeftPanel 
                    profiles={profiles} 
                    setProfiles={setProfiles} 
                    active={active} 
                    setActive={setActive}
                    interimProfile={interimProfile}
                    setInterimProfile={setInterimProfile}
                    save={save}
                />
                <RightPanel 
                    profiles={profiles} 
                    active={active} 
                    interimProfile={interimProfile} 
                />
            </div>
        </div>
    )
}

export default Profiles;
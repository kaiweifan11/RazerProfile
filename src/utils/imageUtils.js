import React from 'react';
import { DefaultIcon, GameIcon, MovieIcon, MusicIcon, ArrowUpIcon, ArrowDownIcon, AddIcon, EditIcon, DeleteIcon } from './icons';

export const getIcon = (id, isActive) =>{
    const fillColor = isActive? "#44d62c" : "#5d5d5d";

    switch(id){
        case 0:
            return <DefaultIcon fill={fillColor} />;
        case 1:
            return <GameIcon fill={fillColor} />;
        case 2:
            return <MovieIcon fill={fillColor} />;
        case 3:
            return <MusicIcon fill={fillColor} />;
        default: 
            return <DefaultIcon fill={fillColor} />;
    }
};

export const getToolbarIcon = (iconName) =>{
    const fillColor = "#ccc";

    switch(iconName){
        case "ArrowUp":
            return <ArrowUpIcon fill={fillColor}  />;
        case "ArrowDown":
            return <ArrowDownIcon fill={fillColor}  />;
        case "Add":
            return <AddIcon fill={fillColor}  />;
        case "Edit":
            return <EditIcon id={"profileEdit"} fill={fillColor}  />;
        case "Delete":
            return <DeleteIcon fill={fillColor}  />;
        default: 
            return <DefaultIcon fill={fillColor} />;
    }
}
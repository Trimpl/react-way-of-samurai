<<<<<<< HEAD:src/components/Profile/ProfileInfo/ProfileStatusWithHooks.tsx
import React, {useState, useEffect, ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
=======
import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';

>>>>>>> parent of 2cedb1d... 99 - about everything:src/components/Profile/ProfileInfo/ProfileStatusWithHooks.jsx

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b> <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;

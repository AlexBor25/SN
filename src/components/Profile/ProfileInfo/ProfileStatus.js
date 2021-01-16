import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true)
    } else {
      setEditMode(false)
      props.updateStatus(status)
    }
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };

  return (
    <div>
      {
        !editMode
          ? <div>
            <span onDoubleClick={toggleEditMode}>{props.status || 'User dont have status'}</span>
          </div>
          : <div>
            <input autoFocus={true} onBlur={toggleEditMode}
                   onChange={onStatusChange}
                   value={status}/>
          </div>
      }
    </div>
  );
}

export default ProfileStatus;
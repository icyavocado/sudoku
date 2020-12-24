import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function EditMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonGroup>
        <div>Status 1</div>
        <div>Status 2</div>
      </ButtonGroup>

    </div>
  );
}

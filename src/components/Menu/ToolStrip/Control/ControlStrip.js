import React from 'react';
import Button from '@material-ui/core/Button';
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
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" onClick={handleClick}>
          Select number
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          1
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          2
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          3
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          4
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          5
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          6
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          7
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          8
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          9
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onclick={handleClick}>
          Erase
        </Button>
      </ButtonGroup>

    </div>
  );
}

import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {FormControl, Input, MenuItem, Select} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {categories} from '../categories/categories';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    borderBottom: 'none',
  },
  color: {
    color: 'black',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const theme = useTheme();

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl className={`form ${classes.formControl}`}>
        <Select
          displayEmpty
          className="drop pr-0"
          value={category}
          onChange={handleChange}
          //   endAdornment={
          //     <IconButton onClick={() => setPersonName('')} className="p-0">
          //       {personName && <ClearOutlinedIcon className="mr-2" />}
          //     </IconButton>
          //   }
          input={<Input placeholder="Category" disableUnderline={true}/>}
          MenuProps={MenuProps}
        >
          <MenuItem value="" disabled>
            Categories
          </MenuItem>

          {categories.map(category => (
            <Link
              to={`/search/${category}`}
              className="text-decoration-none text-black"
            >
              <MenuItem
                key={category}
                value={category}
                className="category-item"
                style={getStyles(categories, category, theme)}
              >
                {category}
              </MenuItem>
            </Link>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

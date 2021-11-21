import React, {useState} from 'react';
import {makeStyles, useTheme} from '@mui/styles';
import {FormControl, Input, MenuItem, Select} from '@mui/material';
import {Link} from 'react-router-dom';
import {categories} from '../categories/categories';
import appStyles from '../../app-styles';

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
  const appStyle = appStyles();
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
          sx={{pr: 0, color: 'white !important'}}
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

          {categories.map((category, index) => (
            <Link
              to={`/search/${category}`}
              className={appStyle.link}
              key={index}
            >
              <MenuItem
                key={category}
                value={category}
                sx={{color: 'black'}}
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

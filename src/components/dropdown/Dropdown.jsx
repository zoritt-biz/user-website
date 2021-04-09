import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Input, MenuItem, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    borderBottom: 'none',
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

const categories = [
  'Arts, Media & Entertainment',
  'Food & Catering',
  'Hotel & Hospitality',
  'Shopping',
  'Financial Services',
  'Tour, Travel & Transport',
  'Health',
  'Sports and Leisure',
  'Beauty & Spa',
  'Event Oraganizers',
  'Education & Training',
  'Automotive & Gas stations',
  'Night Life',
  'Import/ Export',
  'Construction and Engineering',
  'Local Services',
  'Religious Organizations',
  'Governmental Institutions',
  'NGOs & Humanitarian',
];

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
          input={
            <Input
              placeholder="Category"
              className="drop"
              disableUnderline={true}
            />
          }
          MenuProps={MenuProps}
        >
          <MenuItem value="" disabled>
            Categories
          </MenuItem>

          {categories.map(category => (
            <MenuItem
              key={category}
              value={category}
              style={getStyles(categories, category, theme)}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

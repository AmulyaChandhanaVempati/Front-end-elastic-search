import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { service } from '../../service';
import { Link, useNavigate } from 'react-router-dom';
import './SelectTable.css';

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

const names: any[] = [];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelectPlaceholder = () => {
  const theme = useTheme();
  const [data, setData] = useState<any>();
  const [data1, setData1] = useState<any>();
  const [personName, setPersonName] = React.useState<string[]>([]);
  useEffect(() => {
    console.log('useeffect has been called');
    
    fetch(`http://localhost:9900/ESapi/tables`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setData(json);
            console.log(json.length);
            for(let i=0;i<json.length;i++){
                names.push(json[i]);
            }
        });    
}, []);
  //console.log(JSON.parse(data));
  //let obj = {};
  const navigate = useNavigate();

  const sendtablename = (event: any) => {
    console.log(event);
    fetch(`http://localhost:9900/ESapi/tables/${event.personName}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        service.postTableName(json);
        setData1(json);
    }
    );
    navigate("/InputTransfer");
  }

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='root'>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select Table</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <button onClick={() =>sendtablename({personName})}>Click me</button>

      </FormControl>
    </div>
  );
}
export default MultipleSelectPlaceholder;

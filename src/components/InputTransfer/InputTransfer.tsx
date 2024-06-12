import React, { useState , useEffect } from 'react';

import 'antd/dist/antd.css';

import { Switch, Transfer } from 'antd';

import type { TransferDirection } from 'antd/es/transfer';

import { Link, useNavigate } from 'react-router-dom';

import { service } from '../../service';

//const oriTargetKeys = mockData.filter(item => Number(item.key) % 3 > 1).map(item => item.key);


interface RecordType {

    key: string;

    title: string;

    disabled : boolean;

  }

const InputTransfer: React.FC = () => {


      const targetKeysservice = service.getoutcommontargetArray();

      const targetinkeys = service.getintargetArray();

      const [arr, setData] = useState<any>(service.getTableName());
    //   setData();

      function shouldcheck(i:any):any{

        let count = 0;

        for (let k = 0;k <= targetKeysservice.length;k ++){

          if (i == targetKeysservice[k]){

            count  = 1;

          }

        }

        if (count == 1){

          return true;

        }

        else{

          return false;

        }

      }


      
        
      const mockData: RecordType[] = Array.from({ length: arr.length }).map((_, i) => ({

        key: i.toString(),

        title: arr[i],

        disabled : shouldcheck(i),

      }));

      function isPresent(i:any):any{

        let count = 0;

        for (let k = 0;k <= targetinkeys.length;k ++){

          if (i == targetinkeys[k]){

            count  = 1;

          }

        }

        if (count == 1){

          return true;

        }

        else{

          return false;

        }

      }

  const oriTargetKeys = mockData.filter(item => isPresent(Number(item.key)) == true).map(item => item.key);

  const navigate = useNavigate();

  const [targetKeys, setTargetKeys] = useState<string[]>(oriTargetKeys);

  console.log(service.getinArray());

  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const [disabled, setDisabled] = useState(false);

  //setTargetKeys(service.getinArray());

  const sendtarget = (target:any) =>{

    target = target.targetKeys;

    const arr2 = [];

    const targetke = [];

    for(let j = 0;j < target.length;j++ ){

      arr2.push(arr[target[j]]);

      console.log("getinarray:"+arr2);

  }

    for(let k = 0;k < arr2.length;k++){

      targetke.push(service.getArray().indexOf(arr2[k]));

    }

    console.log("target keys:"+targetke);

    console.log("slice:"+arr);

    const arr3:any = service.getinArray().concat(arr2);

    const arr4:any = service.getintargetArray().concat(targetke);

    console.log("updated"+arr3);

    console.log("updated target keys"+arr4);

    service.postArray(arr);

    service.postinArray(arr3);

    service.postintargetArray(targetke);

    const arr5:any = service.getoutcommontargetArray().concat(targetke);

    service.postoutcommontargetArray(arr5);

    console.log("common:"+arr5);

    navigate("/OutputTransfer");

  }

  const handleChange = (

    newTargetKeys: string[],

    direction: TransferDirection,

    moveKeys: string[],

  ) => {

    setTargetKeys(newTargetKeys);

   

    console.log('targetKeys: ', newTargetKeys);

    console.log('direction: ', direction);

    console.log('moveKeys: ', moveKeys);

  };

 

  const handleSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {

    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);

 

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);

    console.log('targetSelectedKeys: ', targetSelectedKeys);

  };

 

  const handleScroll = (

    direction: TransferDirection,

    e: React.SyntheticEvent<HTMLUListElement, Event>,

  ) => {

   

    console.log('direction:', direction);

    console.log('target:', e.target);

  };

 

  ///////////

  return (

    <>

    <br/>

    <br/>

    <br/>

    <br/>

      <Transfer

        dataSource={mockData}

        titles={['Source', 'Target']}

        targetKeys={targetKeys}

        selectedKeys={selectedKeys}

        onChange={handleChange}

        onSelectChange={handleSelectChange}

        onScroll={handleScroll}

        render={item => item.title}

        disabled={disabled}

        style={{ marginBottom: 16 }}

      />

     <button onClick={() =>sendtarget({targetKeys})}>Click me</button>

    </>

  );

};

 

export default InputTransfer;
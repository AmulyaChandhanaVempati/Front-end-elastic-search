import React, { useState } from 'react';

import 'antd/dist/antd.css';

import { Switch, Transfer } from 'antd';

import type { TransferDirection } from 'antd/es/transfer';

import { Link, useNavigate } from 'react-router-dom';

import { service } from '../../service';

 

interface RecordType {

  key: string;

  title: string;

  disabled:boolean;

}




//const oriTargetKeys = mockData.filter(item => Number(item.key) % 3 > 1).map(item => item.key);

 

const OutputTransfer: React.FC = () => {

  const arr:any = service.getArray();

  const targetKeysservice = service.getoutcommontargetArray();

  const targetoutkeys = service.getouttargetArray();

  console.log(arr);

  const navigate = useNavigate();

  console.log(targetKeysservice)

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

    disabled:shouldcheck(i),

  }));

 

  function isPresent(i:any){

    for(let k = 0;k < targetKeysservice.length;k++){

      let count = 0;

        for (let k = 0;k <= targetoutkeys.length;k ++){

          if (i == targetoutkeys[k]){

            count  = 1;

          }

        }

        if (count == 1){

          return true;

        }

        else{

          return false;

        }

  }}

  const oriTargetKeys = mockData.filter(item => isPresent(Number(item.key)) == true).map(item => item.key);

  const [targetKeys, setTargetKeys] = useState<string[]>(oriTargetKeys);

  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const [disabled, setDisabled] = useState(false);

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

  const sendtargetkeys = (target:any) =>{

    target = target.targetKeys;

    const arr2 = [];

    const targetke:any = [];

    for(let j = 0;j < target.length;j++ ){

      arr2.push(arr[target[j]]);

     // console.log("updated"+arr2);

  }

    for(let k = 0;k < arr2.length;k++){

      targetke.push(service.getArray().indexOf(arr2[k]));

    }

    console.log(arr);

    console.log("targetkeys array:"+targetke);

    console.log(arr2);

    const arr3:any = service.getoutArray().concat(arr2);

    const arr4:any = service.getouttargetArray().concat(targetke);

    console.log("updated"+arr3);

    console.log("updated target"+arr4);

    service.postoutArray(arr3);

    service.postouttargetArray(targetke);

    const arr5:any = service.getoutcommontargetArray().concat(targetke);

    service.postoutcommontargetArray(arr5);

    console.log("common:"+arr5);

    service.postArray(arr);

    navigate("/InputTransfer");

  }

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

        oneWay

        style={{ marginBottom: 16 }}

      />

    <button onClick={() =>sendtargetkeys({targetKeys})}>Click me</button>

     

    </>

  );

};

 

export default OutputTransfer;
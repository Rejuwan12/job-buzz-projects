import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList,  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CetegoryCard from './CetegoryCard';


const Cetegary = () => {
    
  const [totalData , setTotalData] = useState([]);
  const [tabData, setTabData] = useState('On Site Job');


  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setTotalData(data))
  },[])

  const handleClick= (val) => {
      setTabData(val);

  } 
  console.log(totalData, tabData);
  const filterData = totalData?.filter(data => data.Job_Title == tabData);
  console.log(filterData);

  
  

    return (
     
 <div className='text-center mt-2 '>
     <Tabs>
    <TabList className="font-medium bg-slate-300">
      <Tab onClick={()=> handleClick('On Site Job')} >On Site Job</Tab>
      <Tab onClick={()=> handleClick('Remote Job')}>Remote Job</Tab>
      <Tab onClick={()=> handleClick('Hybrid')}>Hybrid </Tab>
      <Tab onClick={()=> handleClick('Part Time')}>Part Time</Tab>
      <Tab onClick={()=> handleClick('All job')}>All Job</Tab>
    </TabList>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 mb-4'>
        {
           filterData?.length > 0 ?  filterData?.map(data => <CetegoryCard key={data.id} data={data}/> ) :  totalData?.map(data => <CetegoryCard key={data.id} data={data}/> )
        }
    </div>
  </Tabs>
 </div>
);
    
};

export default Cetegary;

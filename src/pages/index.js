import React, { useState } from 'react'
import { BUILDER_JSON, CONFIG_JSON, INIT_CONFIG } from '../constants/types';
import Builder from '../components/builder';


export default function HomePage() {
  const [operator, setOperator] = useState(INIT_CONFIG.operator)
  const [conditions, setConditions] = useState(INIT_CONFIG);

  const handleUpdateOrDelete = (newValue = null, id, deleteItem = false) => {
    if (!deleteItem) {
      if (conditions.root.id === id) {
        setConditions({
          ...conditions,
          root: {
            ...conditions.root,
            condition:newValue 
          }
      });
      } else {
        const updatedList = conditions.list.map(item => {
          if (item.id === id) {
            return{
              ...item,
                condition: newValue
          };
          }
          return item;
        });
  
        setConditions({
          ...conditions,
          list: updatedList
        });

      }
    } else {
      const updatedList = conditions.list.filter(item => item.id !== id);
      setConditions({
        ...conditions,
        list: updatedList
      });

    }
  };



  const handleAddNewCondition = (type="filter", index= -1)=>{
    const currentConditions = {...conditions};
    const id = (new Date()).getTime().toString().substr(-3);
    if(index !== -1){
      const existingConfig = currentConditions["list"][index];
      existingConfig["list"].push(type === "filter" ? {...CONFIG_JSON, id} : {...BUILDER_JSON, id});
      currentConditions["list"][index] = existingConfig;
      setConditions(currentConditions);
    }
    else {
      currentConditions["list"].push(type === "filter" ? {...CONFIG_JSON, id} : {...BUILDER_JSON, list: [],  id})
      setConditions(currentConditions)
    }
  }



  return (
    <div>
      <Builder currentRoot={conditions} handleRuleElementsUpdate={(value, id)=>handleUpdateOrDelete(value, id)} handleDeleteElement={(id)=>handleUpdateOrDelete(null, id, true)} addNewCondition={handleAddNewCondition}/>
    </div>
  )
}
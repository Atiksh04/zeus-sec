import React, { useState } from 'react'
import { RuleElement } from './ruleElement';


function Builder({currentRoot, handleRuleElementsUpdate,handleDeleteElement, addNewCondition}) {

    const [currentCondition, setCurrentContion] = useState(currentRoot.operator)
    const moreConditions = currentRoot.list;

    const updateRuleElement = (config, id) => {
        handleRuleElementsUpdate(config, id);
    }

    const handleFilterGroupUpdate = (value, index)=>{
        addNewCondition(value, index)
    }
    
    // rendering rule element and builder components recursively based on conditions
    const renderBuilderORConfig = ()=>{
    return (
        <>
            {moreConditions.map((rule, index)=>{
                return(
                    rule.type === "config" ? 
                        <RuleElement currentConfig={rule.condition} key={index} updateRuleElement={(val)=>updateRuleElement(val, rule.id)} onClick={()=>handleDeleteElement(currentRoot.rule.id)}/>
                    : rule.type === "builder" ?  <div style={{backgroundColor: "rgb(162, 214, 228)", margin: "8px"}}  key={index}>
                        <Builder currentRoot={rule} addNewCondition={(value)=>handleFilterGroupUpdate(value, index)} handleRuleElementsUpdate={updateRuleElement}/>
                    </div>
                    : null
                )})
            }
        </>
    )
    }

    return (
    <div style={{margin: "16px 0"}}>
            <RuleElement currentConfig={currentRoot.root.condition} updateRuleElement={(val)=>updateRuleElement(val, currentRoot.root.id)}/>
        {
            moreConditions.length ? 
                <div style={{margin: "8px 0 0 8px"}}>
                    <select defaultValue={currentCondition}>
                        <option value="AND">AND</option>
                        <option value="AND">OR</option>
                    </select>
                <div>
                    {renderBuilderORConfig()}
                </div>
                </div>
            : null 
        }
        <div style={{marginTop: "24px"}}>
        <button onClick={()=> addNewCondition("filter")}>Add filter</button>
        <button onClick={()=>addNewCondition("filter-group")}>Add filter group</button>
        </div>
    </div>
    )
}


export default Builder;
import { useState } from "react"

export const RuleElement = ({currentConfig, updateRuleElement})=>{

    const [currentOption, setCurrentOption] = useState(currentConfig.key);
    const [currentValue, setCurrentValue] = useState(currentConfig.value);


    const handleChange = (e, type)=>{
        if(type === "select") setCurrentOption(e.target.value)
        else  setCurrentValue(e.target.value);


        updateValues();
    }

    const updateValues = ()=>{
        updateRuleElement({
            key: currentOption,
            value: currentValue
        })
    }

    return(
        <div>
            <select defaultValue={currentOption} onChange={(e)=>handleChange(e, "select")}>
                <option value="dropdown">Dropdown</option>
                <option value="text">Text</option>
            </select>
            <input value={currentValue} placeholder="Enter condition value" onChange={(e)=>handleChange(e, "input")}/>
        </div>
    )
}
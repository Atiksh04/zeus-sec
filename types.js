export const CONFIG_JSON = {
    "type": "config",
    "id": "121",
    "condition": {
        "key": "",
        "value": ""
    },
}

export const BUILDER_JSON= {
    "type":"builder",
    "list":[],
    "id": "122",
    "operator": "AND",
    "root": {
        "condition": {
            "key": "",
            "value": ""
        },
    }
}


// have added list and operator keys and list will contain builder json and config json in the array
export const INIT_CONFIG = {
    "list":[],
    "id": "123",
    "operator": "AND",
    "root": CONFIG_JSON
}

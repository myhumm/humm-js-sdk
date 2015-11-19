//TODO Chat
var othersEndPoints = [
    {
        "group": "Others",
        "name": "Other: Search",
        "method": "GET",
        "endpoint": "/search",
        "usage": "Search all",
        "returns": "*multiple"
    }, {
        "group": "Others",
        "name": "Other: Radio",
        "method": "GET",
        "endpoint": "/radio",
        "usage": "Get a list of songs for a radio",
        "returns": "songs"
    }, {
        "group": "Others",
        "name": "Other: Grouped-search",
        "method": "GET",
        "endpoint": "/grouped-search",
        "usage": "Search all grouped by type",
        "returns": "*multiple"
    }, {
        "group": "External Services",
        "name": "External: Services (Add)",
        "method": "POST",
        "endpoint": "/services",
        "usage": "Add external service such as Twitter or Facebook"
    }, {
        "group": "External Services",
        "name": "External: Services (Remove)",
        "method": "DELETE",
        "endpoint": "/services",
        "usage": "Remove external service such as Twitter of Facebook"
    }, {
        "group": "Settings",
        "name": "Settings: Display",
        "method": "GET",
        "endpoint": "/settings/{id}",
        "usage": "Get user settings",
        "returns": "settings"
    }, {
        "group": "Settings",
        "name": "Settings: Update",
        "method": "PATCH",
        "endpoint": "/settings/{id}",
        "usage": "Edit user settings",
        "returns": "settings"
    }
];

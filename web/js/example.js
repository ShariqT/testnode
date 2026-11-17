import { app } from "../../scripts/app.js";

let newStatus = ""
app.registerExtension({
    name: "example.testnode.update_url",
    async setup(){
        function messageHandler(event){
            console.log(`the event is ${event}`)
            for(const node of app.graph._nodes){
                console.log(node)
            }
        
        }

        
        
        app.api.addEventListener("example.testnode.update_url", messageHandler);
    },
    async nodeCreated(node){
        console.log(node)
        if (node.comfyClass == "TestNode") {
            node.addWidget("text", "Status", newStatus, function(v){})
        }
    }



})

import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "example.testnode.update_url",
    async setup(){
        function messageHandler(event, widget, node){
            console.log(`the event is ${event}`)

            for(const widget of node.widgets){
                if(widget.name == "Status"){
                    widget.setValue(event.details.message)
                }
            }
        }
        app.api.addEventListener("example.testnode.update_url", messageHandler);
    },
    async nodeCreated(node){
        console.log(node)
        if (node.comfyClass == "TestNode") {
            node.addWidget("text", "Status", "", function(v){})
        }
    }



})

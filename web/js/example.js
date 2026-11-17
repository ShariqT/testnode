import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "example.testnode.update_url",
    async setup(){

        function messageHandler(event){
            console.log(event.detail.message)
            for(const node of app.graph._nodes){
                console.log(node.comfyClass)
                if(node.comfyClass == "TestNode") {
                    for(let i = 0; i < node.widgets.length; i++){
                        console.log(node.widgets[i])
                        if(node.widgets[i].name == "Status"){
                            
                            node.widgets[i].value = event.detail.message
                        }
                    }
                }
            }
        
        }

        
        
        app.api.addEventListener("example.testnode.update_url", messageHandler);
    },
    async nodeCreated(node){
        if (node.comfyClass == "TestNode") {
            console.log("loading testnode")
            node.addWidget("text", "Status", newStatus, function(v){
                console.log('new value is ' + v)
            })

            node.serialize_widgets = true
        }
    }



})

class groupComponent extends BaseComponent{
    static Name = 'group'
    static ClassName = 'component-group';
    static loaded=false;
    static id=0;
    static init_events(root_dom){

        let data=JSON.parse(root_dom.dataset.data)
        let name=data.groupName; //getting name
        let imgUrl=this.imgPath + data.imgUrl; //getting url

        root_dom.querySelector(".groupName").textContent=name;
        root_dom.querySelector(".groupImg").src=imgUrl //setting img url
        root_dom.querySelector(".groupImg").onclick=function(){
            Navigator.navigate("groupInfo",data)
        };
    }
}

app.components[groupComponent.ClassName] = groupComponent;
groupComponent.load_config();
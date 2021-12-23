class displayIntrestsComponent extends BaseComponent{
    static Name = 'displayIntrests'
    static ClassName = 'component-displayIntrests';
    
    
    static init_events(root_dom){

        let data=JSON.parse(root_dom.dataset.data)
        let name=data.groupName; //getting name
        
        root_dom.querySelector(".displayIntrestsImg").src=this.imgPath + data.imgUrl;
        root_dom.querySelector(".displayIntrestsText").innerHTML=data.title
    }
}

app.components[displayIntrestsComponent.ClassName] = displayIntrestsComponent;
displayIntrestsComponent.load_config();
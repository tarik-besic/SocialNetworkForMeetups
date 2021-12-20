class inputDescriptionComponent extends BaseComponent{
    static Name = 'inputDescription'
    static ClassName = 'component-inputDescription';

    static init_events(root_dom){
        let data=JSON.parse(root_dom.dataset.data);
        
        root_dom.querySelector(".intrestsTitle").innerHTML=data.title;
        root_dom.querySelector(".inputText").placeholder=data.description;
    }
}

app.components[inputDescriptionComponent.ClassName] = inputDescriptionComponent;
inputDescriptionComponent.load_config();

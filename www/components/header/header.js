class HeaderComponent extends BaseComponent{
    static Name = 'header'
    static ClassName = 'component-header';

    static init_events(root_dom){
        root_dom.querySelector(".headerTitle").innerHTML=root_dom.dataset.value;
        if(root_dom.dataset.font)
        root_dom.querySelector(".headerTitle").classList.add("font");
    }
}

app.components[HeaderComponent.ClassName] = HeaderComponent;
HeaderComponent.load_config();

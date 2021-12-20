class intrestsComponent extends BaseComponent{
    static Name = 'intrests'
    static ClassName = 'component-intrests';

    static init_events(root_dom){
        
    }
}

app.components[intrestsComponent.ClassName] = intrestsComponent;
intrestsComponent.load_config();

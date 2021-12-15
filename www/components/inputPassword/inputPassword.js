class inputPasswordComponent extends BaseComponent{
    static Name = 'inputPassword'
    static ClassName = 'component-inputPassword';

    static init_events(root_dom){
        
    }
}

app.components[inputPasswordComponent.ClassName] = inputPasswordComponent;
inputPasswordComponent.load_config();

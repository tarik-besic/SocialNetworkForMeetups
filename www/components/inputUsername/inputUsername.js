class inputUsernameComponent extends BaseComponent{
    static Name = 'inputUsername'
    static ClassName = 'component-inputUsername';

    static init_events(root_dom){
        
    }
}

app.components[inputUsernameComponent.ClassName] = inputUsernameComponent;
inputUsernameComponent.load_config();

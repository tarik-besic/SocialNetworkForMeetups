class inputEmailComponent extends BaseComponent{
    static Name = 'inputEmail'
    static ClassName = 'component-inputEmail';

    static init_events(root_dom){
        
    }
}

app.components[inputEmailComponent.ClassName] = inputEmailComponent;
inputEmailComponent.load_config();

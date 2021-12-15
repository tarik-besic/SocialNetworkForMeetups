class inputButtonSubmitComponent extends BaseComponent{
    static Name = 'inputButtonSubmit'
    static ClassName = 'component-inputButtonSubmit';

    static init_events(root_dom){
        
    }
}

app.components[inputButtonSubmitComponent.ClassName] = inputButtonSubmitComponent;
inputButtonSubmitComponent.load_config();

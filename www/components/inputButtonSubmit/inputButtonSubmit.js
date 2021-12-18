class inputButtonSubmitComponent extends BaseComponent{
    static Name = 'inputButtonSubmit'
    static ClassName = 'component-inputButtonSubmit';

    static init_events(root_dom){

        let data=root_dom.dataset.value; //getting data
        root_dom.childNodes[0].firstChild.nextSibling.innerHTML=data //setting data

    }
}

app.components[inputButtonSubmitComponent.ClassName] = inputButtonSubmitComponent;
inputButtonSubmitComponent.load_config();

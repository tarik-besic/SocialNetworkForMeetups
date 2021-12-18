class checkBoxTermsComponent extends BaseComponent{
    static Name = 'checkBoxTerms'
    static ClassName = 'component-checkBoxTerms';

    static init_events(root_dom){
     
    }

    changeImg(){
        console.log("Promjeni ikonu")
    }
}

app.components[checkBoxTermsComponent.ClassName] = checkBoxTermsComponent;
checkBoxTermsComponent.load_config();

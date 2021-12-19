class inputButtonSubmitComponent extends BaseComponent{
    static Name = 'inputButtonSubmit'
    static ClassName = 'component-inputButtonSubmit';

    static init_events(root_dom){
        //navigating
        root_dom.querySelector(".input_button-submit").onclick=function(){
            switch(root_dom.dataset.navigate)
            {
                case "SIGN UP": Navigator.navigate("signup"); break;
                case "LOG IN": Navigator.navigate("start"); break;
            }
        };
        let data=root_dom.dataset.value; //getting data
       if(root_dom.dataset.color) //if color is sent,  change background color
            {
                root_dom.querySelector(".input_button-submit").style.backgroundColor=root_dom.dataset.color;
                root_dom.querySelector(".input_button-submit").style.color="#303841";
            }
        root_dom.childNodes[0].firstChild.nextSibling.innerHTML=data //setting data
    }
}

app.components[inputButtonSubmitComponent.ClassName] = inputButtonSubmitComponent;
inputButtonSubmitComponent.load_config();
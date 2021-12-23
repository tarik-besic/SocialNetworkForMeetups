class inputButtonSubmitComponent extends BaseComponent{
    static Name = 'inputButtonSubmit'
    static ClassName = 'component-inputButtonSubmit';

    static init_events(root_dom){
        //navigating
        root_dom.querySelector(".input_button-submit").onclick=function(){
            switch(root_dom.dataset.navigate)
            {
                case "SIGN UP": Navigator.navigate("signup"); break;
                case "LOG IN": Navigator.navigate("login"); break;
                case "START": {
                    if(Navigator.CURRENT_SCREEN!="login") //ako navigiram sa screena, ne zelim da mi pravi komponentu
                    {
                        let component=inputButtonSubmitComponent.create_groupComponent();
                        Navigator.navigate("start",component);
                    }
                    else
                        Navigator.navigate("start");
                }
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
    static create_groupComponent(){
        let obj={
            groupName:document,
            number_of_members:0,
            imgUrl:"",
            events:[
                // {
                //     date:"",
                //     eventName:"",
                //     groupName:"",
                //     number_of_attendees:"",
                //     imgUrl:""
                // }
            ]
        }
        document.querySelectorAll(".inputText").forEach((input,index)=>{ 
            switch(index)
            {
                case 0: obj.groupName=input.value.trim(); break;
                case 1: obj.desc=input.value.trim(); break;
                case 2: obj.location=input.value.trim(); break;
            }
        })
        obj.imgUrl="/fixed-image.jpg"; //same image for every new group

        //making group component here
        let group=document.createElement("div");
        group.classList.add("component")
        group.classList.add("component-group")
        group.setAttribute("selected-screen","start")
        group.dataset.data=JSON.stringify(obj);
        //returning component
        return group;
    }
}

app.components[inputButtonSubmitComponent.ClassName] = inputButtonSubmitComponent;
inputButtonSubmitComponent.load_config();
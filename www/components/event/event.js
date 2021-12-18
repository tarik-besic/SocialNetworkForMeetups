class eventComponent extends BaseComponent{
    static Name = 'event'
    static ClassName = 'component-event';
    static init_events(root_dom){
        
        let data=JSON.parse(root_dom.dataset.data);

        this.setAllData(data,root_dom);
    }
    static setAllData(data,root_dom)
    {   
        let img=document.createElement('img');
        img.src= this.imgPath + "/zeleniCheckbox.png";
        img.classList.add("checkBoxic");
        root_dom.querySelector(".eventDate").innerHTML=data.date;
        root_dom.querySelector(".eventName").innerHTML=data.eventName;
        root_dom.querySelector(".eventGroupName").innerHTML=data.groupName;
        root_dom.querySelector(".number-of-attendees").appendChild(img);
        root_dom.querySelector(".number-of-attendees").innerHTML+=data.number_of_attendees;
        root_dom.querySelector("#eventImg").src=this.imgPath + data.imgUrl;
    }
}

app.components[eventComponent.ClassName] = eventComponent;
eventComponent.load_config();
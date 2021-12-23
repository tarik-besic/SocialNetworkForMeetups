class Navigator{
    static CURRENT_SCREEN = null;
    static CURRENT_SCREEN_INSTANCE = null;
    static HISTORY = [];
    static TRACK_HISTORY = [];
    static takeData=false;

    static async navigate(screen_name,data=""){

        if(screen_name=="groupInfo")
        this.takeData=true;
        else
        this.takeData=false;

        let name = screen_name.split('/')[screen_name.split('/').length-1];
        StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);
        
        if(Navigator.CURRENT_SCREEN_INSTANCE != null)
        Navigator.HISTORY.push(Navigator.CURRENT_SCREEN_INSTANCE);
        
        Navigator.CURRENT_SCREEN = screen_name;
        Navigator.CURRENT_SCREEN_INSTANCE = app.screens[name].create_dom();
        document.querySelector(".app").innerHTML="";
        
        if(screen_name=="start"&& data!="") //checking if component is sent when comming to start screen
        {
            console.log(data);
            Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".group_container").append(data);
        }

        if(this.takeData) //if going to groupInfo screen, take data from parameter "data".
        {
            //setting all events
            if(data.events.length>0)
            {
                // console.log(Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelectorAll(".number-of-members .info").innerHTML.split(" ")) 
                if(Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".staticImages").classList.contains("hide")) 
                    {
                        Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".staticImages").classList.remove("hide")
                        Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".info").classList.remove("hide");
                    }
                
                data.events.forEach(event => {
                    let component=document.createElement("div");
                    component.classList.add("component");
                    component.classList.add("component-event");
                    component.dataset.data=JSON.stringify(event);
                    component.setAttribute("selected-screen","groupInfo")
                    Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".events-container").append(component);  //u container appendam sve eventove
                });
            }
            else
                {
                    Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".staticImages").classList.add("hide");
                    Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".info").classList.add("hide");
                }

            //making image and setting group image
            let img=document.createElement("img");
            img.classList.add("img");
            img.src=BaseComponent.imgPath+ data.imgUrl;
            Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".image-container").append(img);

            //setting group-info
            let div=document.createElement("div");
            div.classList.add("info");
            div.innerHTML=data.number_of_members;
            div.innerHTML+=" Members";
            console.log(div);
            Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".number-of-members").append(div);

            //setting header groupName
             this.CURRENT_SCREEN_INSTANCE.dom.querySelector(".component-header").dataset.value=data.groupName;
        }
        await document.querySelector('.app').append(Navigator.CURRENT_SCREEN_INSTANCE.dom);
        Navigator.CURRENT_SCREEN_INSTANCE.init();
    }
}
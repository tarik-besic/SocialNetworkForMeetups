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


        console.log(Navigator.CURRENT_SCREEN_INSTANCE.dom);
        if(this.takeData)
        {
            if(data.events.length>0)
                data.events.forEach(event => {
                    let component=document.createElement("div");
                    component.classList.add("component");
                    component.classList.add("component-event");
                    component.dataset.data=JSON.stringify(event);
                    component.setAttribute("selected-screen","groupInfo")
                    console.log(component)
                    Navigator.CURRENT_SCREEN_INSTANCE.dom.append(component);
                    console.log(Navigator.CURRENT_SCREEN_INSTANCE.dom.querySelector(".container"))

                    
                });
        }
        await document.querySelector('.app').append(Navigator.CURRENT_SCREEN_INSTANCE.dom);
        Navigator.CURRENT_SCREEN_INSTANCE.init();
    }
}
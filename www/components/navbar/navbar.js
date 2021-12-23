class NavbarComponent extends BaseComponent{
    static Name = 'navbar'
    static ClassName = 'component-navbar';

   
    static init_events(root_dom){
     
        //home
        root_dom.querySelector(".homeDiv").addEventListener("click",()=>{
            Navigator.navigate("start")
        })
        
        //search
        root_dom.querySelector(".searchDiv").addEventListener("click",()=>{
            Navigator.navigate("search")
        })

        //addGroup
        root_dom.querySelector(".plusDiv").addEventListener("click",()=>{
            Navigator.navigate("createGroup")
        })

        //userProfile
        root_dom.querySelector(".userprofileDiv").addEventListener("click",()=>{
            Navigator.navigate("userProfile")       
        })
    }
}

app.components[NavbarComponent.ClassName] = NavbarComponent;
NavbarComponent.load_config();

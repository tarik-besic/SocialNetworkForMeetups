class groupInfoScreen extends Screen {
    static Name = 'groupInfo Screen'
    static Id = 'groupInfo-screen';
    static Template = '';
    static loaded=false;
    constructor(){
        super();
    }
    
    screen_events(){
        if(this.loaded==true)
        {
            this.loaded=false;
        }
    }
}

app.screens['groupInfo'] = groupInfoScreen;
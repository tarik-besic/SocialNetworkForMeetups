class startScreen extends Screen {
    static Name = 'start Screen'
    static Id = 'start-screen';
    static Template = '';

    constructor(){
        super();
    }
    nesto()
    {
        console.log("nesto")
    }
}

app.screens['start'] = startScreen;
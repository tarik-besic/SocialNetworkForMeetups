
class HomeScreen extends Screen {
    static Name = 'Home Screen'
    static Id = 'home-screen';
    static Template = '';

    constructor(){
        super();
    }

    before_render(){
        // let items = ``;
        // app.data.dates.forEach(item => {
        //     items = `${items}<div class="component component-day-segment" data='${JSON.stringify(item)}'></div>`;
        // });

        // this.dom.querySelector('.day-segments').innerHTML = items;
    }

    screen_events(){
        // function prebaci(){
        //     console.log("prebacujem")
        //     Navigator.navigate("signup")
        // }
        // let btn=document.getElementById("myBtn");
        // btn.addEventListener("click",prebaci);
    }

}

app.screens['home'] = HomeScreen;

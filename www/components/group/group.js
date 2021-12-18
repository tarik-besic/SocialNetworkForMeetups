class groupComponent extends BaseComponent{
    static Name = 'group'
    static ClassName = 'component-group';
    static path="./assets/images/icons"
    static loaded=false;
    static id=0;
    static init_events(root_dom){
        
        let name=root_dom.dataset.name; //getting name
        let imgUrl=this.path + root_dom.dataset.imgurl; //getting url

        root_dom.childNodes[0].childNodes[4].textContent=name; //setting group name
        root_dom.firstChild.childNodes[1].firstChild.src=imgUrl; //setting img url
        root_dom.firstChild.childNodes[1].firstChild.onclick=function(){
            console.log("nesto")
        };

        root_dom.querySelector(".name")

        if(!this.loaded)
            {
                this.enable_slider();
                this.loaded=true;
            }

    }
    static enable_slider(){
        const slider = document.querySelector('.group_container');
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
        mouseDown = false;
        };

        slider.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if(!mouseDown) { return; }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
        });

        // Add the event listeners
        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    }
   
}

app.components[groupComponent.ClassName] = groupComponent;
groupComponent.load_config();
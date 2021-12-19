class groupComponent extends BaseComponent{
    static Name = 'group'
    static ClassName = 'component-group';
    static loaded=false;
    static id=0;
    static init_events(root_dom){

        let data=JSON.parse(root_dom.dataset.data)
        let name=data.groupName; //getting name
        let imgUrl=this.imgPath + data.imgUrl; //getting url

        root_dom.querySelector(".groupName").textContent=name;
        root_dom.querySelector(".groupImg").src=imgUrl //setting img url
        root_dom.querySelector(".groupImg").onclick=function(){
            Navigator.navigate("groupInfo",data)
        };

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
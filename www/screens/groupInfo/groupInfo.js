class groupInfoScreen extends Screen {
    static Name = 'groupInfo Screen'
    static Id = 'groupInfo-screen';
    static Template = '';
    static loaded=false;
    constructor(){
        super();
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

    screen_events(){
        if(this.loaded==true)
        {
            this.loaded=false;
        }
    }
}

app.screens['groupInfo'] = groupInfoScreen;
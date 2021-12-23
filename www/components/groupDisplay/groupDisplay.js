class groupDisplayComponent extends BaseComponent{
    static Name = 'groupDisplay'
    static ClassName = 'component-groupDisplay';
    
    
    static init_events(root_dom){

    let data=JSON.parse(root_dom.dataset.data);
    console.log(data);
    root_dom.querySelector(".groupDisplayImg").src=BaseComponent.imgPath+ data.imgUrl;

    root_dom.querySelector(".groupDisplayHeader").innerHTML=data.groupName;
    root_dom.querySelector(".groupDisplayMembers").innerHTML=data.numb_members;
    root_dom.querySelector(".groupDisplayMembers").innerHTML+=" Members";
    }
}

app.components[groupDisplayComponent.ClassName] = groupDisplayComponent;
groupDisplayComponent.load_config();

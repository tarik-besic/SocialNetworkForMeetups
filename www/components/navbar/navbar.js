class NavbarComponent extends BaseComponent{
    static Name = 'navbar'
    static ClassName = 'component-navbar';

   
    static init_events(root_dom){
      
    }
}

app.components[NavbarComponent.ClassName] = NavbarComponent;
NavbarComponent.load_config();

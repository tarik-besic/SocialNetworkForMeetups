const CONFIG_FILE_PATH = './config.js';

var APP = {
    prepare_dependencies: [
        "./utils/ScriptLoader.js"
    ],
    load_dep: function(){
        if(APP.prepare_dependencies.length <= 0){
            APP.prepare_app();
            return;
        }
        
        let elem = document.createElement("script");
        elem.src = APP.prepare_dependencies[0];
        elem.onload = () => {
            APP.prepare_dependencies.shift();
            APP.load_dep()
        }

        document.head.append(elem);
    },
    prepare_app: function(){
        //APP.load_dep();
        ScriptLoader.load_scripts([CONFIG_FILE_PATH],APP.process_config);
    },
    process_config: function(){
        ScriptLoader.load_scripts(CONFIG_JSON.dependencies, APP.load_screens);
    },
    load_screens: function (){
        let screens = [
            './screens/home/home.js',
            './screens/home2/home2.js'
        ];
        ScriptLoader.load_scripts(screens,function(){APP.init_app()});
    },
    screens: {},
    init_app: function(){
        Navigator.navigate(CONFIG_JSON.start_screen);
    }
}

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);    
    APP.load_dep();
}
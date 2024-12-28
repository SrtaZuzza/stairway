const addCustomStyle = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
const time = window.navigator.connection.effectiveType != "4g" ? 5000 : 2000;

console.log("EXTENSÃO LIGADA");

window.onload = function() {
    // console.log('onload');
    setTimeout(function(){
        console.log("INIT TIME ELEMENTO: ", getElementByXpath("//*[@id=\"container\"]/div[2]/div[2]")); // TESTE DE CARREGAMENTO
        
        rearrange()
    }, time);
};
    
function rearrange() {
    var site = window.location.hostname // provavel precisar para setar cada página

    var note = document.getElementById("popover-description");
    var info = document.getElementById("popover-instruction");
    var question = document.getElementById("popover-question");
    var lastButton = note;
    var visiButton = true;

    var sidebar = getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div/div[2]");

    // CONSTRUCTOR
    var arr = [info, question, note];
    arr.forEach(button => button.addEventListener("click", showButton));

    function showButton(event) {
        var entry = event.target;
        visiButton = hideSidebar(visiButton, lastButton, entry, sidebar);
        // console.log("lastButton = ", lastButton, " iguais? ", lastButton == entry, entry);
        lastButton = entry;
    }

    // remake layout
    changeBootstrapStyles(sidebar);

    // rooms notice
    getOldDiscordNoticeBack();
    

    // CSS (melhorar chamada)
    addCustomStyle(`
        body {
            background-color: #111;
        }

        i {
            pointer-events: none;
        }

        .title {
            display: none;
        }

        .menu-sidebar {
            padding: 0%;
        }

        #menu-sidebar {
            width: 100%;
        }

        .menu-content {
            position: absolute;
            left: 4vw;
            padding-top: 1.5rem;
            margin: 0px !important;
            background: #ccc;
            
            transition: width .5s ease-in-out, z-index 0s ease-in-out;
            width: 25vw;
            z-index: 1;
        }

        .menu-content::-webkit-scrollbar:vertical {
            max-width: .5vw;
        }

        .tab-pane > div::-webkit-scrollbar:vertical, tab-pane > div::-webkit-scrollbar:horizontal {
            display: none;
        }

        .tab-pane > div, tab-pane > div {
            overflow: hidden !important;
        }

        .ace_gutter {
            z-index: 0;
        }

        .coding-sidebar {
            display: flex;
        }

        .content-body {
            margin-top: 0px;
            flex-wrap: nowrap;
        }

        .card, .content-body .coding-sidebar {
            border: 0px;
        }

        /* --------------------- NEW --------------------- */

        .disappear {
            transition: width .5s ease-in-out, z-index .5s ease-in-out .25s;
            width: 0% !important;
            z-index: -1;
        }
    `);
}

function getElementByXpath(path) {
    return document.evaluate(path, document).iterateNext();
}

function changeBootstrapStyles(sidebar) {
    // chances (hearts -> loose your heart for DIOOO WRYYYYYYY)
    getElementByXpath("//*[@id=\"container\"]/div[1]/div/div/div/div[2]/div/div[3]").classList.add("justify-content-end");
    getElementByXpath("//*[@id=\"container\"]/div[1]/div/div/div/div[2]/div").classList.add("justify-content-end");

    // hide unusefull elements
    getElementByXpath("//*[@id=\"container\"]/div[1]/div/div/div/div[2]/div/div[1]").classList.add("d-none"); // PRO AD
    getElementByXpath("//*[@id=\"container\"]/div[1]/div/div/div/div[2]/div/div[3]/div[1]").classList.add("d-none"); // XP NOTICE

    // remove unnecessary fixed-top
    getElementByXpath("//*[@id=\"container\"]/div[1]/div/div").classList.remove("fixed-top");

    // code column
    getElementByXpath("//*[@id=\"container\"]/div[2]/div[2]").classList.remove("col-md-8");
    getElementByXpath("//*[@id=\"container\"]/div[2]/div[2]").classList.remove("col-12");
    getElementByXpath("//*[@id=\"container\"]/div[2]/div[2]").style.width = "96vw";

    // coding-sidebar
    getElementByXpath("//*[@id=\"container\"]/div[2]/div[1]").classList.remove("col-md-4");
    getElementByXpath("//*[@id=\"container\"]/div[2]/div[1]").classList.remove("col-12");
    getElementByXpath("//*[@id=\"container\"]/div[2]/div[1]").style.width = "4vw";

    // menu-sidebar
    getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div/div[1]").classList.remove("col-md-2");
    getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div/div[1]").classList.add("col-12");

    // menu-content -> sidebar texts
    sidebar.classList.add("pl-3");
    sidebar.classList.remove("pr-4");
    sidebar.classList.remove("col-md-10");
    
    // sidebar bottom scrollbar
    getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div/div[2]/div/div[1]/div/div[1]").classList.add("m-0");
    
    // sidebar row
    getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div").style.height = "100%";
    getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div").classList.add("m-0");
    getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div").classList.add("flex-row");
    getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div").classList.add("flex-nowrap");
}

function getOldDiscordNoticeBack() {
    var aTag = getElementByXpath("//*[@id=\"container\"]/div[3]/div/div/div/div/div[1]/a");
    aTag.href = "https://discord.gg/JA7c7RBu"; // Convite ao API
    aTag.innerText = "STAIRWAY DISCORD (API)";
}

function hideSidebar(visiButton, lastButton, button, sidebar) {
    if (visiButton == false) {
        sidebar.classList.remove("disappear");
        visiButton = true;
    } else if (lastButton == button && visiButton) {
        sidebar.classList.add("disappear");
        visiButton = false;
    }
    return visiButton;
}





// export default class Stairway {
    
//     site = window.location.hostname

//     note = document.getElementById("popover-description");
//     info = document.getElementById("popover-instruction");
//     question = document.getElementById("popover-question");
//     lastButton = note;

//     sidebar = getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div/div[2]");

//     constructor() {
//         const addCustomStyle = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
//         const time = window.navigator.connection.effectiveType != "4g" ? 5000 : 2000;

//         console.log("EXTENSÃO LIGADA");

//         addCustomStyle(`
//             .disappear {
//                 -webkit-transition: width 1s ease-in-out;
//                 -moz-transition: width 1s ease-in-out;
//                 -o-transition: width 1s ease-in-out;
//                 transition: width 1s ease-in-out;

//                 width:0%;
//             }
//             .coding-sidebar {
//                 display: flex;
//             }
//             .content-body {
//                 flex-wrap: nowrap;
//             }
//         `)

//         window.onload = function() {
//             // console.log('onload');
//             setTimeout(function(){
//                 console.log("INIT TIME ELEMENTO: ", getElementByXpath("//*[@id=\"container\"]/div[2]/div[2]"));
        
//                 note.addEventListener("click", function() {
//                     hideSidebar(lastButton, note, sidebar);
//                 });


//                 rearrange()
//             }, time);
//         };
//     }

//     static rearrange() {
//         console.log("INIT TIME ELEMENTO: ", getElementByXpath("//*[@id=\"container\"]/div[2]/div[2]"));
//         getElementByXpath("//*[@id=\"container\"]/div[2]/div[2]").classList.remove("col-md-8");
//         // sidebar all
//         // getElementByXpath("//*[@id=\"container\"]/div[2]/div[1]").classList.remove("col-md-4");
//         // getElementByXpath("//*[@id=\"container\"]/div[2]/div[1]").classList.add("col-md-2");
    
//         // sidebar texts
//         sidebar.classList.remove("pr-4");
//         sidebar.classList.remove("col-md-10");
//         // sidebar.classList.add("disappear");
//         // sidebar row
//         getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div").classList.add("flex-row");
//         getElementByXpath("//*[@id=\"menu-sidebar\"]/div/div").classList.add("flex-nowrap");
        
//     }
    
//     static getElementByXpath(path) {
//         return document.evaluate(path, document).iterateNext();
//     }
    
//     static hideSidebar(button) {
//         (lastButton == button) ? sidebar.classList.add("disappear") : sidebar.classList.remove("disappear");
//     }
// }
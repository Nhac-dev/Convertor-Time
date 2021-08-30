import {ControlApp} from "./control.js"
import {Header, lang} from "./header.js"

const body = GetElm("body")

class AppMain extends NS_Component{
    constructor(){
        super()
        this.header = new Header()
        this.content =  new ControlApp()
        
        this.feather.SetID("app")
        this.feather.SetChild(this.header.feather)
        this.feather.SetChild(this.content.feather)

        GetElm("head").SetChild(
            CreateElm("title", {
                text: lang == "pt-br"? 
                    "Conversor de tempos":
                    "Time Convertor"
            })
        )
    }
}


const teste = Render(body, AppMain)

import {lang} from "./header.js"

export class ControlApp extends NS_Component{
    constructor(){
        super({}, {
            feather: CreateElm("main", {
            id: "content-app"
            })
        }, false)
        // Header Control
        this.labelMain  = CreateElm("h2", {
            text: lang == "pt-br"? "Conversor de Tempo": "Time Convertor"
        })
        // Label Input
        this.minutesToSecondLabel = CreateElm("label",  {
            for: "minutesToSecond",
            text: lang == "pt-br"? "Minutos para Segundos: ": "Minutes to Seconds: "
        })
        this.DayToSecondLabel = CreateElm("label",  {
            for: "DayToSecond",
            text: lang == "pt-br"? "Dia para Segundos: ": "Day To Second: "
        })
        this.DayToHoursLabel = CreateElm("label",  {
            for: "DayToHours",
            text: lang == "pt-br"? "Dia para horas: ": "Day To Hours: "
        })
        this.DayToMinutesLabel = CreateElm("label",  {
            for: "DayToMinutes",
            text: lang == "pt-br"? "Dia para minutos: ": "Day to Minutes: "
        })
        this.HoursToSecondLabel = CreateElm("label",  {
            for: "HoursToSecond",
            text: lang == "pt-br"? "Horas Para Segundos: ": "Hours to Second: "
        })
        this.HoursToMinutesLabel = CreateElm("label",  {
            for: "HoursToMinutes",
            text: lang == "pt-br"? "Horas para Minutos: ": "Hours to Minutes: "
        })

        this.result = Div({
            id: "result-expression",
            style: {
                borderLeft: "0.15rem solid #000",
            }
        })

        // Inputs
        this.minutesToSecond = CreateElm("input", {
            type:  "number",
            placeholder: lang == "pt-br"? 
                "Tempo em minutos para virar segundos":
                "Time from minutes to second",
            name: "minutesToSecond"
        })
        this.DayToSecond = CreateElm("input", {
            type:  "number",
            placeholder: lang == "pt-br"? 
                "Dia para Segundos":
                "Time from day to second",
            name: "DayToSecond"
        })
        this.DayToHours = CreateElm("input", {
            type:  "number",
            placeholder: lang == "pt-br"?
                "Dia para Horas":
                "Time from day to hours",
            name: "DayToHours"
        
        })
        this.DayToMinutes = CreateElm("input", {
            type:  "number",
            placeholder: lang == "pt-br"?
                "Dia para minutos":
                "Time from day to minutes",
            name: "DayToMinutes"
        })
        this.HoursToSecond = CreateElm("input", {
            type:  "number",
            placeholder: lang == "pt-br"? 
                "Horas para Segundos":
                "Time from hours to second",
            name: "HoursToSecond"
        })
        this.HoursToMinutes = CreateElm("input", {
            type: "number",
            placeholder: lang == "pt-br"?
                "Horas para minutos":
                "Time from hours to minutes",
            name: "HoursToMinutes"
        })
        // Buttons
        this.btnConvert = Btn({
            text: lang == "pt-br"?
                "Converter Todos":
                "Convert All",
            class: ["btn-convert"]
        })

        // Event Listener
        this.btnConvert.Click(()=>{
            var textToPrint = ``
            this.minutesToSecond = GetElm("[name=minutesToSecond]")
            this.DayToSecond = GetElm("[name=DayToSecond]")
            this.DayToHours = GetElm("[name=DayToHours]")
            this.DayToMinutes = GetElm("[name=DayToMinutes]")
            this.HoursToMinutes = GetElm("[name=HoursToMinutes]")
            this.HoursToSecond = GetElm("[name=HoursToSecond]")

            const values = [
                this.minutesToSecond.GetVal(),
                this.DayToSecond.GetVal(),
                this.DayToHours.GetVal(),
                this.DayToMinutes.GetVal(),
                this.HoursToMinutes.GetVal(),
                this.HoursToSecond.GetVal()
            ]
            const validValues = []
            const result = []
            for(const val of values){
                if(IsNum(val)){
                    validValues.push(convertor.ToInt(val))
                }
            }

            for(let i in values){
                switch (i) {
                    case "0":
                        result.push(
                            IsNum(validValues[i])? 
                                validValues[i] * 60:
                                undefined
                        )
                        break;
                    case "1":
                        result.push(
                            IsNum(validValues[i])? 
                                ((24 * validValues[i]) * 60) * 60:
                                // (((24 horus[a day] x days) * 60 minute) * 60 second
                                undefined
                        )
                        break
                    case "2":
                        result.push(
                            IsNum(validValues[i])? 
                                (24 * validValues[i]):
                                // 24 * target
                                undefined
                        )
                        break
                    case "3":
                        result.push(
                            IsNum(validValues[i])? 
                                (24 * validValues[i]) * 60:
                                // (24 * target) * 60 minutes(a hour)
                                undefined
                        )
                        break
                    case "4":
                        result.push(
                            IsNum(validValues[i])? 
                                validValues[i] * 60:
                                // (target x 60 minutes(a hour)
                                undefined
                        )
                        break
                    case "5":
                        result.push(
                            IsNum(validValues[i])? 
                                (validValues[i] * 60) * 60:
                                // (target x 60 minutes(a hour)) x 60 seconds
                                undefined
                        )
                        break
                    default:
                        console.log(i);
                        break;
                }
            }

            for(let index in result){
                switch (ToNum(index)) {
                    case 1:
                        textToPrint += lang == "pt-br"?
                            `Dias para segundos: ${result[index]}<br/>`:
                            `Day to second: ${result[index]}<br/>`
                        break;
                    case 2:
                        textToPrint += lang == "pt-br"?
                            `Dia para horas: ${result[index]}<br/>`:
                            `Day to Hours: ${result[index]}<br/>`
                        break;
                    case 3:
                        textToPrint += lang == "pt-br"?
                            `Dia para minutos: ${result[index]}<br/>`:
                            `Day to minutes: ${result[index]}<br/>`
                        break;
                    case 4:
                        textToPrint += lang == "pt-br"?
                            `Horas para minutos: ${result[index]}<br/>`:
                            `Hours to minutes: ${result[index]}<br/>`
                        break;
                    case 5:
                        textToPrint += lang == "pt-br"?
                            `Horas para segundos: ${result[index]}<br/>`:
                            `Hours to second: ${result[index]}<br/>`
                        break;
                    default:
                        break;
                }
            }

            this.result.SetHTML(`
                <hr/>
                ${textToPrint}
            `)
        })
        // Append child
        this.feather.SetChild(this.labelMain)
            this.feather.AddHTML(`<hr/>`)
        this.feather.SetChild(this.minutesToSecondLabel)
        this.feather.SetChild(this.minutesToSecond)
            this.feather.AddHTML(`<br/>`)
        this.feather.SetChild(this.DayToSecondLabel)
        this.feather.SetChild(this.DayToSecond)
            this.feather.AddHTML(`<br/>`)
        this.feather.SetChild(this.DayToHoursLabel)
        this.feather.SetChild(this.DayToHours)
            this.feather.AddHTML(`<br/>`)
        this.feather.SetChild(this.DayToMinutesLabel)
        this.feather.SetChild(this.DayToMinutes)
            this.feather.AddHTML(`<br/>`)
        this.feather.SetChild(this.HoursToSecondLabel)
        this.feather.SetChild(this.HoursToSecond)
            this.feather.AddHTML(`<br/>`)
        this.feather.SetChild(this.HoursToMinutesLabel)
        this.feather.SetChild(this.HoursToMinutes)
            this.feather.AddHTML(`<hr/>`)
        this.feather.SetChild(this.btnConvert)
        this.feather.SetChild(this.result)

        
    }
}
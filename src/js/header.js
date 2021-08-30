export const lang =  GetElm("html").lang 
export const page =  location.pathname.includes("f")? "formule": "home"
export class Header extends NS_Component{
    constructor(){
        super({}, {
            feather: CreateElm("header", {
                id: "header"
            })
        })
        this.navBar = CreateElm("nav", {
            style: {
                width: "100%",
                display: "flex",
                padding: "0.5rem",
                justifyContent: "center"
            }
        })

        this.navBar.SetHTML(
            lang == "pt-br"?
            `
                <p><a target="_blank" href="https://github.com/Nhac-dev/">GitHub do Autor</a></p>
                <p><a target="_blank" href="https://www.instagram.com/jeff.developer/">Instagram do Autor</a></p>
                ${
                    page == "home"? `<p><a href="./f/index.html">Formula</a></p>`: 
                    `<p><a href="../index.html">Inicio</a></p>`
                }
                <p><a href="/index-en.html">English Page</a></p>
            `:
            `
                <p><a target="_blank" href="https://github.com/Nhac-dev/">GitHub Author</a></p>
                <p><a target="_blank" href="https://www.instagram.com/jeff.developer/">Instagram Author</a></p>
                
                ${
                    page == "home"? `<p><a href="./f/index-en.html">Formule</a></p>`: 
                    `<p><a href="../index-en.html">Home</a></p>`
                }

                <p><a href="/index.html">Página Português</a></p>

            `
        )
        
        this.feather.SetChild(this.navBar)
    }
}
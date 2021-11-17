
import vragenData from '../data/vragenData'
import router from "../router";
import Resultaten from "./Resultaten";
import Informatie from "./Informatie";

export default {
    name: "VraagComponent",
    components:{
        Resultaten,
        Informatie

    },


    data() {
        return{
            vragenData,
            id: vragenData.vragen[0].id,
            vraag: vragenData.vragen[0].vraag,
            juistenAntwoord: vragenData.vragen[0].juistenAntwoord,
            puntenIct: vragenData.vragen[0].puntenIct,
            puntenAenM: vragenData.vragen[0].puntenAenM,
            puntenTeni: vragenData.vragen[0].puntenTeni,
            puntenMei: vragenData.vragen[0].puntenMei,
            puntenBeni: vragenData.vragen[0].puntenBeni,
            lengtenVragen: vragenData.vragen.length,
            iteratie:0,
            geklikteButton:true,
            allPoints:[
                {name: "Ict", points: 0},
                {name: "AenM", points: 0},
                {name: "TenI", points: 0},
                {name: "Mei", points: 0},
                {name: "BenI", points: 0}
            ],
            nummer1:"",
            nummer2:"",
            nummer3:""
        }
    },
    methods:{
        next(){
            //doet vraag + 1
            this.iteratie++
            this.id = vragenData.vragen[this.iteratie].id
            this.vraag = vragenData.vragen[this.iteratie].vraag

        },
        controle() {
            //
            if (this.iteratie < this.lengtenVragen -1)
            {
                if(this.geklikteButton === vragenData.vragen[this.iteratie].juistenAntwoord){
                    this.allPoints[0].points += vragenData.vragen[this.iteratie].puntenIct
                    this.allPoints[1].points += vragenData.vragen[this.iteratie].puntenAenM
                    this.allPoints[2].points += vragenData.vragen[this.iteratie].puntenTeni
                    this.allPoints[3].points += vragenData.vragen[this.iteratie].puntenMei
                    this.allPoints[4].points += vragenData.vragen[this.iteratie].puntenBeni
                }
                this.next()
            }
            else{
                //console.log("punten ict: " + this.allPoints[0].points)
                //console.log("punten AenM: " + this.allPoints[1].points)
                //console.log("punten TenI: " + this.allPoints[2].points)
                //console.log("punten Mei: " + this.allPoints[3].points)
                //console.log("punten BenI: " + this.allPoints[4].points)

                //sorteert de puntenverdeling met sort
                this.allPoints.sort((a, b) => {
                    return a.points - b.points
                })

                //console.log(this.allPoints)
                // nummer 4 is de grootste
                this.nummer1 = this.allPoints[4].name
                this.nummer2 = this.allPoints[3].name
                this.nummer3 = this.allPoints[2].name



                //console.log("jouw nummer een is: " + this.numer1)
                //console.log("jouw nummer twee is: " + this.numer2)
                //console.log("jouw nummer drie is: " + this.numer3)
                alert("dit is het einde van de vragen lijst");
                alert("jouw nummer een is: " + this.nummer1)
                alert("jouw nummer twee is: " + this.nummer2)
                alert("jouw nummer drie is: " + this.nummer3)

                router.push('resultaten')


            }
        },
        //button false func. controle uitgevoerd
        falseGeklikt(){
            this.geklikteButton = false
            this.controle()
        },
        trueGeklikt(){
            this.geklikteButton = true
            this.controle()
        }
    }
}
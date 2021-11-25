import schoolData from "../data/schoolData";

export default {
    data() {
        return{
            fotoPlaats1: "",
            fotoPlaats2: "",
            fotoPlaats3: "",
            titelPlaats1:"",
            titelPlaats2:"",
            titelPlaats3:"",
            time: 2000,
            n1:0,
            n2:0,
            n3:0
        }
    },
    mounted() {
        this.toonAntwoord()
        //this.change()
        setInterval(this.change, 3000)
    },
    methods:{
        //functie om antwoord te tonen
        toonAntwoord(){
            //haal benodigde variabele op
            this.n1 = sessionStorage.getItem("n1")
            this.n2 = sessionStorage.getItem("n2")
            this.n3 = sessionStorage.getItem("n3")
            //verander titel
            this.titelPlaats1 = schoolData.schoolInfo[this.n1].title
            this.titelPlaats2 = schoolData.schoolInfo[this.n2].title
            this.titelPlaats3 = schoolData.schoolInfo[this.n3].title
            //verander afbeelding
            this.fotoPlaats1 = schoolData.schoolInfo[this.n1].image1
            this.fotoPlaats2 = schoolData.schoolInfo[this.n2].image1
            this.fotoPlaats3 = schoolData.schoolInfo[this.n3].image1
            //teskt
            this.tekstPlaats1 = schoolData.schoolInfo[this.n1].content
            this.tekstPlaats2 = schoolData.schoolInfo[this.n2].content
            this.tekstPlaats3 = schoolData.schoolInfo[this.n3].content
        },
        change(){
            console.log('change')

            if (this.fotoPlaats1 === schoolData.schoolInfo[this.n1].image1){
                console.log('if true 1')
                this.fotoPlaats1 = schoolData.schoolInfo[this.n1].image2
                this.fotoPlaats2 = schoolData.schoolInfo[this.n2].image2
                this.fotoPlaats3 = schoolData.schoolInfo[this.n3].image2
                return
            }
            if (this.fotoPlaats1 === schoolData.schoolInfo[this.n1].image2){
                console.log('if true 2')
                this.fotoPlaats1 = schoolData.schoolInfo[this.n1].image3
                this.fotoPlaats2 = schoolData.schoolInfo[this.n2].image3
                this.fotoPlaats3 = schoolData.schoolInfo[this.n3].image3
                return
            }
            if (this.fotoPlaats1 === schoolData.schoolInfo[this.n1].image3){
                console.log('if true 3')
                this.fotoPlaats1 = schoolData.schoolInfo[this.n1].image1
                this.fotoPlaats2 = schoolData.schoolInfo[this.n2].image1
                this.fotoPlaats3 = schoolData.schoolInfo[this.n3].image1
                return
            }
        }
    }
}
import schoolData from "../data/schoolData";

export default {
    data(){
        return{
            //data ophalen van JSON
            schoolData,
            id: schoolData.schoolInfo[0].id,
            title: schoolData.schoolInfo[4].title,
            content: schoolData.schoolInfo[0].content,
            img: schoolData.schoolInfo[0].image1,
            aantalScholen: schoolData.schoolInfo.length,
            iteratie: 0

        }
    }
}
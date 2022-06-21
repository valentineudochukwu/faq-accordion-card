const questionnaire = document.querySelectorAll('.questionnaire');
const questionnaireContent =document.querySelectorAll('.questionnaire-content');
const arrow = document.querySelectorAll('.arrow');

function openQuestionnaire0(){
    if(questionnaireContent[0].style.display ==="block"){
        questionnaireContent[0].style.display ="none";
        questionnaire[0].style.color ="hsl(240, 6%, 50%)";
        questionnaire[0].style.fontWeight ="400";
        arrow[0].style.transform ="rotate(0deg)";
    }
    else{
        questionnaireContent[0].style.display="block",
        questionnaire[0].style.color="hsl(0, 0%, 0%)",
        questionnaire[0].style.fontWeight="700",
        arrow[0].style.transform="rotate(180deg)"
    }
}

function openQuestionnaire1(){
    if(questionnaireContent[1].style.display ==="block"){
        questionnaireContent[1].style.display ="none";
        questionnaire[1].style.color ="hsl(240, 6%, 50%)";
        questionnaire[1].style.fontWeight ="400";
        arrow[1].style.transform ="rotate(0deg)";
    }
    else{
        questionnaireContent[1].style.display="block",
        questionnaire[1].style.color="hsl(0, 0%, 0%)",
        questionnaire[1].style.fontWeight="700",
        arrow[1].style.transform="rotate(180deg)"
    }
}

function openQuestionnaire2(){
    if(questionnaireContent[2].style.display ==="block"){
        questionnaireContent[2].style.display ="none";
        questionnaire[2].style.color ="hsl(240, 6%, 50%)";
        questionnaire[2].style.fontWeight ="400";
        arrow[2].style.transform ="rotate(0deg)";
    }
    else{
        questionnaireContent[2].style.display="block",
        questionnaire[2].style.color="hsl(0, 0%, 0%)",
        questionnaire[2].style.fontWeight="700",
        arrow[2].style.transform="rotate(180deg)"
    }
}

function openQuestionnaire3(){
    if(questionnaireContent[3].style.display ==="block"){
        questionnaireContent[3].style.display ="none";
        questionnaire[3].style.color ="hsl(240, 6%, 50%)";
        questionnaire[3].style.fontWeight ="400";
        arrow[3].style.transform ="rotate(0deg)";
    }
    else{
        questionnaireContent[3].style.display="block",
        questionnaire[3].style.color="hsl(0, 0%, 0%)",
        questionnaire[3].style.fontWeight="700",
        arrow[3].style.transform="rotate(180deg)"
    }
}

function openQuestionnaire4(){
    if(questionnaireContent[4].style.display ==="block"){
        questionnaireContent[4].style.display ="none";
        questionnaire[4].style.color ="hsl(240, 6%, 50%)";
        questionnaire[4].style.fontWeight ="400";
        arrow[4].style.transform ="rotate(0deg)";
    }
    else{
        questionnaireContent[4].style.display="block",
        questionnaire[4].style.color="hsl(0, 0%, 0%)",
        questionnaire[4].style.fontWeight="700",
        arrow[4].style.transform="rotate(180deg)"
    }
}

questionnaire[0].addEventListener("click", openQuestionnaire0);
questionnaire[1].addEventListener("click", openQuestionnaire1);
questionnaire[2].addEventListener("click", openQuestionnaire2);
questionnaire[3].addEventListener("click", openQuestionnaire3);
questionnaire[4].addEventListener("click", openQuestionnaire4);

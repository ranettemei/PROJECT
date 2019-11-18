var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
    var op1=document.getElementById('op1');
    var op2=document.getElementById('op2');
    var op3=document.getElementById('op3');
    var op4=document.getElementById('op4');


        var app={
                    questions:[
                                {q:'Also known as the electromotive force.', options:['voltage','current','resistance','none of these'],answer:1},
                                {q:'_____ oppose the flow of current.', options:['voltage','current','resistance','none of these'],answer:2},
                                {q:'The Higher the voltage the ______ the current.', options:['bigger','current','lower','none of these'],answer:3}
                             ],
                    index:0,
                    load:function(){
                            if(this.index<=this.questions.length-1){
                            quizBox.innerHTML=this.questions[this.index].q;
                            op1.innerHTML=this.questions[this.index].options[0];
                            op2.innerHTML=this.questions[this.index].options[1];
                            op3.innerHTML=this.questions[this.index].options[2];
                            op4.innerHTML=this.questions[this.index].options[3];
                            }
                            else{
                            quizBox.innerHTML="DONE";
                            op1.style.display="none";
                            op2.style.display="none";                           
                            op3.style.display="none";
                            op4.style.display="none";
                            btn.style.display="none";
                            }

                            
                    },
                    next:function(){
                        this.index++;
                        this.load();
                    },
                    check:function(ele){

                        var id=ele.id.split('');
                       
                        if(id[id.length-1]==this.questions[this.index].answer){
                            this.score++;
                            ele.ClassName="correct";
                            ele.innerHTML="Correct";
                            this.scoreCard();
                        }
                        else{
                            ele.ClassName="wrong";
                            ele.innerHTML="Wrong";
                        }

                    },
                    notClickAble:function(){
                        for(let i=0;i<ul.children.length;i++){
                            ul.children[i].style.pointersEvents="none";
                        }
                    },
                    score:0,
                    scoreCard:function(){
                        scoreCard.innerHTML=this.questions.length+"/"+this.score;
                    }
        }

        window.onload=app.load();

        function button(ele){
            app.check(ele);
            app.notClickAble();
        }

        function next(){
            app.next();
        }
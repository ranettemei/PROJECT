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
                                {q:'_____ oppose the flow of current.', options:['voltage','current','resistance','none of these'],answer:3},
                                {q:'The Higher the voltage the ______ the current.', options:['bigger','current','lower','none of these'],answer:3},
                                {q:'The number 0.123123123…….is', options:['Irrational','Surd','Rational','Transcendental'],answer:3},
                                {q: 'Express decimally: seven hundred twenty-five hundred thousandths', options:['0.000725','0.00725 ','.0725', '0.725'],answer:2},
                                {q: '3200 mils is equal to how many degrees?', options:['45 degrees','90 degrees','180 degrees','270 degrees'],answer:3},
                                {q: 'MCMXCIV is equivalent to what number?', options:['1964','1994','1984','1974'],answer:2},
                                {q: '10 to the 12th power is the value of the prefix', options:['Micro','Femto','Tera','Atto (atto)'],answer:4},
                                {q: 'A rat fell on a bucket of a water wheel with diameter of 600 cm which travelled an angle of 190° before it dropped from the bucket. Calculate for the linear cm that the rat was carried by the bucket before it fell.', options:['950','965','985','995 '],answer:4},
                                {q: 'Given a triangle, C=100°, a= 15 m, b= 20 m. Find c.', options:['26 m','27 m','28 m','29 m'],answer:2},
                                {q: 'How many diagonals are there  in a polygon of 20 sides?', options:['200','170','100','158'],answer:2},
                                {q: 'Find the area (in cm²) of a regular octagon inscribed in a circle of radius 10cm.', options:['283','289','298','238'],answer:1},
                                {q: 'A trapezoid has an area of 36 m² and an altitude of 2m. Its two bases have a ratio of 4:5. What are the lengths of the bases.', options:['12,15','7,11','8,10','16,20 '],answer:4},
                                {q: 'If the edge of a cube is increased by 30%, by how much is the surface area increased?', options:['30%','33%','60%','69% '],answer:4},
                                {q: 'A circular cylinder is circumscribed about a right prism having a square base one meter on an edge. The volume of the cylinder is 6.283 cu. m. Find its altitude in meters.', options:['4.00 ',' 3.75','3.50','3.25'],answer:1},
                                {q: 'The volume of the frustum of a regular triangular pyramid is 135 cu. m. The lower base is an equilateral triangle with an edge of 9 m. The upper base is 8m above the lower base. What is the upper edge in meters?', options:['2',' 3 ','4','6'],answer:2},
                                {q: 'How many times do the volume of a sphere increases if the radius is douboed?', options:['4 times','2 times','6 times','8 times '],answer:4},
                                {q: 'The volume of water in a spherical tank having a diameter of 4 m is 5. 236 m³. Determine the depth of the water in the tank.', options:['1.0 ','1.2','1.4',' 1.8'],answer:1},
                                {q: ' Find the distance of the line 3x+4y=5 from the origin', options:['4','3','2','1'],answer:4},
                                {q: 'The distance from the point (2,1) to the line 4x-3y+5=0 is:', options:['1',' 2 ','3','4'],answer:2},
                                {q: 'What is the slope of the line 3x+2y+1= 0?', options:['3/2','2/3','-3/2 ','-2/3'],answer:3},
                                {q: 'What is the x-intercept of the line passing through (1,4) and (4,1)?', options:['4.5','5','4','6'],answer:2},
                                {q: 'Find the area of the triangle which line 2x- 3y+6=0 forms with the coordinate axis.', options:['3','4','2','5'],answer:1},
                                {q: '“For every action, there is an equal and opposite reaction.”  It is which of Newton’s law of motion?', options:['First Law','Second Law','Third Law','fourth law'],answer:3},
                                {q: 'Which cell organelle is also called powerhouse of the cell?', options:['Ribosome','Endoplasmic reticulum','Cytoplasm','Mitochondria'],answer:4},
                                {q: 'The bending of light through a glass prism is called __.', options:['Reflection','Refraction','Diffraction','Absorption'],answer:2},
                                {q: 'Newton is the unit of force or energy?', options:['Voltage','Power','Energy','Force'],answer:4},
                                {q: 'Which of the following is NOT a form of carbon?', options:['Diamond','Graphite','Amorphous carbon','Ferrite'],answer:4},
                                {q: 'Medicine that is given to fight bacteria but not viruses?', options:['Mefenamic','Antibiotic','Biogesic','None of the above'],answer:2},
                                {q: 'Earthquakes are caused due to movements of ____.', options:['Natural phenomenon','Climate change','Tectonic plates','Ozone Layer'],answer:3},
                                {q: 'An acidic liquid will have a _ pH.', options:['High','Low','Medium','Moderately'],answer:2},
                                {q: 'Which is the lightest element in the periodic table?', options:['Helium','Carbon','Nitrogen','Hydrogen'],answer:4},
                                {q: 'What is the boiling point of water?', options:['25°C','50°C','75°C','100°C'],answer:4},
                                {q: 'What are the three states of matter?', options:['Earth, water, air','Fire,ice, water','Steam, smoke, ice','Solid, liquid gas'],answer:4},
                                {q: 'When you push something, you apply __.', options:['Force','Acceleration','Mass','Compression'],answer:1},
                                {q: 'Which material from the following has the highest transparency?', options:['Glass','Wood','Water','Metal'],answer:1},
                                {q: 'Which scientist proposed the three laws of motion?', options:['Isaac Newton','Thomas Alva Edison','Albert Einstein','Stephen Hawking'],answer:1},
                                {q: 'Earth is surrounded by layers of gases collectively called the ___.', options:['Hydrosphere',' Stratosphere','Atmosphere','Ozone layer'],answer:3},
                                {q: 'What energy emerges from motion?', options:['Potential energy','Electrical energy','Kinetic energy','Gravitational energy'],answer:3},
                                {q: 'The standard unit of measurement for energy is __.', options:['Newton','Ampere','Watt','Joule'],answer:4},
                             ],
                    index:0,
                    load:function(){
                            if(this.index<=this.questions.length-1){
                            quizBox.innerHTML=this.index+1+"."+this.questions[this.index].q;
                            op1.innerHTML=this.questions[this.index].options[0];
                            op2.innerHTML=this.questions[this.index].options[1];
                            op3.innerHTML=this.questions[this.index].options[2];
                            op4.innerHTML=this.questions[this.index].options[3];
                                this.scoreCard();
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
                            ele.className="correct";
                            ele.innerHTML="Correct";
                            this.scoreCard();
                        }
                        else{
                            ele.className="wrong";
                            ele.innerHTML="Wrong";
                        }

                    },
                    notClickAble:function(){
                        for(let i=0;i<ul.children.length;i++){
                            ul.children[i].style.pointerEvents="none";
                        }
                    },

                    clickAble:function(){
                        for (let i=0;i<ul.children.length;i++){
                            ul.children[i].style.pointerEvents="auto";
                            ul.children[i].className=''

                        }
                        
                    },
                    score:0,
                    scoreCard:function(){
                        scoreCard.innerHTML=this.score+"/"+this.questions.length;
                    }
        }

        window.onload=app.load();

        function button(ele){
            app.check(ele);
            app.notClickAble();
        }

        function next(){
            app.next();
            app.clickAble();
        }
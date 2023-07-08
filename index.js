        const vazn = document.querySelector('.vazn');
        const ghad = document.querySelector('.ghad');
        const mohasebe = document.querySelector('.mohasebe');
        const pjavab = document.querySelector('.javab');
        const pghad = document.querySelector('.pghad');
        const pvazn = document.querySelector('.pvazn');
        const whrite_bmi = document.querySelector('.whrite_bmi');
        vazn.addEventListener('change', changeVazn);
        ghad.addEventListener('change', changeGhad);
        mohasebe.addEventListener('click', clickMohasebe);
        let aghad = 0;
        let bvazn = 0;
        function changeGhad(e){
            aghad = e.target.value;
        };
        function changeVazn(e){
            bvazn = e.target.value;
        };
        function clickMohasebe(){
            const BMI = Math.round(bvazn / (aghad * aghad) * 10000);
            pghad.innerText = aghad;
            pghad.style.color = "aqua";
            pvazn.innerText = bvazn;
            pvazn.style.color = "aqua";
            whrite_bmi.innerText = BMI;
            whrite_bmi.style.color = "aqua";
            if(BMI > 30){
                pjavab.innerText = "چاق";
                pjavab.style.color = "red";
            }else if(BMI < 18.5){
                pjavab.innerText = "کمبود وزن";
                pjavab.style.color = "blue";
            }else if(BMI > 18.5 && BMI < 24.5){
                pjavab.innerText = " وزن سلامت";
                pjavab.style.color = "green";
            }else if(BMI > 25 && BMI < 29.9 ){
                pjavab.innerText = "اضافه وزن";
                pjavab.style.color = "orange";
            }else{
                pjavab.innerText ="لطفا اعداد خود را صحیح وارد کنید "
            }   
        }
        const number1 = document.querySelector('.number1');
        const number2 = document.querySelector('.number2');
        const option = document.querySelector('#option');
        const click_mohasebe = document.querySelector('.click_mohasebe');
        const javab_mashin = document.querySelector('.javab_mashin');
        number1.addEventListener('change', changenumber1);
        number2.addEventListener('change', changenumber2);
        option.addEventListener('change', changeoption);
        click_mohasebe.addEventListener('click', clickjavabmashin);
        let anumber1 = 0;
        let bnumber2 = 0;
        let coption = '';
        function changenumber1(e){
            anumber1 = e.target.value;
        };
        function changenumber2(e){
            bnumber2 = e.target.value;
        };
        function changeoption(e){
            coption = e.target.value;
        };
        function clickjavabmashin(){
            if(coption == '+'){
                mashin = Number(anumber1) + Number(bnumber2);
            }else if(coption == '-'){
                mashin = anumber1 - bnumber2;
            }else if(coption == '/'){
                mashin = anumber1 / bnumber2;
            }else if(coption == '*'){
                mashin = anumber1 * bnumber2;
            }else if(coption == '**'){
                mashin = anumber1 ** bnumber2;
            }
            javab_mashin.innerText = mashin;
        };
        let vard_matn = document.getElementById('vard_matn');
        let input_negareshi = document.getElementById('input_negareshi');
        let click_negareshi = document.getElementById('click_negareshi');
        click_negareshi.addEventListener('click',function(){
            let b = input_negareshi.value;
            vard_matn.innerHTML = jodakonande(b);

        });
        function jodakonande(fullname){
            let name = '';
            let famil = '';
            let flag = false;
            let dut = 0;
            for (let i = 0; i < fullname.length; i++) {
                const element = fullname[i];
                if (element == '.'){
                    flag = true;
                    continue
                }else if(flag == true){
                    name += fullname[i];
                    dut += 1;
                }else if(flag == false){
                    famil += fullname[i]
                }
            }
            return famil + ' ' + name;
        };
        const type_auto = document.querySelector('.type_auto');
        const start_type = document.querySelector('.start_type');
        type_auto.addEventListener('change', changetypeauto);
        start_type.addEventListener('click', clickstarttype);
        let type = '';
        function changetypeauto(e){
            type = e.target.value;
        }
        function clickstarttype(){
            let string = type;
            let str = document.getElementById('str');
            let split = string.split("");
    
            (function anim(){
                split.length > 0 ? str.innerHTML += split.shift() : clearTimeout(running);
                let running = setTimeout(anim, 50);
            })();
        }
        let one = document.querySelector('.one');
        let hide_one = document.querySelectorAll('.hide_one');
        let two = document.querySelector('.two');
        let hide_two = document.querySelectorAll('.hide_two');
        let three = document.querySelector('.three');
        let hide_three = document.querySelectorAll('.hide_three');
        let four = document.querySelector('.four');
        let hide_four = document.querySelectorAll('.hide_four');
        let five = document.querySelector('.five');
        let hide_five = document.querySelectorAll('.hide_five');
        one.addEventListener('click', () => {
            for(let index = 0; index < hide_one.length; index++){
                const element = hide_one[index];
                element.style.display = "block";
            }
            for(let index = 0; index < hide_two.length; index++){
                const element = hide_two[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_three.length; index++){
                const element = hide_three[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_four.length; index++){
                const element = hide_four[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_five.length; index++){
                const element = hide_five[index];
                element.style.display = "none";
            }
        })
        two.addEventListener('click', () => {
            for(let index = 0; index < hide_two.length; index++){
                const element = hide_two[index];
                element.style.display = "block";
            }
            for(let index = 0; index < hide_one.length; index++){
                const element = hide_one[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_three.length; index++){
                const element = hide_three[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_four.length; index++){
                const element = hide_four[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_five.length; index++){
                const element = hide_five[index];
                element.style.display = "none";
            }
        })
        three.addEventListener('click', () => {
            for(let index = 0; index < hide_three.length; index++){
                const element = hide_three[index];
                element.style.display = "block";
            }
            for(let index = 0; index < hide_one.length; index++){
                const element = hide_one[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_two.length; index++){
                const element = hide_two[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_four.length; index++){
                const element = hide_four[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_five.length; index++){
                const element = hide_five[index];
                element.style.display = "none";
            }
        })
        four.addEventListener('click', () => {
            for(let index = 0; index < hide_four.length; index++){
                const element = hide_four[index];
                element.style.display = "block";
            }
            for(let index = 0; index < hide_one.length; index++){
                const element = hide_one[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_three.length; index++){
                const element = hide_three[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_two.length; index++){
                const element = hide_two[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_five.length; index++){
                const element = hide_five[index];
                element.style.display = "none";
            }
        })
        five.addEventListener('click', () => {
            for(let index = 0; index < hide_five.length; index++){
                const element = hide_five[index];
                element.style.display = "block";
            }
            for(let index = 0; index < hide_one.length; index++){
                const element = hide_one[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_three.length; index++){
                const element = hide_three[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_two.length; index++){
                const element = hide_two[index];
                element.style.display = "none";
            }
            for(let index = 0; index < hide_four.length; index++){
                const element = hide_four[index];
                element.style.display = "none";
            }
        })
        const progress = document.getElementById('progress');
        const circle = document.querySelectorAll('.circle');
        let n = 0;
        function hide(){
            for (let index = 0; index < circle.length; index++) {
                const element = circle[index];
                element.addEventListener('click', function(){
                    this.classList.add('progress')
                }) 
            } 
        }
        function show(){
            for (let index = 0; index < circle.length; index++) {
                const element = circle[index];
                element.classList.remove('progress');
        
            };
        }
        setInterval(() => {
            n++;
            if(n>circle.length-1){
                n=0
            }
            hide();
            show();
            circle[n].classList.add('progress');
            if (n == 1) {
                circle[n].style.color='red';
                circle[n].style.background="yellow"
            } else if(n == 2){
                circle[n].style.color='blue';
                circle[n].style.background="yellow"
            }else if(n == 3){
                circle[n].style.color='orange';
                circle[n].style.background="yellow"
            }else if(n == 4){
                circle[n].style.color='green';
                circle[n].style.background="yellow"
            }
        }, 3000);
        $(document).ready(function(){
            $('.more').click(function(){
                $('.zir_menu').toggle();
            });

            $('.bx').click(function(){
                $('.three_khat').toggle()
            });
            setInterval(() => {
                if($('.current').next('img').length > 0){
                    $('.current').next().addClass('current');
                    $('.current').prev().removeClass('current');
                }else{
                    $('#slides').find('img').first().addClass('current');
                    $('.current').last().removeClass('current')
                }
            }, 4000);
        })

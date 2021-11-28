window.onload = function () {
    /*
    function changeTab(id){
        var contentTab1 = document.querySelector('contentTab1');
        var contentTab2 = document.querySelector('contentTab2');
        var contentTab3 = document.querySelector('contentTab3');
        if(id == 'tab1'){
            contentTab2.style.display = 'none';
            contentTab3.style.display = 'none';
            contentTab1.style.display = 'block';
        }
        if(id == 'tab2'){
            tab1.style.display = 'none';
            contentTab3.style.display = 'none';
            contentTab1.style.display = 'block';
        }
        if(id == 'tab3'){
            contentTab2.style.display = 'none';
            contentTab1.style.display = 'none';
            contentTab3.style.display = 'block';
        }
    }
    */

    var changeTab = function()
    {
        var id = this.id;
        var contentTab1 = document.querySelector('#contentTab1');
        var contentTab2 = document.querySelector('#contentTab2');
        var contentTab3 = document.querySelector('#contentTab3');
        if(id == 'tab1'){
            contentTab2.style.display = 'none';
            contentTab3.style.display = 'none';
            contentTab1.style.display = 'block';
            //изменение стиля кнопки
            if ( document.getElementById("tab1").classList.contains('black') ){
                document.getElementById("tab1").classList.remove('black');
                document.getElementById("tab1").classList.add('orange');

                document.getElementById("tab2").classList.remove('orange');
                document.getElementById("tab2").classList.add('black');
                
                document.getElementById("tab3").classList.remove('orange');
                document.getElementById("tab3").classList.add('black');
            }
        }
        if(id == 'tab2'){
            contentTab1.style.display = 'none';
            contentTab3.style.display = 'none';
            contentTab2.style.display = 'block';
            //изменение стиля кнопки
            if ( document.getElementById("tab2").classList.contains('black') ){
                document.getElementById("tab2").classList.remove('black');
                document.getElementById("tab2").classList.add('orange');

                document.getElementById("tab1").classList.remove('orange');
                document.getElementById("tab1").classList.add('black');
                
                document.getElementById("tab3").classList.remove('orange');
                document.getElementById("tab3").classList.add('black');
            }
        }
        if(id == 'tab3'){
            contentTab2.style.display = 'none';
            contentTab1.style.display = 'none';
            contentTab3.style.display = 'block';
            
            //изменение стиля кнопки
            if ( document.getElementById("tab3").classList.contains('black') ){
                document.getElementById("tab3").classList.remove('black');
                document.getElementById("tab3").classList.add('orange');

                document.getElementById("tab2").classList.remove('orange');
                document.getElementById("tab2").classList.add('black');
                
                document.getElementById("tab1").classList.remove('orange');
                document.getElementById("tab1").classList.add('black');
            }
        }
    }
    document.getElementById('tab1').onclick = changeTab;
    document.getElementById('tab2').onclick = changeTab;
    document.getElementById('tab3').onclick = changeTab;
}


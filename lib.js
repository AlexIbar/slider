function Slider(param1,param2){
    this.imagenes = $(param1).childNodes;
    this.bolas;
    this.lista=0;
    this.tiempo;
    this.time;
    this.inicial=function(){
        $(param2).innerHTML=''
        for(var g = 0; g<this.imagenes.length;g++){
            $(param2).innerHTML+='<div onclick="aqui('+g+')"></div>'
        }
        this.bolas = $(param2).childNodes
        this.imagenes[this.lista].classList.remove('invi')
        this.imagenes[this.lista].classList.add('aparece')
        this.bolas[this.lista].style.backgroundColor='black'
        this.iniciar()
    };
    this.correr = function(){
        $('#carga-slider').classList.add('agrandar')
        this.time = setTimeout(()=>$('#carga-slider').classList.remove('agrandar'),4510)
        if(this.lista === this.imagenes.length-1){
            this.imagenes[this.imagenes.length-1].classList.add('invi')
            this.bolas[this.imagenes.length-1].style.backgroundColor='grey'
            this.imagenes[0].classList.remove('invi')
            this.imagenes[0].classList.add('aparece')
            this.bolas[0].style.backgroundColor='black'
            this.lista = 0
        }else{
            this.imagenes[this.lista].classList.add('invi')
            this.bolas[this.lista].style.backgroundColor='grey'
            this.imagenes[this.lista+1].classList.remove('invi')
            this.imagenes[this.lista+1].classList.add('aparece')
            this.bolas[this.lista+1].style.backgroundColor='black'
            this.lista++
        }
    };
    this.reiniciar=function(){
        $(param2).innerHTML=''
        for(var g = 0; g<this.imagenes.length;g++){
            $(param2).innerHTML+='<div onclick="aqui('+g+')"></div>'
            this.imagenes[g].classList.add('invi')
        }
        this.bolas = $(param2).childNodes
        this.imagenes[this.lista].classList.remove('invi')
        this.imagenes[this.lista].classList.add('aparece')
        this.bolas[this.lista].style.backgroundColor='black'
        this.iniciar()
    }
    this.parar=function(){
        $('#carga-slider').classList.remove('agrandar')
        clearInterval(this.tiempo)
        clearTimeout(this.time)
    };
    this.iniciar = function(){
        $('#carga-slider').classList.add('agrandar')
        this.time = setTimeout(()=>$('#carga-slider').classList.remove('agrandar'),4510)
        this.tiempo = setInterval(()=>this.correr(),5000)
    };
    this.mas = function aumentar(){
        S.parar()
        if(S.lista == S.imagenes.length-1){
            S.lista = 0 
        }else{
            S.lista++
        }
        setTimeout(()=>S.reiniciar(),10)
        $('#control2').style.display='block'
        $('#control1').style.display='none'
    };
    this.menos = function disminuir(){
        S.parar()
        if(S.lista == 0){
            S.lista = S.imagenes.length-1
        }else{
            S.lista--
        }
        setTimeout(()=>S.reiniciar(),10)
        $('#control2').style.display='block'
        $('#control1').style.display='none'
    }
}
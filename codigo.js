$(document).ready(function() {
    
    cont = 0;
    numCarros = $(".thumb").length - 1;
    estadoPlay = false;

    $(".thumb").click(function() {
        idx = $(this).index(".thumb");
        cont = idx;
        mostra(idx);
    });
    
    function mostra(idx) {
        carro = $(".thumb:eq(" + idx + ")").data("carro");
        $("#imgBox").css({
            "background-image" : "url(images/" + carro + ".jpg)"
        });
        //bolinha
        $(".bolinha").removeClass("active");
        $(".bolinha:eq(" + idx + ")").addClass("active");
        cinza(idx);
    }
    
    $("#flechaDir").click(function(ev) {
        ev.preventDefault();
        if(cont == numCarros)
            cont = 0;
        else
            cont++;
        mostra(cont);
    });
    
    $("#flechaEsq").click(function(ev) {
        ev.preventDefault();
        if(cont == 0)
            cont = numCarros;
        else
            cont--;
        mostra(cont);
    });
    
    $(".bolinha").click(function(ev) {
        ev.preventDefault();
        idx = $(this).index(".bolinha");
        mostra(idx);
        cont = idx;
        
    });

    function cinza (idx) {
        $(".thumb").css({
            "opacity": 1
        })
        $(".thumb:eq(" + idx + ")").css({
            "opacity": 0.5
        });
        $(".thumb").removeClass("cinza");
        $(".thumb:eq(" + idx + ")").addClass("cinza");
    }

    $("#play").click(function(ev) {
        ev.preventDefault();
        if(estadoPlay) {
            clearInterval(x);
            $(this).html("<i class='fa fa-play fa-2x'></i>");
        } else {
            x = setInterval(
                function() {
                    $("#flechaDir").trigger("click");
                }, 2000
            );
            $(this).html("<i class='fa fa-pause fa-2x'></i>");
        }
        estadoPlay = !estadoPlay;
    });

    $("#lupa").click(function(ev) {
        ev.preventDefault();
        carro = $(".thumb.cinza").data("carro");
        $("#imgGrande").attr("src","images/" + carro + ".jpg");
        $("#legenda").html(carro.toUpperCase());
        $("#modalZoom").modal("show");
    })

    mostra(cont);

    /* trocar o fundo */
    $(".btFundo").click(function() {
        fundo = $(this).data('fundo');
        $("body").css({
            "background-image" : "url(images/" + fundo + ")"
        });
    })

});
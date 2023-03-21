
var url_main ='Main.html';

var url_site = 'site.html';
var url_navigation = 'site.html';
var url_for_patient = 'for_pacient.html';
var url_norm_documen = 'doki.html';
var url_contact = 'cont.html';
var url_mkc = 'MKC.html';
var url_corruption = 'site.html';


var url_OMC_1P ='OMC_first_page.html';
var url_OMC_2P ='OMC_second_page.html';
var url_OMC_3P ='OMC_third_page.html';
var url_OMC_4P ='OMC_four_page.html';


function OPEN_INDEX(id){
    if(id === 'site'){
        window.location.href = url_site;
    }
    else if(id === 'navigation'){
        window.location.href = url_navigation;
    }
    else if(id === 'for_patient'){
        window.location.href = url_for_patient;
    }
    else if(id === 'norm_document'){
        window.location.href = url_norm_documen;
    }
    else if(id === 'omc'){
        window.location.href = url_OMC_1P;
    }
    else if(id === 'contact'){
        window.location.href = url_contact;
    }
    else if(id === 'mkc'){
        window.location.href = url_mkc;
    }
    else if(id === 'corruption'){
        window.location.href = url_corruption;
    }
    else if(id === 'main'){
        window.location.href = url_main;
    }
    else if(id === 'OMC_2P'){
        window.location.href = url_OMC_2P;
    }
    else if(id === 'OMC_3P'){
        window.location.href = url_OMC_3P;
    }
    else if(id === 'OMC_4'){
        window.location.href = url_OMC_4P;
    }
}

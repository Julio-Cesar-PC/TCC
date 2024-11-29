function isNullString(value) {
    if (value == "null") {
      return;
    } else {
      return value;
    }
}

function countSubstring(string, substring) {
    //console.log("sou: " +string)
    //console.log("quero: "+substring)
    if (substring == "") return 0; // Evita divisão por 0 no caso de substring vazia
    if(string == "") return 0;
    return string.split(substring).length - 1;
}

// A função padrão para ajustar o iframe
function standardizeIframe(iframeString) {
    if (iframeString === "") {
        return "null";
    }

    // Verifica se o iframeString contém a tag <iframe> (para validação)
    const iframeTagMatch = iframeString.match(/<iframe[^>]*src="([^"]*)"[^>]*>/);
    if (!iframeTagMatch) {
        window.alert("O texto fornecido não contém um iframe válido.");
        throw new Error("A string fornecida não contém um iframe válido.");
    }

    // Extrai o src do iframe
    const originalSrc = iframeTagMatch[1];

    // Preserva os outros atributos do iframe
    const iframeAttributes = iframeString.replace(/<iframe[^>]*src="[^"]*"[^>]*>/, "<iframe>");

    // Agora modificamos os atributos necessários
    let standardizedIframe = iframeAttributes.replace('<iframe', `<iframe width="100%" height="600px" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen`);

    // Restaura o src original preservando a codificação
    standardizedIframe = standardizedIframe.replace('<iframe', `<iframe src="${originalSrc}"`);

    console.log("iframe recebido: ", iframeString);
    console.log("iframe retornado: ", standardizedIframe);

    return standardizedIframe;
}

function adjustDriveUrlForIframe(storedUrl) {
    // Verifica se a URL contém "/file/d/" e substitui o trecho correto
    if (storedUrl.includes("/file/d/")) {
        return storedUrl.replace(/\/view\?.*$/, "/preview");
    } else {
        console.error("URL inválida ou não no formato esperado.");
        return null;
    }
}

function checkIfSolutionIsCorrect(fb) {
    if (Array.isArray(fb)) {
        if (fb.length > 0) {
            return false;
        } else {
            return true;
        }
    } else if (fb.hasOwnProperty("feedback")) {
        if (fb.success) {
            return true;
        } else {
            return false;
        }
    } else {
        if (fb.success) {
            return true;
        }
    }
}

function getRandExURL(userId = null, dificuldade = 0) {
    //var url = "https://script.google.com/macros/s/AKfycbwZKg-bWoZs_OgVkRUmvxxfrdQeSTWbk3lANkRDUPik-zAvLWfieRkhCgFrU415LYYg/exec?actionRequest=getExercicioAleatorio";
    //var url = "https://script.google.com/macros/s/AKfycbyPA-UzG-PVuzKK_d99wr5FS_58xsLv5yDXfIapObnJ6RD-By4EcwlX8FjUo_1sdBPp1w" + "/exec?actionRequest=getExercicioAleatorio";
    
    var url = window.scriptUrl + "/exec?actionRequest=getExercicioAleatorio"
    // Add dificuldade
    if (userId == null) {
        // NÃO FUNCIONA AINDA SEM ESTAR LOGADO
        // ramon: e se setar para pegar um exercicio completamente aleatorio? sem levar em conta a dificuldade
        url = url + "&dificuldade=" + dificuldade;
    } else {
        // Usuário está logado
        url = url + "&dificuldade=userDefault";
        url = url + "&userId=" + userId;
    }

    return url;
}

function getExercicioByIdURL(userId, id, dificuldade=0) {
    //var url = "https://script.google.com/macros/s/AKfycbyPA-UzG-PVuzKK_d99wr5FS_58xsLv5yDXfIapObnJ6RD-By4EcwlX8FjUo_1sdBPp1w" + "/exec?actionRequest=getExercicioById" + "&id=" + id;
    var url = window.scriptUrl + "/exec?actionRequest=getExercicioById" + "&id=" + id;

    if (userId == null) {
        // NÃO FUNCIONA AINDA SEM ESTAR LOGADO
        // ramon: e se setar para pegar um exercicio completamente aleatorio? sem levar em conta a dificuldade
        url = url + "&dificuldade=" + dificuldade;
    } else {
        // Usuário está logado
        url = url + "&dificuldade=userDefault";
        url = url + "&userId=" + userId;
    }
    console.log("url: " + url);
    return url;
}




function getHistoricoURL(authentication = null) {
  //  var url = "https://script.google.com/macros/s/AKfycbwZKg-bWoZs_OgVkRUmvxxfrdQeSTWbk3lANkRDUPik-zAvLWfieRkhCgFrU415LYYg/exec?actionRequest=getHistorico";
  //  var url = "https://script.google.com/macros/s/AKfycbyPA-UzG-PVuzKK_d99wr5FS_58xsLv5yDXfIapObnJ6RD-By4EcwlX8FjUo_1sdBPp1w" + "/exec?actionRequest=getHistorico";
    
    var url = window.scriptUrl +"/exec?actionRequest=getHistorico";
    url = url + "&authentication=" + JSON.stringify(authentication);
    return url;
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    });

    if (typeof res == "undefined") {
        res = null;
    } else {
        res = JSON.parse(res);
    }
    return res;
}

/*
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 
*/
function setUserLevel(userLevelInfo) {
    const progressBarPercentRate = 10;

    $(".current-level").html("Nivel " + userLevelInfo.currentLevel);
    $(".progressbar-progress-text").html(userLevelInfo.levelProgress);
    $(".next-level").html("Nivel " + userLevelInfo.nextLevel);

    var levelPercent = userLevelInfo.levelProgress*progressBarPercentRate + "%";
    if(levelPercent === "0%") {
        levelPercent = "3%";
    }
    $(".progressbar-progress").css("width",levelPercent);
}

function showEndOfTestModeAlert(userData) {
    $(".added").remove();
    $(".popup-content").append('<div class="added"><h2><i class="fa-solid fa-user-check fa-lg"></i>Parabéns e obrigado pela participação, '+ userData.name.split(' ')[0] +'!</h2><p>Parabéns, você chegou ao final da versão de testes ou por chegar no nível máximo atual, ou por realizar todos os exercícios disponíveis até o momento!</p><p>A partir daqui, a plataforma ainda está sendo refinada, portanto o acesso não é recomendado, siga por sua própria conta e risco (se conseguir).</p><p>Deseja ir para página de "Sobre a Plataforma", "Histórico" ou realizar "Log Out"?</p></div>');

    $(".popup-content").append('<div class="added">'+
        '<div class="popup-buttons">'+
            '<button class="button" id="btnPopupSobre">Sobre a Plataforma</button>'+
            '<button class="button" id="btnPopupHistorico">Histórico</button>'+
            '<button class="button" id="btnPopupLogOut">Log Out</button>'+
        '</div>'+
    '</div>');

    $("#btnPopupSobre").click(function (e) {
        window.location.href = "./sobrePage.html";
    });

    $("#btnPopupHistorico").click(function (e) {
        window.location.href = "./historicoPage.html";
    });

    $("#btnPopupLogOut").click(function (e) {
        logout(e);
    });

    $(".popup-close").prop('disabled',true);
    $(".popup-close").css('visibility','hidden');
    
    disablePopupWrapperClick = true;

    $(".popup-wrapper").css('display', 'block');
}

function btnEnable(btnName, color="#ffb86c") {
    $(btnName).prop('disabled', false);
    $(btnName).css('background-color', color);
    $(btnName).css('cursor', 'pointer');
}

function btnDisable(btnName) {
    $(btnName).prop('disabled', true);
    $(btnName).css('background-color', '#a5a5a5');
    $(btnName).css('cursor', 'wait');
}

function del_cookie(name) {
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

function del_cookies() {
    del_cookie('userData');
    del_cookie('auth');
}

function logout(e) {
    e.stopPropagation();
    e.preventDefault();

    del_cookies();
    window.location.href = './index.html';
}

function accessDenied_returningToMain() {
    del_cookies();
    window.location.href = './index.html';
}

// Sidebar
function w3_open() {
    //$("#sidebar").css("display","block");
    $("#sidebar").css("width", "20%");
    $("#sidebar").css("visibility", "visible");
    $("#sidebar").css("opacity", "1");
    $("#sidebar-wrapper").css("visibility", "visible");
    $("#sidebar-wrapper").css("opacity", "1");

}

function w3_close() {
    //$("#sidebar").css("display","none");
    $("#sidebar").css("width", "0%");
    $("#sidebar").css("visibility", "hidden");
    $("#sidebar").css("opacity", "0");
    $("#sidebar-wrapper").css("visibility", "hidden");
    $("#sidebar-wrapper").css("opacity", "0");
}
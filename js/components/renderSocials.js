
function renderSocials(selector, data) {
    //input validation
    if (typeof selector !== 'string' ||
    selector === '')  {
        console.error('ERROR: netinkamas selectoriaus parametras.'); 
        return false;
    }
    if (!Array.isArray(data) ||
    data.length === 0) {
        console.error('ERROR: netinkamas data parametras.'); 

        return false;
        
    }
    //logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return 'ERROR: nepavyko rasti elemento pagal pateikta selektoriu.';
    }
    
let HTML = '';
for (let i = 0; i < data.length; i++) {
const socialObject = data[i];

//duomenu objekto validacija

if (typeof socialObject !== 'object' ||
Array.isArray(socialObject) ||
!socialObject.href || 
typeof socialObject.href !== 'string' ||
!socialObject.icon ||
typeof socialObject.icon !== 'string') {
console.warn('WARNING: netinkamo formato objektas', socialObject);
continue;

}

HTML += `<a href="${socialObject.href}" target="_blank" class="fa fa-${socialObject.icon}"></a>` ;
}

// post logic validation
if (HTML === '') {
    console.error('ERROR: tarp pateiktu duomenu nera nei tinkamos informacijos.')
    return false;
}




//return resulut
DOM.innerHTML = HTML;

}


export { renderSocials }
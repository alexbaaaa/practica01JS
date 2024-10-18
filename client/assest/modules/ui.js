class Ui {
    constructor(fatherName,messages){
        let div = document.getElementById(fatherName);
        messages.forEach(element => {
            let clone = div.cloneNode(true);
            let firstChild = clone.firstElementChild;
            console.log(firstChild);
            firstChild.appendChild(document.createTextNode(element.name));
            console.log(firstChild);
        });
        
        
    }
}
export {Ui}
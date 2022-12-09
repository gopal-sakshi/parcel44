import { Person } from '../../../src44/index45';

var person12 = new Person();

document.getElementById("path44").addEventListener("click", goToPath44, false);

function goToPath44() {
    person12.getSomeUrl().then(res => { 
        console.log(res); 
        window.location = res;
    })
}
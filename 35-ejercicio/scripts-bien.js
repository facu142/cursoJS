
 
const $form = document.querySelector('#form');
const $characters = document.querySelector('#characters');
const $table = document.querySelector('#table');

$form.addEventListener('submit', (e) => {
    getData($characters.children[$characters.selectedIndex].value);
    e.preventDefault();
})


const getData = (id) => {
    
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    } else {
        xhr = new ActiveXObject('MicrosoftXMLHTTP');
    }


    if (id == undefined) {
        xhr.open('GET', 'marvel.php');

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON);

            const fragment = document.createDocumentFragment();

            for (const heroe of dataJSON) {

                const option = document.createElement('option');
                option.setAttribute('value', heroe.ID);
                option.textContent = heroe.Name;
                fragment.appendChild(option);
            }
            $characters.appendChild(fragment);

        })

    } else {
        xhr.open('GET', `marvel.php?id=${id}`);

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response);
            const fragment = document.createDocumentFragment();
            
            for (const heroe of dataJSON) {
                const row = document.createElement('tr');
                const dataName = document.createElement('td');
                const dataAlignment = document.createElement('td');
                const dataHometown = document.createElement('td');
                const dataGender = document.createElement('td');
                const dataFighting = document.createElement('td');

                dataName.textContent = heroe.Name;
                dataAlignment.textContent = heroe.Alignment;
                dataHometown.textContent = heroe.Hometown;
                dataGender.textContent = heroe.Gender;
                dataFighting.textContent = heroe.Fighting_Skills;
                
                row.appendChild(dataName);
                row.appendChild(dataAlignment);
                row.appendChild(dataHometown);
                row.appendChild(dataGender);
                row.appendChild(dataFighting);
   
                fragment.appendChild(row)
            }
            
            if($table.children[1]){
                $table.removeChild($table.children[1])
            }
            $table.appendChild(fragment);
        })

        
    }
    xhr.send()
}

getData();





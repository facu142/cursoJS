// FILTRA SEGUN ALIGNMENT


const delateOldCharacters = () => {
    const characters = document.querySelectorAll('.character');
    for(let i = 0 ; i < characters.length ;i++ ){
        characters[i].remove();
    }
}

const $form = document.querySelector('#form');
const $characters = document.querySelector('#characters');
const $table = document.querySelector('#table');

$form.addEventListener('submit', (e) => {
    getData($characters.children[$characters.selectedIndex].value);
    e.preventDefault();
})

const getData = (alignment) => {

    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    } else {
        xhr = new ActiveXObject('MicrosoftXMLHTTP');
    }


    if (alignment == undefined) {
        xhr.open('GET', 'marvel.php');

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON);

            const fragment = document.createDocumentFragment();
            let alignments = [];
            for (const heroe of dataJSON) {

                if (!alignments.includes(heroe.Alignment)) {
                    alignments.push(heroe.Alignment)
                }
            }

            for (const alignment of alignments) {
                const option = document.createElement('option');
                option.setAttribute('value', alignment);
                option.textContent = alignment;
                fragment.appendChild(option);
            }

            $characters.appendChild(fragment);

        })

    } else {
        xhr.open('GET', `marvel.php?Alignment=${alignment}`);

        

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response);
            const fragment = document.createDocumentFragment();
            
            delateOldCharacters();

            for (const heroe of dataJSON) {

                if (alignment == heroe.Alignment) {

                    

                    const row = document.createElement('tr');
                    row.classList.add('character');

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
                
                
            
                $table.appendChild(fragment)

            }

        })


    }
    xhr.send()
}

getData();








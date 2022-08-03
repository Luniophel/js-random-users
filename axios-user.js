//Chiamata su API
const addBtn = document.getElementById('add');
console.log(addBtn);
addBtn.addEventListener('click', addUser);

//Ricava img profilo, nome, cognome
function addUser()
{
    //console.log('bottone linkato ad html')
    axios.get('https://randomuser.me/api')
        .then
        (
            function (response)
            {
                const userData = response.data.results[0];
                
                const userName = userData.name.first;
                const userSurname = userData.name.last;
                const userPic = userData.picture.thumbnail;

            }
        )
        .catch(function(err)
        {
            console.log(err);
        });
}

//Inseriscili su card

//
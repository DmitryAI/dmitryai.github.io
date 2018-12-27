getUser();
document.getElementById('getUser').addEventListener('click', getUser);

function getUser(){
    var login=document.getElementById('user').value;
    fetch('https://api.github.com/users/'.concat(login))
        .then(response => response.json())
        .then(data => setDocumentData(data))
}

function setDocumentData(data) {
    document.getElementById('userAvatar').src=data.avatar_url||'-';
    document.getElementById('userName').innerHTML=data.name||'-';
    document.getElementById('userBio').innerHTML=data.bio||'-';
    document.getElementById('userCompany').innerHTML=data.company||'-';
    document.getElementById('userLocation').innerHTML=data.location||'-';
    document.getElementById('userEmail').innerHTML=data.email||'-';
    document.getElementById('userBlog').innerHTML=data.blog||'-';
}
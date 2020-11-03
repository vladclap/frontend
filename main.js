async function getDoctor(){
    let res = await fetch('http://api/doctor')
    let doctors = await res.json();
    console.log(doctors[0]);


    doctors.forEach((doctor) => {

       document.querySelector('.table').innerHTML += '' +
           '<div class="row"\n'+
           '<div class="col-sm-4">\n'+
           '  <div class="card">\n' +
           '            <img src="image/'+doctor.picture+'.jpg" alt="avatar" width="208" height="208">\n' +
           '            <p>'+doctor.name+'</p>\n' +
           '            <p class="description">'+doctor.specialty+'</p>\n' +
           '            <div class="rating">\n' +
           '                * * * * *\n' +
           '            </div>\n' +
           '            <div class="card-btns">\n' +
           '                <button onclick="removeDoctor(doctor.id)">Remove</button>\n' +
           '                <button  onclick="">View info</button>\n' +
           '            </div>\n' +
           '        </div>'+
           '        </div>'+
           '        </div>'

    })
}
getDoctor()

async function addDoctor() {
    name = document.getElementById('name').value
    picture = document.getElementById('picture').value
    rating = document.getElementById('rating').value
    specialty = document.getElementById('specialty').value;

        let formData = new FormData();
    formData.append('name',name);
    formData.append('picture',picture);
    formData.append('rating',rating);
    formData.append('specialty',specialty);


    const res = await fetch('http://api/doctor', {
        method: 'POST',
        body: formData
    });
    const data = res.json();

    console.log(data)
}

async function removeDoctor(id){
    const res = await fetch('http://api/doctor/'+id+'',  {

        method: "DELETE"
    });

    const data = await res.json()
        if (data.staus === true){
            await getDoctor();
        }
}




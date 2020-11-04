async function getDoctor(){
    let res = await fetch('http://api/doctor')
    let doctors = await res.json();
    console.log(doctors[1])

    // document.querySelector('.table').innerHTML += '' +
    doctors.forEach((doctor) => {

       document.querySelector('.table').innerHTML += '<div class="card">\n' +
           '        <img src="image/me.jpg" alt="avatar">\n' +
           '        <p>'+doctor.name+'</p>\n' +
           '        <p class="description">'+doctor.specialty+'</p>\n' +
           '        <div class="rating">\n' +
           '            <p class="stars">\n' +
           '  <span>\n' +
           '    <a class="star-1" href="#">1</a>\n' +
           '    <a class="star-2" href="#">2</a>\n' +
           '    <a class="star-3" href="#">3</a>\n' +
           '    <a class="star-4" href="#">4</a>\n' +
           '    <a class="star-5" href="#">5</a>\n' +
           '  </span>\n' +
           '            </p>\n' +
           '        </div>\n' +
           '        <div class="card-btns">\n' +
           '            <button>Payment</button>\n' +
           '            <button>View Profile</button>\n' +
           '        </div>\n' +
           '    </div>'


    })
}
// getDoctor()

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
        }
}




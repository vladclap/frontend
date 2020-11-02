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
           '                <button>Payment</button>\n' +
           '                <button  onclick="addDoctor()">Add Doctor</button>\n' +
           '            </div>\n' +
           '        </div>'+
           '        </div>'+
           '        </div>'

    })
}

async function addDoctor(){

}
getDoctor()


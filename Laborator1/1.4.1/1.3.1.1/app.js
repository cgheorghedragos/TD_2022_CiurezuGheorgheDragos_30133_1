var user = {
            "id": 1 ,
            "name": "Alexandru Cristea",
            "username": "acristea",
            "email": " acristea@test.com ",
            "address": {
                        "street": "Padin",
                        "number": "Ap.10",
                        "city": "Cluj-Napoca ",
                        "zipcode": "123456 ",
                        "geo": {
                                "lat": "46.783364 ",
                                "lng": "23.546472 "
                                }
                        },
            "phone": "004-07xx-123456",
            "company": {
            "name": "XYZ ",
            "domain": "Air Traffic Management ",
            "cities": ["Cluj - Napoca ", " Vienna ", " Paris"]
    }
}

console.log ( user.name );
console.log ( user.address.geo.lat );
console.log ( user.company.name );
console.dir ( user.company.cities );
console.log ( user.company.cities [0]) ;

function print(message) {
    console.log(message);
}

print ("hello");


// logica fara instructiunea if (operator tenar)
var password = "123456";
console.log ( password =="123456"?"ALLOW":"DENY") ;

// logica cu instructiunea if 
var password =" 123456 ";
if( password == " 123456 ") {
                            console.log (" permission accepted ") ;
                        } else {
                        console.log (" permission accepted ") ;
    }

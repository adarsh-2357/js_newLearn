var myStrorage={
    "car":{
        "inside":{
            "glove box":"map",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
var gloveBoxContent=myStrorage.car.inside["glove box"];
console.log(gloveBoxContent);
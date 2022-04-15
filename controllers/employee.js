const get = (req, res) => {
    // console.log("**************REQUEST query****************", req.query);
    // console.log("**************REQUEST params****************", req.params);

    const user = [
        {id:1, name:"pooja", category:"MERN"},
        {id:2, name:"janaki", category:"MEAN"},
        {id:3, name:"mani", category:"MERN"},
    ]
       
    res.send(user);
    // if(req.query.id){
    //     const newUser = user.filter(value => value.id === Number(req.query.id))
    //     res.send(newUser);
    // }else if(req.params.category){
    //     const newUser = user.filter(value => value.category === req.params.category)
    //     res.send(newUser);
    // }else{
    //     res.send(user);
    // }
}

// if you are exporting like this then you can import also with get function only
// module.exports = get

// if you are exporting like this then you can access by using employeeGet
module.exports.getDetails = get



// There are two different ways how you can receive the data from the frontend
// URL params  https://localhost:8000/api/v1/emp/12         : we are passing only an individual value
// Query params https://localhost:8000/api/v1/emp/?name="john"&age=24      : we are passing values in key value format
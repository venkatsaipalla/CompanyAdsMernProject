const { response } = require('express');
const express = require('express');

const router = express.Router();
const Addshow = require('../../models/Ads')
const Company = require('../../models/Company')

//All are public routes
//Adding Ads details 
router.post("/", (req, res)=>{
    const {_id,companyId,primaryText,headline,description,cta,imageUrl}=req.body;
    add = new Addshow({
        _id,companyId,primaryText,headline,description,cta,imageUrl
    })
    add.save()
    .then(data=>res.send(data))
    

})

//Adding Comoany details
router.post("/company", (req, res)=>{
    const {_id,name,url}=req.body;
    company = new Company({
        _id,name,url
    })
    company.save()
    .then(data=>res.send(data))
    

})

//Getting all the details by populating both company and Ads collections 
// we will call this API in client/src/components/AdsContainer.js file and we will filter the data according to the search
//Search API
router.get("/all",(req, res)=>{
    Addshow.find()
    .populate("companyId",["name", "url"])
    .then(data=>{
        console.log(res.json(data))
       return (res.json(data))
    }).catch(err=>console.log(err))
})
module.exports = router

const { response } = require('express');
const express = require('express');

const router = express.Router();
const Addshow = require('../../models/Ads')
const Company = require('../../models/Company')


router.post("/", (req, res)=>{
    const {_id,companyId,primaryText,headline,description,cta,imageUrl}=req.body;
    add = new Addshow({
        _id,companyId,primaryText,headline,description,cta,imageUrl
    })
    add.save()
    .then(data=>res.send(data))
    

})

router.post("/company", (req, res)=>{
    const {_id,name,url}=req.body;
    company = new Company({
        _id,name,url
    })
    company.save()
    .then(data=>res.send(data))
    

})

router.get("/all",(req, res)=>{
    Addshow.find()
    .populate("companyId",["name", "url"])
    .then(data=>{
        console.log(res.json(data))
       return (res.json(data))
    }).catch(err=>console.log(err))
})
module.exports = router
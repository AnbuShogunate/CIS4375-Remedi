const express = require('express')
const router = express.Router({ caseSensitive: true })

router.get('/find', (req, res, next) => {
    const db = req.app.get('db')
    return db.Contractor_Project.findAll({
        include: [
            db.Contractor,
            db.Project
        ]
    })
        .then((Contractor_Project) => res.send(Contractor_Project))
        .catch((err) => {
            console.log('There was an error querying Contractor Project 1', JSON.stringify(err))
            return res.send(err)
        });
})
// router.get('/find/:contractorProjectID', (req, res, next) => {
//     const db = req.app.get('db')

//     return db.Contractor_Project.find({
//         where: {
//             contractorProjectID:req.params.contractorProjectID,
//         }
//     })
//         .then((Contractor_Project) => {
//             res.send(Contractor_Project)
//         })
//         .catch((err) => {
//             console.log('There was an error querying Contractor Project 2', JSON.stringify(err))
//             return res.send(err)
//         });
// })
router.post('/create', (req, res, next) => {
    const db = req.app.get('db')
    db.Contractor_Project.create({
        contractorID: req.body.ContractorID,
        projectID: req.body.ProjectID
    })
        .then(() => {
            res.status(200).send('OK');
        })
        .catch(err => {
        console.log('There was an error creating Contractor Project', JSON.stringify(err))
        return res.send(err)
    })
})
// router.put('/update', (req, res, next) => {
//     const db = req.app.get('db')
//     db.Contractor_Project.update({
//         contractorID: req.body.ContractorID,
//         projectID: req.body.ProjectID
//         }, {
//             where: {
//                 contractorProjectID: contractorProjectID
//             }
//         })
//         .then(() => {
//             res.status(200).send('OK');
//         })
//         .catch(err => {
//            console.log('There was an error updating Contractor Project', JSON.stringify(err))
//            return res.send(err)
//    })
// })
router.put('/updateproject/:ProjectID', (req, res, next) => {
    const db = req.app.get('db')
    db.Contractor_Project.update({
        contractorID: req.body.ContractorID,
        projectID: req.body.ProjectID
        }, {
            where: {
                projectID: req.params.ProjectID
            }
        })
        .then(() => {
            res.status(200).send('OK');
        })
        .catch(err => {
           console.log('There was an error updating Contractor Project - project', JSON.stringify(err))
           return res.send(err)
   })
})
router.put('/updatecontractor/:ContractorID', (req, res, next) => {
    const db = req.app.get('db')
    console.log(req.body.ContractorID)
    console.log(req.body.ProjectID)
    db.Contractor_Project.update({
        contractorID: req.body.ContractorID,
        projectID: req.body.ProjectID
        
        }, {
            where: {
                contractorID: req.params.ContractorID
            }
        })
        .then(() => {
            res.status(200).send('OK');
        })
        .catch(err => {
           console.log('There was an error updating Contractor Project - contractor', JSON.stringify(err))
           return res.send(err)
   })
})
router.delete('/delete/:contractorid/:projectid', (req, res, next) => {
    
    const db = req.app.get('db')
    db.Contractor_Project.destroy({
        where: { 
            contractorID: req.params.contractorid,
            projectID: req.params.projectid
        }
    }).then(() => {
        res.status(200).send('The record has been deleted!');
    }).catch(err => {
        console.log('There was an error deleting Contractor Project or is still active', JSON.stringify(err))
        return res.send(err)
    });
})

module.exports = router
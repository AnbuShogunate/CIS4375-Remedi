const express = require('express')
const router = express.Router({ caseSensitive: true })

//crud - read
//raw : true = returning all values and findAll is where it'll return all of the data
//not using shortcuts like what we use in 4339 cause 
//and 1. its for mongoose 2. its calling sections of a massive table
//where as in here, we are calling the entire code of a table
router.get('/find', (req, res, next) => {
    const db = req.app.get('db')
    return db.Project_Status.findAll({
        raw : true,
    })
        .then((Project_Status) => res.send(Project_Status))
        .catch((err) => {
            console.log('There was an error querying Project Status', JSON.stringify(err))
            return res.send(err)
        });
})

// // //placeholder
// router.get('/findlist', (req, res, next) => {
//     const db = req.app.get('db')

//     return db.Project_Status.findAll({
//         attributes:['projectStatusID','projectStatusType']
//     })
//         .then((Project_Status) => res.send(Project_Status))
//         .catch((err) => {
//             console.log('There was an error querying Project Status', JSON.stringify(err))
//             return res.send(err)
//         });
// })

// //placeholder
// router.get('/find/:projectstatusid', (req, res, next) => {
//     const db = req.app.get('db')

//     return db.Project_Status.find({
//         where: {
//             projectStatusID:req.params.projectstatusid
//         }
//     })
//         .then((Project_Status) => {
//             res.send(Project_Status)
//         })
//         .catch((err) => {
//             console.log('There was an error querying Project Status', JSON.stringify(err))
//             return res.send(err)
//         });
// })
//crud - create
router.post('/create', (req, res, next) => {
    //since the id is auto increment, there is no need to call it again.
    //the reason to use req.body.name instead of req.body.emrName is that its calling from the label and not the field type when we did our export in emrList.vue
    //u can see it from emrList.vue from line 61 to 66.
    const name_text = req.body.name
    const db = req.app.get('db')
    db.Project_Status.create({
        projectStatusType: name_text
    })
        .then(() => {
            res.status(200).send('OK');
        })
        .catch(err => {
        console.log('There was an error creating Project Status', JSON.stringify(err))
        return res.send(err)
    })
})
// crud - update
router.put('/update', (req, res, next) => {
    //preload the data into emrID and emrName
    const projectStatusID = req.body.id
    const projectStatusType = req.body.name
    const db = req.app.get('db')

    db.Project_Status.update({
        //using the update command, it changes the emrName where the emrID is emrID
        //side note, although they are the same but what it really means is that int x = y;
        //therefore emrName from the database is equal or : to emrName or the value of y which is preloaded.
        projectStatusType: projectStatusType
        }, {
           where: {
            projectStatusID: projectStatusID
           }
        })
        .then(() => {
            res.status(200).send('OK');
        })
        .catch(err => {
           console.log('There was an error updating Project Status', JSON.stringify(err))
           return res.send(err)
   })
})
// crud - delete by id
router.delete('/delete/:projectstatusid', (req, res, next) => {
    //gets the value of what is being called above and set it to id
    const id = req.params.projectstatusid;
    const db = req.app.get('db')

    db.Project_Status.destroy({
        //destroy or delete from EMR where the id is equal to what we set earlier
        where: { projectStatusID: id }
    }).then(() => {
        res.status(200).send('The record has been deleted!');
    }).catch(err => {
        console.log('There was an error deleting Project Status', JSON.stringify(err))
        return res.send(err)
    });
})

module.exports = router
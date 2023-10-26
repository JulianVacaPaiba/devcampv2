const express=require('express')
const bootcampModel = require('../models/BootcampsModels')
const router =express.Router()

router.get('/prueba',
        function(request,response){
            response.send("Hola!")
})

//Uris de Bootcamps

//traer bootcamps
router.get('/', 
        (request,response)=>{
            response
                .status(200)
                .json({
                    "success":true ,
                    "msg":"mostrar todos los bootcamps"
                     
                })
            
        })
//traer bootcamps por id

router.get('/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Seleccionando bootcamp con id  ${request.params.id}`
                     
            })
            
        })
//crear bootcamps
router.post('/', 
        (request,response)=>{
            //crear el nuevo bootcamp
           // const bootcamp = bootcampModel.
                        //create(request.body)


            response
                .status(201)
                .json({
                    "success":true ,
                    "msg":"crear bootcamp"
                     
                })
            
        })

//actualizar bootcamps por id

router.put('/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Acualizando bootcamp con id  ${request.params.id}`
                 
        })
        
    })

//eliminar bootcamps por id

    router.delete('/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Eliminando bootcamp con id  ${request.params.id}`
             
    })
    
})

//evidencia: uris de courses

//traer courses
router.get('/api/v1/devcamp/courses', 
        (request,response)=>{
            response
                .status(200)
                .json({
                    "success":true ,
                    "msg":"mostrar todos los courses"
                     
                })
            
        })
//traer courses por id

router.get('/api/v1/devcamp/courses/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Seleccionando course con id  ${request.params.id}`
                     
            })
            
        })
//crear courses
router.post('/api/v1/devcamp/courses', 
        (request,response)=>{
            response
                .status(201)
                .json({
                    "success":true ,
                    "msg":"crear course"
                     
                })
            
        })

//actualizar courses por id

router.put('/api/v1/devcamp/courses/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Acualizando course con id  ${request.params.id}`
                 
        })
        
    })

//eliminar courses por id

    router.delete('/api/v1/devcamp/courses/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Eliminando course con id  ${request.params.id}`
             
    })
    
})
//evidencia: uris de reviews
//traer reviews
router.get('/api/v1/devcamp/reviews', 
        (request,response)=>{
            response
                .status(200)
                .json({
                    "success":true ,
                    "msg":"mostrar todos los reviews"
                     
                })
            
        })
//traer reviews por id

router.get('/api/v1/devcamp/reviews/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Seleccionando review con id  ${request.params.id}`
                     
            })
            
        })
//crear reviews
router.post('/api/v1/devcamp/reviews', 
        (request,response)=>{
            response
                .status(201)
                .json({
                    "success":true ,
                    "msg":"crear review"
                     
                })
            
        })

//actualizar reviews por id

router.put('/api/v1/devcamp/reviews/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Acualizando review con id  ${request.params.id}`
                 
        })
        
    })

//eliminar bootcamps por id

    router.delete('/api/v1/devcamp/reviews/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Eliminando review con id  ${request.params.id}`
             
    })
    
})
//evidencia: uris de users
//traer users
router.get('/api/v1/devcamp/users', 
        (request,response)=>{
            response
                .status(200)
                .json({
                    "success":true ,
                    "msg":"mostrar todos los users"
                     
                })
            
        })
//traer users por id

router.get('/api/v1/devcamp/users/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Seleccionando user con id  ${request.params.id}`
                     
            })
            
        })
//crear bootcamps
router.post('/api/v1/devcamp/users', 
        (request,response)=>{
            response
                .status(201)
                .json({
                    "success":true ,
                    "msg":"crear user"
                     
                })
            
        })

//actualizar bootcamps por id

router.put('/api/v1/devcamp/users/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Acualizando user con id  ${request.params.id}`
                 
        })
        
    })

//eliminar bootcamps por id

    router.delete('/api/v1/devcamp/users/:id', 
    (request,response)=>{
        response
            .status(200)
            .json({
                "success":true ,
                "msg":`Eliminando user con id  ${request.params.id}`
             
    })
    
})
module.exports=router
const CreateCourse = async(req,res)=>{
    try {
        let {name,description,teacherId,syllabus,students,schedule} = req.body;
        if (!name || !description || !teacherId || !syllabus || !students || !schedule){
            res.status(400).json({message:'All Fields Required.'})
        }
        if(req.user.role == 'Admin'){
            let Obj = new Course({
                name,description,teacherId,syllabus,students,schedule
            })
            await Booksobj.save()
            res.status(201).json({success:true,create:{
            ...Booksobj._doc,
            }})
        }else{
            res.status(400).json({success:false,message:"Unauthorized"})
        }

        
    } catch (error) { 
        console.log('Error In TeacherCreate From Admin Controller :- ',error.message)
        res.status(500).json({message:"Internal Error.",error:error})
    }
}

module.exports = CreateCourse
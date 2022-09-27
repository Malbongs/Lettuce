const express = require("express");
const router = express.Router();
const {Comment,User} = require("../models");

//댓글 등록
router.post("/comments",async(req,res)=>{ console.log(req.body);
    const comments = await Comment.create({
        PostId:req.body.postId,
        UserId:req.user.id,
        comment:req.body.comment
    });

    res.send({code:200});
})

//댓글 불러오기

router.get("/comments",async(req,res)=>{
    const come  = await Comment.findAll({
        raw:true,
        attributes:["comment","createdAt","id"],
        include:[{model:User, attributes:["nickName","profile","id"]}],
        where:{
                PostId:req.query.PostId},
        order: [['createdAt','DESC']],
        limit:4

    });
    come.forEach(ele=>{
        console.log(ele['User.id']);
        console.log(req.user.id);
        if(ele['User.id']==req.user.id){
            ele.me='true';
        }
    });
    const now = new Date().getTime();
    come.forEach(ele=>{
        if(now-ele.createdAt.getTime()>3600*1000 && now-ele.createdAt.getTime()<3600*1000*24){
            ele.time=`${parseInt(parseInt((now-ele.createdAt.getTime())/1000)/3600)}시간전`;
        }
        else if(now-ele.createdAt.getTime()>3600*1000*24){
            ele.time=`${parseInt(parseInt(parseInt(now-ele.createdAt.getTime())/1000)/3600*24)}일전`
        }
        else if(now-ele.createdAt.getTime()<=60*1000){
            ele.time=`${parseInt((now-ele.createdAt.getTime())/1000)}초전`;
        }
        else{
            ele.time=`${parseInt(parseInt((now-ele.createdAt.getTime())/1000)/60)}분전`;
        }
    });
    res.send(come);
})

//댓글 리스트
router.get("/commentList", async(req,res)=>{
    const come  = await Comment.findAll({
        raw:true,
        attributes:["comment","createdAt","id"],
        include:[{model:User, attributes:["nickName","profile","id"]}],
        where:{
                PostId:req.query.PostId},
        order: [['createdAt','DESC']]
    });
    come.forEach(ele=>{
        console.log(ele['User.id']);
        console.log(req.user.id);
        if(ele['User.id']==req.user.id){
            ele.me='true';
        }
    });
    const now = new Date().getTime();
    come.forEach(ele=>{
        if(now-ele.createdAt.getTime()>3600*1000 && now-ele.createdAt.getTime()<3600*1000*24){
            ele.time=`${parseInt(parseInt((now-ele.createdAt.getTime())/1000)/3600)}시간전`;
        }
        else if(now-ele.createdAt.getTime()>3600*1000*24){
            ele.time=`${parseInt(parseInt(parseInt(now-ele.createdAt.getTime())/1000)/3600*24)}일전`
        }
        else if(now-ele.createdAt.getTime()<=60*1000){
            ele.time=`${parseInt((now-ele.createdAt.getTime())/1000)}초전`;
        }
        else{
            ele.time=`${parseInt(parseInt((now-ele.createdAt.getTime())/1000)/60)}분전`;
        }
    });
    res.send(come);
})


//댓글 삭제
router.post("/commentDelete",async(req,res)=>{
    console.log(req.body.id);
    await Comment.destroy({
        where:{id:req.body.id}
    });
    res.send({code:200});
})

module.exports = router;
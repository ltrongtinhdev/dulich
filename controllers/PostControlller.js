const { pool } = require('../configs/db');

const getAllPost = (req, res) => {
    const query = `select * from post`
    console.log("query",query)
    pool.query(query,
        (err, rows, fields) => {
            if(err) {
                return res.status(500).json({
                    code: 2,
                    messagae: "Lỗi không kết nối được với db"
                })
            }
            if(rows.length < 1) {
                return res.status(500).json({
                    code: 1,
                    messagae: "Khong co post nao"
                })
            }

            return res.status(200).json({
                code: 0,
                data: rows,
                messagae: "success"
            })
        }  
    )
}
const getPostById = (req,res)=> {
    const {id} = req.body
    const query = `select * from post where p_id = ${id}`
    pool.query(query,
        (err, rows, fields) => {
            if(err) {
                return res.status(500).json({
                    code: 2,
                    messagae: "Lỗi không kết nối được với db"
                })
            }
            if(rows.length < 1) {
                return res.status(500).json({
                    code: 1,
                    messagae: "khong tim thay post"
                })
            }
            return res.status(200).json({
                code: 0,
                data: rows,
                messagae: "success"
            })
        }
    )
    
}

const insertPost  = (req,res)=> {
    const {title,content,user,image, price,address} = req.body
    const query = `
    insert into post(p_title,p_content,p_user,p_image,p_price,p_address)
    values('${title}','${content}',${user},'${image}',${price},'${address}')
    `
    pool.query(query,
        (err, rows, fields) => {
            if(err) {
                return res.status(500).json({
                    code: 2,
                    messagae: "Lỗi không kết nối được với db"
                })
            }
            return res.status(200).json({
                code: 0,
                messagae: "Tahnh cong"
            })
        }
    )
    
}

const deletePost  = (req,res)=> {
    const {id} = req.body
    const query = `
        DELETE FROM post WHERE p_id = ${id}
    `
    pool.query(query,
        (err, rows, fields) => {
            if(err) {
                return res.status(500).json({
                    code: 2,
                    messagae: "Lỗi không kết nối được với db"
                })
            }
            return res.status(200).json({
                code: 0,
                messagae: "Tahnh cong"
            })
        }
    )
    
}
module.exports = {
    getAllPost,
    getPostById,
    insertPost,
    deletePost
}

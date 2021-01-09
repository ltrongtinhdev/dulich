const { pool } = require('../configs/db');

const getAllBooking = (req, res) => {
    const query = `select * from booking`
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
                    messagae: "Khong co booking nao"
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
const getBookingById = (req,res,next)=> {
    const {id} = req.body
    const query = `select * from booking where b_id = ${id}`
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

const insertBooking  = (req,res)=> {
    const {user,post,cmt,total} = req.body
    const query = `
    insert into booking(b_user,b_post,b_cmt,b_total)
    values(${user},${post},${cmt},${total})
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

const updateStatusBooking  = (req,res)=> {
    const {status,id} = req.body
    const query = `
        UPDATE booking SET b_status = ${status} WHERE b_id = ${id}
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
    getAllBooking,
    getBookingById,
    updateStatusBooking,
    insertBooking
}

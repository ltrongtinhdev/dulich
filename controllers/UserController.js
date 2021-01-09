const { pool } = require('../configs/db');

const register = (req, res) => {
    const {username, password} = req.body
    const query1 = `
        select * from user where u_username  = '${username}'
    `
    const query = `
        insert into user(u_username,u_password) value('${username}','${password}')
    `
    pool.query(query1,
        (err, rows, fields) => {
            if(err) {
                return res.status(500).json({
                    code: 2,
                    messagae: "Lỗi không kết nối được với db"
                })
            }
            if(rows.length > 0) {
                return res.status(500).json({
                    code: 3,
                    messagae: "Ton tai user"
                })
            }
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
    )
}
const login = (req,res)=> {
    const {username,password} = req.body
    const query = `
        select * from user where 
            u_username = '${username}' 
            and u_password = '${password}'
    `
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
                    messagae: "khong tim thay user"
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

module.exports = {
    login,
    register
}

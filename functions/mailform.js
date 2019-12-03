const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const functions = require('firebase-functions')

const account = {
  email: functions.config().google.email,
  password: functions.config().google.password
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: account.email,
    pass: account.password
  }
})

app.post('/mailform', (req, res) => {
  const mailOptions = {
    from: 'likeliveweb@gmail.com',
    to: req.body.email || 'info@likelive.jp',
    bcc: 'info@likelive.jp',
    subject: 'お問い合わせ内容の確認',
    text: `
    formName: ${req.body.formName}
    company: ${req.body.company}
    name: ${req.body.name}
    tel: ${req.body.tel}
    email: ${req.body.email}
    content: ${req.body.content}
    `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({
        error: error
      })
    }
    return res.json({
      error: ''
    })
  })
})

module.exports = app

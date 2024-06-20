const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://noorrahmannabesofnoor1:<mongodb+srv://noorrahmannabesofnoor1:<password>@noorrahman.6yypvuf.mongodb.net/>@noorrahman.6yypvuf.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "93780173445" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "93780173445";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_08_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICA3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwianlmZ3J2SUJVLzU1VDZrbStLYjJ4VytnZkxUK21pUUJJMnd0T290blQ1Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5Mzc4MDE3MzQ0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjkwREE0QzYyRDBEOTUwMTRDOEFCQkIxMzQyNjdENTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODcwODk0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTM3ODAxNzM0NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVFQjgxMzhGQkQ4MDYxMjlBRkM4N0ZDOTZBNjE1RDRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg3MDg5NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCb0E0eGZpYlRQYVBFOE44T3ViMDFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiNDEzYzM4LTMyZjItNDJlOS04ZGQ1LTI2ZTYxOWQzYjMwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDE1MSxcbiAgICAgIDEzNixcbiAgICAgIDEzNCxcbiAgICAgIDI0MyxcbiAgICAgIDExNSxcbiAgICAgIDIxMyxcbiAgICAgIDE5NyxcbiAgICAgIDI1MSxcbiAgICAgIDI3LFxuICAgICAgMjksXG4gICAgICA5MyxcbiAgICAgIDE4NSxcbiAgICAgIDIyLFxuICAgICAgMTM0LFxuICAgICAgMjQ1LFxuICAgICAgMjMzLFxuICAgICAgMjMwLFxuICAgICAgMjEyLFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDQ3LFxuICAgICAgNjgsXG4gICAgICAxOCxcbiAgICAgIDE4NyxcbiAgICAgIDEyLFxuICAgICAgMTc1LFxuICAgICAgNzcsXG4gICAgICAxMCxcbiAgICAgIDExMSxcbiAgICAgIDIwMSxcbiAgICAgIDQxLFxuICAgICAgMTkxLFxuICAgICAgNzQsXG4gICAgICAxOTEsXG4gICAgICAxMjYsXG4gICAgICAxMzEsXG4gICAgICAxOTcsXG4gICAgICAxNDgsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMzB4OU1ERU9YR3o3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhCNE9FdWkvbEtYRm0xWGM1eGFRdnd1UklQN0FQRDBjZC9DV0Z4RXRzVjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNW1USlRrWnBLQjlNalZYQWx6eThqVS91QTNSc3NmblFJQ0J6a3pWTjkxbnMxSVhXZHI5Q3lHQVlkK2FwaTVOSXI4SExuekkxTzlabzlsak5pN095QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY3Zka200U05kYk82T25HOENFcTlTZXRrYUh3c1p6UkVKZjZYVXFrempVNGtjcmU0djdzQXFkamRSYkNuaTcxVmhxZHNLTFlWQnZJcnNhSlYxZ2l5akE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5Mzc4MDE3MzQ0NTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNDI3ODIwMTEyNzEzNjo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhhenJhdCBCaWxhbFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTM3ODAxNzM0NDU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODg3MDg4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU11ZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXVlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNmR6c0xYMm5ZT05mQkd2ZjRoQkd5Wit1VUpFYkZqaHhrSVJ6WFlCa1JlZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODA1NDgyMjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODg3MDg5MTIwMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

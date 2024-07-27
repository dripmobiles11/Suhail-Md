const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923197477537" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923197477537";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_03_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAzMCxcbiAgICAgICAgODksXG4gICAgICAgIDc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg5LFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZvNndOS3BmR2pPblczSUV1R2Rod0g1OUkrVFc4ckxqQUJFcU5OVmlBaWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk3NDc3NTM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQjJGODRCNzFFNzgwQTZCNzVGMDJBREUwM0ZGRkI5M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwODE3ODhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNzJ1NDVIaXBUSHFMQnlTZ25BQ1pfd1wiLFxuICBcInBob25lSWRcIjogXCJlNGQ3ZmRlOS02ODlmLTQ5ZDUtYjEwZS1mMjUyY2Q5ODU2ODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAzNCxcbiAgICAgIDE5OCxcbiAgICAgIDEzMCxcbiAgICAgIDIyOCxcbiAgICAgIDgwLFxuICAgICAgMjA1LFxuICAgICAgMTU4LFxuICAgICAgMjU1LFxuICAgICAgNDksXG4gICAgICA2MyxcbiAgICAgIDE5LFxuICAgICAgODQsXG4gICAgICAxOCxcbiAgICAgIDg3LFxuICAgICAgMjAxLFxuICAgICAgMTM1LFxuICAgICAgMTksXG4gICAgICAyMjAsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTMzLFxuICAgICAgMjQsXG4gICAgICAxNTcsXG4gICAgICAxMjUsXG4gICAgICA5MSxcbiAgICAgIDEzMixcbiAgICAgIDEwOSxcbiAgICAgIDk5LFxuICAgICAgNjgsXG4gICAgICAxMjgsXG4gICAgICA0NyxcbiAgICAgIDQ1LFxuICAgICAgMjMzLFxuICAgICAgNTQsXG4gICAgICAxNjUsXG4gICAgICA3MCxcbiAgICAgIDg2LFxuICAgICAgMTU5LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpOUlFFTDU1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTc0Nzc1Mzc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM4NDc4NjI5NTQ4MTMxOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUVVFRU4g8J+RkVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01mbTNaUUJFTy9EazdVR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUHBQVTBiU0x0QzRmbzRyYmJSRjA2a2tncTBlbjRXU3pBaDY2NENyTHhTZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4dnJXbE9lMkhrZVd2UVhKY1VnYXU2MTNwVjNucGhDOVZWaVV5ZGd1SkdxQythVFBMcW0wYlFBdEtGdytwUWZuNGh2M0Y4eUZ0a1pjR1BXN01sYUJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxMStwVlBjU0NwZjdqNS9BMjFCMm95VWlUSFJIeTgxUUVjOWF0bUlTM2gxRWRUS1EweTVIME1QR0RNMDNzanpYRms4WURjdnJTVUp3NnF0YW4vSWZnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTc0Nzc1Mzc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA4MTc4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJCZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkJnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU05idkFsT0RvaFlTMGc0ZDlHY1FUVlRLWElQVFREV0J3eGY4K1FTZWZ4TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTE5MTUzMzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTYyNTYyNDQ2MlwifSIKfQ=="  // PUT your SESSION_ID 


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

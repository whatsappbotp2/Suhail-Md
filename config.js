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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94743006918";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_00_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic0FvQmluZkg5OUdwZjlZTWl5U2RqMldRYm1ITXVuWTFDRXRMUmY2TytFYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MzAwNjkxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFOEVGNjE5RTcyOEREMTVGQURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjYzNjIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDMwMDY5MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQzNGODQ0MTQyNjVDOTMwRDE0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI2MzYyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQzMDA2OTE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUREQTE0QzE2MDFDRDdENEJCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNjM2MjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnlYRlNzRkVUN2l3elJESTRVR0czUVwiLFxuICBcInBob25lSWRcIjogXCI3ZTZhOGFiNy1kYjY4LTRhNjktYTA5YS04NWQ1NTYxZGM2NTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAyMTUsXG4gICAgICAyNTIsXG4gICAgICAxMyxcbiAgICAgIDc5LFxuICAgICAgMjA5LFxuICAgICAgMTQyLFxuICAgICAgMjcsXG4gICAgICA3LFxuICAgICAgODEsXG4gICAgICA3OSxcbiAgICAgIDcsXG4gICAgICAxMTMsXG4gICAgICAyLFxuICAgICAgMjA0LFxuICAgICAgMTg3LFxuICAgICAgMTg0LFxuICAgICAgMjQ1LFxuICAgICAgMTQ1LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgMjEwLFxuICAgICAgMjAyLFxuICAgICAgMTk3LFxuICAgICAgMTc5LFxuICAgICAgMTA1LFxuICAgICAgMjM2LFxuICAgICAgMjUzLFxuICAgICAgMTQ5LFxuICAgICAgMTIxLFxuICAgICAgMTYxLFxuICAgICAgNzcsXG4gICAgICAyMDEsXG4gICAgICAyMDksXG4gICAgICAyOSxcbiAgICAgIDE2NixcbiAgICAgIDYxLFxuICAgICAgNTAsXG4gICAgICAxODgsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0NMQ1NKVENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQzMDA2OTE4OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCb3RcIixcbiAgICBcImxpZFwiOiBcIjg0MDU3Mzc1ODI2MDE6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV296dkVORU1ESHBMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5yS2x3ZnFKNlNTOHVTbGZBUGRsY3Q5SlppNHF1UmE4TjExVjFDcW5lM2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYmhiQ2ZQL29wMEtOVmhYT3V6d1JycXVMUkJDUVdqWGJrMmMyNnhtVTNsWmhLR2xDTUFueVdHUmxoeW5Fc0d2ZkRaWkJZR2UyUWlCOVFRWGdDUTZIRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOHpoQzhtK2QyZkkwQ2FqaHAwSGd5dzRVa2tjOHQ4UXR4Yy9mdTRpK24ySWczWmFnc3l6bGZKWjl0bk5rVXUvWWxKU2MxeWlHNHEvZ0dRbTBTTSs4akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDMwMDY5MTg6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNjM2MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDOE5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM4Ti5qc29uIjogIntcImtleURhdGFcIjpcImI0Yzl0YlNwaXh0OExTZ2pxejlySmNteU94eE9lajJCUEEwWmZHUVRLWlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcyNzkyMjIyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjYzNjE5Nzg3XCJ9Igp9"  // PUT your SESSION_ID 


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

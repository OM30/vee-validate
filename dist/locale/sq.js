!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e=e||self).__vee_validate_locale__sq=e.__vee_validate_locale__sq||{},e.__vee_validate_locale__sq.js=t())}(this,function(){"use strict";var e,t={name:"sq",messages:{_default:function(e){return"Fusha "+e+" nuk është valide."},after:function(e,t){return e+" duhet të jetë pas "+t[0]+"."},alpha:function(e){return e+" mund të përmbaj vetëm shkronja."},alpha_dash:function(e){return e+" mund të përmbaj karaktere alfanumerike, shenja si viza dhe shenja të pikësimit."},alpha_num:function(e){return e+" mund të përmbaj vetëm shenja alfanumerike."},alpha_spaces:function(e){return e+" mund të përmbaj vetëm shkronja dhe hapësira."},before:function(e,t){return e+" duhet të jetë para "+t[0]+"."},between:function(e,t){return e+" duhet të jetë në mes "+t[0]+" dhe "+t[1]+"."},confirmed:function(e){return e+" e konfirmimit nuk përputhet."},credit_card:function(e){return e+" nuk është valide."},date_between:function(e,t){return e+" duhet të jetë në mes "+t[0]+" dhe "+t[1]+"."},date_format:function(e,t){return e+" duhet të jetë në formatin "+t[0]+"."},decimal:function(e,t){void 0===t&&(t=[]);var n=t[0];return void 0===n&&(n="*"),e+" duhet të jetë numerike dhe të përmbaj"+("*"===n?"":" "+n)+" presje dhjetore."},digits:function(e,t){return e+" duhet të jetë numerike dhe të përmbaj saktësisht "+t[0]+" shifra."},dimensions:function(e,t){return e+" duhet të jetë "+t[0]+" piksela me "+t[1]+" piksela."},email:function(e){return e+" duhet të jetë e-mail valid."},excluded:function(e){return"Vlera "+e+" duhet të jetë vlerë valide."},ext:function(e){return e+" duhet të jetë fajll valid."},image:function(e){return e+" duhet të jetë fotografi."},included:function(e){return"Vlera "+e+" duhet të jetë vlerë valide."},ip:function(e){return e+" duhet të jetë IP adresë valide."},max:function(e,t){return e+" nuk duhet të jetë më i gjatë se "+t[0]+" karaktere."},max_value:function(e,t){return"Vlera "+e+" duhet të jetë "+t[0]+" ose më e vogël."},mimes:function(e){return e+" duhet të përmbaj llojin e fajllit valid."},min:function(e,t){return e+" duhet të jetë së paku "+t[0]+" karakter."},min_value:function(e,t){return"Vlera "+e+" duhet të jetë së paku "+t[0]+" ose më shume."},numeric:function(e){return e+" mund të përmbaj vetëm numra."},regex:function(e){return"Formati "+e+" nuk është valid."},required:function(e){return"Fusha "+e+" nuk duhet të jetë e zbrazët."},size:function(e,t){var n,u,r,a=t[0];return e+" duhet të jetë më e vogël se "+(n=a,u=1024,r=0==(n=Number(n)*u)?0:Math.floor(Math.log(n)/Math.log(u)),1*(n/Math.pow(u,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r])+"."},url:function(e){return e+" nuk është URL valid."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[t.name]=t,e)),t});
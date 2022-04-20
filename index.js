 run: async (client) => {     
 function create() {
     setTimeout(async () => {
         const guild = await client.guilds.create("server_name")
         const channel = guild.channels.cache.filter(ch => ch.type === "guild_text").first();
         console.log(guild.id);
 
   }, 1000)}}     
create()  

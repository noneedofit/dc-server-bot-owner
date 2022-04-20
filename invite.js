run: async (client) => {

client.on('ready', () => {
console.log('I am ready!');

const guild = client.guilds.cache.get('guild_id');
const channel = guild.channels.cache.filter(ch => ch.type === "text").first();
    console.log(guild.channels)

    guild.invites.create('guild_id', { maxAge: 0, maxUses: 0, unique: true })
    .then(invite => {
     console.log(invite.url)})
})};

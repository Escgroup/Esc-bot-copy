const { Command } = require("discord.js-commando");

const config = require("../../config/main.js");

module.exports = class supportrmation_command extends Command {
    constructor(client) {
        super(client, {
            name: "support",
            aliases: ["support", "サポート"],
            group: "esc",
            memberName: "サポート",
            description: "質問、意見等を受け付けます。",
            args: [
                {
                    key: "title",
                    prompt:
                        "内容のを完結にまとめたタイトルを入力してください。",
                    type: "string",
                },
                {
                    key: "text",
                    prompt: "内容を入力してください。",
                    type: "string",
                },
            ],
        });
    }

    run(message, args) {
        if (message.guild) {
            return message.say("DMで送信してください。");
        }
        const user = message.author;

        const support_em = {
            embed: {
                author: {
                    name: user.username,
                    icon_url: user.avatarURL,
                },
                fields: [
                    { name: "タイトル", value: args.title },
                    { name: "内容", value: args.text },
                ],
                footer: {
                    text: user.id,
                },
            },
        };

        this.client.channels
            .get(config.guild.main.channel.support)
            .send(support_em)
            .then(msg => msg.react("✅"));
        message.say(
            "メッセージを送信しました、後ほどDMで返信します。",
            support_em
        );
    }
};

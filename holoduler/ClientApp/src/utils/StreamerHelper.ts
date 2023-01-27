import { Member } from "../types/member";

export class StreamerHelper {
    static getImageUrl(name: string): string {
        const imgurl = `${process.env.PUBLIC_URL}/img/${StreamerHelper.members[name].img}`;
        return imgurl;
    }

    static getChannelUrl(name: string): string {
        const churl = `https://www.youtube.com/channel/${StreamerHelper.members[name].ch}`;
        return churl;
    }

    static getThumbnailUrl(video_id: string): string {
        const tmburl = `http://img.youtube.com/vi/${video_id}/default.jpg`;
        return tmburl;
    }

    static members: { [key: string]: Member } = {
        "ホロライブ": { name: "ホロライブ", img: "hololive.jpg", ch: "UCJFZiqLMntJufDCHc6bQixg" },

        "ときのそら": { name: "ときのそら", img: "tokino_sora.jpg", ch: "UCp6993wxpyDPHUpavwDFqgg"},
        "ロボ子さん": { name: "ロボ子さん", img: "robokosan.jpg", ch: "UCDqI2jOz0weumE8s7paEk6g" },
        "さくらみこ": { name: "さくらみこ", img: "sakura_miko.jpg", ch: "UC-hM6YJuNYVAmUWxeIr9FeA" },
        "星街すいせい": { name: "星街すいせい", img: "hoshimachi_suisei.jpg", ch: "UC5CwaMl1eIgY8h02uZw7u8A" },
        "AZKi": { name: "AZKi", img: "azki.jpg", ch: "UC0TXe_LYZ4scaW2XMyi5_kw" },

        "夜空メル": { name: "夜空メル", img: "yozora_mel.jpg", ch: "UCD8HOxPs4Xvsm8H0ZxXGiBw" },
        "アキ・ローゼンタール": { name: "アキ・ローゼンタール", img: "aki_rosenthal.jpg", ch: "UCFTLzh12_nrtzqBPsTCqenA" },
        "赤井はあと": { name: "赤井はあと", img: "haachama.jpg", ch: "UC1CfXB_kRs3C-zaeTG3oGyg" },
        "白上フブキ": { name: "白上フブキ", img: "shirakami_fubuki.jpg", ch: "UCdn5BQ06XqgXoAxIhbqw5Rg" },
        "夏色まつり": { name: "夏色まつり", img: "natsuiro_matsuri.jpg", ch: "UCQ0UDLQCjY0rmuxCDE38FGg" },

        "湊あくあ": { name: "湊あくあ", img: "minato_aqua.jpg", ch: "UC1opHUrw8rvnsadT-iGp7Cg" },
        "紫咲シオン": { name: "紫咲シオン", img: "murasaki_shion.jpg", ch: "UCXTpFs_3PqI41qX2d9tL2Rw" },
        "百鬼あやめ": { name: "百鬼あやめ", img: "nakiri_ayame.jpg", ch: "UC7fk0CB07ly8oSl0aqKkqFg" },
        "癒月ちょこ": { name: "癒月ちょこ", img: "yuzuki_choco.jpg", ch: "UC1suqwovbL1kzsoaZgFZLKg" },
        "大空スバル": { name: "大空スバル", img: "oozora_subaru.jpg", ch: "UCvzGlP9oQwU--Y0r9id_jnA" },

        "大神ミオ": { name: "大神ミオ", img: "ookami_mio.jpg", ch: "UCp-5t9SrOQwXMU7iIjQfARg" },
        "猫又おかゆ": { name: "猫又おかゆ", img: "nekomata_okayu.jpg", ch: "UCvaTdHTWBGv3MKj3KVqJVCw" },
        "戌神ころね": { name: "戌神ころね", img: "inugami_korone.jpg", ch: "UChAnqc_AY5_I3Px5dig3X1Q" },

        "兎田ぺこら": { name: "兎田ぺこら", img: "usada_pekora.jpg", ch: "UC1DCedRgGHBdm81E1llLhOQ" },
        "潤羽るしあ": { name: "潤羽るしあ", img: "uruha_rushia.jpg", ch: "UCl_gCybOJRIgOXw6Qb4qJzQ" },
        "不知火フレア": { name: "不知火フレア", img: "shiranui_flare.jpg", ch: "UCvInZx9h3jC2JzsIzoOebWg" },
        "白銀ノエル": { name: "白銀ノエル", img: "shirogane_noel.jpg", ch: "UCdyqAaZDKHXg4Ahi7VENThQ" },
        "宝鐘マリン": { name: "宝鐘マリン", img: "housyou_marine.jpg", ch: "UCCzUftO8KOVkV4wQG1vkUvg" },

        "天音かなた": { name: "天音かなた", img: "amane_kanata.jpg", ch: "UCZlDXzGoo7d44bwdNObFacg" },
        "桐生ココ": { name: "桐生ココ", img: "kiryu_coco.jpg", ch: "UCS9uQI-jC3DE0L4IpXyvr6w" },
        "角巻わため": { name: "角巻わため", img: "tsunomaki_watame.jpg", ch: "UCqm3BQLlJfvkTsX_hvm0UmA" },
        "常闇トワ": { name: "常闇トワ", img: "tokoyami_towa.jpg", ch: "UC1uv2Oq6kNxgATlCiez59hw" },
        "姫森ルーナ": { name: "姫森ルーナ", img: "himemori_luna.jpg", ch: "UCa9Y57gfeY0Zro_noHRVrnw" },

        "獅白ぼたん": { name: "獅白ぼたん", img: "shishiro_botan.jpg", ch: "UCUKD-uaobj9jiqB-VXt71mA" },
        "雪花ラミィ": { name: "雪花ラミィ", img: "yukihana_lamy.jpg", ch: "UCFKOVgVbGmX65RxO3EtH3iw" },
        "尾丸ポルカ": { name: "尾丸ポルカ", img: "omaru_polka.jpg", ch: "UCK9V2B22uJYu3N7eR_BT9QA" },
        "桃鈴ねね": { name: "桃鈴ねね", img: "momosuzu_nene.jpg", ch: "UCAWSyEs_Io8MtpY3m-zqILA" },
        "魔乃アロエ": { name: "魔乃アロエ", img: "mano_aloe.jpg", ch: "UCYq8Zfxf9iYTci5EGEGnkLw" },

        "ラプラス": { name: "ラプラス・ダークネス", img: "laplus_darknesss.jpg", ch: "UCENwRMx5Yh42zWpzURebzTw" },
        "鷹嶺ルイ": { name: "鷹嶺ルイ", img: "takane_lui.jpg", ch: "UCs9_O1tRPMQTHQ-N_L6FU2g" },
        "博衣こより": { name: "博衣こより", img: "hakui_koyori.jpg", ch: "UC6eWCld0KwmyHFbAqK3V-Rw" },
        "風真いろは": { name: "風真いろは", img: "kazama_iroha.jpg", ch: "UC_vMYWcDjmfdpH6r4TTn1MQ" },
        "沙花叉クロヱ": { name: "沙花叉クロヱ", img: "sakamata_chloe.jpg", ch: "UCIBY1ollUsauvVi4hW4cumw" }
    };
}

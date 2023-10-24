import { Member } from "../types/member";

export class StreamerHelper {
    // アイコンURL
    static getImageUrl(name: string): string {
        return `${process.env.PUBLIC_URL}/img/${StreamerHelper.members[name].img}`;
    }

    // チャンネルURL
    static getChannelUrl(name: string): string {
        return `https://www.youtube.com/${StreamerHelper.members[name].ch}`;
    }

    // サムネイルURL（HD画質固定）
    static getThumbnailUrl(video_id: string): string {
        return `http://img.youtube.com/vi/${video_id}/hqdefault.jpg`;
    }

    // 配信者定義
    static members: { [key: string]: Member } = {
        "ホロライブ": { name: "ホロライブ", img: "hololive.jpg", ch: "@hololive" },

        "ときのそら": { name: "ときのそら", img: "tokino_sora.jpg", ch: "@TokinoSora"},
        "ロボ子さん": { name: "ロボ子さん", img: "robokosan.jpg", ch: "@Robocosan" },
        "さくらみこ": { name: "さくらみこ", img: "sakura_miko.jpg", ch: "@SakuraMiko" },
        "星街すいせい": { name: "星街すいせい", img: "hoshimachi_suisei.jpg", ch: "@HoshimachiSuisei" },
        "AZKi": { name: "AZKi", img: "azki.jpg", ch: "@AZKi" },

        "夜空メル": { name: "夜空メル", img: "yozora_mel.jpg", ch: "@YozoraMel" },
        "アキ・ローゼンタール": { name: "アキ・ローゼンタール", img: "aki_rosenthal.jpg", ch: "@AkiRosenthal" },
        "赤井はあと": { name: "赤井はあと", img: "haachama.jpg", ch: "@AkaiHaato" },
        "白上フブキ": { name: "白上フブキ", img: "shirakami_fubuki.jpg", ch: "@ShirakamiFubuki" },
        "夏色まつり": { name: "夏色まつり", img: "natsuiro_matsuri.jpg", ch: "@NatsuiroMatsuri" },

        "湊あくあ": { name: "湊あくあ", img: "minato_aqua.jpg", ch: "@MinatoAqua" },
        "紫咲シオン": { name: "紫咲シオン", img: "murasaki_shion.jpg", ch: "@MurasakiShion" },
        "百鬼あやめ": { name: "百鬼あやめ", img: "nakiri_ayame.jpg", ch: "@NakiriAyame" },
        "癒月ちょこ": { name: "癒月ちょこ", img: "yuzuki_choco.jpg", ch: "@YuzukiChoco" },
        "大空スバル": { name: "大空スバル", img: "oozora_subaru.jpg", ch: "@OozoraSubaru" },

        "大神ミオ": { name: "大神ミオ", img: "ookami_mio.jpg", ch: "@OokamiMio" },
        "猫又おかゆ": { name: "猫又おかゆ", img: "nekomata_okayu.jpg", ch: "@NekomataOkayu" },
        "戌神ころね": { name: "戌神ころね", img: "inugami_korone.jpg", ch: "@InugamiKorone" },

        "兎田ぺこら": { name: "兎田ぺこら", img: "usada_pekora.jpg", ch: "@usadapekora" },
        "潤羽るしあ": { name: "潤羽るしあ", img: "uruha_rushia.jpg", ch: "@hololive" },
        "不知火フレア": { name: "不知火フレア", img: "shiranui_flare.jpg", ch: "@ShiranuiFlare" },
        "白銀ノエル": { name: "白銀ノエル", img: "shirogane_noel.jpg", ch: "@ShiroganeNoel" },
        "宝鐘マリン": { name: "宝鐘マリン", img: "housyou_marine.jpg", ch: "@HoushouMarine" },

        "天音かなた": { name: "天音かなた", img: "amane_kanata.jpg", ch: "@AmaneKanata" },
        "桐生ココ": { name: "桐生ココ", img: "kiryu_coco.jpg", ch: "@KiryuCoco" },
        "角巻わため": { name: "角巻わため", img: "tsunomaki_watame.jpg", ch: "@TsunomakiWatame" },
        "常闇トワ": { name: "常闇トワ", img: "tokoyami_towa.jpg", ch: "@TokoyamiTowa" },
        "姫森ルーナ": { name: "姫森ルーナ", img: "himemori_luna.jpg", ch: "@HimemoriLuna" },

        "獅白ぼたん": { name: "獅白ぼたん", img: "shishiro_botan.jpg", ch: "@ShishiroBotan" },
        "雪花ラミィ": { name: "雪花ラミィ", img: "yukihana_lamy.jpg", ch: "@YukihanaLamy" },
        "尾丸ポルカ": { name: "尾丸ポルカ", img: "omaru_polka.jpg", ch: "@OmaruPolka" },
        "桃鈴ねね": { name: "桃鈴ねね", img: "momosuzu_nene.jpg", ch: "@MomosuzuNene" },
        "魔乃アロエ": { name: "魔乃アロエ", img: "mano_aloe.jpg", ch: "@hololive" },

        "ラプラス": { name: "ラプラス・ダークネス", img: "laplus_darknesss.jpg", ch: "@LaplusDarknesss" },
        "鷹嶺ルイ": { name: "鷹嶺ルイ", img: "takane_lui.jpg", ch: "@TakaneLui" },
        "博衣こより": { name: "博衣こより", img: "hakui_koyori.jpg", ch: "@HakuiKoyori" },
        "沙花叉クロヱ": { name: "沙花叉クロヱ", img: "sakamata_chloe.jpg", ch: "@SakamataChloe" },
        "風真いろは": { name: "風真いろは", img: "kazama_iroha.jpg", ch: "@kazamairoha" },

        "hololive DEV_IS": { name: "hololive DEV_IS", img: "hololive_dev_is.jpg", ch: "@hololiveDEV_IS" },
        "火威青": { name: "火威青", img: "hiodoshi_ao.jpg", ch: "@HiodoshiAo" },
        "儒烏風亭らでん": { name: "儒烏風亭らでん", img: "juufuutei_raden.jpg", ch: "@JuufuuteiRaden" },
        "音乃瀬奏": { name: "音乃瀬奏", img: "otonose_kanade.jpg", ch: "@OtonoseKanade" },
        "一条莉々華": { name: "一条莉々華", img: "ichijou_ririka.jpg", ch: "@IchijouRirika" },
        "轟はじめ": { name: "轟はじめ", img: "todoroki_hajime.jpg", ch: "@TodorokiHajime" },

        "Risu": { name: "Ayunda Risu", img: "ayunda_risu.jpg", ch: "@AyundaRisu" },
        "Moona": { name: "Moona Hoshinova", img: "moona_hoshinova.jpg", ch: "@MoonaHoshinova" },
        "Iofi": { name: "Airani Iofifteen", img: "airani_iofifteen.jpg", ch: "@AiraniIofifteen" },

        "Ollie": { name: "Kureiji Ollie", img: "kureiji_ollie.jpg", ch: "@KureijiOllie" },
        "Anya": { name: "Anya Melfissa", img: "anya_melfissa.jpg", ch: "@AnyaMelfissa" },
        "Reine": { name: "Pavolia Reine", img: "pavolia_reine.jpg", ch: "@PavoliaReine" },

        "Zeta": { name: "Vestia Zeta", img: "vestia_zeta.jpg", ch: "@VestiaZeta" },
        "Kaela": { name: "Kaela Kovalskia", img: "kaela_kovalskia.jpg", ch: "@KaelaKovalskia" },
        "Kobo": { name: "Kobo Kanaeru", img: "kobo_kanaeru.jpg", ch: "@KoboKanaeru" },

        "Calli": { name: "Mori Calliope", img: "mori_calliope.jpg", ch: "@MoriCalliope" },
        "Kiara": { name: "Takanashi Kiara", img: "takanashi_kiara.jpg", ch: "@TakanashiKiara" },
        "Ina": { name: "Ninomae Ina'nis", img: "ninomae_ina'nis.jpg", ch: "@NinomaeInanis" },
        "Gura": { name: "Gawr Gura", img: "gawr_gura.jpg", ch: "@GawrGura" },
        "Amelia": { name: "Watson Amelia", img: "watson_amelia.jpg", ch: "@WatsonAmelia" },

        "IRyS": { name: "IRyS", img: "irys.jpg", ch: "@IRyS" },

        "Fauna": { name: "Ceres Fauna", img: "ceres_fauna.jpg", ch: "@CeresFauna" },
        "Kronii": { name: "Ouro Kronii", img: "ouro_kronii.jpg", ch: "@OuroKronii" },
        "Mumei": { name: "Nanashi Mumei", img: "nanashi_mumei.jpg", ch: "@NanashiMumei" },
        "Baelz": { name: "Hakos Baelz", img: "hakos_baelz.jpg", ch: "@HakosBaelz" },
        "Sana": { name: "Tsukumo Sana", img: "tsukumo_sana.jpg", ch: "@TsukumoSana" },

        "Shiori": { name: "Shiori Novella", img: "shiori_novella.jpg", ch: "@ShioriNovella" },
        "Bijou": { name: "Koseki Bijou", img: "koseki_bijou.jpg", ch: "@KosekiBijou" },
        "Nerissa": { name: "Nerissa Ravencroft", img: "nerissa_ravencroft.jpg", ch: "@NerissaRavencroft" },
        "FUWAMOCO": { name: "FUWAMOCO", img: "fuwamoco.jpg", ch: "@FUWAMOCOch" },
    };
}

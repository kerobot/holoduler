export class DateHelper {
    static addDays(date: Date, days: number): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
    }

    static formatDate(date: Date, separator: string = ""): string {
        const y = date.getFullYear();
        const m = ("00" + (date.getMonth() + 1)).slice(-2);
        const d = ("00" + date.getDate()).slice(-2);
        return `${y}${separator}${m}${separator}${d}`;
    }

    static formatTime(date: Date, separator: string = ""): string {
        const h = date.getHours();
        const m = ("00" + date.getMinutes()).slice(-2);
        return `${h}${separator}${m}`;
    }

    static stringToDateTime(stringDateTime: string): Date {
        const year = Number(stringDateTime.substr(0, 4));
        const month = Number(stringDateTime.substr(4, 2)) - 1;
        const day = Number(stringDateTime.substr(6, 2));
        const hour = Number(stringDateTime.substr(9, 2));
        const minute = Number(stringDateTime.substr(11, 2));
        const second = Number(stringDateTime.substr(13, 2));
        return new Date(year, month, day, hour, minute, second);
    }
}

export class DateHelper {
    static dateToString(date: Date, separator: string = ""): string {
        const y = date.getFullYear();
        const m = ("00" + (date.getMonth() + 1)).slice(-2);
        const d = ("00" + date.getDate()).slice(-2);
        return `${y}${separator}${m}${separator}${d}`;
    }

    static stringToDate(stringDate: string): Date {
        const year = Number(stringDate.substr(0, 4));
        const month = Number(stringDate.substr(4, 2)) - 1;
        const day = Number(stringDate.substr(6, 2));
        return new Date(year, month, day);
    }

    static getNextStringDate(stringDate: string): string {
        const date = DateHelper.stringToDate(stringDate);
        return DateHelper.dateToString(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
    }

    static getPrevStringDate(stringDate: string): string {
        const date = DateHelper.stringToDate(stringDate);
        return DateHelper.dateToString(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
    }

    static removeSeparatorStringDate(stringDate: string): string {
        return stringDate.replace(/\//g, '');
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

    static getStringTime(date: Date): string {
        return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}～`;
    }
}

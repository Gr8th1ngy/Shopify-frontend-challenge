export class DateUtils {
    static formatDate(date: Date) {
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let yyyy = date.getFullYear();

        return yyyy + '-' + mm + '-' + dd;
    }
}
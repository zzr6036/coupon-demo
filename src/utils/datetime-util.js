import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)

const TYPE_DoMMMYYYY = 'Do MMM YYYY'

/**
 * Is Date in UTC format / ISO String
 * @description Check if date is UTC format
 *
 * @example
 * datetimeUtil.isDateUTC('2020-04-27T09:00:00.000Z')
 *
 * @param {string} dateStr
 * @returns {boolean}
 */
const isDateUTC = dateStr => {
    return dateStr ? /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/.test(dateStr) : false
}

/**
 * Format Date
 * @description Date formatter
 *
 * @example
 * datetimeUtil.format('2019-10-15T09:00:00.000Z', datetimeUtil.TYPE_MMMMYYYY, 'Asia/Singapore')
 *
 * @param {string} dateStr
 * @param {string} format
 * @param {string} timezone
 * @returns {string} Formatted date
 */
const format = (dateStr, format = TYPE_DMMM, timeZone) => {
    let dayjsObj =
        isDateUTC(dateStr) && timeZone
            ? dayjs(new Date().toLocaleString('en-US', { timeZone: timeZone }))
            : isDateUTC(dateStr)
                ? dayjs(dateStr).utc()
                : dayjs(dateStr)
    return dayjs(dayjsObj).isValid() ? dayjsObj.format(format) : INVALID_DATE
}

const datetimeUtil = {
    TYPE_DoMMMYYYY,
    format
}

export default datetimeUtil
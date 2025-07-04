// TASK # 1

/**
 * Прапорці для регулярного виразу
 * @type {Array}
 */
const flags = ["g", "i"];

/**
 *  Ключове слово для пошуку в тексті
 * @type {string}
 */
const keyword1 = "JavaScript";

/**
 * Текст, в якому будемо шукати по зразку
 * @type {string}
 */
const text1 = "Це приклад рядка з ключовим словом javascript і JavaScript є дуже цікавою мовою.";

/**
 * Функція шукає заданий зразок в тексту
 * @param {string} sample -- зразок тексту
 * @param {string} text  -- текст, в якому будемо шукати
 * @param {Array<string>} flags -- прапорці для пошуку, наприклад g - для глобального пошуку
 * @returns {Array<string> | null} -- масив знайдених слів
 */
function findSampleInText(sample, text, flags) {
    const searchFlags = flags.join("");
    const regexp = new RegExp(sample, searchFlags);
    return text.match(regexp);
}

/**
 * Функція виводить в консоль елементи масиву
 * @param {Array<string>} array  -- масив з рядковими елементами
 * @returns {void}
 */
function logArrayToConsole(array) {
    for (const element of array) {
        console.log(element);
    }
}

/**
 * Функція розділяє масив рядків на слова
 * @param {Array<string>} array -- масив рядків
 * @param {string} separator -- роздільник, по якому будемо ділити текст
 * @returns {Array<string>} -- повертає масив з словами
 */
function splitWords(array, separator = /\s+/) {
    let result = [];
    for (const row of array) {
        let words = row.split(separator);
        for (const word of words) {
            result.push(word);
        }
    }
    return result;
}

/**
 * Масив із знайденими словами
 * @type {Array<string>}
 */
let result1 = findSampleInText(keyword1, text1, flags);

logArrayToConsole(result1);



/**
 * Текст, в якому будемо шукати по зразку
 * @type {string}
 */
const text2 = `«Хто Юрасика вкусив?»

Проти сонечка – квітник,
Тут Юрась гуляти звик.
Зазира у квітку кожну:
– Чи тебе понюхать можна?
– Нюхай, нюхай, та гляди,
Щоб не трапилось біди!
Шелестить увесь квітник…
Раптом Юра наш у крик:
Ой, ой, ой! Біжить щосили, –
Мамо,  квітка укусила!
Мама каже: – укусити?
Аж ніяк не можуть квіти.
Хто ж тоді, – Юрась питає, –
Укусив мене? Не знаю. –
Чи не можете, малята,
Ви Юрасеві сказати?`;

/**
 * Регулярний вираз для пошуку в тексті
 * @type {RegeXp}
 */
const reg2 = /Юра/gi;

/**
 * Масив з результатами пошуку по регулярному виразу
 * @type {Array<string>}
 */
let result2 = text2.match(reg2);

logArrayToConsole(result2);

// TASK #2

/**
 * Текст, в якому будемо шукати по зразку
 * @type {string}
 */
const textToSplit = "Це є перший рядок.\nЦе є другий рядок.\nЦе є третій рядок.";


/**
 * Масив з рядками
 * @type {Array<string>}
 */
const rows = textToSplit.split(/\n/);

logArrayToConsole(rows);


/**
 * Масив окремих слів
 * @type {string}
 */
const separateWords = splitWords(rows);

logArrayToConsole(separateWords);




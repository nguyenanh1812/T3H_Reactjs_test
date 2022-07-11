/*Bài 4: Sử dụng map để chuyển đổi key của object thành camelCase*/

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')

const usersTwo = users.map((user, index, users) => {
    return {
        "iD": user.id,
        "fistName": user.first_name,
        "lastName": user.last_name,
        "email": user.email,
        "gender": user.gender,
        "age": user.age,
        "salary": user.salary
    }
})
console.log(usersTwo)

// đổi key tự động
const obj = [
    {
        id: 1,
        first_name: "Eamon",
        last_name: "Harhoff",
        email: "eharhoff0@imageshack.us",
        gender: "Male",
        age: 76,
        salary: 18888,
    },
];

const toCamel = (s) => {
    return s.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
};

const isArray = function (a) {
    return Array.isArray(a);
};

const isObject = function (o) {
    return o === Object(o) && !isArray(o) && typeof o !== "function";
};

const keysToCamel = function (o) {
    if (isObject(o)) {
        const n = {};

        Object.keys(o).forEach((k) => {
            n[toCamel(k)] = keysToCamel(o[k]);
        });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return keysToCamel(i);
        });
    }

    return o;
};

console.log(keysToCamel(obj));

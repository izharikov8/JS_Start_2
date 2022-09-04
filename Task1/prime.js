max_num = Number.MAX_SAFE_INTEGER

function simple_num(n) {
const nums = []
for (let i = 2; i < max_num; i++) {
    counter = 0
    for (let el = 1; el <= i; el++) {
        if (i % el === 0) {
            counter ++
        }
        }
    if (counter <= 2) {
        nums.push(i)
    }
    if (nums.length >= n) {
        break
    }
    }
    return nums
}

console.time()
console.log(simple_num(process.argv[2]))
console.timeEnd()
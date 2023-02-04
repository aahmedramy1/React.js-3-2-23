/* 
    Given a string, write an algorithm to find the longest substring with at most K uniquie characters. 
*/

function longest(string, k) {
    let answer = 0;
    for (let start = 0; start < string.length; start++) {
        for (let end = start; end < string.length; end++) {
            let obj = {}
            for (let i = start; i <= end; i++) {
                if (obj[string[i]]) {
                    obj[string[i]]++
                } else {
                    obj[string[i]] = 1;
                }
            }

            let uniqueChars = 0;
            let stringLength = 0
            for (let key in obj) {
                uniqueChars++;
                stringLength += obj[key]
            }
            if (uniqueChars == k) {
                answer = Math.max(answer, stringLength)
            }
        }
    }

    return answer
}
console.log(longest("abcddefabc", 3));
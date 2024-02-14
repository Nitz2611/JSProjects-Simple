// Two sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const myObject = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (myObject.hasOwnProperty(complement)) {
            return [myObject[complement], i];
        }
        myObject[nums[i]] = i;
    }
};

//Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let res = new ListNode(null)
    let inc = false
    let cur = res
    while (l1 || l2 || inc) {
        const tmp = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + (inc ? 1 : 0)
        if (tmp >= 10) inc = true
        else inc = false
        cur.next = new ListNode(tmp % 10)
        cur = cur.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    return res.next
};

// another

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const res = new ListNode(null);
    single(l1, l2, res);
    return res.next;
};

function single(l1, l2, res) {
    let cur;
    let addOne = 0;
    let sum = 0;
    let curVal = 0;
    while (l1 || l2 || addOne) {
        sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + addOne;
        if (sum / 10 >= 1) {
            curVal = sum % 10;
            addOne = 1;
        } else {
            curVal = sum;
            addOne = 0;
        }

        if (cur) {
            cur = cur.next = new ListNode(curVal);
        } else {
            cur = res.next = new ListNode(curVal);
        }

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
}

// another

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let extra = false
    const dummy = new ListNode()
    let cur = dummy
    while (l1 || l2) {
        let val = 0
        if (l1) val += l1.val
        if (l2) val += l2.val
        if (extra) val += 1

        if (val > 9) {
            extra = true
            val = val % 10
        } else {
            extra = false
        }
        cur.next = new ListNode(val)
        cur = cur.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (extra) cur.next = new ListNode(1)
    return dummy.next
};

// another

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode(null)
    let cur = dummy, carry = 0

    while (l1 || l2) {
        let v = 0
        if (l1 && l2) {
            v = l1.val + l2.val + carry
            l1 = l1.next
            l2 = l2.next
        } else {
            const node = l1 || l2
            v = node.val + carry
            if (l1) l1 = l1.next
            if (l2) l2 = l2.next
        }

        cur.next = new ListNode(v % 10)
        cur = cur.next
        if (v >= 10) carry = 1
        else carry = 0
    }

    if (carry) cur.next = new ListNode(1)

    return dummy.next
};


// Longest substring without repeating character

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length
    const hash = {}
    let max = 0
    for (let i = 0, j = -1, len = s.length; i < len; i++) {
        const cur = s[i]
        if (hash[cur] != null) j = Math.max(j, hash[cur])

        hash[cur] = i
        max = Math.max(max, i - j)
    }

    return max
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    // var p=0, q=0; //p: start of the sub, q: end of the queue

    //hashmap in js????? Array.indexOf
    const sub = [];
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let index = sub.indexOf(s.charAt(i));
        if (index == -1) {
            sub.push(s.charAt(i));
            // q++;
        } else {
            //find repeat, get index of repeat el, remve all el before that index
            sub = sub.slice(index + 1, sub.length);
            sub.push(s.charAt(i));
        }
        max = Math.max(max, sub.length);
    }
    return max;
};

// regular expression matching js

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length
    const hash = {}
    let max = 0
    for (let i = 0, j = -1, len = s.length; i < len; i++) {
        const cur = s[i]
        if (hash[cur] != null) j = Math.max(j, hash[cur])

        hash[cur] = i
        max = Math.max(max, i - j)
    }

    return max
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    // var p=0, q=0; //p: start of the sub, q: end of the queue

    //hashmap in js????? Array.indexOf
    const sub = [];
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let index = sub.indexOf(s.charAt(i));
        if (index == -1) {
            sub.push(s.charAt(i));
            // q++;
        } else {
            //find repeat, get index of repeat el, remve all el before that index
            sub = sub.slice(index + 1, sub.length);
            sub.push(s.charAt(i));
        }
        max = Math.max(max, sub.length);
    }
    return max;
};

//Maximum profit of operating a centannial wheel

/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
const minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
    let remain = 0
    let profit = 0
    let cost = 0
    let max = -Infinity
    let maxNum = 0
    for (let i = 0, len = customers.length; i < len; i++) {
        const e = customers[i]
        remain += e
        const cur = (remain >= 4 ? 4 : remain)
        remain -= cur
        profit += cur * boardingCost - runningCost
        if (profit > max) maxNum++
        max = Math.max(max, profit)
    }
    if (remain) {
        const r = Math.floor(remain / 4)
        const single = 4 * boardingCost - runningCost
        remain = remain % 4
        // profit += (single * r + (remain > 0 ? (remain * boardingCost - runningCost) : 0))
        profit += single * r
        if (single > 0) maxNum += r
        max = Math.max(max, profit)
        if (remain < 4) {
            const tmp = remain * boardingCost - runningCost
            profit += tmp
            remain = 0
            if (profit > max) maxNum++
            max = Math.max(max, profit)
        }
    }
    if (max <= 0) return -1
    return maxNum
};


// fancy sequence

const mod = 10 ** 9 + 7;
const Fancy = function () {
    this.seq = [];
    this.mods = [];
};
Fancy.prototype.append = function (val) {
    this.seq.push(val);
};
Fancy.prototype.addAll = function (inc) {
    this.mods.push(["p", inc, this.seq.length]);
};
Fancy.prototype.multAll = function (m) {
    this.mods.push(["m", m, this.seq.length]);
};
Fancy.prototype.getIndex = function (idx) {
    if (idx >= this.seq.length) return -1;
    let x = this.seq[idx];

    for (let i = 0; i < this.mods.length; i++) {
        if (this.mods[i][2] > idx) {
            if ("m" === this.mods[i][0]) {
                x = (x * this.mods[i][1]) % mod;
            } else {
                x = (x + this.mods[i][1]) % mod;
            }
        }
    }
    return x;
};


//Maximise greed happiness

/**
 * @param {number} m
 * @param {number} n
 * @param {number} introvertsCount
 * @param {number} extrovertsCount
 * @return {number}
 */
const getMaxGridHappiness = (m, n, introvertsCount, extrovertsCount) => {
    const state = '0'.repeat(n)
    const memo = new Map()
    return helper(state, 0, n, m, introvertsCount, extrovertsCount, memo)
}
function helper(state, idx, n, m, inCount, exCount, memo) {
    if ((inCount === 0 && exCount === 0) || idx === m * n) return 0
    let key = idx + state + inCount + exCount
    if (memo.has(key)) return memo.get(key)
    const r = (idx / n) >> 0,
        c = idx % n
    let best = 0
    if (inCount !== 0) {
        let score = 120
        if (r > 0) score = calc(state.charAt(0) - '0', 1, score)
        if (c !== 0) score = calc(state.charAt(state.length - 1) - '0', 1, score)
        best =
            score +
            helper(state.slice(1) + '1', idx + 1, n, m, inCount - 1, exCount, memo)
    }
    if (exCount !== 0) {
        let score = 40
        if (r > 0) score = calc(state.charAt(0) - '0', 2, score)
        if (c !== 0) score = calc(state.charAt(state.length - 1) - '0', 2, score)
        best = Math.max(
            best,
            score +
            helper(state.slice(1) + '2', idx + 1, n, m, inCount, exCount - 1, memo)
        )
    }
    best = Math.max(
        best,
        helper(state.slice(1) + '0', idx + 1, n, m, inCount, exCount, memo)
    )
    memo.set(key, best)
    return best
}

function calc(p1, p2, score) {
    if (p1 === 1 && p2 === 1) return score - 60
    else if (p1 === 2 && p2 === 2) return score + 40
    else if (p1 === 1 && p2 === 2) return score - 10
    else if (p1 === 2 && p2 === 1) return score - 10
    return score
}



//Maximum binary string after change

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minMoves = function (nums, k) {
    const pos = [],
        pre = []
    const n = nums.length,
        { min, floor: fl } = Math
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) pos.push(i)
    }
    let res = Infinity

    pre.push(0)
    for (let i = 0, len = pos.length; i < len; i++) {
        pre.push(pre[i] + pos[i])
    }

    for (let i = fl(k / 2), limit = pos.length - fl((k - 1) / 2); i < limit; i++) {
        const lcnt = fl(k / 2),
            rcnt = fl((k - 1) / 2)
        let current =
            lcnt * pos[i] - (pre[i] - pre[i - lcnt]) - (lcnt * (lcnt + 1)) / 2
        current +=
            pre[i + 1 + rcnt] - pre[i + 1] - rcnt * pos[i] - (rcnt * (rcnt + 1)) / 2

        res = min(res, current)
    }
    return res
}

// another


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minMoves = function (nums, k) {
    if (k === 1) return 0
    let n = 0
    const pos = []
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i]) pos.push(i - n++)
    }
    const sums = []
    sums[0] = pos[0]
    for (let i = 1; i < n; ++i) sums[i] = pos[i] + sums[i - 1]
    let res = Number.MAX_VALUE
    let l = (k / 2) >> 0,
        r = k - l - 1
    for (let i = 0; i + k <= n; ++i) {
        const m = i + ((k / 2) >>> 0)
        const cur =
            pos[m] * l -
            (sums[m - 1] - sums[i] + pos[i]) -
            pos[m] * r +
            sums[i + k - 1] -
            sums[m]
        res = Math.min(cur, res)
    }
    return res
}

//Minimum numbers of people to teach

/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
    let cnt_people = languages.length;

    const knows = Array.from({ length: cnt_people }, () => Array(n).fill(0))
    for (let who = 0; who < cnt_people; ++who) {
        for (let x of languages[who]) {
            knows[who][x - 1] = true;
        }
    }
    let req = Array(n).fill(0);
    let s = new Set();
    for (let edge of friendships) {
        let a = edge[0] - 1;
        let b = edge[1] - 1;
        let yes = false;
        for (let x of languages[a]) {
            if (knows[b][x - 1]) {
                yes = true;
            }
        }
        if (yes) {
            continue;
        }
        s.add(a);
        s.add(b);
    }
    let best = Infinity;
    for (let i = 0; i < n; ++i) {
        let needed = 0;
        for (let person of s) {
            if (!knows[person][i]) {
                needed++;
            }
        }
        best = Math.min(best, needed);
    }
    return best;
};
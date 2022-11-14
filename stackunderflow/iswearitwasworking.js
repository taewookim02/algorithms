// N number of anthills on roof
// Minimum N-3 anthills
//

// small shed
/*
Submissions
Leaderboard
Maverick is playing a jet survival game in which the stage lasts  seconds. The stage is divided into  segments, each segment is described as a positive integer in seconds, ranging from 1 to . The summation of the total time of all segments is equal to .

The challenge in the game is that the altitude limit for each segment is different and Maverick should not exceed the limit. For example, when  = 100 seconds, for the first 40 seconds the altitude limit is set at 75,000m and moving forward for the next 50 seconds the limit is 35,000m and for the final 10 seconds, the limit is 45,000m.

Maverick’s game journey is described in  segments of total  seconds (total time taken for the stage). During each segment, he travels at certain altitudes in meters. For example, when  = 100 seconds, for the first 40 seconds, the altitude he maintains is 76,000m, and for the next 20 seconds, he maintains an altitude of 30,000m, and lastly, for the final 40 seconds, he maintains an altitude of 40,000m.

You are given with the altitude limits of N segments of T seconds, and also Maverick's reaching altitudes for M segements of T seconds. Determine the maximum number of altitudes exceeded by Maverick while playing the game.

Input Format

The first line of the input contains ,  and , is separated by a space.

The next  lines each contain two positive integers describing a game segment, mentioning the time and altitude limit.

The next  lines each contain two integers describing each segment in Maverick's journey, mentioning the time and the altitude that Maverick was maintaining at each segment.

Constraints

()

()

()

Please keep note, ,  will always be smaller than .

Output Format

A single line containing the maximum amount of altitude limit exceeded by Maverick during any part of his journey. If he never exceeds the altitude limit, the output should be 0.

Sample Input 0

100 3 3
40 75000
50 35000
10 45000
40 76000
20 30000
40 40000
Sample Output 0

5000
Submissions: 2
Max Score: 100
Rate This Challenge:

    
More
 
1
function processData(input) {
2
    //Enter your code here
3
    const inputArr = input.trim().split('\n');
4
    //   get input
5
    const T = +inputArr[0].split(' ')[0]; // 100
6
    const N = +inputArr[0].split(' ')[1];
7
    const M = +inputArr[0].split(' ')[2];
8
    
9
    //  set limits using N
10
    const rules = [];
11
    for (let i = 1; i <= N; i++) {
12
        rules.push(inputArr[i].split(' '));
13
    }
14
        // console.log(rules); // [ [ '40', '75000' ], [ '50', '35000' ], [ '10', '45000' ] ]
15
​
16
    //  check if for each Time, the M is ok
17
    const journey = [];
18
    for (let i = 1+N; i <= M+N; i++) {
19
        journey.push(inputArr[i].split(' '));
20
    }
21
        // console.log(journey); // [ [ '40', '76000' ], [ '20', '30000' ], [ '40', '40000' ] ] +1000 yes +5000 
22
    
23
        
24
//     create counter for rule and journey
25
    let counter = 0; // this is for what rule is being applied now?
26
    for (let i = 0; i < ; )
27
    +journey[0][0] +rules[0][0] //40
28
    
29
//     check if journey.time is bigger than rules.time
30
//     if no, move on to the next journey.time
31
        // counter = journey.time
32
        // counter += next journey.time 
33
        //     check if counter exceeded 
34
    // while (journey.time < counter)
35
    
36
//         check every rule.time == journey.time
37
            //     if = 0 => next rule is applied
38
//     time of rule = maverick time 40 
39
    
40
​
41
​
42
    
43
    //   compare the time
44
    // 40 40
45
    // 50 20, 30 seconds left
46
    
47
    //what rule is being applied?
48
    
49
    //   compare the values
50
    
51
    
52
    
53
    //     
54
    
55
​
56
    // check if each second, the journey is altitude is smaller
57
    for (let i = 1; i <= T; i++) {
58
        
59
    }
60
    
61
    //     
62
    
63
} 
64
​
65
process.stdin.resume();
66
process.stdin.setEncoding("ascii");
67
_input = "";
68
process.stdin.on("data", function (input) {
69
    _input += input;
70
});
71
​
72
process.stdin.on("end", function () {
73
   processData(_input);
74
});
75
​
Line: 1 Col: 1
Run Code Submit CodeUpload Code as File 
Test against custom input
Testcase 0
Your code did not pass this test case.

Input (stdin)

100 3 3
40 75000
50 35000
10 45000
40 76000
20 30000
40 40000
Your Output (stdout)

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
Expected Output

5000
Compiler Message

Wrong Answer */

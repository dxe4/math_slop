var e=`---
parent_id: book-mathematical-recreations-reader
chapter_id: encoding-tricks
title: "Encoding Tricks: Questions, Checks, and Hidden Structure"
level: secondary
estimated_minutes: 165
license: CC BY-SA 4.0
---

# Encoding Tricks: Questions, Checks, and Hidden Structure

A “mind-reading” card trick often transmits information openly in a code the
audience has not recognised. Mathematics separates three tasks: representing a
message, detecting or correcting corruption, and hiding a message. Encoding is
not encryption; a public barcode can be robust without being secret.

## Binary questions

To identify one object among $N$, yes/no answers form a binary decision tree. A
sequence of $q$ answers has at most $2^q$ patterns, so $q$ questions identify at
most $2^q$ objects. Therefore at least $\\left\\lceil \\log_2 N\\right\\rceil$ yes/no questions are
needed in the worst case. This lower bound is achieved when one may ask arbitrary
balanced subset questions: label objects with distinct $q$-bit strings and ask
for each bit.

### Worked example 1: four public cards

Label numbers 0 through 15 by four-bit binary strings. Four cards list
the numbers whose corresponding bit is 1. A participant tells you which cards
contain their number; adding the card weights 1, 2, 4, and 8 recovers it.

## A parity bit

Append one bit so the total number of 1s is even. The word $1011$ has three 1s,
so its even-parity bit is 1, yielding $10111$. Any single-bit flip changes the
total parity and is detected.

Parity cannot locate the error, and two flipped bits escape detection. State the
guarantee exactly: it detects every odd number of bit flips, not every error.

## The counterfeit coin and balanced outcomes

With a balance scale, each weighing has three outcomes: left heavy, balance,
right heavy. If one known kind of anomaly must be located—say exactly one coin
is heavier—$w$ weighings distinguish at most $3^w$ possibilities. Divide coins
as evenly as possible into three groups, weigh two groups, and recurse into the
heavy group or the unweighed group.

### Worked example 2: ternary information

For 9 coins, two weighings suffice: weigh 3 against 3, identify the suspect group,
then weigh 1 against 1 within it. If the odd coin might instead be lighter and
there is no known genuine coin, each physical coin creates two hypotheses; the
state space and strategy are subtler. Do not reuse the heavy-only solution.

## Hamming distance

The **Hamming distance** between equal-length bit strings is the number of
positions in which they differ. If codewords have minimum pairwise distance $d$,
then:

- up to $d-1$ bit errors are detectable;
- up to $\\left\\lfloor (d-1)/2\\right\\rfloor$ bit errors are correctable by choosing the unique
  nearest codeword.

Why? Fewer than $d$ flips cannot turn one codeword into another. Balls of radius
$t$ around distinct codewords do not overlap when $2t<d$, by the triangle
inequality for Hamming distance.

The repetition code $0 \\to  000$, $1 \\to  111$ has distance 3, so it corrects one
bit error. It triples message length, illustrating the cost of redundancy.

## Worked example 3: a seven-position correcting code

Repetition is not the only way to use redundancy. Number seven bit positions
1 through 7 and put check bits in positions 1, 2 and 4. The other four positions
3, 5, 6 and 7 carry data. Require even parity in each of the following groups:

- positions 1, 3, 5, 7;
- positions 2, 3, 6, 7;
- positions 4, 5, 6, 7.

For data $1011$, place 1,0,1,1 in positions 3,5,6,7. The first check requires
position 1 to be 0, the second requires position 2 to be 1, and the third
requires position 4 to be 0. The encoded word is therefore $0110011$.
The checks are independent because each check bit appears in its own group
and no other group. Every four-bit message has exactly one encoding.

For a received word, let $s_1,s_2,s_4$ record whether these parity sums are odd.
Read $s_1+2s_2+4s_4$ as an integer, called the syndrome. If exactly position
$j$ has flipped, the failed checks are precisely the 1-bits in the binary
representation of $j$. Thus the syndrome is $j$, which identifies the error.
For instance, flipping position 6 gives $0110001$. The second and third checks
fail but the first passes, giving syndrome $0+2+4=6$. Toggle that position to
recover $0110011$, then read the four data positions.

This is the binary Hamming code of length seven. Its guarantee is conditional:
zero errors gives syndrome zero, and exactly one error is corrected. Two errors
at positions $i,j$ produce the bitwise exclusive-or of their binary indices,
which is another nonzero index. A decoder that assumes one error can therefore
introduce a third error. A larger-looking syndrome does not tell the decoder
how many errors occurred. Minimum distance provides the precise guarantee.

To see the distance directly, subtract two codewords bitwise modulo 2.
Their difference satisfies all checks. A word with one 1 cannot satisfy them
because its nonzero index appears in at least one check. A word with two 1s
cannot satisfy them because different indices differ in some check bit. Thus
distinct codewords differ in at least three positions. Positions 1,2,3 alone
form a valid nonzero codeword, so the minimum is exactly three.

## A checksum is not a proof of authenticity

Weighted decimal checks can catch common transcription errors. For digits
$d_1,...,d_n$, one may require a weighted sum to equal 0 modulo 10. An accidental
change often violates the congruence, but an adversary can deliberately alter two
digits to preserve it. Error detection, cryptographic integrity, and secrecy are
different goals.

It is useful to name the error model before choosing the code. A single
erasure tells the receiver where information is missing, whereas a flipped bit
leaves its location unknown. A burst can damage several adjacent positions;
independent random flips describe another channel. The distance statements
above hold for every error pattern of the specified weight and do not need a
probability distribution. Average recovery rates answer a different question
and should never replace that exact worst-case guarantee.

## Common errors

- Counting questions but not their possible answer patterns.
- Calling redundancy “waste” without naming the errors it handles.
- Assuming even parity detects two flips.
- Using the heavy-coin decision tree when the odd coin might be light.
- Treating a checksum as encryption or a digital signature.

## Worked example: a readable code needs unambiguous boundaries

Suppose three symbols are represented by the bit strings zero, one-zero and
one-one. The message zero-one-zero-one-one decodes from left to right as the
first symbol, the second symbol and the third symbol. A zero completes the
first symbol immediately. A leading one requires exactly one more bit before
a symbol is complete. No codeword begins with another whole codeword, so
every next symbol boundary is determined without looking ahead indefinitely.
This property is called being prefix-free.

Compare the proposed strings zero, zero-one and one-zero. The received string
zero-one-zero now has two interpretations: zero followed by one-zero, or
zero-one followed by zero. All three assigned codewords are different, but
that alone has not made concatenated messages uniquely readable. The problem
is not corruption during transmission; ambiguity exists even when every bit
arrives exactly as sent.

One remedy is to use equal-length blocks and specify their boundaries, as
in the earlier binary cards. Another is a prefix-free code, or an explicit
separator that cannot be confused with message content. Each remedy has a
cost or an assumption to state. Hamming distance addresses changes within
equal-length words, whereas prefix conditions address where variable-length
words end. Neither property implies the other. Before claiming that an
encoding can recover a message, specify both how symbols are represented
and how the receiver knows which bits belong to each symbol.

## Exercises


### Exercise 1 {#encoding-tricks-ex-1}

**Explorer.** How many yes/no questions are necessary and sufficient to find
   a chosen number among 1 through 32?

<details>
<summary>Hint 1</summary>

Count possible answer words.

</details>

<details>
<summary>Hint 2</summary>

Five bits label
   exactly 32 objects; use labels 0 through 31 for the stated choices.

</details>

<details>
<summary>Solution</summary>

Five. Four questions have only $2^4=16$ answer patterns, too few; five bits
   label 32 choices exactly.

</details>

### Exercise 2 {#encoding-tricks-ex-2}

**Foundation.** Append an even-parity bit to $1100101$. Would a flip of bits 2
   and 5 be detected?

<details>
<summary>Hint 1</summary>

Count the existing 1s.

</details>

<details>
<summary>Hint 2</summary>

Each flip toggles parity,
   so two flips toggle it twice.

</details>

<details>
<summary>Solution</summary>

The data have four 1s, so append 0. Flipping two bits preserves even parity,
   so the parity check would not detect that error.

</details>

### Exercise 3 {#encoding-tricks-ex-3}

**Secondary.** One of 27 coins is known to be heavier. Give a three-weighing
   strategy.

<details>
<summary>Hint 1</summary>

Use three equal groups at every stage.

</details>

<details>
<summary>Hint 2</summary>

A balance
   means the heavy coin is in the unweighed group.

</details>

<details>
<summary>Solution</summary>

Split 27 into three groups of 9 and weigh two groups. The heavier side, or the
   unweighed group on balance, contains the odd coin. Repeat with groups of 3,
   then groups of 1. Each outcome chooses one third.

</details>

### Exercise 4 {#encoding-tricks-ex-4}

**Secondary.** Find the Hamming distances among $0000$, $1110$, and $1001$.
   What is the minimum distance of this three-word code?

<details>
<summary>Hint 1</summary>

Compare corresponding positions.

</details>

<details>
<summary>Hint 2</summary>

The smallest
   pairwise distance controls the whole code's guaranteed performance.

</details>

<details>
<summary>Solution</summary>

Distances are $d(0000,1110)=3$, $d(0000,1001)=2$, and
   $d(1110,1001)=3$. The minimum is 2, so this code detects one error but does not
   guarantee correction of one.

</details>

### Exercise 5 {#encoding-tricks-ex-5}

**Undergraduate.** Prove that no binary code of length 3 with five codewords
   can correct every single-bit error.

<details>
<summary>Hint 1</summary>

A radius-one ball has four words here.

</details>

<details>
<summary>Hint 2</summary>

Guaranteed
   correction requires these balls to be disjoint.

</details>

<details>
<summary>Solution</summary>

Correcting one error requires disjoint Hamming balls of radius 1. Each such
   ball contains the codeword and its three one-bit neighbors, 4 strings. Five
   disjoint balls would require 20 strings, but only $2^3=8$ length-three strings
   exist. Therefore it is impossible.

</details>

<a id="section-165-complete-solutions"></a>
<a id="section-163-complete-solutions"></a>
## Complete solutions

[Exercise 1](#encoding-tricks-ex-1) · [Exercise 2](#encoding-tricks-ex-2) · [Exercise 3](#encoding-tricks-ex-3) · [Exercise 4](#encoding-tricks-ex-4) · [Exercise 5](#encoding-tricks-ex-5)

<a id="section-182-hints-for-exercises-1-5"></a>
<a id="section-180-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#encoding-tricks-ex-1) · [Exercise 2](#encoding-tricks-ex-2) · [Exercise 3](#encoding-tricks-ex-3) · [Exercise 4](#encoding-tricks-ex-4) · [Exercise 5](#encoding-tricks-ex-5)

<a id="section-195-exercise-6-uneven-binary-choices-encoding-tricks-ex-6"></a>
<a id="section-193-exercise-6-uneven-binary-choices-encoding-tricks-ex-6"></a>
### Exercise 6: uneven binary choices {#encoding-tricks-ex-6}

Find the worst-case minimum number of yes/no questions for 20 choices, assuming
arbitrary subset questions are allowed. Give a construction as well as a bound.

<details><summary>Hint 1</summary> Compare 20 with consecutive powers of 2.
</details>
<details><summary>Hint 2</summary> Unused answer patterns are allowed.
</details>
<details><summary>Solution</summary> Four answers have only 16 patterns, so at least five questions
are needed. Assign distinct five-bit labels 0 through 19 and ask each bit.
The answers recover the choice, using five questions. The twelve unused labels
do not affect correctness. This proves both necessity and sufficiency.
</details>
<a id="section-209-exercise-7-one-erased-bit-encoding-tricks-ex-7"></a>
<a id="section-207-exercise-7-one-erased-bit-encoding-tricks-ex-7"></a>
### Exercise 7: one erased bit {#encoding-tricks-ex-7}

An even-parity word is received as $10?11$, with the question mark identifying
one erased bit. Recover it. Why is this possible although parity cannot locate
an unknown flipped bit?

<details><summary>Hint 1</summary> The four known bits contain three 1s.
</details>
<details><summary>Hint 2</summary> An erasure supplies the error location for free.
</details>
<details><summary>Solution</summary> The missing bit must be 1, making four 1s in total. If its
location were unknown, several distinct single-bit changes could restore even
parity; the parity result alone would not choose among them. Knowing the erased
location leaves only two candidate words, and exactly one passes the check.
</details>
<a id="section-224-exercise-8-syndrome-decoding-encoding-tricks-ex-8"></a>
<a id="section-222-exercise-8-syndrome-decoding-encoding-tricks-ex-8"></a>
### Exercise 8: syndrome decoding {#encoding-tricks-ex-8}

For the seven-position code, decode received word $1110011$ assuming at most
one error. State the four recovered data bits.

<details><summary>Hint 1</summary> Compute each of the three check parities.
</details>
<details><summary>Hint 2</summary> Form the weighted syndrome with weights 1,2,4.
</details>
<details><summary>Solution</summary> Positions 1,3,5,7 sum to 3, so the first check fails. The other
two sums are even, giving syndrome 1. Toggle position 1 to obtain $0110011$.
Data positions 3,5,6,7 read $1011$. Without the at-most-one-error hypothesis
this decoding would not be guaranteed.
</details>
<a id="section-238-exercise-9-sharp-packing-encoding-tricks-ex-9"></a>
<a id="section-236-exercise-9-sharp-packing-encoding-tricks-ex-9"></a>
### Exercise 9: sharp packing {#encoding-tricks-ex-9}

Explain why the length-seven code's sixteen radius-one Hamming balls partition
all length-seven binary words.

<details><summary>Hint 1</summary> Each ball has one centre and seven one-bit neighbours.
</details>
<details><summary>Hint 2</summary> Minimum distance three makes the balls disjoint.
</details>
<details><summary>Solution</summary> Four freely chosen data bits give sixteen codewords. Their
radius-one balls have $16\\cdot8=128$ words in total and are disjoint, since
an intersection would put two centres at distance at most two. There are
exactly $2^7=128$ binary words, so every received word belongs to one ball.
This does not mean every physical corruption had weight at most one; it means
each word has a unique nearby codeword under that decoding assumption.
</details>
<a id="section-254-exercise-10-checksum-collision-encoding-tricks-ex-10"></a>
<a id="section-252-exercise-10-checksum-collision-encoding-tricks-ex-10"></a>
### Exercise 10: checksum collision {#encoding-tricks-ex-10}

A decimal message is checked only by its digit sum modulo 10. Exhibit distinct
four-digit messages with the same check and explain the security limitation.

<details><summary>Hint 1</summary> Increase one digit and decrease another.
</details>
<details><summary>Hint 2</summary> Keep both changed digits between 0 and 9.
</details>
<details><summary>Solution</summary> Messages $1234$ and $2134$ both have digit sum 10, hence check
zero. An intentional alteration can preserve the public checksum. The check
may detect some accidental errors, but it supplies neither secrecy nor a
proof of who authorized a message.
</details>
<a id="section-268-programming-project-noisy-messages"></a>
<a id="section-266-programming-project-noisy-messages"></a>
## Programming project: noisy messages

Implement repetition coding and nearest-neighbor decoding. Inject exactly $e$
random flips and estimate recovery probability for $e=0,1,2$. Also enumerate all
error patterns to verify the exact one-error guarantee; random testing alone can
miss a rare failure.

\`\`\`js
function encodeRepetition(bits) {
  return [...bits].map((bit) => bit.repeat(3)).join("");
}

function decodeRepetition(word) {
  if (word.length % 3 !== 0 || /[^01]/u.test(word)) {
    throw new Error("expected a bit string of length divisible by 3");
  }
  let decoded = "";
  for (let i = 0; i < word.length; i += 3) {
    const block = word.slice(i, i + 3);
    decoded += [...block].filter((bit) => bit === "1").length >= 2 ? "1" : "0";
  }
  return decoded;
}

console.log(encodeRepetition("101"));
console.log(decodeRepetition("111001111"));
\`\`\`

<a id="section-296-summary"></a>
<a id="section-294-summary"></a>
## Summary

Count distinguishable outcomes before designing questions or weighings. Redundant
bits trade message length for specified error guarantees. Minimum distance
proves detection and correction bounds; the seven-position example shows how
a syndrome can identify one error. An erasure, a corruption and an intentional
forgery are different problems, requiring different information and guarantees.
`;export{e as default};
var e=`---
parent_id: book-algebra-from-stories
chapter_id: patterns-and-sequences
title: "Patterns and Sequences"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Patterns and Sequences {#section-1-patterns-and-sequences}

<a id="section-1-from-a-single-value-to-a-running-list"></a>
## From a single value to a running list {#section-3-from-a-single-value-to-a-running-list}

In the previous chapter, **A letter can hold a place**, we asked questions like "What is the cost for 4 sandwiches?" The variable had one value at a time. Now we ask a different kind of question: "How does the cost change as the sandwich count grows?" This shift from single values to ordered lists of values is the move from expressions to **sequences**.

A sequence is simply a list of numbers in a definite order. Each number is called a **term**. The first term, the second term, the third term, and so on, follow a rule that may be expressed in words, by a formula, or by a recurrence relation.

<a id="section-7-the-caf-sequence"></a>
## The café sequence {#section-9-the-caf-sequence}

Recall the café rule: $C = 3s + 2$, where $s$ is the number of sandwiches. If we let $s$ run through the whole numbers $1, 2, 3, 4, 5$, the costs form a sequence:

$$5,\\; 8,\\; 11,\\; 14,\\; 17,\\; \\dots$$

Each term after the first is obtained by adding 3. We call 3 the **common difference**, and the sequence is an **arithmetic sequence**.

**Definition 2.1 (arithmetic sequence).** An arithmetic sequence is a sequence in which the difference between consecutive terms is constant. If the first term is $a_{1}$ and the common difference is $d$, then the $n$-th term is

$$a_{n} = a_{1} + (n - 1)d.$$

For the café sequence, $a_{1} = 5$ and $d = 3$. The 10th term is

$$a_{10} = 5 + (10 - 1) \\times 3 = 5 + 27 = 32.$$

So 10 sandwiches cost £32.

<a id="section-25-worked-example-finding-a-term-far-out"></a>
### Worked example: finding a term far out {#section-27-worked-example-finding-a-term-far-out}

A gym membership costs £20 to join and £15 per month. The total paid after $n$ months is an arithmetic sequence with first term $a_{1} = 35$ (joining fee plus first month) and common difference $d = 15$. Wait---let us be careful. After 1 month the total is $20 + 15 = 35$. After 2 months it is $20 + 30 = 50$. So the sequence of cumulative payments is

$$35,\\; 50,\\; 65,\\; 80,\\; \\dots$$

Here $a_{1} = 35$ and $d = 15$. After 12 months:

$$a_{12} = 35 + (12 - 1) \\times 15 = 35 + 165 = 200.$$

The total paid after one year is £200.

<a id="section-37-geometric-growth"></a>
## Geometric growth {#section-39-geometric-growth}

Not every sequence adds the same amount. Some multiply by the same factor. Suppose a population of bacteria doubles every hour, starting from 100 at time $t=0$. The populations at $t=0,1,2,3,4,\\dots$ hours are

$$100,\\; 200,\\; 400,\\; 800,\\; 1600,\\; \\dots$$

Each term is twice the previous one. The **common ratio** is 2.

**Definition 2.2 (geometric sequence).** A geometric sequence is a sequence in which the ratio between consecutive terms is constant. If the first term is $a_{1}$ and the common ratio is $r$, then the $n$-th term is

$$a_{n} = a_{1} \\, r^{n - 1}.$$

If sequence index $n=1$ corresponds to time $t=0$, then $a_{1}=100$, $r=2$, and $a_n=100\\cdot2^{n-1}$. Six elapsed hours correspond to $n=7$, so

$$a_{7}=100\\times2^{7-1}=100\\times64=6400.$$

There are 6400 bacteria after six hours. The sixth term is 3200, but it describes the population after five elapsed hours. Writing the time-to-index convention prevents this off-by-one error.

<a id="section-55-common-error-confusing-exponent-and-multiplier"></a>
### Common error: confusing exponent and multiplier {#section-57-common-error-confusing-exponent-and-multiplier}

A frequent mistake is to write $a_{n} = a_{1} \\, r^{n}$ instead of $a_{1} \\, r^{n - 1}$. With $n = 1$, the incorrect formula gives $a_{1} \\, r^{1} = a_{1} \\, r$, which is the second term, not the first. Always check a formula by substituting $n = 1$ and confirming that you recover $a_{1}$.

<a id="section-59-describing-sequences-from-partial-information"></a>
## Describing sequences from partial information {#section-61-describing-sequences-from-partial-information}

Sometimes we are given only a few terms and must find the rule.

**Worked example.** Find the next two terms and a formula for the $n$-th term of

$$7,\\; 12,\\; 17,\\; 22,\\; \\dots$$

The differences are $12 - 7 = 5$, $17 - 12 = 5$, $22 - 17 = 5$. This is arithmetic with $a_{1} = 7$ and $d = 5$. The next two terms are $27$ and $32$. The formula is

$$a_{n} = 7 + (n - 1) \\times 5 = 5n + 2.$$

Check: for $n = 1$, $5(1) + 2 = 7$; for $n = 4$, $5(4) + 2 = 22$. Both match.

**Example.** Find the next two terms and a formula for

$$3,\\; 6,\\; 12,\\; 24,\\; \\dots$$

The ratios are $6 \\div 3 = 2$, $12 \\div 6 = 2$, $24 \\div 12 = 2$. This is geometric with $a_{1} = 3$ and $r = 2$. The next two terms are $48$ and $96$. The formula is

$$a_{n} = 3 \\times 2^{n - 1}.$$

Check: for $n = 3$, $3 \\times 2^{2} = 12$, which matches.

<a id="section-83-sequences-that-are-neither-arithmetic-nor-geometric"></a>
## Sequences that are neither arithmetic nor geometric {#section-85-sequences-that-are-neither-arithmetic-nor-geometric}

Many interesting sequences do not fit either pattern. Consider the sequence of square numbers:

$$1,\\; 4,\\; 9,\\; 16,\\; 25,\\; \\dots$$

The differences are $3, 5, 7, 9$, which increase by 2 each time. The $n$-th term is simply

$$a_{n} = n^{2}.$$

Or consider the Fibonacci sequence, in which each term is the sum of the two preceding terms:

$$1,\\; 1,\\; 2,\\; 3,\\; 5,\\; 8,\\; 13,\\; \\dots$$

Here $a_{1} = 1$, $a_{2} = 1$, and $a_{n} = a_{n - 1} + a_{n - 2}$ for $n \\geq 3$. This is a **recurrence relation**: a rule that defines each term from earlier terms rather than directly from $n$.

<a id="section-99-summing-the-first-n-terms"></a>
## Summing the first $n$ terms {#section-101-summing-the-first-n-terms}

For an arithmetic sequence, the sum of the first $n$ terms has a neat formula. Write the sum forwards and backwards:

$$S_{n} = a_{1} + (a_{1} + d) + \\dots + (a_{n} - d) + a_{n},$$
$$S_{n} = a_{n} + (a_{n} - d) + \\dots + (a_{1} + d) + a_{1}.$$

Adding these two equations, each pair of stacked terms sums to $a_{1} + a_{n}$. There are $n$ such pairs, so

$$2S_{n} = n(a_{1} + a_{n}),$$

and therefore

$$S_{n} = \\frac{n}{2}\\bigl(a_{1} + a_{n}\\bigr).$$

**Worked example.** Find the sum $1 + 2 + 3 + \\dots + 100$.

This is an arithmetic sequence with $a_{1} = 1$, $a_{100} = 100$, and $n = 100$. Then

$$S_{100} = \\frac{100}{2}(1 + 100) = 50 \\times 101 = 5050.$$

<a id="section-120-practice-exercises"></a>
## From a list to a justified rule {#section-291-further-development-from-a-list-to-a-justified-rule}

The following development supplies the reasoning behind this chapter's rules and connects its representations. All original headings, exercises and keys above remain unchanged. The earlier 150-minute estimate predates this development; the full expanded workload has not been calibrated.

<a id="section-293-the-index-is-an-address-not-the-value"></a>
### The index is an address, not the value {#section-295-the-index-is-an-address-not-the-value}

There are two different questions in a sequence: “Which place are we looking at?” and “What is in that place?” In $a_4=14$, the index is 4 and the term is 14. Swapping them would describe a different question. The subscript is an address: it does not mean multiplication by 4. A useful table therefore has a row for the index as well as a row for the terms.

| Place $n$ | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|
| Term $a_n$ | 5 | 8 | 11 | 14 |

Here $n$ takes positive integer values. There is a first term and a next term, but there is no term “halfway between the second and third” unless another model defines one. The expression $3n+2$ can be evaluated at $n=2.5$; that calculation does not create a new position in this sequence. An expression and the domain on which we use it are separate parts of the rule.

A finite sequence also needs an ending. The first eight rows of a theatre can be described by $a_n=12+4(n-1)$ with $n=1,2,\\ldots,8$. The same formula with every positive integer allowed describes an infinite mathematical sequence. The formula alone does not tell us how many rows the actual theatre contains. Write the index domain beside it.

An index need not begin at 1, but a convention must be stated. If $b_k$ is a population after $k$ complete hours, then $k=0$ naturally denotes the starting observation. If $a_n$ is the list whose first entry is that starting observation, the same entries satisfy $a_n=b_{n-1}$. Thus $n=k+1$. Neither convention is more accurate; the error comes from changing conventions during a calculation. The units belong to the values and the elapsed time, while the index counts which recorded occasion is being used.

<a id="section-307-why-the-arithmetic-formula-has-n-1-additions"></a>
### Why the arithmetic formula has $n-1$ additions {#section-309-why-the-arithmetic-formula-has-n-1-additions}

Start at the first term and move to the $n$th term. From place 1 to place 2 is one move; from place 1 to place 3 is two moves. Reaching place $n$ requires $n-1$ moves. If every move adds the same number $d$, the total change is $(n-1)d$. That explains the formula rather than merely supplying a pattern to memorise.

The same information can be written recursively:
$$a_1=A,\\qquad a_{n+1}=a_n+d\\quad(n=1,2,3,\\ldots).$$
The starting value $A$, the change $d$ and the range of indices are all required. The recurrence is convenient for making the next few entries. The explicit expression $a_n=A+(n-1)d$ is convenient for going directly to a distant entry. They describe the same sequence because both start at $A$ and add $d$ at each move. Checking only the first two entries would be evidence of agreement; this explanation establishes the connection at every permitted place.

For example, suppose a model theatre has 12 seats in its first row and four more seats in each following row. Row 8 contains $12+7(4)=40$ seats. A possible error is $12+8(4)=44$, which adds the increase once before leaving the first row. A first-row check detects it: $12+1(4)$ would wrongly put 16 seats there. Drawing eight small row boxes and seven arrows between them is a text-accessible way to count the changes.

We can also work backwards. Which row has 88 seats? Solve
$$12+4(n-1)=88.$$
Subtract 12, divide by 4, then add 1: $n-1=19$, so $n=20$. The result is an allowed positive integer. If the requested number were 90, the same algebra would give $n=20.5$. That is an input of the extended expression, but it is not a row number. The sequence contains no term equal to 90.

A negative common difference is allowed. The sequence $18,15,12,9$ uses $d=-3$, and its fourth entry is $18+3(-3)=9$. If these values represent remaining tiles, the rule can continue only while its results are physically permitted. A zero common difference gives a constant sequence. “Arithmetic” describes a constant additive change, not a requirement that the entries grow.

Be especially careful about cumulative quantities. The gym sequence above records the total paid so far: £35, £50, £65 and so on. Adding its first three terms gives £150, but that is not the total paid after three months. The third entry already includes the earlier payments; the correct total is £65. A sum of terms answers a new question, so identify what each term represents before adding them.

<a id="section-325-a-multiplier-is-a-rule-a-quotient-is-a-way-to-inspect-i"></a>
### A multiplier is a rule; a quotient is a way to inspect it {#section-327-a-multiplier-is-a-rule-a-quotient-is-a-way-to-inspect-i}

A multiplicative recurrence takes the form
$$a_1=A,\\qquad a_{n+1}=r a_n.$$
For a nonzero multiplier $r$, making $n-1$ moves multiplies by $r$ exactly $n-1$ times, giving $a_n=Ar^{n-1}$. The multiplier is dimensionless when consecutive entries measure the same quantity. A ratio of two populations has no population unit left; a difference of two populations still has that unit.

Suppose a tray contains 160 counters and a rule retains three quarters at each stage. At stage 0 there are 160, at stage 1 there are 120, at stage 2 there are 90 and at stage 3 there are $135/2$. The last value is not a whole counter count. The algebraic model therefore needs interpretation: it can represent a divisible quantity such as mass, but an actual counter-removal activity would need a rounding or random-removal rule. Different rounding rules produce different later sequences. A formula must not quietly invent fractional objects.

With a positive starting value, a multiplier between 0 and 1 gives smaller positive values. It does not subtract a constant amount: retaining half of 80 removes 40, while retaining half of 40 removes 20. Conversely, adding the same amount does not in general preserve a constant ratio. This distinguishes additive and multiplicative explanations even when a short list happens to look similar.

The quotient test has a condition. To calculate $a_{n+1}/a_n$, the denominator must be nonzero. The recurrence $a_{n+1}=r a_n$ still makes sense when a term is zero; the quotient may not. If $A=0$, every entry generated by this recurrence is zero for every $r$, so the observed zero list does not identify a unique multiplier. If $r=0$ and $A\\ne0$, the entries are $A,0,0,\\ldots$. The first multiplication is meaningful, but the later quotient $0/0$ is undefined. Handle this boundary directly from the recurrence rather than using an undefined ratio or an unexplained $0^0$.

Negative multipliers make sense for signed quantities. Starting at 3 and multiplying by $-2$ gives $3,-6,12,-24$. The signs alternate and the magnitudes double. Such a sequence cannot be a population count, but it can be a sequence of signed mathematical values. The domain and interpretation decide which models are suitable; the algebra does not insist that every example describe a population.

A useful repair question is “What operation takes one entry to the next?” Try subtraction for an additive proposal and division only where it is defined for a multiplicative proposal. Then state the rule as a hypothesis. A finite list can rule out a claimed constant difference when two observed differences disagree; agreeing differences alone do not establish that the rule continues forever.


<a id="section-342-finding-a-stage-and-choosing-a-model"></a>
### Finding a stage and choosing a model {#section-344-finding-a-stage-and-choosing-a-model}

An explicit rule answers “What is the value at this stage?” An inverse question asks “At which stage can this value occur?” The second question needs both algebra and a check of the allowed indices. An arithmetic rule can be rearranged as an equation in $n$, as the theatre example showed. A multiplicative rule may instead be investigated by a short exact list when the question supplies a bounded range. No logarithm rule is assumed here.

Suppose a divisible quantity starts at 160 units at stage $k=0$ and is multiplied by $3/4$ at every stage. To locate 90 units within the first four stages, list $160,120,90,135/2,405/8$, keeping the initial stage in the table. The target occurs at $k=2$. It occurs only once: every entry is positive, and multiplying a positive entry by $3/4$ makes it strictly smaller. Earlier stages therefore have larger entries and later stages have smaller ones. This explanation supplies uniqueness; finding one matching entry alone would supply existence only.

The positivity and multiplier conditions matter. A sequence multiplied by $-1$ can return to the same value at many stages. A sequence multiplied by 1 never changes. A sequence starting at zero remains at zero, so it cannot identify the multiplier from its observed values. The correct inverse reasoning depends on the model, rather than on the mere appearance of an exponent.

Even deciding which model to use is a separate question. A process with first two entries 20 and 30 could add 10 each time or multiply by $3/2$ each time. Those proposals give third entries 40 and 45. A third observation of 45 would contradict the constant-addition proposal, but it would not prove that the multiplication proposal will hold at every future stage. If a construction explicitly says “make three copies for every two old units at each stage,” it supplies the multiplicative mechanism. If all we have is the table, call the rule a model and retain the possibility of a later change. This distinction prepares us to read a drawn graph with the same care.

<a id="section-352-several-rules-can-agree-with-the-same-beginning"></a>
### Several rules can agree with the same beginning {#section-354-several-rules-can-agree-with-the-same-beginning}

The examples above choose the arithmetic or geometric continuation suggested by their displayed entries. Read that choice as an additional assumption: *if the same additive or multiplicative rule continues*, these are the next values. A finite beginning by itself cannot compel a unique continuation.

For the displayed beginning $7,12,17,22$, one rule is $a_n=5n+2$. Another is “add 5 until the fourth entry, then add 6 thereafter.” The second rule produces $7,12,17,22,28,34,\\ldots$ instead of $7,12,17,22,27,32,\\ldots$. Both are fully specified rules on the positive integers and both agree at every displayed place.

There is also a formula-based comparison. Set
$$b_n=5n+2+(n-1)(n-2)(n-3)(n-4).$$
For $n=1,2,3,4$, one factor in the final product is zero, so $b_n=5n+2$ at all four places. At $n=5$, the product is $4\\cdot3\\cdot2\\cdot1=24$, giving $b_5=51$ rather than 27. This is an exact counterexample to the claim that four matching entries determine the whole rule. No graph or large numerical search is needed.

That observation does not make patterns useless. A stated construction may justify a pattern: four extra seats are physically specified for every new row, or a copying process is defined to triple its current count. Then the construction supplies the repeated rule. Without such information, describe a continuation as a proposed model and say what further observation or explanation would distinguish it from alternatives.

A recurrence also needs enough starting information. The Fibonacci rule says to add the previous two entries. Specifying only $a_1=1$ leaves the second entry undecided. Choosing $a_2=1$ gives $1,1,2,3,5$; choosing $a_2=3$ gives $1,3,4,7,11$. Once both starting entries are supplied, the rule determines the next entry and then the next, one place at a time.

Square numbers connect this idea to a different construction. Enlarging an $n$ by $n$ array to an $(n+1)$ by $(n+1)$ array adds a strip of $n$ objects, another strip of $n$ objects, and one corner object. Thus the increase is $2n+1$. Starting with one object gives $1,4,9,16,\\ldots$ through the recurrence $a_{n+1}=a_n+2n+1$. The increasing differences come from the construction, not from an unexplained guess about the first few numbers. The next chapter will plot these changing rates.

<a id="section-368-sums-count-terms-not-just-gaps"></a>
### Sums count terms, not just gaps {#section-370-sums-count-terms-not-just-gaps}

In the arithmetic-sum argument above, $n$ must be a positive integer because it counts the terms being added. The argument uses two copies of the whole list, so it also works when $n$ is odd. There is no need to imagine a fractional number of physical pairs. For $4+7+10+13+16$, the reversed copy gives five sums equal to 20. Twice the desired total is $5(20)=100$, so the total is 50.

The last term must match the number of terms. If a row model is $a_n=12+4(n-1)$, the first eight rows end at 40 seats. Their combined capacity is $8(12+40)/2=208$ seats. Using the ninth term in the same formula would count the wrong list. A quick check is to pair the first with the eighth, the second with the seventh, and so on: every pair contributes 52 seats, and four pairs contribute 208.

A finite geometric sum has a related cancellation argument. For a nonzero real $r$ with $r\\ne1$, let
$$T_n=A+Ar+\\cdots+Ar^{n-1}.$$
Multiplying the entire sum by $r$ gives $rT_n=Ar+Ar^2+\\cdots+Ar^n$. Subtract the second equation from the first. Every middle term cancels, leaving
$$(1-r)T_n=A-Ar^n.$$
Because $r\\ne1$, division by $1-r$ is allowed:
$$T_n=A\\frac{1-r^n}{1-r}.$$
The equivalent form $A(r^n-1)/(r-1)$ changes both signs. Changing just one sign would change the answer.

For $A=3$, $r=2$ and $n=4$, the list is $3,6,12,24$. Its sum is $3(2^4-1)/(2-1)=45$. Direct addition gives the same result. The final term, 24, and the total, 45, answer different questions. If $r=1$, all terms are $A$ and the sum is $nA$; the displayed quotient is unavailable because its denominator is zero. If $r=0$, use the recurrence boundary already discussed: the finite list is $A,0,\\ldots,0$ and the total is $A$. If $A=0$, the total is zero directly.

These are finite sums only. We have made no claim that an endless sum exists, and no rule for replacing $n$ by infinity has been introduced. For each question, record the first index, the last index, the number of terms, the units and whether the entries are individual contributions or cumulative totals. Those five decisions usually matter more than choosing which sum formula looks familiar.


For the original practice questions that continue a displayed arithmetic or geometric list, use the stated or intended constant-difference or constant-multiplier model. Their supplied continuations are conditional on that model continuing. The finite observations alone do not prove it; the extension tasks below ask you to make this boundary explicit.
<!-- EULER-AS-02-EXPOSITION-END -->

<!-- EULER-AS-02-QUESTIONS-BEGIN -->
<a id="section-391-practice-extensions"></a>

## Summary

<a id="section-284-looking-back-and-forward"></a>
This chapter moved from single variable values to ordered sequences. We met arithmetic sequences, with their constant differences, and geometric sequences, with their constant ratios. We learned to find explicit formulas and to sum arithmetic series. We also saw that many natural sequences---squares, Fibonacci numbers, primes---do not fit either simple pattern.

In the next chapter, **Graphing Stories**, we will place these sequences and rules on coordinate axes. A table of values becomes a set of points; a formula becomes a curve or line. The visual representation reveals features that tables and formulas hide.

<!-- EULER-AS-02-EXPOSITION-BEGIN -->
<a id="section-289-further-development-from-a-list-to-a-justified-rule"></a>

<a id="section-530-summary"></a>
A sequence needs both a rule and an indexing convention. Distinguish an individual contribution from a running total, and state the assumption that licenses a continuation beyond observed terms.

**Where next.** Continue with [Algebra and Functions](/books/library-book-algebra-and-functions/) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-122-practice-exercises}

<a id="section-122-exercise-1"></a>
### Exercise 1 {#section-124-exercise-1}
An arithmetic sequence has first term 4 and common difference 6. Find the 8th term.

<details>
<summary>Hint 1</summary>

**Hint.** Count how many additions separate the first term from the eighth.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the first term plus seven copies of the common difference.

</details>

<details>
<summary>Solution</summary>

**Solution.** Using $a_{n} = a_{1} + (n - 1)d$ with $a_{1} = 4$, $d = 6$, and $n = 8$:

$$a_{8} = 4 + (8 - 1) \\times 6 = 4 + 42 = 46.$$

</details>

<a id="section-147-exercise-2"></a>
### Exercise 2 {#section-149-exercise-2}
A geometric sequence has first term 5 and common ratio 3. Find the 5th term.

<details>
<summary>Hint 1</summary>

**Hint.** Count multiplications rather than additions.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The fifth term contains four factors of the common ratio after the initial term.

</details>

<details>
<summary>Solution</summary>

**Solution.** Using $a_{n} = a_{1} \\, r^{n - 1}$ with $a_{1} = 5$, $r = 3$, and $n = 5$:

$$a_{5} = 5 \\times 3^{4} = 5 \\times 81 = 405.$$

</details>

<a id="section-172-exercise-3"></a>
### Exercise 3 {#section-174-exercise-3}
Find the next two terms and a formula for the $n$-th term of $2, 5, 8, 11, \\dots$

<details>
<summary>Hint 1</summary>

**Hint.** Check consecutive differences and state the arithmetic-pattern assumption.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the first term plus n minus one increments; verify your rule at a known index.

</details>

<details>
<summary>Solution</summary>

**Solution.** The differences are constant at 3, so the sequence is arithmetic with $a_{1} = 2$ and $d = 3$. The next two terms are $14$ and $17$. The formula is

$$a_{n} = 2 + (n - 1) \\times 3 = 3n - 1.$$

Check: $n = 1$ gives $2$, and $n = 4$ gives $11$.

</details>

<a id="section-199-exercise-4"></a>
### Exercise 4 {#section-201-exercise-4}
Find the sum of the first 20 terms of the arithmetic sequence $5, 9, 13, 17, \\dots$

<details>
<summary>Hint 1</summary>

**Hint.** Find the last term before summing the sequence.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Pair the first term with the last, and use the number of terms to count the pairs.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $a_{1} = 5$ and $d = 4$. First find the 20th term:

$$a_{20} = 5 + (20 - 1) \\times 4 = 5 + 76 = 81.$$

Then

$$S_{20} = \\frac{20}{2}(5 + 81) = 10 \\times 86 = 860.$$

</details>

<a id="section-228-exercise-5"></a>
### Exercise 5 {#section-230-exercise-5}
A ball is dropped from a height of 81 metres. After each bounce it reaches $\\frac{1}{3}$ of its previous height. Write the sequence of heights after the first three bounces, and find a formula for the height after the $n$-th bounce.

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish the drop height from the height after the first bounce.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply by one third once for each completed bounce; check the indexing at the first bounce.

</details>

<details>
<summary>Solution</summary>

**Solution.** The heights form a geometric sequence with $a_{1} = 81 \\times \\frac{1}{3} = 27$ metres and $r = \\frac{1}{3}$. The first three bounce heights are

$$27,\\; 9,\\; 3.$$

The formula is

$$a_{n} = 27 \\times \\left(\\frac{1}{3}\\right)^{n - 1} = 3^{3} \\times 3^{-(n - 1)} = 3^{4 - n}.$$

Check: for $n = 1$, $3^{3} = 27$; for $n = 3$, $3^{1} = 3$.

</details>

<a id="section-259-exercise-6"></a>
### Exercise 6 {#section-261-exercise-6}
Explain why the sequence of prime numbers $2, 3, 5, 7, 11, \\dots$ is neither arithmetic nor geometric.

<details>
<summary>Hint 1</summary>

**Hint.** An arithmetic rule needs equal differences, while a geometric rule needs equal ratios.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare two early successive differences and two early successive ratios; one disagreement defeats each claim.

</details>

<details>
<summary>Solution</summary>

**Solution.** The differences between consecutive primes are $1, 2, 2, 4$, which are not constant, so the sequence is not arithmetic. The ratios are $3/2 = 1.5$, $5/3 \\approx 1.67$, $7/5 = 1.4$, which are not constant, so the sequence is not geometric. Prime numbers follow no simple algebraic pattern of either type.

</details>

<a id="section-282-looking-back-and-forward"></a>

<a id="section-393-practice-extensions"></a>
### Exercise 7 — AS-02-E07 — Address and elapsed stage {#section-397-as-02-e07-address-and-elapsed-stage}

A model begins with 12 tiles at elapsed stage $k=0$ and adds four tiles at each complete stage. Define $b_k$ using elapsed stage, and define $a_n$ when the first list entry has index $n=1$. Find the eighth list entry. What is the greatest positive list index whose entry is at most 50 tiles? Explain why a noninteger algebraic answer is not itself a list position.

<details>
<summary>Hint 1</summary>

**Hint.** Elapsed stage zero and list position one name the same starting entry.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Relate k to n minus one; solve the upper-bound inequality and then choose the greatest allowed integer index.

</details>



<a id="section-414-as-02-e08-one-beginning-two-rules"></a>
### Exercise 8 — AS-02-E08 — One beginning, two rules {#section-416-as-02-e08-one-beginning-two-rules}

For positive integer $n$, compare
$$a_n=3n+1,\\qquad
b_n=3n+1+(n-1)(n-2)(n-3)(n-4).$$
Show that both rules begin $4,7,10,13$. Find their fifth terms. What additional assumption licenses the arithmetic continuation 16, and what does the shared beginning fail to prove?

<details>
<summary>Hint 1</summary>

**Hint.** Examine the product added to the affine rule at the first four indices.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** At the fifth index none of those four factors vanishes; separate the extra arithmetic assumption from the observed data.

</details>



<a id="section-436-as-02-e09-contributions-and-totals"></a>
### Exercise 9 — AS-02-E09 — Contributions and totals {#section-438-as-02-e09-contributions-and-totals}

A sequence of separate, nonoverlapping batches begins with $u_1=2$ objects in batch 1. Each following batch contains three times as many new objects as the previous batch, so $u_{n+1}=3u_n$ for every positive integer $n$. Find the first five batch sizes and the total number of objects across all five batches, giving both a direct addition and a finite-sum derivation. Then change the multiplier to 1 while keeping the same first entry. What changes? Finally explain the multiplier-zero case directly from its recurrence.

<details>
<summary>Hint 1</summary>

**Hint.** Write the five separate contributions before adding them.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare a total S with three times S to cancel common terms; handle multipliers one and zero directly.

</details>

<!-- EULER-AS-02-QUESTIONS-END -->

<!-- EULER-AS-02-SOLUTIONS-BEGIN -->

<a id="section-457-solutions-to-practice-extensions"></a>

<a id="section-504-a-further-practice-problem"></a>
<a id="section-504-exercise-10"></a>
### Exercise 10 {#section-506-exercise-10}
<a id="patterns-and-sequences-ex-10"></a>

An arithmetic sequence has first term 5 and common difference 4. Find its eighth term and the sum of its first eight terms. Explain why eight terms require seven increases when locating the last term, but eight contributions when forming the sum.

<details>
<summary>Hint 1</summary>

**Hint.** Draw eight positions and count the gaps between them.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the first and last terms to pair the contributions in the sum.

</details>
<details>
<summary>Solution</summary>

**Solution.** The nth term is $a_n=5+4(n-1)$ for positive integer $n$. Hence $a_8=5+4(7)=33$. There are seven gaps from the first position to the eighth, so adding four eight times would go one position too far. The eight terms are $5,9,13,17,21,25,29,33$. Pairing the outside terms gives four pairs, each with sum $38$, so the total is $4(38)=152$. Equivalently, $S_8=8(5+33)/2=152$. The sum contains eight terms even though its endpoint lies seven increments after the first.

</details>

<a id="section-528-summary"></a>

## Solutions {#section-459-solutions-to-practice-extensions}

<a id="section-459-as-02-e07-solution"></a>
### AS-02-E07 — solution {#section-461-as-02-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

The elapsed-stage rule is $b_k=12+4k$ for integer $k\\ge0$. With $n=k+1$, the list rule is $a_n=12+4(n-1)$ for integer $n\\ge1$. The eighth entry is $a_8=12+4(7)=40$ tiles, occurring after seven complete stages.

For the bound, solve $12+4(n-1)\\le50$. Subtracting 12 and dividing by the positive number 4 gives $n-1\\le19/2$, hence $n\\le21/2$. The greatest positive integer satisfying this is $n=10$. Check the boundary: $a_{10}=48$ tiles, while $a_{11}=52$ tiles exceeds the cap. The algebraic endpoint $21/2=10.5$ belongs to the extended inequality but not to the integer index domain. Taking the next integer would violate the original tile limit.

</details>

<a id="section-472-as-02-e08-solution"></a>
### AS-02-E08 — solution {#section-474-as-02-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

For each $n$ from 1 through 4, one factor in the product is zero, so $b_n=3n+1=a_n$. Substitution gives $4,7,10,13$. At $n=5$, $a_5=16$, while $b_5=16+4\\cdot3\\cdot2\\cdot1=40$.

The statement that every later difference is also 3, or a construction guaranteeing three extra units at every step, licenses the arithmetic continuation. Matching four observed entries alone establishes no such all-index statement. The second displayed formula is a fully specified countermodel: it agrees with all four given observations and has a different fifth entry. This does not disprove the arithmetic proposal; it disproves the claim that the finite beginning forces that proposal uniquely.

</details>

<a id="section-485-as-02-e09-solution"></a>
### AS-02-E09 — solution {#section-487-as-02-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

The recurrence gives $2,6,18,54,162$. Direct addition is $2+6+18+54+162=242$ objects. With $T=2+6+18+54+162$, the list for $3T$ is $6+18+54+162+486$. Subtracting gives $3T-T=486-2=484$, so $2T=484$ and $T=242$. Equivalently, the finite geometric formula gives $2(3^5-1)/(3-1)=242$.

With multiplier 1, every entry is 2 and the first-five total is $5(2)=10$. We do not use the quotient formula with denominator $1-1$. With multiplier 0, the recurrence gives $2,0,0,0,0,\\ldots$, so every nonempty initial total is 2. No division by a zero term and no value for $0^0$ is needed. In every version, the fifth entry and the total are different quantities: one is the fifth batch size, and the other combines five disjoint batches.

</details>

<!-- EULER-AS-02-SOLUTIONS-END -->



<a id="section-502-a-further-practice-problem"></a>
`;export{e as default};
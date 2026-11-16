
# Counting

## Count the experiment that was specified

A probability by counting has two jobs: count the favourable elementary outcomes and count all elementary outcomes, using the same representation in both places. A correct numerator divided by an incompatible denominator does not give a probability. Most counting mistakes arise before arithmetic begins, when order, replacement or distinguishability is decided incorrectly.

For example, drawing two numbered cards and recording their order produces ordered pairs. Recording only the selected set produces unordered subsets. Both representations can be valid for a uniform draw without replacement, but each needs its matching count. Recording just the colours may produce categories of unequal probability, making a simple ratio of category counts invalid.

This chapter builds on [sample spaces and events](sample-spaces-events.md). We derive the multiplication principle, permutations, combinations and several useful counting identities. The resulting methods support conditional probability and named discrete distributions later. All objects counted are finite. Probability calculations explicitly state why the counted outcomes are equally likely.

## Addition and multiplication principles

**Proposition 3.1 (Addition principle).** If a collection is partitioned into disjoint classes of sizes $n_1,\ldots,n_r$, its size is $n_1+\cdots+n_r$.

*Proof.* Each object belongs to exactly one class, so listing the classes counts every object once. Disjointness prevents duplicates and their union prevents omissions. ∎

**Proposition 3.2 (Multiplication principle).** Suppose an object is constructed through $r$ stages, with exactly $n_i$ choices at stage $i$ for every legal partial construction from earlier stages. Then the number of complete objects is $n_1\cdots n_r$.

*Proof.* For two stages, each of the $n_1$ first choices has $n_2$ distinct completions, giving $n_1n_2$. Repeating this reasoning inductively proves the general product. The construction must identify each final object once; otherwise it counts construction histories instead. ∎

The number of choices may depend on the stage but must be the stated number for every partial history at that stage. If one branch has two continuations and another five, their total is found by addition rather than pretending each branch has the same number.

Counting stages does not require probabilistic independence. Independence concerns a probability law, while the multiplication principle concerns a combinatorial construction. A draw without replacement has a product count even though its outcomes at successive draws are dependent.

**Example 3.3 (Codes with and without repeated symbols).** A four-position code uses decimal digits, including zero in the first position. If repetition is permitted, each position has ten choices, giving $10^4=10000$ codes. If all digits must differ, successive counts are $10,9,8,7$, giving $5040$ codes.

If the first experiment selects each digit independently and uniformly, every one of the $10000$ codes has probability $10^{-4}$. The event of no repeated digit therefore has probability $5040/10000=63/125$. In contrast, a procedure that forbids reuse from the outset assigns probability one to that event. The count is part of the model, not a substitute for specifying the selection rule.

## Ordered selections and permutations

**Definition 3.4 (Factorial and ordered selections).** For an integer $n\ge1$, define $n!=n(n-1)\cdots1$, with $0!=1$. The number of ordered selections of $k$ distinct objects from $n$ distinguishable objects is
$$
(n)_k=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!},
\qquad 0\le k\le n.
$$

The formula follows from the multiplication principle: each selected object removes one available choice. For $k=0$, there is one empty selection, consistent with the empty product. A permutation is an ordering of all $n$ objects, so there are $n!$ permutations.

If some symbols are indistinguishable, treating their individual labels as distinct overcounts the visible arrangements. Suppose $n$ positions contain $n_1$ copies of one symbol, $n_2$ of another, and so on, with total $n$. Label every copy temporarily. There are $n!$ labelled orders, but each visible arrangement corresponds to $n_1!\cdots n_r!$ relabellings within the identical groups. Thus the number of visible arrangements is
$$
\frac{n!}{n_1!\cdots n_r!}.
$$

This division is justified because every visible arrangement has the same number of labelled versions. Dividing by an informal “symmetry factor” without checking constant multiplicity can give a wrong answer.

## Unordered subsets and binomial coefficients

**Definition 3.5 (Binomial coefficient).** For integers $0\le k\le n$,
$$
\binom nk=\frac{n!}{k!(n-k)!}.
$$
It counts $k$-element subsets of an $n$-element set. We set $\binom nk=0$ for integer $k<0$ or $k>n$.

*Proof of the interpretation.* There are $(n)_k$ ordered distinct selections. Each $k$-element subset has exactly $k!$ orders. Dividing gives $(n)_k/k!=\binom nk$. The empty subset is unique, agreeing with $\binom n0=1$. ∎

Selecting a committee of three people from eight has $\binom83=56$ possibilities if no roles are assigned. Selecting a chair, secretary and treasurer has $(8)_3=336$ possibilities, since the roles distinguish order. If a procedure first draws an unordered committee uniformly and then assigns the three roles uniformly, each complete role assignment has probability $1/(56\cdot6)=1/336$.

For uniformly sampling without replacement, ordered samples are equally likely because each history has probability $1/(n)_k$. Every unordered subset has $k!$ such histories, so subsets are equally likely as well. This supplies the probability justification for either counting representation.

**Example 3.6 (A colour composition without replacement).** A box contains twelve red and eight blue individually distinguishable counters. Select three uniformly without replacement. Find the probability of exactly two red counters.

Using unordered subsets, the denominator is $\binom{20}{3}=1140$. Choose two of the twelve red counters and one of the eight blue counters, giving $\binom{12}{2}\binom81=66\cdot8=528$ favourable subsets. Therefore
$$
P(\text{exactly two red})=\frac{528}{1140}=\frac{44}{95}.
$$

An ordered calculation agrees. There are three possible positions for the blue draw. Each colour pattern with two reds and one blue has probability $(12\cdot11\cdot8)/(20\cdot19\cdot18)$, so multiplying by three gives $44/95$. The three colour histories have equal probabilities here because they contain the same composition; the entire list of all colour histories is not uniform.

## Counting identities as double descriptions

**Proposition 3.7 (Symmetry and Pascal's identity).** For $0\le k\le n$,
$$
\binom nk=\binom n{n-k}.
$$
For $1\le k\le n$,
$$
\binom nk=\binom{n-1}{k-1}+\binom{n-1}k.
$$

*Proof.* Taking a subset's complement gives a bijection between $k$-subsets and $(n-k)$-subsets, proving symmetry. For the second identity, mark one distinguished object. A $k$-subset either contains it, in which case its other $k-1$ members come from the remaining $n-1$ objects, or omits it, in which case all $k$ members come from those objects. The classes are disjoint and exhaustive. ∎

Summing $\binom nk$ over $k=0,\ldots,n$ counts all subsets. Each object can independently be included or omitted as a combinatorial choice, giving $2^n$ subsets. Hence $\sum_{k=0}^n\binom nk=2^n$. No probability assumption is required for this count.

A related identity helps check the counter example. Partition an $N$-object population into groups of sizes $r$ and $b$. Classifying a $k$-subset by the number $j$ drawn from the first group gives
$$
\sum_j\binom rj\binom b{k-j}=\binom{r+b}k,
$$
where out-of-range binomial coefficients vanish. It shows that probabilities of all possible colour compositions sum to one.

## Complements, collisions and overcounting

**Example 3.8 (At least one matching label).** Four people independently receive one of seven labels, each uniformly. There are $7^4=2401$ equally likely ordered assignments. The assignments with no repeated label number $7\cdot6\cdot5\cdot4=840$. Thus
$$
P(\text{at least one repeated label})
=1-\frac{840}{2401}=\frac{1561}{2401}.
$$

Counting pairs that match and simply adding their probabilities would overcount assignments with several matching pairs. The complement handles every collision pattern at once. The model's independent uniform labels are explicit; a real birthday calculation would need its own assumptions about the distribution of dates and dependence between people.

Overcounting is not always an error if a bound is intended. For events $A_1,\ldots,A_m$, adding their probabilities gives an upper bound for the union even when overlaps occur. To claim equality, however, the overlaps must vanish or be corrected. A counting solution should identify whether it gives an exact number, an upper bound or a lower bound.

For repeated symbols, the distinction between a visible outcome and a labelled history is equally important. The word BANANA has six letters with three A's and two N's, so it has $6!/(3!2!)=60$ distinct visible arrangements. A shuffle of six individually labelled letters may be uniform over $720$ histories, yet its visible arrangements are uniform only because every visible arrangement receives the same twelve histories.

## Choosing a representation

Use ordered sequences when time, roles or positions are part of the outcome. Use subsets when the selection mechanism treats sets uniformly and order is irrelevant to the event. Use count vectors when only category totals matter, but derive their weights rather than assigning them equal probabilities.

Write the denominator before simplifying the numerator. If it describes ordered samples, favourable outcomes must also be ordered. If it describes all subsets, count favourable subsets. When a probability can be derived two ways, comparing the methods is a strong mathematical check because it exposes hidden multiplicity factors.

The next chapters will use these principles inside conditional models and repeated trials. Counting provides the number of possible records; probability specifies how much weight those records carry. Neither task should be silently replaced by the other.

## Exercises

### Exercise 3.1
<a id="counting-ex-1"></a>

A menu offers four mains and three desserts. One main and one dessert are chosen. Count complete meals, then explain how the count changes if one particular main has no dessert option.

<details><summary>Hint 1</summary>

Use the multiplication principle only when each first choice has the same number of completions.

</details>
<details><summary>Hint 2</summary>

In the modified menu, sum the completions for the four mains separately.

</details>
<details><summary>Solution</summary>

With all choices available there are $4\cdot3=12$ meals. If one main permits no dessert and a complete meal still requires both courses, that main contributes zero completions while the other three contribute three each. There are $9$ meals. A branch-dependent construction must use the actual number of continuations, not the original product indiscriminately.

</details>

### Exercise 3.2
<a id="counting-ex-2"></a>

Count three-letter strings from a five-letter alphabet with repetition allowed, and with all letters distinct. Under independent uniform letter selection, find the probability that all are distinct.

<details><summary>Hint 1</summary>

The unrestricted denominator is $5^3$.

</details>
<details><summary>Hint 2</summary>

Without repeated letters the available choices decrease at successive positions.

</details>
<details><summary>Solution</summary>

There are $125$ unrestricted strings and $5\cdot4\cdot3=60$ distinct-letter strings. Independent uniform selection makes the unrestricted strings equally likely, giving probability $60/125=12/25$. If selection itself prohibited reuse, the event would instead have probability one; the ratio answers the stated unrestricted experiment.

</details>

### Exercise 3.3
<a id="counting-ex-3"></a>

Seven candidates are available. Compare the number of three-person committees with the number of assignments to three distinct offices.

<details><summary>Hint 1</summary>

A committee does not distinguish roles.

</details>
<details><summary>Hint 2</summary>

Every committee has six assignments of its members to three offices.

</details>
<details><summary>Solution</summary>

There are $\binom73=35$ committees and $(7)_3=7\cdot6\cdot5=210$ office assignments. Their ratio is $3!=6$, because permuting three chosen people changes their roles but not the underlying committee. The choice between the two formulas comes from the experiment's output, not from which arithmetic expression looks simpler.

</details>

### Exercise 3.4
<a id="counting-ex-4"></a>

How many distinct arrangements does the word LEVEL have? Explain the division factor.

<details><summary>Hint 1</summary>

There are five positions, with two L's, two E's and one V.

</details>
<details><summary>Hint 2</summary>

Temporarily label equal letters to count how many labelled permutations give the same visible word.

</details>
<details><summary>Solution</summary>

The count is $5!/(2!2!)=30$. Each visible arrangement corresponds to two ways to label the L's and two ways to label the E's, for four labelled permutations. Every visible arrangement has that same multiplicity, justifying the division. Treating all five letters as distinguishable would overcount.

</details>

### Exercise 3.5
<a id="counting-ex-5"></a>

A box has six red and four blue counters. Two are selected uniformly without replacement. Find the probability of one counter of each colour using unordered subsets.

<details><summary>Hint 1</summary>

Choose the favourable red and blue counters separately.

</details>
<details><summary>Hint 2</summary>

The denominator counts all two-element subsets of ten distinguishable counters.

</details>
<details><summary>Solution</summary>

There are $\binom{10}{2}=45$ equally likely subsets. Favourable subsets number $\binom61\binom41=24$, so the probability is $24/45=8/15$. The denominator and numerator both count unordered subsets. An ordered approach would count twice as many favourable histories and twice as many total histories, giving the same ratio.

</details>

### Exercise 3.6
<a id="counting-ex-6"></a>

Under the same experiment, find the probability that the two counters have the same colour and check that the answers partition all outcomes.

<details><summary>Hint 1</summary>

The same-colour cases are two reds or two blues.

</details>
<details><summary>Hint 2</summary>

Those cases are disjoint, and their counts are $\binom62$ and $\binom42$.

</details>
<details><summary>Solution</summary>

The favourable count is $15+6=21$, giving probability $21/45=7/15$. This plus the mixed-colour probability $8/15$ is one. At the counting level, $15+24+6=45$ partitions all two-counter subsets by their red count. The consistency check would fail if ordered and unordered counts had been mixed.

</details>

### Exercise 3.7
<a id="counting-ex-7"></a>

Prove $\binom n1+\binom n2+\cdots+\binom nn=2^n-1$ for integers $n\ge1$ without expanding factorials.

<details><summary>Hint 1</summary>

Count all subsets by their sizes.

</details>
<details><summary>Hint 2</summary>

The omitted size-zero class contains exactly one subset.

</details>
<details><summary>Solution</summary>

Each of the $n$ objects has two inclusion choices, giving $2^n$ subsets. The sum in the question counts every nonempty subset once according to its size. The only omitted subset is the empty set, so the count is $2^n-1$. This argument also identifies why the subtraction is one rather than zero or $n$.

</details>

### Exercise 3.8
<a id="counting-ex-8"></a>

Three independent uniform labels are selected from five possibilities. Calculate the probability of at least one repetition.

<details><summary>Hint 1</summary>

Count assignments with no repeated label first.

</details>
<details><summary>Hint 2</summary>

There are $5^3$ total ordered assignments and $5\cdot4\cdot3$ collision-free ones.

</details>
<details><summary>Solution</summary>

The probability is $1-60/125=65/125=13/25$. Counting each matching pair separately and adding would overcount the assignments in which all three labels agree. The complement avoids that overlap. Both uniformity and independence are needed to make every ordered label assignment equally likely.

</details>

### Exercise 3.9
<a id="counting-ex-9"></a>

Explain the error in dividing $\binom{10}{3}$ favourable unordered selections by $(20)_3$ total ordered selections. How can the representation be repaired?

<details><summary>Hint 1</summary>

A three-element subset represents several different ordered records.

</details>
<details><summary>Hint 2</summary>

Every subset of three distinct objects has $3!$ orders.

</details>
<details><summary>Solution</summary>

The numerator counts subsets while the denominator counts histories, so their units differ. If the favourable event is selecting all three objects from a distinguished ten-object group, use $\binom{10}{3}/\binom{20}{3}$. Alternatively use $(10)_3/(20)_3$. Multiplying the original numerator by $3!$ repairs the ordered representation. The two corrected ratios agree because every relevant subset has the same six orders.

</details>

### Exercise 3.10
<a id="counting-ex-10"></a>

Partition twelve objects into groups of five and seven. Prove by counting that $\sum_j\binom5j\binom7{4-j}=\binom{12}{4}$, specifying the possible values of $j$.

<details><summary>Hint 1</summary>

Classify a four-element subset by the number of its members from the first group.

</details>
<details><summary>Hint 2</summary>

Each subset belongs to one and only one of those composition classes.

</details>
<details><summary>Solution</summary>

The possible values are $j=0,1,2,3,4$. For a fixed value, choose $j$ of the five first-group objects and $4-j$ of the seven others, giving the product. These classes are disjoint and cover every four-element subset of the twelve objects, proving the identity. Extending the sum to all integers is harmless under the convention that out-of-range binomial coefficients are zero.

</details>

## Sources

The explanations, examples and exercises are newly written. A complementary primary account is Grinstead and Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), Chapter 3, official CHANCE Project text, consulted 13 November 2026. Elementary binomial notation also connects with [sequences and the binomial theorem](../algebra-and-functions/sequences-series-binomial-theorem.md).

## Summary

Count ordered records with multiplication and falling factorials, and unordered selections with binomial coefficients. Repeated identical symbols require a justified constant-multiplicity division. Addition, complements and composition classes prevent omissions and overlap.

A probability ratio must use compatible favourable and total counts and an explicit equal-likelihood model. These distinctions carry into [conditional probability and Bayes](conditional-probability-bayes.md), where new information changes which outcomes form the denominator.

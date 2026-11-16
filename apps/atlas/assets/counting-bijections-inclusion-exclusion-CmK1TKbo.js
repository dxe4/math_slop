var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: counting-bijections-inclusion-exclusion
title: "Counting by Bijection, Decomposition, and Inclusion–Exclusion"
level: secondary
estimated_minutes: 130
license: CC BY-SA 4.0
---

# Counting by Bijection, Decomposition, and Inclusion–Exclusion

“How many?” is not answered safely by reaching for a formula. First decide what the objects are. Does order matter? May an item repeat? Are labels meaningful? Do rotations count as different? A correct count begins with an exact model and a reason each object is counted once.

This chapter assumes finite sets, functions, and basic proof language. Its main idea is that counting is the construction of a correspondence or decomposition.

## 1. Sum and product rules are statements about unique descriptions

If a finite set is partitioned into disjoint parts $A_{1},\\ldots,A_{k}$, then

$$|A_{1}\\cup \\ldots\\cup A_{k}|=|A_{1}|+\\ldots+|A_{k}|$$

This is the **sum rule**. Disjointness is essential: an object in two cases would be counted twice.

If every object is described uniquely by choosing one element of $A$ and one element of $B$, then the object set is in bijection with $A\\times B$, so it has $|A||B|$ members. This is the **product rule**.

### Worked example: codes under constraints

How many four-character codes begin with a letter from $\\{A,B,C\\}$, followed by three decimal digits, with repetition allowed?

There are $3$ choices for the first position and $10$ choices for each digit. Every sequence of choices produces one code and every code has one such sequence, so there are

$$3\\cdot 10\\cdot 10\\cdot 10=3000$$

If the digits must be distinct, the counts become $10$, then $9$, then $8$, giving $3\\cdot 10\\cdot 9\\cdot 8=2160$. The phrase “without repetition” changes later branch counts.

### A dangerous nonexample

To count integers from $1$ through $100$ divisible by $2$ or $3$, adding $50+33$ is wrong because multiples of $6$ appear in both cases. The sum rule applies to disjoint cases, not merely named cases.

## 2. Bijections transport counts

A **bijection** between finite sets $A$ and $B$ pairs every element of $A$ with exactly one element of $B$ and vice versa. Therefore $|A|=|B|$.

This is more than a formal theorem. A difficult family may have an easy code.

### Subsets and binary strings

Fix an ordering $a_{1},\\ldots,a_{n}$ of an $n$-element set. Send a subset $S$ to the binary string whose $i$th bit is $1$ exactly when $a_{i}\\in S$. The inverse map reads a string and selects positions containing $1$. These maps undo each other, so the number of subsets equals the number of length-$n$ binary strings, namely $2^{n}$.

### Lattice paths and words

A monotone path from $(0,0)$ to $(r,s)$ using only east and north steps has $r+s$ steps, exactly $r$ of them east. Encode the path by a word with $r$ letters $E$ and $s$ letters $N$. Choosing which $r$ positions contain $E$ determines the path, so the number is $\\binom{r+s}{r}$.

The proof explains why a binomial coefficient appears. Merely recognizing a familiar formula would not establish that paths are neither omitted nor duplicated.

## 3. Permutations, selections, and binomial coefficients

An ordered arrangement of $n$ distinct objects is a **permutation**. There are

$$n! = n(n-1)\\ldots 2\\cdot 1$$

permutations, because the first position has $n$ choices, the next $n-1$, and so on.

An ordered selection of $k$ distinct objects from $n$ has

$$n(n-1)\\ldots(n-k+1)=n!/(n-k)!$$

possibilities.

An unordered $k$-element subset has

$$\\binom{n}{k}=n!/[k!(n-k)!]$$

Why divide by $k!$? Every chosen $k$-set has exactly $k!$ orderings, so the ordered selections fall into equal blocks of size $k!$. The equal-block argument is the hypothesis behind the division.

### Worked committee example

From $8$ people choose a three-person committee and then choose a chair from that committee. Method 1: choose the committee, then the chair, giving $\\binom{8}{3}\\cdot 3=56\\cdot 3=168$. Method 2: choose the chair first ($8$ ways), then two other members from the remaining seven ($\\binom{7}{2}=21$), giving $8\\cdot 21=168$.

Equating the two counts proves the identity

$$k \\binom{n}{k}=n \\binom{n-1}{k-1}$$

in general: both sides count a $k$-subset with one distinguished member.

## 4. Pascal’s identity by a distinguished element

**Theorem 1.1.** For $1\\le k\\le n$,

$$\\binom{n}{k}=\\binom{n-1}{k}+\\binom{n-1}{k-1}$$

**Combinatorial proof.** Fix a distinguished element $x$ in an $n$-element set. Partition the $k$-subsets into those that omit $x$ and those that contain it. Omitting $x$ means choosing all $k$ members from the other $n-1$, giving $\\binom{n-1}{k}$. Containing $x$ means choosing the remaining $k-1$ members from the other $n-1$, giving $\\binom{n-1}{k-1}$. The cases are disjoint and exhaustive, so their counts add. ∎

This proof exposes a reusable strategy: distinguish one component, then split according to whether an object uses it.

## 5. The binomial theorem counts expansion choices

**Theorem 1.2.** For an integer $n\\ge 0$,

$$(x+y)^{n}=\\sum_{k=0}^{n} \\binom{n}{k}x^{k} y^{n-k}$$

**Proof.** View the left side as a product of $n$ copies of $(x+y)$. A term in the expanded product results from choosing either $x$ or $y$ from each factor. To produce $x^{k} y^{n-k}$, choose exactly $k$ factors from which to take $x$. There are $\\binom{n}{k}$ such choices. Grouping identical monomials gives the formula. ∎

Setting $x=y=1$ yields $\\sum_{k} \\binom{n}{k}=2^{n}$, another expression of the subset count grouped by subset size.

## 6. Pigeonhole reasoning forces collision

**Pigeonhole principle.** If more than $m$ objects are assigned to $m$ boxes, at least one box receives at least two objects.

For integers $N\\ge 0$ and $m\\ge 1$, the generalized form says that placing $N$ objects into $m$ boxes forces some box to contain at least $\\lceil N/m\\rceil$ objects.

**Proof.** If every box held at most $\\lceil N/m\\rceil-1$, the total would be at most $m(\\lceil N/m\\rceil-1)<N$, a contradiction. ∎

### Worked residue example

Among any $11$ integers, two have the same residue modulo $10$. The boxes are the ten residue classes. Equal residues mean their difference is divisible by $10$.

The hard part is often choosing boxes. If the desired conclusion is “two numbers differ by a multiple of $10$,” residues are the right classification. If the desired conclusion concerns distance, interval boxes may be better.

### A bound with consecutive integers

Choose $n+1$ distinct integers from $\\{1,2,\\ldots,2n\\}$. Then two chosen integers are consecutive or, more precisely, some two fall in one of the $n$ boxes $\\{1,2\\},\\{3,4\\},\\ldots,\\{2n-1,2n\\}$. Sharing a box forces a difference of $1$. The conclusion depends on that particular pairing; residue classes modulo $n$ would force a different relation.

## 7. Inclusion–exclusion repairs overlap

For two finite sets,

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

Adding $|A|+|B|$ counts intersection members twice, so subtracting the intersection once restores one count.

For three sets,

$$|A\\cup B\\cup C|=|A|+|B|+|C|$$

$$- |A\\cap B|-|A\\cap C|-|B\\cap C| + |A\\cap B\\cap C|$$

An element in all three is added three times, subtracted three times, then added once, for a net count of one.

### Worked divisibility count

How many integers from $1$ to $100$ are divisible by $2$ or $3$?

Let $A$ be multiples of $2$, so $|A|=\\lfloor 100/2\\rfloor=50$. Let $B$ be multiples of $3$, so $|B|=33$. Their intersection consists of multiples of $\\operatorname{lcm}(2,3)=6$, so $|A\\cap B|=16$. Hence

$$|A\\cup B|=50+33-16=67$$

The floor functions handle the endpoint; replacing them by decimal division would silently count a partial multiple.

## 8. Onto functions by inclusion–exclusion

Count surjections from an $n$-element domain onto a $k$-element codomain. There are $k^{n}$ functions in total. For each codomain value $j$, let $A_{j}$ be the functions that miss $j$. Inclusion–exclusion gives

$$\\sum_{i=0}^{k} (-1)^{i} \\binom{k}{i}(k-i)^{n}$$

Indeed, after choosing $i$ outputs to forbid, every input has $k-i$ allowed images. When $n<k$, the sum is zero, consistent with the pigeonhole obstruction to surjectivity.

### Small instance

For functions from a three-element set onto a two-element set, the count is

$$2^{3}-\\binom{2}{1}1^{3}=8-2=6$$

The two excluded functions are the constants. Listing confirms the result, but inclusion–exclusion explains the general pattern.

## 9. Double counting proves identities and inequalities

To **double count**, define one finite set of structured objects and count it in two ways.

**Lemma 1.4 (Handshake).** For a finite loopless undirected graph,

$$\\sum_{v\\in V} \\operatorname{deg}(v)=2|E|$$

**Proof.** Count incidence pairs $(v,e)$ where vertex $v$ is an endpoint of edge $e$. Grouping by vertices gives the degree sum. Because the graph is loopless, every edge has two distinct endpoints, so grouping by edges gives exactly two incidences per edge. ∎

**Corollary 1.3.** Every finite loopless undirected graph has an even number of odd-degree vertices.

The degree sum is even. A sum of integers has odd parity exactly when an odd number of its terms are odd, so the number of odd-degree terms must be even.

### Counting flags

Let a family of $b$ blocks each contain $k$ points, and suppose each of $v$ points lies in exactly $r$ blocks. Count pairs $(point,block)$ with the point inside the block. By blocks there are $bk$; by points there are $vr$. Therefore $bk=vr$. This necessary condition can disprove the existence of a proposed incidence design, though satisfying it does not guarantee a design exists.

## 10. Multisets and repeated objects

When objects of one type repeat, ordinary permutations overcount indistinguishable swaps. A word containing $n_{1}$ copies of symbol $1$, ..., $n_{r}$ copies of symbol $r$, with total $n$, has

$$n!/(n_{1}!\\ldots n_{r}!)$$

distinct arrangements.

**Reason.** Temporarily label all copies. There are $n!$ arrangements. Removing labels groups them into blocks of size $n_{1}!\\ldots n_{r}!$, because copies of each symbol can permute without changing the visible word.

For $MISSISSIPPI$, the multiplicities are $I:4$, $S:4$, $P:2$, $M:1$, so the number is $11!/(4!4!2!)$.

Selections with repetition use **stars and bars**. The number of nonnegative integer solutions to

$$x_{1}+\\ldots+x_{k}=n$$

is $\\binom{n+k-1}{k-1}$: arrange $n$ stars and $k-1$ dividers. The count changes if variables must be positive; set $y_{i}=x_{i}-1$ and count solutions totaling $n-k$, requiring $n\\ge k$.

## 11. Symmetry is not “divide by the group size” by default

Suppose necklaces are considered the same under rotation. Dividing labeled colorings by the number of rotations works only if every orbit has that size. Constant colorings have more symmetry and smaller orbits, so naive division can fail.

The safe approach is to define the equivalence relation, inspect orbit sizes, and use an orbit-counting theorem when stabilizers vary. The existing **Group Actions: Turning Symmetry into Counting** deep dive develops Burnside’s lemma. Here the lesson is methodological: equal-block division requires equal block sizes, and symmetry can destroy equality.

## 12. Choosing a counting method

Use this decision sequence:

1. **Specify objects and equality.** What makes two constructions the same?
2. **Seek a unique code.** Can an object be represented by choices, a word, a subset, or a path?
3. **Partition on a feature.** Are the cases disjoint and exhaustive?
4. **Correct overlap.** If cases intersect, use inclusion–exclusion or redesign them.
5. **Count incidences twice.** Can rows and columns expose the same set of pairs?
6. **Use recurrence when the first decision leaves a smaller object.** This leads into Chapter 4.
7. **Audit symmetry.** Do equivalence classes really have equal size?

## Worked example: paths through a required point

Consider monotone lattice paths from $(0,0)$ to $(4,3)$ that pass through $(2,1)$. Such a path has a unique first part from $(0,0)$ to $(2,1)$ and a unique second part from $(2,1)$ to $(4,3)$. The first part has two east steps and one north step, so choosing the north step's position gives $\\binom31=3$ possibilities. The second has two east and two north steps, giving $\\binom42=6$. Concatenating any allowed first part with any allowed second part gives one path through the required point, and the decomposition is unique. The answer is $3\\cdot6=18$.

The same calculation would not count paths that pass through either of two required points by simply adding the two answers: some paths may visit both. One must subtract the overlap or split the paths into disjoint cases. The product rule describes a pair of independent choices here, but its real justification is the bijection between those pairs and complete paths through the specified point.

## Worked example: bounded integer choices

How many nonnegative integer solutions satisfy $x+y+z=8$ and $x\\le4$? Without the bound there are $\\binom{10}{2}=45$ solutions by stars and bars. The bad solutions have $x\\ge5$. Subtract five from $x$ and write $x'=x-5$. This is a reversible map from bad solutions to nonnegative solutions of $x'+y+z=3$, of which there are $\\binom52=10$. Thus $45-10=35$ solutions obey the bound.

The shift is not merely a trick for obtaining a number. Its inverse adds five back to $x'$, so it neither omits a bad solution nor counts one twice. If two variables had upper bounds, subtracting each bad family separately would remove a solution violating both bounds twice. Inclusion–exclusion restores that overlap. At a boundary where the reduced total is negative, there are no nonnegative solutions; one should record zero rather than apply a binomial formula outside its stated range.

## Why the general inclusion–exclusion formula works

For finite sets $A_1,\\ldots,A_m$, the number in their union is the sum of the sizes of the individual sets, minus the sum of all pair intersections, plus the sum of all triple intersections, and so on, alternating through the $m$-fold intersection. To prove the rule, fix an object belonging to exactly $t$ of the sets. Its contribution to the right side is

$$\\binom t1-\\binom t2+\\binom t3-\\cdots+(-1)^{t+1}\\binom tt=1.$$

Indeed, the binomial theorem applied to $(1-1)^t$ gives $\\sum_{j=0}^t(-1)^j\\binom tj=0$ for $t\\ge1$. The omitted $j=0$ term is one. An object in none of the sets contributes zero to both sides. Since every object in the finite union contributes exactly one, summing these contributions proves the formula. This proof identifies exactly why the signs alternate and avoids relying on a diagram with only three sets.

### Worked example: three divisibility conditions

Count integers from $1$ to $60$ divisible by at least one of $2,3,5$. The individual counts are $30,20,12$. Pairwise intersections are multiples of $6,10,15$, with counts $10,6,4$. The triple intersection consists of multiples of $30$, of which there are two. Inclusion–exclusion gives $30+20+12-10-6-4+2=44$. Therefore $16$ integers in the stated range are divisible by none of the three. The least common multiples in the intersections are essential: multiplying the divisors blindly would be wrong if they shared factors.

A good counting proof ends with an audit. Define the class before computing. Explain why each description produces a valid object and why every object has exactly one description, or explicitly account for the multiplicity. Check the smallest permitted case, including an empty set when relevant. These are proof obligations, not merely calculation checks: a numerical answer can agree accidentally even when the described mapping fails to be a bijection.

## 13. Common errors

- Counting descriptions instead of objects without checking uniqueness.
- Using the product rule when later choices depend on earlier choices but retaining constant branch counts.
- Forgetting that “or” cases overlap.
- Treating $\\binom{n}{k}$ as ordered or $n!/(n-k)!$ as unordered.
- Dividing by a symmetry count without constant orbit size.
- Applying stars and bars when upper bounds constrain variables; ordinary bars enforce only nonnegativity.
- Omitting empty structures such as the length-zero string, which often serve as correct recurrence bases.

## 14. Exercises with worked solutions

<a id="DM-CH03-E001"></a>
### DM-CH03-E001 — a bijective identity

Prove $\\binom{n}{k}=\\binom{n}{n-k}$ without factorial algebra.

<details><summary>Hint 1</summary>Consider the elements not selected.</details>
<details><summary>Hint 2</summary>What happens when you take the complement twice?</details>
<details><summary>Solution</summary>

#### DM-CH03-E001 — Solution

Map each $k$-subset $S$ of an $n$-element ground set to its complement. The complement has $n-k$ elements. Complementing twice returns $S$, so the map is a bijection between $k$-subsets and $(n-k)$-subsets. Therefore the counts agree.


</details>

<a id="DM-CH03-E002"></a>
### DM-CH03-E002 — bounded inclusion–exclusion

How many integers from $1$ through $200$ are divisible by $4$ or $6$ but not both?

<details><summary>Hint 1</summary>Count multiples of each divisor and their intersection.</details>
<details><summary>Hint 2</summary>Exactly one condition removes the overlap from both counts.</details>
<details><summary>Solution</summary>

#### DM-CH03-E002 — Solution

There are $\\lfloor 200/4\\rfloor=50$ multiples of $4$ and $\\lfloor 200/6\\rfloor=33$ multiples of $6$. Multiples of both are multiples of $\\operatorname{lcm}(4,6)=12$, of which there are $16$. “One or the other but not both” counts the symmetric difference, so subtract the intersection twice: $50+33-2\\cdot 16=51$.


</details>

<a id="DM-CH03-E003"></a>
### DM-CH03-E003 — a forced repetition

Show that among any six people, two have the same number of acquaintances within the group, assuming acquaintance is mutual and nobody knows themself.

<details><summary>Hint 1</summary>List possible acquaintance counts from zero to five.</details>
<details><summary>Hint 2</summary>Why can zero and five not both occur?</details>
<details><summary>Solution</summary>

#### DM-CH03-E003 — Solution

Each degree lies in $\\{0,1,2,3,4,5\\}$. However degree $0$ and degree $5$ cannot both occur: if someone knows nobody, a degree-5 person would know that person, a contradiction. Thus at most five degree values occur among six people. By pigeonhole, two people share a degree.


</details>

<a id="DM-CH03-E004"></a>
### DM-CH03-E004 — a three-set audit

In a class of $60$, $35$ study algebra, $30$ study geometry, $28$ study discrete mathematics, pairwise intersections have sizes $18$, $15$, and $14$, and $8$ study all three. How many study at least one?

<details><summary>Hint 1</summary>Use the three-set inclusion–exclusion formula.</details>
<details><summary>Hint 2</summary>The triple intersection needs to be restored once.</details>
<details><summary>Solution</summary>

#### DM-CH03-E004 — Solution

Inclusion–exclusion gives

$$35+30+28-18-15-14+8=54$$

The triple intersection was included three times in the singles, removed three times in the pair intersections, and must be restored once. Therefore six students study none.


</details>

<a id="DM-CH03-E005"></a>
### DM-CH03-E005 — paths through a point

Count monotone paths from $(0,0)$ to $(3,3)$ passing through $(1,1)$.

<details><summary>Hint 1</summary>Split the path at the required point.</details>
<details><summary>Hint 2</summary>Count words with one east and one north step, then words with two of each.</details>
<details><summary>Solution</summary>The first part has $\\binom21=2$ choices and the second has $\\binom42=6$. Each pair concatenates uniquely to a valid path, so the answer is $12$.</details>

<a id="DM-CH03-E006"></a>
### DM-CH03-E006 — bounded choices

Count nonnegative solutions of $x+y+z=5$ with $x\\le2$.

<details><summary>Hint 1</summary>Count all solutions and remove those with $x\\ge3$.</details>
<details><summary>Hint 2</summary>Set $x'=x-3$ for the excluded solutions.</details>
<details><summary>Solution</summary>There are $\\binom72=21$ unrestricted solutions. The excluded solutions correspond bijectively to nonnegative solutions of $x'+y+z=2$, of which there are $\\binom42=6$. The answer is $15$.</details>

<a id="DM-CH03-E007"></a>
### DM-CH03-E007 — a sum of subsets

Prove $\\sum_{k=0}^n\\binom nk=2^n$ by counting subsets.

<details><summary>Hint 1</summary>Partition all subsets by size.</details>
<details><summary>Hint 2</summary>Count the same subsets by independent inclusion choices.</details>
<details><summary>Solution</summary>The $k$-element subsets form disjoint classes of sizes $\\binom nk$, so the sum counts every subset once. Independently including or excluding each of the $n$ elements gives $2^n$ subsets. The two counts agree, including at $n=0$.</details>

<a id="DM-CH03-E008"></a>
### DM-CH03-E008 — exactly one condition

How many integers from $1$ through $30$ are divisible by exactly one of $2$ and $5$?

<details><summary>Hint 1</summary>Count both sets and their intersection.</details>
<details><summary>Hint 2</summary>Remove intersection members from each set separately.</details>
<details><summary>Solution</summary>There are $15$ multiples of $2$, $6$ multiples of $5$, and $3$ multiples of both. Exactly one condition holds for $15+6-2\\cdot3=15$ integers.</details>

<a id="DM-CH03-E009"></a>
### DM-CH03-E009 — pigeons in intervals

Show that among five numbers in the closed interval $[0,1]$, two differ by at most $1/4$.

<details><summary>Hint 1</summary>Divide the interval into four pieces of equal length.</details>
<details><summary>Hint 2</summary>Assign boundary points consistently so the pieces are disjoint.</details>
<details><summary>Solution</summary>Use $[0,1/4),[1/4,1/2),[1/2,3/4),[3/4,1]$. Five numbers assigned to four pieces force two into the same piece. Its length is $1/4$, so their distance is at most $1/4$.</details>

<a id="DM-CH03-E010"></a>
### DM-CH03-E010 — a degree obstruction

Can a finite loopless undirected graph have exactly three odd-degree vertices? Explain.

<details><summary>Hint 1</summary>Count incidences of vertices and edges.</details>
<details><summary>Hint 2</summary>What parity must the sum of degrees have?</details>
<details><summary>Solution</summary>No. Each edge contributes two incidences, so the degree sum is even. A sum containing exactly three odd terms and any number of even terms is odd, a contradiction. The conclusion uses the loopless undirected graph hypotheses from the handshake lemma.</details>

## Chapter summary

Counting is reliable when objects have unique descriptions or lie in disjoint cases. Bijections transport a count; binomial coefficients record subset choices; pigeonhole reasoning forces collisions; inclusion–exclusion repairs overlap; and double counting equates two views of one incidence set. Every formula in the chapter carries a structural hypothesis. State that hypothesis before calculating.
`;export{e as default};
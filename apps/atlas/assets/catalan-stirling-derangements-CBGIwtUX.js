var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: catalan-stirling-derangements
title: "Catalan Numbers, Stirling Numbers, and Derangements"
level: undergraduate
license: CC BY-SA 4.0
---

# Catalan Numbers, Stirling Numbers, and Derangements

Three counting questions can look quite different. How many balanced strings of brackets are correctly nested? How many ways can a labeled set be divided into unlabelled nonempty groups? How many permutations move every element away from its original position? Each question gives a named family of numbers, but learning the names is less useful than understanding the decompositions behind them.

Catalan numbers arise from a first-return decomposition. Stirling numbers of the second kind arise from deciding how a distinguished element joins a partition. Derangement numbers arise from excluding fixed points or shortening a permutation. In every case a recurrence expresses a reversible construction, and a closed formula needs its own counting argument. The methods reinforce the earlier chapters' sum rule, product rule, bijections and inclusion–exclusion.

Required preparation is [counting by bijection and inclusion–exclusion](counting-bijections-inclusion-exclusion.md), permutations and binomial coefficients, and [recurrences and formal generating functions](recurrences-generating-functions.md). Write $[n]=\\{1,\\ldots,n\\}$ for an integer $n\\geq1$, and $[0]=\\varnothing$. We use $0!=1$, and a sum over no indices is zero unless an empty object is explicitly being counted. All sets and counting arguments in this chapter are finite. Generating functions will encode those finite counts coefficient by coefficient.

## Catalan numbers: balance includes a prefix condition

**Definition 5.1 (Dyck path and Catalan number).** A Dyck path of semilength $n\\geq0$ is a path from $(0,0)$ to $(2n,0)$ using steps $U=(1,1)$ and $D=(1,-1)$, whose height is never negative. The Catalan number $C_n$ is the number of these paths. There is one path of semilength zero, the empty path, so $C_0=1$.

Every such path has $n$ up steps and $n$ down steps. Equal totals alone do not suffice: the word $DU$ has balanced totals but visits height $-1$, so it is not a Dyck path. In word language, the condition is that every prefix contains at least as many $U$ symbols as $D$ symbols, and the complete word contains equally many.

Replacing $U$ by an opening bracket and $D$ by a closing bracket gives a bijection with correctly nested bracket strings. The prefix condition says that a bracket cannot close before a matching bracket has opened. The equal totals say that none remains open at the end. The inverse replacement is immediate, so the correspondence preserves counts without additional factors. The size parameter is the number of bracket pairs, not the total number of symbols.

**Theorem 5.2 (Catalan recurrence).** For every integer $n\\geq1$,

$$C_n=\\sum_{i=0}^{n-1}C_iC_{n-1-i},\\qquad C_0=1.$$

*Proof.* A nonempty Dyck path begins with $U$. Since its final height is zero, it has a first return to height zero after this initial step. That return is a down step, and the segment up to it has the unique form $UPD$. Before the return the height stays at least $1$, so lowering the path $P$ by one unit produces a Dyck path. The remaining segment $Q$ begins and ends at height zero and never goes below it, so it too is a Dyck path.

If $P$ has semilength $i$, the outer $U,D$ pair uses one additional pair, leaving $Q$ with semilength $n-1-i$. Thus $0\\leq i\\leq n-1$. For fixed $i$, there are $C_iC_{n-1-i}$ ordered choices of $P,Q$.

Conversely, given Dyck paths $P,Q$ of these sizes, raise $P$ by one unit and form $UPDQ$. The part between the outer steps stays strictly above height zero, so the indicated $D$ is exactly the first return. The resulting path is a Dyck path of semilength $n$. The two constructions undo each other. Different first-return positions are disjoint cases, and every nonempty Dyck path has exactly one, so summing the product counts proves the recurrence. ∎

The empty path is not an optional convention here. For example, $i=0$ corresponds to a first return immediately after the initial up step; $Q$ can also be empty. Setting $C_0$ to zero would erase valid endpoint cases and break the decomposition.

**Example 5.3 (Computing and interpreting small Catalan numbers).** The recurrence gives $C_1=C_0C_0=1$ and $C_2=C_0C_1+C_1C_0=2$. Next,

$$C_3=C_0C_2+C_1C_1+C_2C_0=2+1+2=5.$$

The five bracket strings are \`((()))\`, \`(()())\`, \`(())()\`, \`()(())\` and \`()()()\`. They illustrate the three possible first-return positions. The first two return for the first time only at the end; the last two start with an immediate return; the remaining string has one pair inside its first-return component and one pair afterwards. For the next size,

$$C_4=C_0C_3+C_1C_2+C_2C_1+C_3C_0=5+2+2+5=14.$$

Writing all balanced words of length eight would produce $\\binom84=70$ words, most of which fail the prefix condition. The recurrence builds precisely the permitted objects.

## A reflection bijection and the Catalan closed form

**Theorem 5.4 (Catalan formula).** For every integer $n\\geq0$,

$$C_n=\\frac1{n+1}\\binom{2n}{n}.$$

*Proof.* First take $n\\geq1$. There are $\\binom{2n}{n}$ unrestricted paths from $(0,0)$ to $(2n,0)$, since choosing the positions of the $n$ up steps determines the path. Call one of these paths bad if it visits a negative height. Because the height changes by one at each step, every bad path has a first visit to height $-1$.

For a bad path, interchange $U$ and $D$ in the prefix ending at that first visit, leaving every subsequent step unchanged. This prefix originally has one more down step than up step; the new prefix has one more up step than down step. The complete transformed path therefore has $n+1$ up steps and $n-1$ down steps and ends at $(2n,2)$. Before the distinguished endpoint of the reflected prefix, the new heights are nonpositive; at it the height first reaches $1$.

Conversely, take any unrestricted length-$2n$ path from $(0,0)$ to $(2n,2)$. It must visit height $1$; reflect the prefix through its first such visit by interchanging $U$ and $D$. The resulting whole path has $n$ up and $n$ down steps, ends at height zero, and visits height $-1$ for the first time at the reflected prefix's endpoint. It is therefore a bad balanced path. The first-visit descriptions show that these two prefix reflections undo each other.

Thus the number of bad paths is the number of length-$2n$ paths ending at height $2$, namely $\\binom{2n}{n-1}$, choosing the down-step positions. Removing them gives

$$C_n=\\binom{2n}{n}-\\binom{2n}{n-1}.$$

The factorial formula shows $\\binom{2n}{n-1}=\\frac{n}{n+1}\\binom{2n}{n}$, so subtraction gives the stated result. At $n=0$, the unique empty path and the displayed expression both give $1$. ∎

The endpoint change matters. Reflecting an entire balanced path would leave equal numbers of up and down steps and would not produce the counting family used above. The first visit also matters: it makes the inverse unambiguous. A rule saying only “reflect where the path becomes negative” would not specify a function if several visits were possible.

**Example 5.5 (Following the reflection).** Consider the bad balanced word $UDDUUD$ of length six. Its successive heights are $1,0,-1,0,1,0$, so the first negative visit occurs after the third step. Reflecting that three-step prefix changes $UDD$ to $DUU$, producing $DUUUUD$. Its heights are $-1,0,1,2,3,2$, so it ends at height $2$ and first reaches height $1$ at step three. Applying the inverse reflection there restores the original word.

For all balanced length-six paths, there are $\\binom63=20$ words; the bad ones correspond to the $\\binom62=15$ paths ending at height $2$. The difference $20-15=5$ agrees with the recurrence and the explicit bracket list. The two methods count the same objects by different reversible arguments.

## A formal generating function, without an analytic assumption

Let $C(z)=\\sum_{n\\geq0}C_nz^n$ be a formal power series with rational coefficients. Its multiplication rule is defined coefficientwise: the coefficient of $z^m$ in $C(z)^2$ is the finite sum $\\sum_{i=0}^mC_iC_{m-i}$. The recurrence is therefore exactly the formal identity

$$C(z)=1+zC(z)^2.$$

There is a unique formal series with constant coefficient $1$ satisfying this equation, because each successive coefficient is determined by earlier ones. This is a statement in $\\mathbb Q[[z]]$, the system of formal power series; it does not require assigning a numerical value to $z$ or summing an infinite numerical series.

One may also write

$$C(z)=\\frac{1-\\sqrt{1-4z}}{2z},$$

where the square root means the unique formal series with constant coefficient $1$ whose square is $1-4z$. To justify this notation, the quadratic relation gives $(1-2zC(z))^2=1-4z$. Uniqueness of that square root follows recursively: once its constant coefficient is $1$, its coefficient of degree $m\\geq1$ occurs with multiplier $2$ in the squared series, and all other terms of that degree involve earlier coefficients.

The numerator $1-\\sqrt{1-4z}$ has zero constant term, so dividing it by $z$ means shifting its coefficients down by one place. The alternative numerator $1+\\sqrt{1-4z}$ has constant term $2$, so it cannot give a formal power series after division by $z$. No choice based on a graph or an analytic limit is needed. In particular, this formal notation does not permit automatic substitution $z=1$: since $C_n\\geq1$ for every $n$, the corresponding numerical sum at $1$ diverges.

## Stirling numbers: labelled elements, unlabelled blocks

**Definition 5.6 (Set partition and Stirling number of the second kind).** A partition of $[n]$ into $k$ blocks is a set of $k$ pairwise disjoint nonempty subsets whose union is $[n]$. The number of such partitions is the Stirling number of the second kind $S(n,k)$.

The elements keep their labels, but the blocks have no order or labels. Thus $\\{\\{1,3\\},\\{2\\}\\}$ and $\\{\\{2\\},\\{1,3\\}\\}$ are the same partition. However, $\\{\\{1,2\\},\\{3\\}\\}$ is different. These are set partitions, whereas the next chapter's integer partitions record sums of integers. Block sizes alone do not determine a set partition: labels can be assigned to blocks in different ways.

For nonnegative indices the boundary values are

$$S(0,0)=1,\\qquad S(n,0)=0\\ (n\\geq1),\\qquad S(0,k)=0\\ (k\\geq1),$$

and $S(n,k)=0$ when $k>n$. The empty set has one partition into no blocks. A nonempty set cannot be covered by no blocks, and $k$ nonempty disjoint blocks require at least $k$ elements. Also $S(n,1)=S(n,n)=1$ for $n\\geq1$: the only choices are the whole set or all singletons.

**Theorem 5.7 (Stirling recurrence).** For integers $n\\geq1$ and $k\\geq1$,

$$S(n,k)=S(n-1,k-1)+kS(n-1,k).$$

*Proof.* Distinguish the element $n$. If its block is the singleton $\\{n\\}$, deleting this block leaves a partition of $[n-1]$ into $k-1$ blocks. Adding the singleton reverses the operation, giving the first term.

Otherwise, deleting $n$ from its block leaves that block nonempty, and thus leaves a partition of $[n-1]$ into $k$ blocks. Conversely, choose such a partition and one of its $k$ actual blocks, and insert $n$ into that block. The resulting block has at least two elements, so it belongs to this second case. Deletion and insertion are inverse operations with the chosen block recorded, giving the second term. The cases are disjoint and exhaustive. Boundary zeros make the same argument valid at $k=1$ and $k=n$, including $n=k=1$. ∎

The factor $k$ does not secretly label the blocks. A fixed partition has $k$ distinct subsets available for insertion, even though they have no externally assigned names. It is the choice of one of those subsets that contributes $k$.

**Example 5.8 (Five labels in three groups).** The recurrence gives $S(4,2)=7$ and $S(4,3)=6$, hence

$$S(5,3)=S(4,2)+3S(4,3)=7+18=25.$$

There is also a direct size decomposition. Three nonempty blocks covering five elements have sizes $3,1,1$ or $2,2,1$. In the first case, choose the triple in $\\binom53=10$ ways; the remaining singleton blocks are then fixed. In the second, choose the singleton in $5$ ways, then split the remaining four labels into two unordered pairs in $3$ ways. To see that last count, pair the least remaining label with any of the other three; the last pair is forced. This gives $15$ more partitions, for a total of $25$.

If the groups instead have three distinct names and none is empty, assign those names to the three blocks in $3!$ ways. The number is then $3!S(5,3)=150$. Labelling the groups changes the problem, not just its notation.

## Surjections and an explicit Stirling formula

**Theorem 5.9 (Surjections and Stirling numbers).** For integers $n,k\\geq1$, the number of onto functions $[n]\\to[k]$ is $k!S(n,k)$. Consequently,

$$S(n,k)=\\frac1{k!}\\sum_{j=0}^k(-1)^j\\binom{k}{j}(k-j)^n.$$

*Proof.* An onto function has $k$ nonempty fibres, one for each target label, and these fibres form a partition of $[n]$. Conversely, choose a partition into $k$ blocks and bijectively assign the $k$ target labels to those blocks; map each element to its block's label. Exactly $k!$ assignments are possible for each partition, giving the first statement.

For the explicit expression, begin with all $k^n$ functions. For each target label, declare it bad if that label is missing from the image. If a specified set of $j$ labels is missing, every input can choose among the other $k-j$ labels, giving $(k-j)^n$ functions. Inclusion–exclusion over the $k$ missing-label conditions counts functions with none missing as the displayed alternating sum. Dividing by $k!$ proves the formula. ∎

The hypotheses $n,k\\geq1$ avoid ambiguous empty-power notation: the final term $0^n$ is zero. The case $n=k=0$ is already settled by the empty function and $S(0,0)=1$, rather than by silently choosing a meaning for $0^0$. When $k>n$, the formula is still valid and gives zero because no function from a smaller set can cover every target label.

## Derangements: exclude every fixed point

**Definition 5.10 (Derangement).** A permutation of $[n]$ is a bijection $\\sigma:[n]\\to[n]$. A fixed point is an element $i$ for which $\\sigma(i)=i$. A derangement is a permutation with no fixed points. Let $D_n$ denote the number of derangements of $[n]$.

The initial values are $D_0=1$, $D_1=0$ and $D_2=1$. The empty permutation has no fixed points because there are no elements violating the condition. A one-element permutation must fix its only element. On two elements, only the swap avoids fixed points. On three elements the two derangements, in one-line notation $\\sigma(1)\\sigma(2)\\sigma(3)$, are $231$ and $312$, so $D_3=2$.

Choosing a nonself image independently for each input would give $(n-1)^n$ assignments, but many are not bijections. For instance, two inputs might choose the same image. Derangements impose both the forbidden-position condition and the permutation condition; neither may be discarded.

**Theorem 5.11 (Derangement inclusion–exclusion formula).** For every integer $n\\geq0$,

$$D_n=\\sum_{j=0}^n(-1)^j\\binom nj(n-j)!=n!\\sum_{j=0}^n\\frac{(-1)^j}{j!}.$$

*Proof.* For each $i\\in[n]$, let $A_i$ be the set of permutations fixing $i$. If a specified set of $j$ elements must be fixed, the remaining $n-j$ elements can be permuted arbitrarily, so the intersection of those $j$ conditions has size $(n-j)!$. Inclusion–exclusion for avoiding all the $A_i$ gives the first sum.

More explicitly, a permutation with $r$ fixed points contributes $\\sum_{j=0}^r(-1)^j\\binom rj$ to that sum. This is $1$ if $r=0$ and $(1-1)^r=0$ if $r>0$. Thus precisely the derangements contribute once, proving the count, including the empty permutation. Finally, $\\binom nj(n-j)!=n!/j!$ gives the second expression. ∎

This is a finite alternating sum for each $n$. It does not require a limiting probability or an expansion for an exponential function. Also, $(n-j)!$ permits additional fixed points among the unspecified elements. That is intentional: inclusion–exclusion corrects their overlapping contributions. Replacing it with $D_{n-j}$ would count a different family of intersections.

**Theorem 5.12 (Derangement recurrence).** For every integer $n\\geq2$,

$$D_n=(n-1)(D_{n-1}+D_{n-2}),\\qquad D_0=1,\\quad D_1=0.$$

*Proof.* In a derangement choose $j=\\sigma(n)$. Since $n$ is not fixed, there are $n-1$ possible labels $j$. Fix one such choice.

First suppose $\\sigma(j)=n$. The two elements form a swap. Delete both; the remaining permutation is a derangement on the other $n-2$ labels. Conversely, a derangement on those labels, together with the swap $n\\leftrightarrow j$, reconstructs the original uniquely. Relabelling a finite set does not change its number of derangements, so this case contributes $D_{n-2}$.

Next suppose $\\sigma(j)\\ne n$. Let $i$ be the unique predecessor of $n$, meaning $\\sigma(i)=n$. Then $i\\ne n$ and $i\\ne j$. Delete $n$ and redirect the image of $i$ from $n$ to $j$, leaving all other images unchanged. This produces a bijection $\\rho$ on $[n-1]$. It has no fixed point: all unchanged images remain nonself images, and the new image $\\rho(i)=j$ differs from $i$.

Conversely, take any derangement $\\rho$ on $[n-1]$. For the fixed label $j$, its unique predecessor $i=\\rho^{-1}(j)$ is different from $j$. Replace the arrow $i\\mapsto j$ with $i\\mapsto n\\mapsto j$, leaving other images as before. The result is a derangement with $\\sigma(n)=j$ and $\\sigma(j)\\ne n$. These operations are inverse, so the second case contributes $D_{n-1}$. Summing the two cases for each of the $n-1$ choices of $j$ proves the recurrence. ∎

**Example 5.13 (Two finite calculations).** With $D_2=1$ and $D_3=2$, the recurrence gives $D_4=3(2+1)=9$ and $D_5=4(9+2)=44$. Inclusion–exclusion independently expresses the four-element count as

$$D_4=24-24+12-4+1=9.$$

Here the terms correspond to specifying zero, one, two, three or four fixed labels. The fact that the final term is $1$ uses the single permutation fixing every label, or equivalently $0!=1$. Omitting this term would spoil the result even at a small size.

A related count asks for exactly $r$ fixed points, with $0\\leq r\\leq n$. Choose those labels in $\\binom nr$ ways and derange the complement, giving

$$\\binom nrD_{n-r}.$$

For example, among permutations of five labels, exactly one fixed point occurs in $5D_4=45$ permutations. Specifying a fixed set and then allowing an arbitrary permutation of the complement would count permutations with extra fixed points, so it would answer a different question.

## Exercises

### Exercise 5.1
<a id="catalan-stirling-derangements-ex-1"></a>

Compute $C_5$ using the first-return recurrence. Display the five product contributions and interpret the first and last cases.

<details>
<summary>Hint 1</summary>

**Hint.** Use $C_0,C_1,C_2,C_3,C_4=1,1,2,5,14$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The terms correspond to $i=0,1,2,3,4$ in $C_iC_{4-i}$. Empty inner or remaining paths are allowed.

</details>
<details>
<summary>Solution</summary>

**Solution.** We obtain $C_5=1\\cdot14+1\\cdot5+2\\cdot2+5\\cdot1+14\\cdot1=42$. In the first term, $P$ is empty, so the path begins $UD$ and then follows any size-four Dyck path. In the last term, $Q$ is empty, so the first return occurs at the final step; any size-four path sits inside the outer pair. First-return positions distinguish the five cases, so their counts add without overlap.

</details>

### Exercise 5.2
<a id="catalan-stirling-derangements-ex-2"></a>

How many words with five $U$ symbols and five $D$ symbols have at least one prefix containing more $D$ symbols than $U$ symbols? Describe the reflection endpoint and calculate the count.

<details>
<summary>Hint 1</summary>

**Hint.** These are precisely the bad balanced paths of semilength five.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Reflect through the first visit to height $-1$. The transformed path has six up steps and four down steps.

</details>
<details>
<summary>Solution</summary>

**Solution.** The prefix reflection bijects the required words with unrestricted length-ten paths ending at height $2$, with six up steps and four down steps. There are $\\binom{10}{4}=210$ such paths. The inverse reflects through the first visit to height $1$, which exists because the endpoint is $2$. Equivalently, the total $\\binom{10}{5}=252$ balanced words minus the $C_5=42$ good words gives $210$.

</details>

### Exercise 5.3
<a id="catalan-stirling-derangements-ex-3"></a>

For $n\\geq1$, count Dyck paths of semilength $n$ whose height is strictly positive at every interior step endpoint. Prove your answer by a bijection and handle $n=1$.

<details>
<summary>Hint 1</summary>

**Hint.** Such a path returns to height zero for the first time only at its final step.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Delete the initial $U$ and final $D$, then lower the middle path by one unit.

</details>
<details>
<summary>Solution</summary>

**Solution.** The deleted middle segment begins and ends at height $1$ and never falls below $1$. Lowering it produces a Dyck path of semilength $n-1$. Conversely, raise any such Dyck path by one unit and add an initial $U$ and final $D$. Every interior endpoint is then positive. These constructions are inverse, so the answer is $C_{n-1}$. At $n=1$, the middle path is empty and the unique original path is $UD$, agreeing with $C_0=1$.

</details>

### Exercise 5.4
<a id="catalan-stirling-derangements-ex-4"></a>

Prove $S(n,2)=2^{n-1}-1$ for $n\\geq1$, using the block containing label $1$. Explain why dividing your count by two would be wrong.

<details>
<summary>Hint 1</summary>

**Hint.** Choose which of the remaining $n-1$ labels join label $1$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Exclude the choice that puts every label into that block, leaving an empty second block.

</details>
<details>
<summary>Solution</summary>

**Solution.** Any subset of $[n]\\setminus\\{1\\}$ can join the block containing $1$, except the full subset, which would leave no elements for the other block. Thus there are $2^{n-1}-1$ choices. The complement uniquely supplies the second nonempty block. Every two-block partition has exactly one block containing $1$, so it is counted once; no division by two is appropriate. At $n=1$, the formula gives zero, correctly reflecting that one label cannot fill two nonempty blocks.

</details>

### Exercise 5.5
<a id="catalan-stirling-derangements-ex-5"></a>

Find $S(6,3)$ using the recurrence. Then count onto functions $[6]\\to[3]$ in two ways, one using Stirling numbers and one using inclusion–exclusion.

<details>
<summary>Hint 1</summary>

**Hint.** The previous row has $S(5,2)=15$ and $S(5,3)=25$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Label three blocks in $3!$ ways. Alternatively exclude functions missing one or more of the three target labels.

</details>
<details>
<summary>Solution</summary>

**Solution.** The recurrence gives $S(6,3)=S(5,2)+3S(5,3)=15+75=90$. Labelling the three blocks gives $3!\\cdot90=540$ onto functions. Inclusion–exclusion gives $3^6-\\binom31 2^6+\\binom32 1^6-\\binom33 0^6=729-192+3=540$. Fibres of an onto function are exactly the three nonempty labeled blocks, explaining why the two calculations count the same objects.

</details>

### Exercise 5.6
<a id="catalan-stirling-derangements-ex-6"></a>

For every integer $n\\geq3$, prove

$$S(n,n-2)=\\binom n3+3\\binom n4,$$

using block sizes. Interpret a binomial coefficient as zero when its lower index exceeds $n$.

<details>
<summary>Hint 1</summary>

**Hint.** Starting from all singleton blocks, the loss of two blocks can happen through a triple or through two pairs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** After choosing four labels for two pairs, there are three unordered pairings of those labels.

</details>
<details>
<summary>Solution</summary>

**Solution.** For a partition into $n-2$ blocks, the sum over all blocks of “block size minus one” equals $n-(n-2)=2$. Thus either one block has size three and all others size one, or two blocks have size two and all others size one. The first type is counted by $\\binom n3$. For the second, choose four labels in $\\binom n4$ ways and pair the least chosen label with one of the other three; the remaining pair is forced. This gives $3\\binom n4$. The types are disjoint and exhaustive. At $n=3$, only the triple type exists and the formula gives $1=S(3,1)$.

</details>

### Exercise 5.7
<a id="catalan-stirling-derangements-ex-7"></a>

Compute $D_5$ from the derangement recurrence and from the finite inclusion–exclusion formula. Explain why the intersection term for three specified fixed points is $2!$, rather than $D_2$.

<details>
<summary>Hint 1</summary>

**Hint.** Use $D_3=2$ and $D_4=9$ for the recurrence.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** An intersection condition requires the specified three elements to be fixed but does not forbid additional fixed points.

</details>
<details>
<summary>Solution</summary>

**Solution.** The recurrence gives $D_5=4(D_4+D_3)=4(9+2)=44$. Inclusion–exclusion gives $120-120+60-20+5-1=44$. If three particular labels are fixed, the remaining two may be permuted in either of their $2!$ ways, including their identity permutation. The intersection does not require those two to move. Using $D_2=1$ would exclude an allowed permutation before inclusion–exclusion has corrected the overlaps.

</details>

### Exercise 5.8
<a id="catalan-stirling-derangements-ex-8"></a>

Count permutations of $[6]$ with exactly two fixed points. How many have exactly five fixed points? Justify both counts.

<details>
<summary>Hint 1</summary>

**Hint.** Choose the fixed set and derange its complement so that no additional fixed points occur.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $D_4=9$ for the first count and consider the unique permutation of a one-element complement for the second.

</details>
<details>
<summary>Solution</summary>

**Solution.** Exactly two fixed points occur in $\\binom62D_4=15\\cdot9=135$ permutations. The chosen fixed set is uniquely recoverable, and the deranged complement ensures there are no more fixed points. Exactly five fixed points would require a derangement on the remaining one label, impossible since $D_1=0$. Thus the second count is $\\binom65D_1=0$. Equivalently, if five labels are fixed in a bijection, the sixth must map to itself as well.

</details>

### Exercise 5.9
<a id="catalan-stirling-derangements-ex-9"></a>

Give a combinatorial proof that, for every integer $n\\geq0$,

$$n!=\\sum_{r=0}^n\\binom nrD_{n-r}.$$

Show the four terms explicitly when $n=3$.

<details>
<summary>Hint 1</summary>

**Hint.** Partition all permutations by the number of fixed points.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A permutation with exactly $r$ fixed points is specified uniquely by its fixed set and a derangement on the complement.

</details>
<details>
<summary>Solution</summary>

**Solution.** There are $n!$ permutations in total. Those with exactly $r$ fixed points are counted by $\\binom nrD_{n-r}$, and the cases $r=0,\\ldots,n$ are disjoint and exhaustive. Adding their counts proves the identity, including $n=0$, where both sides are $1$. For $n=3$, the terms are $D_3+3D_2+3D_1+D_0=2+3+0+1=6$. The final term counts the identity permutation, whose empty complement contributes $D_0=1$.

</details>

### Exercise 5.10
<a id="catalan-stirling-derangements-ex-10"></a>

Starting from the formal identity $C(z)=1+zC(z)^2$ and $C_0,C_1,C_2,C_3=1,1,2,5$, extract the coefficient of $z^4$. Explain why the same formal identity does not justify evaluating $C(1)$ as a finite real number.

<details>
<summary>Hint 1</summary>

**Hint.** The coefficient of $z^4$ in $zC(z)^2$ is the coefficient of $z^3$ in the square.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Coefficient multiplication uses a finite sum. Numerical substitution at $1$ would require summing every Catalan number.

</details>
<details>
<summary>Solution</summary>

**Solution.** The required square coefficient is $C_0C_3+C_1C_2+C_2C_1+C_3C_0=5+2+2+5=14$, so $C_4=14$. This coefficient calculation involves just four products and is valid formally. Substitution at $1$ would instead ask for $\\sum_{n\\geq0}C_n$. There is at least the path $(UD)^n$ at every size, so $C_n\\geq1$ and these partial sums grow without bound. Thus no finite real value $C(1)$ exists from this series. Formal algebra and numerical convergence are distinct questions.

</details>

## Sources

The definitions, proofs, examples and exercises above are developed in original prose. Primary teaching references for complementary treatments are Anna de Mier, [*Lecture Notes for Enumerative Combinatorics*](https://web.mat.upc.edu/anna.de.mier/ec/lectec.pdf), §§2, 3.2, 4.1 and 4.3, and Andrew Lin's notes for Alexander Postnikov's MIT course 18.212, [lecture 2, Catalan numbers and reflection](https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/fb007b3a68f3519c1c4d7bbb5c27723a_MIT18_212S19_lec2.pdf). Both references were consulted 13 November 2026. This chapter is licensed CC BY-SA 4.0 as stated above.

## Summary

Catalan numbers count balanced paths with a nonnegative-prefix condition. Their first return gives a convolution recurrence; reflecting the prefix through a first negative visit gives the closed form $C_n=\\binom{2n}{n}/(n+1)$. Stirling numbers $S(n,k)$ count partitions of labeled elements into $k$ unlabelled nonempty blocks. Deleting a distinguished element proves their recurrence, while labeling the blocks connects them to surjections and inclusion–exclusion. Derangement numbers count permutations without fixed points; both their finite alternating formula and their two-case recurrence retain the empty value $D_0=1$. These examples show why a counting formula needs a precise object, boundary values and a reversible argument. Formal series encode the resulting recurrences coefficientwise without asserting analytic convergence. The next chapter, [Integer Partitions and Coefficient Methods](advanced-enumeration-partitions.md), continues the distinction between labels, sizes and generating-function encodings.
`;export{e as default};
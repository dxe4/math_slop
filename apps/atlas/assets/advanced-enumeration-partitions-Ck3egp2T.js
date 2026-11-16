var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: advanced-enumeration-partitions
title: "Advanced Enumeration, Integer Partitions, and Coefficient Methods"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Advanced Enumeration, Integer Partitions, and Coefficient Methods

Counting becomes difficult when a construction has many locally legal choices but only some global combinations have the required size. A coefficient can hold all those choices at once. This chapter develops that idea for integer partitions, bounded selections, compositions, and coefficient identities. The series are formal: equality means equality of every coefficient, so no analytic convergence claim is hidden in an algebraic manipulation.

This chapter assumes the recurrence and ordinary-generating-function methods developed earlier. In particular, it uses coefficient notation $[x^{n}]F(x)$, the product rule for independent choices, and the fact that each coefficient of a well-defined formal product receives only finitely many contributions.

## 1. Partitions and compositions answer different questions

A **composition** of a positive integer $n$ is an ordered list of positive integers with sum $n$. A **partition** of $n$ is an unordered multiset of positive integers with sum $n$, conventionally written in weakly decreasing order. Thus $3+1$ and $1+3$ are different compositions of $4$ but the same partition.

Let $c(n)$ be the number of compositions of $n$. Put $n$ identical marks in a row. Each of the $n-1$ gaps is either cut or not cut, and this choice uniquely specifies a composition. Therefore

$c(n)=2^{n-1}$ for $n\\ge 1$.

Partitions have no comparable independent-gap description. Write $p(n)$ for their number and set $p(0)=1$, representing the empty partition. The first values are $1,1,2,3,5,7$ for $n=0,1,\\ldots,5$.

### Worked example 1: audit the partitions of five

The partitions are

$5$, $4+1$, $3+2$, $3+1+1$, $2+2+1$, $2+1+1+1$, $1+1+1+1+1$.

There are seven. Listing $2+3$ again would confuse partitions with compositions. Omitting the empty partition at $n=0$ would later break product identities.

## 2. The partition product

For every permitted part size $j$, choose its multiplicity $m_{j}\\ge 0$. Its contribution to the total is $jm_{j}$, encoded by

$$1+x^{j}+x^{2j}+\\ldots=1/(1-x^{j})$$

Multiplicities for distinct sizes are independent, so

$$P(x)=\\prod_{j\\ge 1} 1/(1-x^{j})=\\sum_{n\\ge 0}p(n)x^{n}$$

This infinite product is legitimate as a formal series: to determine $[x^{n}]P(x)$, factors with $j>n$ can contribute only their constant term. Hence $[x^{n}]P(x)$ equals the coefficient in the finite product through $j=n$.

The proof is a weight-preserving bijection. A choice of monomial $x^{jm_{j}}$ from each factor determines the partition having $m_{j}$ copies of $j$; conversely every partition determines exactly those choices.

### Worked example 2: coefficient extraction with allowed parts

Count partitions of $8$ using parts in $\\{1,3,4\\}$. Their generating function is

$$F(x)=1/((1-x)(1-x^{3})(1-x^{4}))$$

The coefficient counts nonnegative solutions of $a+3b+4c=8$. For $c=0$, $b=0,1,2$ give three solutions. For $c=1$, $b=0,1$ give two. For $c=2$, only $b=0$ works. Thus $[x^{8}]F(x)=6$. The corresponding partitions are $1^{8}$, $3+1^{5}$, $3+3+1+1$, $4+1^{4}$, $4+3+1$, and $4+4$.

## 3. Restrictions are encoded factor by factor

If part $j$ may occur at most $r_{j}$ times, its factor is

$$1+x^{j}+\\ldots+x^{r_{j} j}$$

If part $j$ is either absent or present once, the factor is $1+x^{j}$. Therefore partitions into distinct parts have generating function

$$D(x)=\\prod_{j\\ge 1}(1+x^{j})$$

Partitions into odd parts have generating function

$$O(x)=\\prod_{k\\ge 1}1/(1-x^{2k-1})$$

These two series are equal. Indeed,

$$1+x^{j}=(1-x^{2j})/(1-x^{j})$$

so

$$D(x)=\\prod_{j\\ge 1}(1-x^{2j})/(1-x^{j})$$

In the denominator, split the factors into even and odd indices. The even denominator factors cancel the numerator factors coefficientwise in every finite truncation relevant to a fixed degree, leaving $O(x)$. Consequently, the number of partitions of $n$ into distinct parts equals the number into odd parts.

The cancellation proves equality of counts but does not itself display a bijection. A direct bijection repeatedly replaces each even part $2^{s} u$, with $u$ odd, by $2^{s}$ copies of $u$. Distinct input parts yield a unique binary expansion of each output multiplicity. Reversing binary expansions reconstructs the distinct parts.

### Worked example 3: distinct parts become odd parts

Take the distinct partition $12+5+2$ of $19$. Write $12=4\\cdot 3$, $5=1\\cdot 5$, and $2=2\\cdot 1$. Replace it by four $3$s, one $5$, and two $1$s:

$$5+3+3+3+3+1+1$$

Conversely, multiplicities $m_{5}=1$, $m_{3}=4$, $m_{1}=2$ have binary expansions $1$, $4$, and $2$, giving parts $5$, $12$, and $2$. The weight is preserved in both directions.

## 4. Ferrers diagrams and conjugation

A partition $\\lambda=(\\lambda_{1},\\ldots,\\lambda_{k})$ may be drawn as left-justified rows of cells, with row $i$ containing $\\lambda_{i}$ cells. Reflecting the diagram across its main diagonal produces the **conjugate partition** $\\lambda'$, where

$$\\lambda'_{j}=|\\{i: \\lambda_{i}\\ge j\\}|$$

Reflection is an involution: $(\\lambda')'=\\lambda$. It swaps rows and columns without changing the number of cells. Therefore partitions of $n$ into exactly $k$ parts correspond bijectively to partitions of $n$ whose largest part equals $k$. Likewise, partitions with at most $k$ parts correspond to partitions whose largest part is at most $k$.

### Worked example 4: conjugating a partition

For $\\lambda=(5,3,3,1)$, the column heights are $(4,3,3,1,1)$, so $\\lambda'=(4,3,3,1,1)$. The original has four parts and largest part five; the conjugate has largest part four and five parts. Both sum to twelve. Applying the rule again recovers $(5,3,3,1)$.

Let $p_{k}(n)$ count partitions of $n$ with largest part at most $k$. The allowed-part product gives

$$\\sum_{n\\ge 0}p_{k}(n)x^{n}=\\prod_{j=1}^{k}1/(1-x^{j})$$

By conjugation, this also counts partitions with at most $k$ parts.

## 5. A recurrence for bounded largest part

Partition the objects counted by $p_{k}(n)$ according to whether they use a part of size $k$.

- If not, there are $p_{k-1}(n)$ choices.
- If so, remove one part $k$; this bijects with partitions of $n-k$ whose largest part is at most $k$, counted by $p_{k}(n-k)$.

Thus

$$p_{k}(n)=p_{k-1}(n)+p_{k}(n-k)$$

for $k,n\\ge 1$, with $p_{k}(0)=1$, $p_{0}(n)=0$ for $n>0$, and $p_{k}(n)=0$ for $n<0$.

The recurrence is both a proof and a dynamic program. A table with rows $k=0,\\ldots,K$ and columns $n=0,\\ldots,N$ computes all requested values using exact integers in $O(KN)$ additions.

### Worked example 5: compute $p_{3}(6)$

Using the recurrence,

$$p_{3}(6)=p_{2}(6)+p_{3}(3)$$

The partitions of six with parts at most two correspond to solutions of $a+2b=6$, so $p_{2}(6)=4$. Also $p_{3}(3)=3$, represented by $3$, $2+1$, and $1+1+1$. Hence $p_{3}(6)=7$. The seven partitions are

$3+3$, $3+2+1$, $3+1+1+1$, $2+2+2$, $2+2+1+1$, $2+1+1+1+1$, and $1^{6}$.

## 6. Exactly $k$ parts and a useful shift

Let $q_{k}(n)$ count partitions of $n$ into exactly $k$ positive parts. Subtract
one from every part. After deleting zeros, the result is a partition of $n-k$
into at most $k$ parts; padding with zeros and adding one reverses this step.
Ferrers conjugation then maps partitions with at most $k$ parts bijectively to
partitions whose largest part is at most $k$, which are counted by the previously
defined $p_k$. Hence the composite bijection gives

$$q_{k}(n)=p_{k}(n-k)$$

Its generating function follows:

$$\\sum_{n\\ge 0}q_{k}(n)x^{n}=x^{k}/((1-x)(1-x^{2})\\ldots(1-x^{k}))$$

The factor $x^{k}$ records the mandatory one in each of the $k$ parts. Forgetting it counts nonnegative parts instead of positive parts.

### Worked example 6: exactly three parts

To count partitions of $10$ into exactly three parts, compute $p_{3}(7)$. Listing by number of threes gives

$3+3+1$, $3+2+2$, $3+2+1+1$, $3+1^{4}$, $2+2+2+1$, $2+2+1^{3}$, $2+1^{5}$, $1^{7}$,

so the answer is eight. These partitions have largest part at most three, but may have more than three parts. First conjugate each partition to obtain a partition of seven with at most three parts. For instance, $(3,2,1,1)$ conjugates to $(4,2,1)$. The resulting set of partitions, reordered by largest part, is

$7$, $6+1$, $5+2$, $5+1+1$, $4+3$, $4+2+1$, $3+3+1$, $3+2+2$.

Pad each of these partitions with zeros to three entries, then add one to every entry. This gives $(8,1,1)$, $(7,2,1)$, $(6,3,1)$, $(6,2,2)$, $(5,4,1)$, $(5,3,2)$, $(4,4,2)$, and $(4,3,3)$. Conjugation supplies the at-most-three-parts form needed for this shift from the largest-part-at-most-three form counted by $p_{3}$.

## 7. Marking a statistic with a second variable

A second formal variable can record a statistic. To mark the number of parts, use

$$F(x,u)=\\prod_{j\\ge 1}1/(1-ux^{j})$$

Choosing $m_{j}$ copies of part $j$ contributes $u^{m_{j}}x^{jm_{j}}$. Therefore $[x^{n} u^{k}]F(x,u)$ counts partitions of $n$ into exactly $k$ parts.

For distinct parts, use $\\prod_{j\\ge 1}(1+ux^{j})$. Markers prevent a common mistake: differentiating or substituting into an unmarked series and hoping that a statistic will appear. The encoding must carry the statistic from the start.

### Worked example 7: count both weight and length

In the truncation for parts $\\{1,2,3\\}$,

$$1/((1-ux)(1-ux^{2})(1-ux^{3}))$$

the coefficient $[x^{5}u^{2}]$ counts two-part partitions of five using those sizes. The possible multiplicity choices are one $2$ and one $3$; hence the coefficient is one. The partition $4+1$ is excluded because part four was not allowed, while $3+1+1$ has the wrong $u$-degree.

## 8. Coefficient methods for constrained selections

Products need not describe partitions. Suppose box $i$ contains objects whose allowed weights are listed in a polynomial $f_{i}(x)$, with coefficients recording multiplicities of choices. Selecting one option from each box produces

$$F(x)=\\prod_{i} f_{i}(x)$$

and $[x^{n}]F(x)$ counts selections of total weight $n$.

If five labeled voters each choose $0$, $1$, or $2$ tokens, the distribution is encoded by $(1+x+x^{2})^{5}$. Labels matter because there is one factor per voter. By contrast, $1/((1-x)(1-x^{2}))$ describes an unlabeled multiset of parts one and two. Similar-looking polynomials can encode different sample spaces.

### Worked example 8: inclusion by a complement factor

How many subsets of $\\{1,2,3,4,5\\}$ have element-sum nine? The product

$$\\prod_{j=1}^{5}(1+x^{j})$$

encodes absence or presence of each element. Extracting $[x^{9}]$ amounts to listing distinct-part representations: $5+4$, $5+3+1$, and $4+3+2$. Therefore the answer is three. The product counts subsets rather than ordered selections because each labeled element has exactly one binary factor.

## 9. Coefficient identities by double counting

The coefficient of $x^{n}$ in $(1+x)^{r}(1+x)^{s}$ is, by multiplication,

$$\\sum_{k} \\binom{r}{k}\\binom{s}{n-k}$$

But the product is $(1+x)^{r+s}$, whose coefficient is $\\binom{r+s}{n}$. Thus

$$\\sum_{k} \\binom{r}{k}\\binom{s}{n-k}=\\binom{r+s}{n}$$

Combinatorially, split an $(r+s)$-element set into blocks of sizes $r$ and $s$, then count $n$-subsets by how many elements they take from the first block. Coefficient algebra and double counting are two descriptions of the same convolution.

Finite differences give another useful extraction rule. Since

$$(1-x)^{m}=\\sum_{j=0}^{m}(-1)^{j} \\binom{m}{j}x^{j}$$

the coefficient of $x^{n}$ in $(1-x)^{m}A(x)$ is

$$\\sum_{j=0}^{m}(-1)^{j} \\binom{m}{j}a_{n-j}$$

where missing negative-index terms are zero. This packages an $m$th backward difference. The boundary convention is essential.

## 10. Partitions inside a rectangle

Ferrers diagrams make two simultaneous bounds natural. Let $R_{a,b}(x)$ be the weight generating polynomial for partitions with at most $a$ parts, each at most $b$. Their diagrams fit inside an $a\\times b$ rectangle. Because there are finitely many diagrams, this is a polynomial of degree $ab$, not an infinite series.

Split these diagrams according to whether their top row has length $b$.

- If no row has length $b$, the diagram fits inside $a\\times (b-1)$.
- If some row has length $b$, remove one such top row. The remainder fits inside $(a-1)\\times b$, and the removed row contributes weight $b$.

Therefore

$$R_{a,b}(x)=R_{a,b-1}(x)+x^{b}R_{a-1,b}(x)$$

with $R_{0,b}=R_{a,0}=1$. This recurrence is safe for exact computation and proves that all coefficients are nonnegative integers.

There is also a compact product expression:

$$R_{a,b}(x)=\\prod_{i=1}^{a} (1-x^{b+i})/(1-x^{i})$$

Although the right side is displayed as a quotient, it equals a polynomial. One proof is induction on $a+b$: put the two product expressions for $R_{a,b-1}$ and $x^{b}R_{a-1,b}$ over a common denominator. Their numerators combine because

$$(1-x^{b})+x^{b}(1-x^{a})=1-x^{a+b}$$

After the common factors are restored, the rectangle product results. The boundary products equal one, matching the empty diagram. Thus the product and recurrence describe the same polynomial.

### Worked example 9: enumerate a $2\\times 3$ rectangle

The partitions with at most two parts, each at most three, are

$\\varnothing$, $1$, $2$, $1+1$, $3$, $2+1$, $3+1$, $2+2$, $3+2$, $3+3$.

Therefore

$$R_{2,3}(x)=1+x+2x^{2}+2x^{3}+2x^{4}+x^{5}+x^{6}$$

The coefficient sequence is symmetric. Complementing the cells of a diagram inside the rectangle and rotating the complement by $180$ degrees maps weight $n$ to weight $6-n$. This is a bijection, proving $[x^{n}]R_{2,3}=[x^{6-n}]R_{2,3}$. The same complement map proves symmetry for every $a\\times b$ rectangle.

Rectangle polynomials refine ordinary binomial counting. Evaluating at $x=1$ gives the number of monotone boundary paths across the rectangle, namely $\\binom{a+b}{a}$. Direct substitution into the quotient gives $0/0$, so this conclusion should come from the diagram-to-path bijection or from the recurrence at $x=1$, not from illegal cancellation of zero factors.

## 11. Filters for congruence classes

Sometimes the desired objects have weight congruent to $r$ modulo $m$, rather than one exact weight. For a polynomial

$$A(x)=\\sum_{n} a_{n}x^{n}$$

let $\\omega$ be a complex number with $\\omega^{m}=1$ and no smaller positive power equal to one. Then

$$1/m \\sum_{j=0}^{m-1} \\omega^{-rj}A(\\omega^{j})=\\sum_{n\\equiv r \\bmod m}a_{n}$$

To prove it, substitute the coefficient expansion and interchange two finite sums. The multiplier of $a_{n}$ is

$$1/m \\sum_{j=0}^{m-1}\\omega^{(n-r)j}$$

If $m$ divides $n-r$, every term is one and the average is one. Otherwise this is a geometric sum with ratio not equal to one and total

$$(1-\\omega^{(n-r)m})/(1-\\omega^{n-r})=0$$

Thus the average retains exactly the desired congruence class. Intermediate expressions may be complex even when the final count is an integer; the complex numbers implement an exact algebraic filter.

### Worked example 10: even-cardinality subsets

Let an $N$-element set be given, and mark subset size by $(1+x)^{N}$. Substitution at $x=1$ counts all $2^{N}$ subsets, while substitution at $x=-1$ gives zero for $N\\ge 1$. The modulus-two filter says

$$1/2((1+1)^{N}+(1-1)^{N})=2^{N-1}$$

subsets have even size. The minus sign in the odd filter gives the same count for odd size. This is not a probability approximation: it is an exact coefficient separation.

The filter also applies when $x$ records weight rather than cardinality. For subsets of $\\{1,2,\\ldots,s\\}$, use $A(x)=\\prod_{j=1}^{s}(1+x^{j})$ and evaluate at the $m$th roots of unity to count element-sums in a residue class. One must keep the polynomial finite, or separately justify substitutions into an infinite analytic series; the formal-series framework alone does not assign complex values to an infinite series.

## 12. Exact coefficient computation

A product representation suggests a memory-efficient dynamic program. To compute coefficients through degree $N$, store an array $a[0..N]$, initially $a[0]=1$ and all other entries zero.

For a distinct allowed part $j$, update degrees downward:

$a[n]←a[n]+a[n-j]$ for $n=N,N-1,\\ldots,j$.

The downward direction prevents the newly added copy of $j$ from being reused during the same factor update. For unlimited copies, update upward:

$a[n]←a[n]+a[n-j]$ for $n=j,j+1,\\ldots,N$.

Now a value created using one $j$ may contribute again, exactly modeling arbitrary multiplicity.

### Worked example 11: why loop direction matters

Start with $a=[1,0,0,0,0,0]$ and process a distinct part of size two. A downward update gives nonzero entries only at degrees zero and two, representing $1+x^{2}$. An upward update first sets $a[2]=1$, then uses that new value to set $a[4]=1$, incorrectly producing $1+x^{2}+x^{4}+\\ldots$ as far as the array extends. The algebraic factor determines the direction of the in-place computation.

Truncation at $N$ is exact for coefficients through degree $N$: all part weights are nonnegative, so discarded higher-degree terms can never return to a lower degree under later multiplication. This statement would fail if negative weights were allowed.

Exact computation supports proof in three disciplined ways. It verifies small boundary cases, checks that a proposed recurrence matches a product to a stated degree, and searches for counterexamples to conjectured identities. It does not establish equality of all coefficients. For that, supply a bijection, a recurrence with matching boundary data, or a valid formal algebra argument.

## 13. Multinomial coefficients inside powers

When $N$ labeled positions independently receive one of $r$ types, the polynomial

$$(x_{1}+x_{2}+\\ldots+x_{r})^{N}$$

records the type counts. To obtain the monomial $x_{1}^{n_{1}}\\ldots x_{r}^{n_{r}}$, where $n_{1}+\\ldots+n_{r}=N$, choose which $n_{1}$ positions receive type one, then which $n_{2}$ of the remaining positions receive type two, and so on. The coefficient is

$$N!/(n_{1}!n_{2}!\\ldots n_{r}!)$$

This is the **multinomial coefficient**. It counts ordered strings with prescribed symbol multiplicities, not partitions of $N$. The vector $(n_{1},\\ldots,n_{r})$ records how many labeled positions take each type.

The same expansion can collapse several statistics. Substituting $x_{i}=x^{w_{i}}$ gives

$$(x^{w_{1}}+\\ldots+x^{w_{r}})^{N}$$

whose coefficient of $x^{s}$ counts length-$N$ strings whose symbol weights total $s$. Different multiplicity vectors with the same weighted sum contribute to the same coefficient, and their multinomial coefficients add.

### Worked example 12: strings with a prescribed score

Each of four labeled rounds scores $0$, $1$, or $2$. Count score sequences totaling three. The generating polynomial is $(1+x+x^{2})^{4}$. Split by multiplicities.

- Scores $(2,1,0,0)$ have multiplicities $(2 zeros,1 one,1 two)$, hence $4!/(2!1!1!)=12$ orders.
- Scores $(1,1,1,0)$ have multiplicities $(1 zero,3 ones,0 twos)$, hence $4!/(1!3!)=4$ orders.

No other nonnegative four-term pattern using $0,1,2$ sums to three. Therefore $[x^{3}](1+x+x^{2})^{4}=16$. Treating the two displayed patterns as only two outcomes would erase the labels.

Multinomial extraction also proves a useful checksum. Set every $x_{i}=1$; the sum of all multinomial coefficients is $r^{N}$, the total number of length-$N$ strings on $r$ symbols. More selectively, set variables for allowed types to one and forbidden types to zero to count strings avoiding a specified collection.

If positions are not labeled, the power model is usually wrong. For example, choosing an unordered multiset of four scores from $\\{0,1,2\\}$ is encoded by the coefficient of $u^{4}$ in

$$1/((1-u)(1-ux)(1-ux^{2}))$$

where $u$ marks the number of selected scores and $x$ their total. The separate marker is needed because total score alone does not determine multiset size. This contrast—powers for labeled slots, multiplicity products for unlabeled multisets—is one of the most important encoding choices in enumeration.

## 14. Failure diagnostics

- **Order leak:** treating $2+3$ and $3+2$ as different partitions.
- **Missing empty object:** setting $p(0)=0$, which destroys the constant term of the product.
- **Wrong factor:** using $1+x^{j}$ when repetitions are allowed, or $1/(1-x^{j})$ when parts must be distinct.
- **Unjustified infinite algebra:** canceling infinite products without explaining why every fixed coefficient is governed by a finite truncation.
- **Statistic without a marker:** asking for exactly $k$ parts from a series that records only total weight.
- **Positive/nonnegative confusion:** omitting the factor $x^{k}$ when every one of $k$ parts must be positive.
- **Coefficient/sample-space mismatch:** using one factor per weight when choices are labeled, or one factor per labeled object when only multiplicities matter.
- **Experimental overreach:** computing many $p(n)$ values and calling a pattern a theorem without a recurrence, bijection, or coefficient proof.

## 15. Exercises with fully worked solutions

### DM-CH11-E001 — compositions with parts at least two

Find the number of compositions of $n\\ge 2$ whose parts are all at least two.

<details>
<summary>Hint</summary>

Encode one allowed part, then form an ordered sequence of one or more parts.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E001 — Solution

A single part contributes $x^{2}+x^{3}+\\ldots=x^{2}/(1-x)$. A nonempty ordered sequence of such parts has generating function

$$A(x)+A(x)^{2}+\\ldots=A(x)/(1-A(x))=x^{2}/(1-x-x^{2})$$

Thus the requested number is $[x^{n-2}]1/(1-x-x^{2})$. If $F_{0}=0,F_{1}=1,F_{m+1}=F_{m}+F_{m-1}$, then $1/(1-x-x^{2})=\\sum_{m\\ge 0}F_{m+1}x^{m}$; the answer is $F_{n-1}$. For example $n=6$ gives $F_{5}=5$: $6$, $2+4$, $4+2$, $3+3$, $2+2+2$.

</details>

### DM-CH11-E002 — largest part exactly $k$

Give a generating function for partitions whose largest part is exactly $k$.

<details>
<summary>Hint</summary>

Compare the series for largest part at most $k$ with the one for largest part at most $k-1$.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E002 — Solution

Largest part at most $k$ has series $\\prod_{j=1}^{k}(1-x^{j})^{-1}$. Subtract the series for largest part at most $k-1$:

$$1/\\prod_{j=1}^{k}(1-x^{j})-1/\\prod_{j=1}^{k-1}(1-x^{j})$$

Factoring gives

$$x^{k}/\\prod_{j=1}^{k}(1-x^{j})$$

Equivalently, require one part $k$ and then allow any further parts of size at most $k$. The mandatory part explains the numerator.

</details>

### DM-CH11-E003 — self-conjugate test

Determine whether $(6,4,4,1,1,1)$ is self-conjugate.

<details>
<summary>Hint</summary>

Count the cells in each column of the Ferrers diagram and compare the resulting sequence with the original.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E003 — Solution

Column heights are $6,3,3,3,1,1$, so the conjugate is $(6,3,3,3,1,1)$. It differs from the original, hence the partition is not self-conjugate. Equal total weight is not sufficient; row-length and column-height sequences must agree entrywise.

</details>

### DM-CH11-E004 — odd parts of eight

Count partitions of eight into odd parts, and verify the same count using distinct parts.

<details>
<summary>Hint</summary>

List odd-part partitions by their largest part, then list distinct-part partitions by their largest part.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E004 — Solution

Odd-part partitions are $7+1$, $5+3$, $5+1+1+1$, $3+3+1+1$, $3+1^{5}$, and $1^{8}$, so there are six. Distinct-part partitions are $8$, $7+1$, $6+2$, $5+3$, $5+2+1$, and $4+3+1$, again six. Equality follows in general from the product identity proved earlier.

</details>

### DM-CH11-E005 — a bounded multiplicity

Find $[x^{7}](1+x^{2}+x^{4})/(1-x^{3})$ and interpret it.

<details>
<summary>Hint</summary>

Choose the multiplicity of part two and solve for the remaining number of parts of size three.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E005 — Solution

The first factor chooses zero, one, or two parts of size two. The second chooses any number of parts of size three. We need $2a+3b=7$ with $a\\in \\{0,1,2\\}$ and $b\\ge 0$. Only $(a,b)=(2,1)$ works. The coefficient is one, representing partition $3+2+2$ under the stated multiplicity bounds.

</details>

### DM-CH11-E006 — exactly four positive parts

Give a coefficient formula for partitions of $17$ into exactly four parts.

<details>
<summary>Hint</summary>

Subtract one from each of the four parts, then use conjugation to convert the resulting bound on the number of parts into a bound on their sizes.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E006 — Solution

The shift bijection gives

$$[x^{17}] x^{4}/((1-x)(1-x^{2})(1-x^{3})(1-x^{4}))$$

Equivalently it is $[x^{13}]\\prod_{j=1}^{4}(1-x^{j})^{-1}$. Conjugation says this counts partitions of thirteen with largest part at most four. Both formulas specify an exact finite coefficient computation; the numerator prevents zero parts.

</details>

### DM-CH11-E007 — marked distinct parts

Compute $[x^{7}u^{2}]\\prod_{j=1}^{7}(1+ux^{j})$.

<details>
<summary>Hint</summary>

The exponent of $u$ requires exactly two different part sizes; list pairs whose sum is seven.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E007 — Solution

We need two distinct positive integers with sum seven. The unordered pairs are $\\{1,6\\}$, $\\{2,5\\}$, and $\\{3,4\\}$. Hence the coefficient is three. $\\{0,7\\}$ is invalid because there is no part zero, and reversing a pair does not create another selection.

</details>

### DM-CH11-E008 — convolution proof

Prove $\\sum_{k=0}^{n} \\binom{k+r-1}{r-1}=\\binom{n+r}{r}$ for integers $r\\ge 1$, $n\\ge 0$.

<details>
<summary>Hint</summary>

Multiply the series for $(1-x)^{-r}$ by the series for $(1-x)^{-1}$ and extract $x^n$.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E008 — Solution

Since $(1-x)^{-r}=\\sum_{k\\ge 0}\\binom{k+r-1}{r-1}x^{k}$, multiplying by $(1-x)^{-1}=\\sum_{j\\ge 0}x^{j}$ makes the coefficient of $x^{n}$ equal to the stated partial sum. The product is $(1-x)^{-(r+1)}$, whose $x^{n}$ coefficient is $\\binom{n+r}{r}$. Formal multiplication is valid because only $k=0,\\ldots,n$ contribute.

</details>

### DM-CH11-E009 — recurrence boundary audit

Use $p_{k}(n)=p_{k-1}(n)+p_{k}(n-k)$ to find $p_{2}(5)$.

<details>
<summary>Hint</summary>

Apply the recurrence repeatedly until the largest permitted part is one or the remaining weight is small.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E009 — Solution

Repeatedly,

$$p_{2}(5)=p_{1}(5)+p_{2}(3)=1+p_{1}(3)+p_{2}(1)=1+1+1=3$$

The partitions are $1^{5}$, $2+1+1+1$, and $2+2+1$. The convention $p_{2}(1)=1$ includes the partition $1$; treating the negative-index boundary incorrectly would lose valid terms.

</details>

### DM-CH11-E010 — labeled allocations

Three labeled boxes receive zero, one, or two balls each. How many allocations use four balls total?

<details>
<summary>Hint</summary>

Use one factor for each labeled box, or list the possible occupancy patterns and their permutations.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E010 — Solution

The count is $[x^{4}](1+x+x^{2})^{3}$. Solutions of $a+b+c=4$ with $0\\le a,b,c\\le 2$ are permutations of $(2,2,0)$ and $(2,1,1)$. Each pattern has three permutations, so the answer is six. The labels make permutations distinct.

</details>

### DM-CH11-E011 — rectangle recurrence

Use the rectangle recurrence to compute $R_{2,2}(x)$.

<details>
<summary>Hint</summary>

Use $R_{2,2}=R_{2,1}+x^2R_{1,2}$ and write each boundary polynomial explicitly.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E011 — Solution

First, $R_{1,2}=1+x+x^{2}$ and $R_{2,1}=1+x+x^{2}$. Then

$$R_{2,2}=R_{2,1}+x^{2}R_{1,2}$$

$$=1+x+2x^{2}+x^{3}+x^{4}$$

The six diagrams represent $\\varnothing$, $1$, $2$, $1+1$, $2+1$, and $2+2$. The coefficient sum is $1+1+2+1+1=6$; the coefficient two at weight two represents both $2$ and $1+1$. Counting displayed monomials rather than coefficients would lose that multiplicity.

</details>

### DM-CH11-E012 — parity filter with weights

How many subsets of $\\{1,2,3,4\\}$ have even element-sum?

<details>
<summary>Hint</summary>

Apply the parity filter to $A(x)=\\prod_{j=1}^4(1+x^j)$, evaluating only this finite polynomial at $1$ and $-1$.

</details>

<details>
<summary>Solution</summary>

#### DM-CH11-E012 — Solution

Set $A(x)=\\prod_{j=1}^{4}(1+x^{j})$. The parity filter gives $(A(1)+A(-1))/2$. We have $A(1)=16$. Since the factors for odd $j$ vanish at $x=-1$, $A(-1)=0$. Hence eight subsets have even sum. The conclusion depends on at least one odd-weight element; pairing each subset with the result of toggling element $1$ gives the same bijective proof.

</details>

## Chapter summary and connections

Partitions replace order by multiplicity, leading to the product $\\prod_{j\\ge 1}(1-x^{j})^{-1}$. Restrictions change individual factors; diagram conjugation exchanges part-count and largest-part bounds; a marker variable records statistics; and coefficient convolution turns products into exact counts. These tools connect backward to recurrence modeling and inclusion–exclusion, forward to finite set systems and representation questions, and computationally to exact dynamic programming. A computed coefficient is a theorem only when its encoding and extraction are justified.
`;export{e as default};
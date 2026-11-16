
# Sigma-algebras and measures

Before assigning a size to a set, say which sets are admitted. In finite counting problems it is natural to admit every subset. Infinite models need a collection stable under the operations used to express events and limits. A sigma-algebra supplies that collection; a measure assigns its members sizes with a countable-additivity rule.

This **Years 2–3 (L3)** article assumes sets, complements, countable unions and nonnegative series. Use [Quantifiers, Suprema, and Completeness](#/books/proof-safe-real-analysis/quantifiers-completeness) for the analysis language. [Why Riemann is not enough](#/articles/measure-why-riemann-not-enough) gives the motivation. We focus on the distinction between the domain of a measure and its values, then derive one reliable limiting rule. The full [Why Measure? chapter](#/books/measure-and-integration/why-measure) supplies the longer opening route.

## A domain closed under countable logical operations

A **sigma-algebra** $\Sigma$ on a set $X$ is a collection of subsets with three properties: $X\in\Sigma$; if $A\in\Sigma$, then its complement $X\setminus A$ belongs to $\Sigma$; and every countable union of members belongs to $\Sigma$. Its members are called measurable sets.

These requirements also admit the empty set, finite unions and countable intersections. The empty set is the complement of $X$. A finite union can be padded by empty sets to become countable. De Morgan's identity expresses a countable intersection as the complement of a countable union of complements.

The word “countable” is deliberate. It lets us describe an event such as “membership occurs infinitely often”. For measurable sets $A_1,A_2,\ldots$, that event is

$$\bigcap_{m=1}^{\infty}\ \bigcup_{n\ge m}A_n.$$

A point belongs to this set exactly when every index threshold has a later set containing it. The countable unions and intersection ensure that this new event is measurable. Arbitrary uncountable unions are not required by the sigma-algebra axioms.

## Worked example: four outcomes but only two observable groups

Let $X=\{a,b,c,d\}$, with groups $A=\{a,b\}$ and $B=\{c,d\}$. Suppose our model distinguishes the two groups but does not distinguish outcomes inside a group. Take

$$\Sigma=\{\varnothing,A,B,X\}.$$

This is a sigma-algebra. The complements exchange $A$ and $B$, and exchange the empty set and $X$. Any union of these four sets is again one of the same four sets. In particular, a countable union cannot introduce a singleton that was absent from every member.

Assign sizes $\mu(\varnothing)=0$, $\mu(A)=1/3$, $\mu(B)=2/3$ and $\mu(X)=1$. The values form a probability measure on this sigma-algebra. For any disjoint family of nonempty measurable sets, the only nontrivial split of $X$ is into $A$ and $B$, and their masses add to one. A countable disjoint family has at most two nonempty members, so countable additivity follows too.

What is $\mu(\{a\})$? In this model it is **undefined**, because $\{a\}\notin\Sigma$. It is not zero merely because it is a small set. One could build a more detailed model assigning individual weights to all four outcomes, but that would extend the specified measurable domain and require extra choices. The group masses alone do not determine an individual weight for $a$.

## What a measure promises

A **measure** on $(X,\Sigma)$ is a map $\mu:\Sigma\to[0,\infty]$ with $\mu(\varnothing)=0$ and countable additivity: for pairwise disjoint measurable $E_j$,

$$\mu\left(\bigcup_{j=1}^{\infty}E_j\right)=\sum_{j=1}^{\infty}\mu(E_j).$$

The sum is a nonnegative series, so an infinite value is allowed. A probability measure is the special case $\mu(X)=1$. Ordinary length and counting measure need not have finite total size.

Additivity applies directly to disjoint sets. If sets overlap, adding their sizes double-counts their overlap and need not give the size of the union. One repairs this by splitting them into disjoint pieces. For example, if $A\subseteq B$ are measurable, then $B=A\cup(B\setminus A)$ is a disjoint union, so $\mu(B)=\mu(A)+\mu(B\setminus A)$ and $\mu(A)\le\mu(B)$.

When all relevant values are finite, subtraction gives $\mu(B\setminus A)=\mu(B)-\mu(A)$. With infinite values, writing infinity minus infinity is not a valid step. The disjoint-sum equation is the safer starting point.

## Increasing sets have predictable limiting size

Suppose $E_n\subseteq E_{n+1}$ are measurable and $E=\bigcup_nE_n$. Define the newly added pieces by $D_1=E_1$ and $D_n=E_n\setminus E_{n-1}$ for $n>1$. They are measurable, pairwise disjoint, and their union is $E$.

Finite additivity gives $\mu(E_n)=\sum_{j\le n}\mu(D_j)$. Countable additivity gives $\mu(E)=\sum_{j\ge1}\mu(D_j)$. The definition of a nonnegative series as the limit of its partial sums now proves

$$\mu(E_n)\longrightarrow\mu(E).$$

This is **continuity from below**. No finite-total-measure assumption was used, and the limit may be infinite. The theorem explains why increasing finite approximations can recover the size of their countable union.

For decreasing measurable sets, the analogous rule needs an additional assumption such as $\mu(E_1)<\infty$. Apply continuity from below to $E_1\setminus E_n$ and subtract from the finite value $\mu(E_1)$ to obtain continuity from above. Without the finiteness condition, that subtraction may be meaningless; the second exercise gives a failure.

## A familiar infinite model

On the real line, the **Borel sigma-algebra** is the smallest sigma-algebra containing the open sets. Thus it contains closed sets, singletons, countable sets and intervals. Ordinary length measure assigns an interval its length. These statements specify a model and a domain; they do not claim that every subset of the real line is Borel or that length can be assigned to every subset by the same rules.

Nor does a measure arise automatically from naming a sigma-algebra. The domain says where size is defined; the assignment and countable-additivity proof say what the size is. The full measure route treats construction and completion separately.

## Exercises

### Exercise 1
<a id="deep-dive-measure-sigma-algebras-measures-ex-1"></a>
On $X=\{1,2,3\}$, show that $\{\varnothing,\{1\},\{2,3\},X\}$ is a sigma-algebra. Assign masses $1/4$ and $3/4$ to its two nonempty proper members and explain whether the value at $\{2\}$ has been specified.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Identify the two groups that every admitted set either contains completely or omits completely.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Being outside the sigma-algebra is different from having measure zero.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Complements exchange the two groups and exchange the empty set and $X$. Every union remains a union of the same two groups, proving countable-union closure. Set the empty mass to zero and the total mass to one; disjoint group masses add to one, giving a measure. The singleton $\{2\}$ is not admitted, so its measure is undefined in this model. Individual weights within $\{2,3\}$ would need extra specification in a finer sigma-algebra.
</details>

### Exercise 2
<a id="deep-dive-measure-sigma-algebras-measures-ex-2"></a>
For ordinary length measure on the real line, set $E_n=[n,\infty)$ for positive integers $n$. Compute their intersection and their measures. Explain why continuity from above cannot be invoked.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
A fixed real number is smaller than some positive integer.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check the first set's size before using a decreasing-set limiting rule.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Every fixed real number eventually lies outside the sets, so their intersection is empty and has measure zero. Each $E_n$ is an unbounded ray of infinite length, so the sequence of measures stays infinite. The measure of the intersection is therefore not their limiting measure. The finiteness assumption fails because $\mu(E_1)=\infty$; this is precisely the assumption needed for the subtraction argument.
</details>

## Continue into the book

A sigma-algebra controls the admitted set operations; a measure assigns countably additive sizes on that domain. Disjoint new pieces explain increasing limits, while decreasing limits require a finite-size qualification. Continue with [Why Measure?](#/books/measure-and-integration/why-measure) and then [Fatou and dominated convergence](#/articles/measure-fatou-dominated-convergence) for limits of integrals.

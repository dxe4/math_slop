
# Outer Measure, Measurability, and Null Sets

This chapter has moved from Real Analysis into the Measure and Integration primary with all original mathematical sections, exercise identities, hints, solutions and its project or investigation preserved. Read [Why Measure](why-measure.md) first; Euclidean volume and regularity continue in the next chapter.

Length begins with intervals, but analysis needs to measure open sets, dust-like sets, countable unions, and sets created by limiting operations. The construction cannot assign a translation-invariant, countably additive length to every subset of the real line while preserving the expected interval lengths. The solution is not to abandon length but to separate two tasks:

1. assign every set an outer size by covering it from outside;
2. identify the sets that split every test set without creating hidden overlap.

The first task produces Lebesgue outer measure. The second is Carathéodory measurability. Together they build a complete measure space containing all Borel sets and all subsets of null sets.

## 1. Cover from outside

For \(E\subseteq R\), define the **Lebesgue outer measure**

\(m^*(E)=\inf\{\sum_{k=1}^\infty \operatorname{length}(I_k): E\subseteq \bigcup_{k=1}^\infty I_k\}\),

where the \(I_k\) are open intervals. Allowing countably many intervals is essential: limiting and countable-union operations are central to analysis.

The infimum may not be achieved. Outer measure asks for covers whose total lengths approach the best possible value.

### Basic properties

For all subsets \(A,B\subseteq R\):

1. \(m^*(\varnothing)=0\);
2. if \(A\subseteq B\), then \(m^*(A)\le m^*(B)\);
3. \(m^*(\bigcup E_n)\le \sum m^*(E_n)\).

The third property is **countable subadditivity**. Given \(\varepsilon>0\), cover each \(E_n\) by intervals of total length below \(m^*(E_n)+\varepsilon/2^n\). Combining all covers covers the union and has total length below \(\sum m^*(E_n)+\varepsilon\). Let \(\varepsilon\downarrow 0\).

Outer measure is also translation invariant: translating a cover preserves every interval length, so \(m^*(E+t)=m^*(E)\).

## 2. Intervals have their expected length

For an interval \(I\) with endpoints \(a<b\), outer measure is \(b-a\), regardless of which endpoints are included.

The upper bound is easy: cover \([a,b]\) by \((a-\varepsilon,b+\varepsilon)\), then let \(\varepsilon\downarrow 0\).

The lower bound carries the content. If countably many open intervals cover \([a,b]\), compactness supplies a finite subcover. The total length of a finite open cover of \([a,b]\) is at least \(b-a\); this follows by merging overlaps or ordering endpoints. Therefore every countable cover has total length at least \(b-a\), and the infimum does too.

Endpoints have outer measure zero, so adding or removing finitely many endpoints changes no length.

## 3. Null sets are smaller than every length budget

A set \(N\) is **null** if \(m^*(N)=0\). Equivalently, for every \(\varepsilon>0\), there is a countable interval cover of \(N\) whose total length is below \(\varepsilon\).

Every countable set is null. If \(N=\{x_1,x_2,\ldots\}\), cover \(x_k\) by an interval of length \(\varepsilon/2^k\). The total length is at most \(\varepsilon\).

Countable unions of null sets are null by countable subadditivity. Every subset of a null set is null by monotonicity.

### The Cantor set

**Worked Example 16.1 (A Cantor cover budget).**

At construction stage \(n\), the Cantor set lies inside \(2^n\) closed intervals, each of length \(3^{-n}\). Their total length is

\((2/3)^n\to 0\).

Thus the Cantor set is null. It is nevertheless uncountable. Cardinality and measure answer different size questions.

Null sets can also be dense. The rationals are countable and dense in \(R\), yet null. Topological largeness and measure largeness are independent.

## 4. Outer measure is not additive on every set

Subadditivity is automatic from covers; additivity is not. Partition \([0,1)\) into equivalence classes modulo rational differences and choose one representative from each class, forming \(V\). For \(q\in Q\cap[-1,1]\), the translates \(V+q\) are pairwise disjoint: equality \(v_1+q_1=v_2+q_2\) puts \(v_1,v_2\) in the same class, hence \(v_1=v_2\) and \(q_1=q_2\). Their union contains \([0,1)\), because each \(x\) differs rationally from its representative by a number in \((-1,1)\), and the union is contained in \([-1,2)\).

Translation invariance and countable additivity would then force an impossible result: either every translate has measure zero and their countable union has measure zero, or every translate has positive measure and a bounded union has infinite measure. This is the idea behind a Vitali nonmeasurable set and uses a choice principle to select representatives.

The obstruction is not a defect in interval covering. It proves that the domain of a useful measure cannot include every subset of \(R\).

## 5. Carathéodory's splitting criterion

A set \(E\subseteq R\) is **Lebesgue measurable** if for every test set \(A\subseteq R\),

\(m^*(A)=m^*(A\cap E)+m^*(A\setminus E)\).

Subadditivity always gives \(\le\) in the other direction:

\(m^*(A)\le m^*(A\cap E)+m^*(A\setminus E)\).

Measurability demands the reverse inequality as well. The set \(E\) must split every possible \(A\) cleanly, with no outer-size loss caused by pathological interlacing.

The collection \(M\) of measurable sets is a **sigma-algebra**:

- \(\varnothing\in M\);
- \(E\in M\) implies \(R\setminus E\in M\);
- if \(E_1,E_2,\ldots\in M\), then \(\bigcup E_n\in M\).

The restriction \(m=\left.m^*\right|_M\) is countably additive on pairwise disjoint measurable sets. Proving these facts requires repeated use of the splitting criterion and monotone limiting; the construction is designed precisely so the proof works.

## 6. Open, closed, and Borel sets

Every open interval is measurable. Let \(E\) be an open interval and \(A\) any test set. If \(m^*(A)=\infty\), the required reverse inequality is automatic. Otherwise, given \(\varepsilon>0\), cover \(A\) by open intervals with total length below \(m^*(A)+\varepsilon\). Splitting a covering interval at the endpoints of \(E\) produces interval pieces for its intersections with \(E\) and with \(E^c\), but some pieces may be half closed and hence are not yet admissible in the outer-measure definition. Enlarge those pieces to open intervals, distributing a further total length budget below \(\varepsilon\) across the countable cover. The resulting two open covers show

\(m^*(A\cap E)+m^*(A\setminus E)\le m^*(A)+2\varepsilon.\)

Letting \(\varepsilon\downarrow0\) gives the required reverse inequality. Thus open intervals are measurable using the actual open-cover definition.

Open subsets of \(R\) are countable unions of disjoint open intervals. One way to see countability is to assign a distinct rational number to each component. Therefore open sets are measurable. Complements make closed sets measurable.

The **Borel sigma-algebra** is the smallest sigma-algebra containing the open sets. It contains every set built from open sets by countably many unions, intersections, and complements. All Borel sets are Lebesgue measurable.

Lebesgue measurability is broader: every subset of a null Borel set is measurable, even though some such subsets are not Borel. The Lebesgue sigma-algebra is the completion of the Borel measure with respect to null sets.

## 7. Completeness of Lebesgue measure

If \(N\) is null and \(A\subseteq N\), then \(m^*(A)=0\). For any test set \(T\),

\(m^*(T\cap A)+m^*(T\setminus A)\le 0+m^*(T)=m^*(T)\).

The opposite inequality is subadditivity, so equality holds. Thus every subset of a null set is measurable and null.

A measure space with this property is called **complete**. Completeness here is unrelated to Cauchy sequences, though later the completeness of \(L^p\) spaces will be built on a complete measure theory.

## 8. Countable additivity and continuity of measure

If measurable sets \(E_n\) are pairwise disjoint, then

\(m(\bigcup E_n)=\sum m(E_n)\).

Finite additivity follows directly from the splitting criterion. For the countable case, finite unions give the lower bound for every partial sum, while countable subadditivity gives the upper bound.

Two limit rules are indispensable.

**Continuity from below.** If \(E_1\subseteq E_2\subseteq \ldots\), then

\(m(\bigcup E_n)=\lim m(E_n)\).

Write the union as the disjoint union of \(E_1\) and successive differences.

**Continuity from above.** If \(E_1\supseteq E_2\supseteq \ldots\) and \(m(E_1)<\infty\), then

\(m(\bigcap E_n)=\lim m(E_n)\).

Apply continuity from below to \(E_1\setminus E_n\). The finite-measure hypothesis permits subtraction. Without it, both sides of a naive subtraction can be infinite.

## 9. Limsup, liminf, and events that recur

For sets \((E_n)\), define

\(\liminf E_n=\bigcup_{N=1}^\infty\bigcap_{n\ge N}E_n\),

the points belonging to all sufficiently late sets, and

\(\limsup E_n=\bigcap_{N=1}^\infty\bigcup_{n\ge N}E_n\),

the points belonging to infinitely many sets.

These are measurable when every \(E_n\) is measurable. Always

\(\liminf E_n\subseteq \limsup E_n\).

If \(\sum m(E_n)<\infty\), then \(m(\limsup E_n)=0\). Indeed, for each \(N\),

\(m(\bigcup_{n\ge N}E_n)\le \sum_{n\ge N}m(E_n)\to 0\).

Continuity from above, applied inside a finite-measure tail when needed, gives the claim. This is the first Borel–Cantelli lemma: finite total measure forces almost every point to occur only finitely often. No independence assumption is required for this direction.

## 10. Measurable functions

A function \(f:R\to [-\infty,\infty]\) is measurable if

\[\{x:f(x)>\alpha\}\]

is measurable for every real \(\alpha\). Equivalent definitions use \(\{f\ge \alpha\}\), \(\{f<\alpha\}\), or inverse images of open sets.

Every continuous function is measurable because inverse images of open sets are open. Indicator functions \(1_E\) are measurable exactly when \(E\) is measurable.

Sums, products, maxima, and minima of measurable real-valued functions are measurable where the extended-real operations are defined. Pointwise limits, limsups, and liminfs of measurable functions are measurable. For example,

\(\{\limsup f_n>\alpha\}=\bigcup_{q\in Q,q>\alpha}\bigcap_N\bigcup_{n\ge N}\{f_n>q\}\),

an expression built by countable operations on measurable sets.

Measurability records whether level sets belong to the sigma-algebra. It does not imply continuity, boundedness, or integrability.

## 11. Equality almost everywhere

A statement holds **almost everywhere** if its failure set is null. We write \(f=g\) a.e. when \(\{x:f(x)\ne g(x)\}\) is null.

Integration will treat almost-everywhere equal functions as equivalent. This is natural because changing a function on a null set should not change accumulated size. But pointwise properties may change: the zero function is continuous, while the function equal to 1 on the rationals and 0 on the irrationals is discontinuous everywhere, even though it equals zero almost everywhere.

An almost-everywhere statement is not “true at nearly every sampled point” in a finite empirical sense. It is a precise measure claim about the exceptional set.

## 12. Regular approximation of measurable sets

Lebesgue-measurable sets can be approximated from outside by open sets and from inside by closed sets. For measurable \(E\) of finite measure and every \(\varepsilon>0\), there exist an open \(O\) and closed \(F\) with

\[F\subseteq E\subseteq O\]

and

\(m(O\setminus F)<\varepsilon\).

Outer approximation follows from the interval-cover definition. Inner approximation follows by applying outer approximation to the complement inside a sufficiently large bounded interval, with tail control for unbounded sets.

This **regularity** says a measurable set may be complicated, but up to arbitrarily small measure it is trapped between topologically simple sets. It connects the metric topology of \(R\) to the measure structure.

## 13. Misconceptions and boundaries

- **Every subset of \(R\) has a consistent length.** Vitali sets obstruct a translation-invariant countably additive extension to all subsets.
- **Measure zero means empty or countable.** The Cantor set is uncountable and null.
- **Dense means large measure.** The rationals are dense and null.
- **Outer measure is additive on arbitrary disjoint sets.** Additivity is recovered on measurable sets.
- **Borel and Lebesgue measurable mean the same thing.** Lebesgue measure includes all subsets of Borel null sets.
- **Almost-everywhere equality preserves continuity.** It preserves integral quantities, not pointwise regularity.
- **Continuity from above never needs a finite-measure condition.** That condition prevents an \(\infty-\infty\) argument.
- **Measurable means integrable.** A measurable function may be too large or have infinite support.


## Additional worked applications

**Worked Example 16.2 (A dense open set with a small measure budget).** Enumerate the rationals as $q_1,q_2,\ldots$ and choose an open interval $I_j$ about $q_j$ of length $\varepsilon\,2^{-j-1}$, where $\varepsilon>0$. Their union $O$ is open and contains every rational, hence is dense. Countable subadditivity gives $m(O)\le\sum_j\varepsilon2^{-j-1}=\varepsilon/2<\varepsilon$. Thus an open dense set may have arbitrarily small total measure. The argument does not say that a nonempty open set has measure zero: each chosen interval has positive length, while the prescribed positive budget can be chosen as small as desired.

**Worked Example 16.3 (An interval with exceptional points).** Let $E=(1,4)\cup\{10,11\}$. Monotonicity gives $m(E)\ge m((1,4))=3$. The two added singletons are null, so subadditivity gives $m(E)\le3+0+0=3$. Hence the measure is exactly three, despite the set's larger diameter and its isolated remote points. Length as measure, diameter as a metric quantity, and the number of connected pieces answer different questions.


## The full Carathéodory theorem uses only outer measure

The splitting construction works for any outer measure μ* on any set X. We supply its general proof so that sigma-algebra closure is not an unproved promise hidden in the length construction. Let M be the sets E satisfying μ*(A)=μ*(A intersect E)+μ*(A minus E) for every A. The empty set belongs, and replacing E by its complement merely exchanges the two terms, proving closure under complements.

For E,F in M, split A first by E and then split A minus E by F. The resulting three nonnegative pieces give μ*(A) at least μ*(A intersect (E union F))+μ*(A minus (E union F)), by subadditivity on the first two pieces. The opposite inequality is always subadditivity, so the union belongs to M. Thus finite unions, intersections and differences are available. No subtraction of potentially infinite quantities has been used.

Now let En be disjoint members and put U=union En. Repeated splitting by the first N of them gives

\[
 \mu^*(A)\ge\sum_{n=1}^N\mu^*(A\cap E_n)
             +\mu^*(A\setminus U).
\]

The final remainder is a lower bound for the finite-stage remainder by monotonicity. Letting N grow gives the infinite nonnegative sum. Subadditivity bounds μ*(A intersect U) above by that sum, proving the reverse splitting inequality for U. Hence U belongs to M. For arbitrary countable unions, replace each En by the part not in its predecessors; those differences are measurable by finite closure and are disjoint. Therefore M is a sigma algebra.

For disjoint measurable En, apply finite splitting with A=U to obtain μ*(U) at least every finite sum of their sizes. Passage to the nonnegative sum gives the countable lower inequality; outer subadditivity gives the upper one. Thus μ* restricted to M is countably additive. Finally if N has outer measure zero, every subset B of N satisfies the splitting criterion: μ*(A intersect B)=0 and monotonicity bounds the other part by μ*(A). This proves completeness.

The proof has not used continuity of an already existing measure to establish the measure. Its infinite step uses only a supremum of finite nonnegative sums and the defining subadditivity. Continuity from below and the finite-size continuity from above then follow from countable additivity, as in the opening chapter. This order of implications avoids a circular construction.

For a small countermodel, set μ*(A)=1 for every nonempty subset of a set X with at least two points, and μ*(empty)=0. It is an outer measure, but a proper nonempty E fails the criterion: a two-point test containing one point from each side has outer size one and split sum two. Only empty and X are measurable. This shows that the Carathéodory domain is a substantive restriction, even when the outer-size rule is elementary. The interval construction's additional geometry is what places all Borel sets in its measurable domain.

## Exercises with complete solutions

### ANA-CH16-E001 — Exercise 1: Monotonicity of outer measure

Prove \(A\subseteq B\) implies \(m^*(A)\le m^*(B)\).


<details>
<summary>Hint 1</summary>

Compare the collections of interval covers available for the two sets.

</details>
<details>
<summary>Hint 2</summary>

A cover of the larger set is admissible for the smaller set, so compare their infima.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E001 — Solution

Every interval cover of \(B\) is also a cover of \(A\). The infimum over the larger collection of covers available for \(A\) cannot exceed the infimum for \(B\).


</details>

### ANA-CH16-E002 — Exercise 2: A singleton is null

Prove \(m^*(\{x\})=0\).


<details>
<summary>Hint 1</summary>

Cover the point by an open interval of arbitrarily small length.

</details>
<details>
<summary>Hint 2</summary>

Outer measure is nonnegative and bounded above by every positive tolerance.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E002 — Solution

For every \(\varepsilon>0\), the interval \((x-\varepsilon/2,x+\varepsilon/2)\) covers \(\{x\}\) and has length \(\varepsilon\). Hence outer measure is at most every positive \(\varepsilon\), so it is zero.


</details>

### ANA-CH16-E003 — Exercise 3: Countable sets

Prove every countable subset of \(R\) is null.


<details>
<summary>Hint 1</summary>

Allocate a summable portion of one total length budget to each enumerated point.

</details>
<details>
<summary>Hint 2</summary>

Intervals of lengths following a geometric series keep the entire cover arbitrarily small.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E003 — Solution

Enumerate it as \(\{x_k\}\). Given \(\varepsilon>0\), cover \(x_k\) by an interval of length \(\varepsilon/2^k\). The total length is \(\varepsilon\), so outer measure is zero.


</details>

### ANA-CH16-E004 — Exercise 4: Translation invariance

Show \(m^*(E+t)=m^*(E)\).


<details>
<summary>Hint 1</summary>

Translate every interval in an admissible cover.

</details>
<details>
<summary>Hint 2</summary>

Obtain one inequality, then translate back to obtain its reverse.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E004 — Solution

Translate any interval cover of \(E\) by \(t\); it covers \(E+t\) with the same total length, giving \(m^*(E+t)\le m^*(E)\). Translate back by \(-t\) for the reverse inequality.


</details>

### ANA-CH16-E005 — Exercise 5: Cantor-set estimate

Why does containment in stage \(n\) imply the Cantor set is null?


<details>
<summary>Hint 1</summary>

Count the intervals and their lengths at a finite Cantor stage.

</details>
<details>
<summary>Hint 2</summary>

The stage contains the final set and its total length tends to zero; enlarge closed intervals slightly if open covers are required.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E005 — Solution

Stage \(n\) consists of \(2^n\) intervals of length \(3^{-n}\), total \((2/3)^n\). Slightly enlarge them to open intervals with total length arbitrarily close to this. As \(n\to \infty\), these totals tend to zero, so the outer measure is zero.


</details>

### ANA-CH16-E006 — Exercise 6: Subsets of null sets

If \(A\subseteq N\) and \(N\) is null, prove \(A\) is measurable.


<details>
<summary>Hint 1</summary>

First use monotonicity to prove the subset also has outer measure zero.

</details>
<details>
<summary>Hint 2</summary>

In the splitting criterion one piece is null; combine subadditivity with the opposite monotonicity bound.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E006 — Solution

Monotonicity gives \(m^*(A)=0\). For any test set \(T\), subadditivity gives \(m^*(T)\le m^*(T\cap A)+m^*(T\setminus A)\), while the right side is at most \(0+m^*(T)\). Equality follows, which is Carathéodory's criterion.


</details>

### ANA-CH16-E007 — Exercise 7: Complements

If \(E\) satisfies Carathéodory's criterion, show \(E^c\) does too.


<details>
<summary>Hint 1</summary>

Write out the two pieces in the splitting criterion for the complement.

</details>
<details>
<summary>Hint 2</summary>

They are the original two pieces in the opposite order.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E007 — Solution

The two pieces for \(E^c\) are \(A\cap E^c\) and \(A\setminus E^c=A\cap E\). They are the same two pieces as for \(E\), merely reversed. The equality is unchanged.


</details>

### ANA-CH16-E008 — Exercise 8: Intersection closure

Why are countable intersections of measurable sets measurable?


<details>
<summary>Hint 1</summary>

Use De Morgan’s law.

</details>
<details>
<summary>Hint 2</summary>

Complements and countable unions are already available in the measurable sigma-algebra.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E008 — Solution

Sigma-algebra closure under complements and countable unions gives
\(\bigcap E_n=(\bigcup E_n^c)^c\), which is measurable.


</details>

### ANA-CH16-E009 — Exercise 9: Measure of a disjoint union

If \(E,F\) are disjoint measurable sets of finite measure, find \(m(E\cup F)\).


<details>
<summary>Hint 1</summary>

Apply the splitting equality to the union itself as test set.

</details>
<details>
<summary>Hint 2</summary>

Disjointness identifies the two resulting pieces exactly as the original sets.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E009 — Solution

Apply the splitting criterion for \(E\) to the test set \(E\cup F\). Its intersection with \(E\) is \(E\), and its complement piece is \(F\). Hence \(m(E\cup F)=m(E)+m(F)\).


</details>

### ANA-CH16-E010 — Exercise 10: Continuity from below

Let \(E_n=[0,1-1/n]\) for \(n\ge 2\). Compute the union and verify continuity from below.


<details>
<summary>Hint 1</summary>

Check which endpoint belongs to every increasing interval and which endpoint is never attained.

</details>
<details>
<summary>Hint 2</summary>

Compute the interval lengths and compare their limit with the union’s length.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E010 — Solution

The sets increase and their union is \([0,1)\). Their measures are \(1-1/n\to 1\), equal to \(m([0,1))=1\).


</details>

### ANA-CH16-E011 — Exercise 11: Continuity from above

Let \(E_n=(0,1/n)\). Compute the intersection and verify continuity from above.


<details>
<summary>Hint 1</summary>

A positive point eventually exceeds the shrinking right endpoint.

</details>
<details>
<summary>Hint 2</summary>

After identifying the intersection, check the finite-measure hypothesis needed for continuity from above.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E011 — Solution

The sets decrease and their intersection is empty: no positive real number is below \(1/n\) for all \(n\). Their measures are \(1/n\to 0=m(\varnothing)\). The first set has finite measure, so the theorem applies.


</details>

### ANA-CH16-E012 — Exercise 12: Why finite measure matters

Give decreasing measurable sets of infinite measure whose intersection is empty.


<details>
<summary>Hint 1</summary>

Let a half-line move toward positive infinity.

</details>
<details>
<summary>Hint 2</summary>

Every individual set can have infinite measure even though no fixed point remains in all sets.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E012 — Solution

Take \(E_n=(n,\infty)\). They decrease, every \(m(E_n)=\infty\), and their intersection is empty. Thus \(m(\bigcap E_n)=0\) while \(\lim m(E_n)=\infty\); continuity from above fails without a finite first measure.


</details>

### ANA-CH16-E013 — Exercise 13: Limsup of intervals

Find \(\limsup E_n\) for \(E_n=(0,1/n)\).


<details>
<summary>Hint 1</summary>

Limsup membership means occurring in infinitely many of the sets.

</details>
<details>
<summary>Hint 2</summary>

For a fixed positive point, only finitely many of the shrinking intervals contain it.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E013 — Solution

A point belongs to the limsup if it lies in infinitely many intervals. Every positive \(x\) lies in only finitely many, zero lies in none, and negative points lie in none. Thus the limsup is empty.


</details>

### ANA-CH16-E014 — Exercise 14: First Borel–Cantelli estimate

If \(m(E_n)\le 2^{-n}\), prove almost every point belongs to only finitely many \(E_n\).


<details>
<summary>Hint 1</summary>

Cover the limsup by each tail union.

</details>
<details>
<summary>Hint 2</summary>

Subadditivity bounds those unions by geometric tails tending to zero.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E014 — Solution

The series \(\sum m(E_n)\) converges. For every \(N\), the union of the tail has measure at most \(\sum_{n\ge N}2^{-n}\), which tends to zero. The intersection of these tail unions is \(\limsup E_n\), so it is null.


</details>

### ANA-CH16-E015 — Exercise 15: Indicator measurability

Show \(1_E\) is measurable if and only if \(E\) is measurable.


<details>
<summary>Hint 1</summary>

Describe every superlevel set of a zero-one valued function.

</details>
<details>
<summary>Hint 2</summary>

For the converse, one threshold strictly between zero and one recovers the original set.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E015 — Solution

If \(E\) is measurable, every superlevel set of the indicator is \(R\), \(E\), or \(\varnothing\), depending on the threshold, hence measurable. Conversely, \(\{1_E>1/2\}=E\); measurability of the function makes this set measurable.


</details>

### ANA-CH16-E016 — Exercise 16: Continuous functions

Prove every continuous \(f:R\to R\) is measurable.


<details>
<summary>Hint 1</summary>

Use inverse images of open rays.

</details>
<details>
<summary>Hint 2</summary>

Continuity makes those inverse images open, hence Borel and measurable.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E016 — Solution

For every real \(\alpha\), the set \(\{f>\alpha\}=f^{-1}((\alpha,\infty))\) is open because \(f\) is continuous. Open sets are Borel and therefore Lebesgue measurable.


</details>

### ANA-CH16-E017 — Exercise 17: Almost-everywhere but not continuous

Give a function equal to zero almost everywhere that is discontinuous at every point.


<details>
<summary>Hint 1</summary>

A dense null set can support the exceptional values.

</details>
<details>
<summary>Hint 2</summary>

The rational indicator has both output values in every interval despite its null support.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E017 — Solution

Let \(f=1_Q\). The rationals are countable and null, so \(f=0\) almost everywhere. Every interval contains rational and irrational points, producing function values 1 and 0 arbitrarily close to every point, so \(f\) is nowhere continuous.


</details>

### ANA-CH16-E018 — Exercise 18: Outer regularity use

If \(E\) is null and \(\varepsilon>0\), find an open set \(O\supseteq E\) with \(m(O)<\varepsilon\).


<details>
<summary>Hint 1</summary>

Choose an interval cover from the definition of outer measure zero.

</details>
<details>
<summary>Hint 2</summary>

Its union is open, and countable subadditivity controls its measure by the chosen length budget.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH16-E018 — Solution

By the definition of outer measure zero, cover \(E\) by countably many open intervals with total length below \(\varepsilon\). Their union \(O\) is open, contains \(E\), and has measure at most the sum of the interval lengths, hence below \(\varepsilon\).


</details>

## ANA-CH16-P001 — Project: audit three notions of size

Choose six subsets of \([0,1]\), including a finite set, a countable dense set, the Cantor set, an interval, an open dense set of measure below \(1/10\), and one set described by a limsup. For each, determine or bound cardinality, topological interior/closure, and Lebesgue measure. Every claim must have a cover, compactness, countable-additivity, or continuity-of-measure argument. Finish with a table showing explicitly why cardinal, topological, and measure-theoretic size cannot substitute for one another.

## Chapter synthesis

Outer measure prices arbitrary sets by countable interval covers. Carathéodory's criterion selects exactly the sets that split every test set additively. The resulting sigma-algebra contains topologically generated Borel sets and is completed by all subsets of null sets.

Measure theory changes what can be ignored: null exceptions are invisible to integration but may still be dense, uncountable, or topologically disruptive. Keeping those notions of size separate is the first discipline of Lebesgue analysis.

## Summary

Outer measure is defined for arbitrary sets by countable interval covers, while measurability is the additional splitting property that permits additive accounting. Null sets and their subsets are measurable in the completed theory, but nullness does not imply countability or topological sparseness. Continuity of measure requires its stated monotonicity and finiteness hypotheses. These retained foundations lead to simple-function integration in the next measure chapter; the current classical route instead uses the separate Baire and approximation chapters.

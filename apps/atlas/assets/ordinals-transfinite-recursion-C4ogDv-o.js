var e=`---
parent_id: book-introduction-to-logic-and-set-theory
chapter_id: ordinals-transfinite-recursion
title: "Ordinals and Transfinite Recursion"
level: advanced-undergraduate
license: "CC BY-SA 4.0"
---

# Ordinals and Transfinite Recursion

A sequence indexed by natural numbers has a first value and a successor rule. A longer well-ordered construction must also say what happens after all the earlier values of an infinite initial segment. Ordinals provide canonical positions for such constructions. They describe order, rather than merely the number of objects being ordered: two countable well-orders can have different ordinal types.

We work in ZF. No choice principle is assumed in the theorems of this chapter. Every order under discussion has a set as its domain. A strict well-order is an irreflexive, transitive, linear relation in which each nonempty subset has a least element. The word subset includes arbitrary subsets existing in the ambient theory, rather than only definable subsets. A proper class of all ordinals is useful notation for a formula, but is not a set on which we may invoke Replacement.

## Ordinals are their own initial segments

A set $a$ is transitive if $x\\in y\\in a$ implies $x\\in a$. An ordinal is a transitive set strictly well-ordered by membership. Thus the elements of an ordinal are its earlier positions. The empty set is an ordinal, written $0$. If $\\alpha$ is an ordinal, its successor $\\alpha+1=\\alpha\\cup\\{\\alpha\\}$ is an ordinal. An ordinal is a limit ordinal when it is nonzero and not a successor.

**Lemma 8.1 (Initial segments).** Every element of an ordinal is an ordinal. Every proper downward-closed subset $I$ of an ordinal $\\alpha$ equals some element of $\\alpha$.

*Proof.* If $\\beta\\in\\alpha$, transitivity of $\\alpha$ gives $\\beta\\subseteq\\alpha$. Membership restricted to $\\beta$ remains a well-order. If $x\\in y\\in\\beta$, then $y,\\beta\\in\\alpha$, and transitivity of the ordering on $\\alpha$ gives $x\\in\\beta$. Hence $\\beta$ is transitive and is an ordinal. For the second assertion choose the least $\\beta\\in\\alpha\\setminus I$. Every predecessor of $\\beta$ is in $I$ by minimality. Conversely if $x\\in I$ were $\\beta$ or followed it, downward closure would put $\\beta$ in $I$. Thus $I$ consists exactly of the predecessors of $\\beta$, which are the elements of $\\beta$. ∎

**Lemma 8.2 (Comparison).** For ordinals $\\alpha,\\beta$, exactly one of $\\alpha=\\beta$, $\\alpha\\in\\beta$, or $\\beta\\in\\alpha$ holds.

*Proof.* Their intersection $I$ is downward closed in each. If it is proper in each, the initial-segment lemma gives $I\\in\\alpha$ and $I\\in\\beta$, hence $I\\in I$, contradicting Foundation. It therefore equals at least one of them. If $I=\\alpha\\ne\\beta$, the initial-segment lemma in $\\beta$ gives $\\alpha\\in\\beta$; the other case is symmetric. A strict membership order forbids simultaneous alternatives. ∎

Consequently ordinal inclusion agrees with non-strict ordinal comparison. Write $\\alpha<\\beta$ for $\\alpha\\in\\beta$ and $\\alpha\\le\\beta$ for inclusion. The union of a set of ordinals is an ordinal: it is transitive, its elements are ordinals, comparison makes membership linear, and Foundation gives a least element of every nonempty subset. It is their least upper bound. This proves the existence of set-sized suprema without inventing a last ordinal.

**Worked example 8.3 (Different countable orders).** The least infinite ordinal $\\omega$ has no greatest element. The ordinal $\\omega+1$ has a greatest element, namely $\\omega$, and so cannot be order-isomorphic to $\\omega$. Nevertheless their underlying sets are equinumerous: send the extra element $\\omega$ to $0$, and each natural number $n$ to $n+1$. This is a bijection, but not an order isomorphism. Cardinal size forgets position. Ordinal type preserves it, including whether a final point or a gap after an infinite initial segment is present.

## Induction before recursion

**Theorem 8.4 (Transfinite induction).** Let $P(\\alpha)$ be a formula with fixed set parameters. If, for every ordinal $\\alpha$, the truth of $P(\\beta)$ for all $\\beta<\\alpha$ implies $P(\\alpha)$, then $P$ holds for every ordinal.

*Proof.* If $P$ fails at some ordinal $\\gamma$, use Separation inside $\\gamma+1$ to collect its counterexamples there. This is a nonempty set and therefore has a least ordinal member $\\alpha$. Every smaller ordinal belongs to $\\gamma+1$ and is not a counterexample. The hypothesis now gives $P(\\alpha)$, a contradiction. The proof selected a bounded set of counterexamples after assuming one counterexample; it did not form an unrestricted set of all failures. ∎

At a successor stage, earlier truth includes the immediate predecessor. At a nonzero limit, there is no immediate predecessor: the hypothesis supplies every earlier stage. A proof that handles only the base and successor cases has not completed a transfinite induction. Equally, one should not add a limit case by guessing a value without checking the defining construction.

**Theorem 8.5 (Set-length transfinite recursion).** Suppose a formula specifies a unique set $F(h)$ for every function $h$ whose domain is an ordinal. For every ordinal $\\theta$, there is a unique function $f$ with domain $\\theta$ satisfying
$$f(\\alpha)=F(f\\mathbin{\\upharpoonright}\\alpha)\\qquad(\\alpha<\\theta).$$
Parameters in the specification are fixed. The displayed $F$ may be a definable class operation; it need not be a set function on all histories.

*Proof.* Call a function on an ordinal an approximation if it satisfies the displayed rule at every point of its domain. Two approximations agree on their common domain. Otherwise the least index where they differ has identical earlier histories in both, and functionality of $F$ gives identical values there, a contradiction.

Prove by transfinite induction that an approximation with domain $\\alpha$ exists for every ordinal $\\alpha$. The empty function handles zero. For a general stage $\\alpha$, assume approximations exist for every $\\beta<\\alpha$. Uniqueness just proved makes the statement “$h$ is the approximation on $\\beta$” functional in $\\beta$. Replacement on the set $\\alpha$ therefore collects all these $h$. Their union $u$ is a function, because they agree on overlaps.

If $\\alpha$ is a nonzero limit, the union of the domains $\\beta<\\alpha$ is $\\alpha$, so $u$ is the required approximation; its equation at any index appears in a longer earlier approximation. If $\\alpha=\\gamma+1$, the union has domain $\\gamma$ (including $\\gamma=0$, where it is empty), and it is the approximation there. Adjoin the pair $(\\gamma,F(u))$ to obtain the approximation on $\\alpha$. In each case Pairing, Union and Replacement supply sets, and the functional rule supplies the one new value when needed. This proves existence by induction, and the common-domain argument proves uniqueness. Restricting the approximation on $\\theta$ gives the stated result. ∎

The theorem requires an output on every ordinal-domain history, even histories that never occur in the desired construction. A proposed rule defined only on well-behaved histories can be made total by assigning a fixed default value to the others. One then proves by induction that the constructed histories always have the intended property, so the default is never used. This small step prevents a partial recipe from being mistaken for a recursion theorem.

## Every well-order has an ordinal type

We also need the corresponding recursion theorem on an arbitrary set well-order $(A,\\prec)$. Its proof is the same approximation argument using initial segments $A_{<a}$ in place of ordinals. Two initial-segment approximations agree by the least-disagreement argument. If an initial segment cannot be filled, take its least failing endpoint: Replacement collects the unique approximations at its earlier endpoints, their compatible union fills its predecessor segment, and the functional rule supplies its value, a contradiction. If every endpoint is filled, Replacement on $A$ collects all those approximations and their union fills $A$. This proves existence and uniqueness without first assuming that $A$ has an ordinal type.

Apply this theorem to
$$c(a)=\\{c(b):b\\prec a\\}.$$
The right side is a set by Replacement on $A_{<a}$. Induction along $\\prec$ shows that each $c(a)$ is an ordinal and that $b\\prec a$ implies $c(b)\\in c(a)$. For completeness, at a stage the earlier values form a transitive set: a member of $c(b)$ is $c(d)$ for $d\\prec b$, and transitivity puts $d\\prec a$. They are linearly ordered by membership because their indices are linearly ordered; Foundation supplies well-foundedness. Thus the new value is an ordinal. Different indices have different values, since earlier values belong to later ones and an ordinal does not belong to itself.

Replacement collects $\\gamma=\\{c(a):a\\in A\\}$. The same argument makes $\\gamma$ an ordinal, and $c$ an order isomorphism from $A$ onto $\\gamma$. It is unique: any isomorphism must send each point to the set of images of its predecessors, and uniqueness of recursion fixes those images. We have proved the well-order type theorem in ZF, with no appeal to an unproved choice of representatives.

## Ordinal arithmetic follows the right-hand order

Define addition by recursion on the right argument:
$$\\alpha+0=\\alpha,\\quad \\alpha+(\\beta+1)=(\\alpha+\\beta)+1,\\quad
\\alpha+\\lambda=\\bigcup_{\\beta<\\lambda}(\\alpha+\\beta)$$
for nonzero limit $\\lambda$. It describes placing a copy of $\\beta$ after a copy of $\\alpha$. Multiplication uses
$$\\alpha\\cdot0=0,\\quad\\alpha\\cdot(\\beta+1)=\\alpha\\cdot\\beta+\\alpha,\\quad
\\alpha\\cdot\\lambda=\\bigcup_{\\beta<\\lambda}\\alpha\\cdot\\beta.$$
It describes $\\beta$ consecutive blocks, each of type $\\alpha$. Exponentiation uses $\\alpha^0=1$, $\\alpha^{\\beta+1}=\\alpha^\\beta\\cdot\\alpha$ and the analogous supremum at nonzero limits. These are definitions of ordinals, not the cardinal operations studied next.

**Worked example 8.6 (Addition is not commutative).** Induction on finite $n$ gives $1+n=n+1$. Therefore $1+\\omega=\\bigcup_{n<\\omega}(n+1)=\\omega$: every finite ordinal appears below some term, and every term is finite. In contrast, $\\omega+1$ is the successor ordinal containing $\\omega$ as a last point. Hence $1+\\omega\\ne\\omega+1$. The order interpretation agrees: a first point followed by an infinite sequence can be enumerated in the usual natural order, but an infinite sequence followed by a last point has a different terminal structure.

**Worked example 8.7 (Blocks and limits).** Each $2\\cdot n$ is the finite ordinal with $2n$ points, so their supremum is $\\omega$ and $2\\cdot\\omega=\\omega$. On the other hand, $\\omega\\cdot2=\\omega+\\omega$ consists of two infinite blocks. The first point of the second block has infinitely many predecessors, whereas every point of $\\omega$ has only finitely many. Thus $\\omega\\cdot2\\ne\\omega$. Both orders are countable, so a size calculation alone cannot detect the distinction. When checking a recursive arithmetic computation, identify which argument controls the recursion before simplifying it.

## There is no set of all ordinals

Suppose $O$ were such a set. Its union $\\delta$ would be an ordinal at least as large as every member of $O$. But $\\delta+1$ is an ordinal and would belong to $O$, forcing $\\delta+1\\le\\delta$, impossible. This is the Burali–Forti obstruction in a bounded form. It does not prohibit quantifying over all ordinals in a formula. It prohibits using the described collection as a set input to Pairing, Power Set or Replacement.

The practical lesson is to state a recursive construction for every set-sized length. We may then refer to the coherent values as a definable class sequence, while each restriction is a set function. This distinction becomes essential in the cumulative hierarchy and in models: a model's internal ordinal stages need not match an external observer's ordinal structure unless further well-foundedness hypotheses are given.

## Exercises

<a id="ordinals-transfinite-recursion-ex1"></a>
**Exercise 8.1.** Prove that the successor of an ordinal is an ordinal, identifying transitivity and the least-element property.

<details>
<summary>Hint 1</summary>

The new point is larger than every old point.

</details>
<details>
<summary>Hint 2</summary>

Split a nonempty subset according to whether it contains an old point.

</details>
<details>
<summary>Solution</summary>

Let $s=\\alpha\\cup\\{\\alpha\\}$. Every member of an old element lies in $\\alpha$, and every member of the new element $\\alpha$ lies in $s$, so $s$ is transitive. Membership on the old points is the old well-order; each old point belongs to the new point, while the new point belongs to none of them, by ordinal comparison and irreflexivity. Thus the order remains strict and linear. A nonempty subset meeting $\\alpha$ has the least element of that intersection, which precedes the new point if present. A subset not meeting $\\alpha$ is $\\{\\alpha\\}$ and has that point as least element. Hence $s$ is an ordinal.

</details>

<a id="ordinals-transfinite-recursion-ex2"></a>
**Exercise 8.2.** Show $\\bigcup(\\alpha+1)=\\alpha$ for every ordinal $\\alpha$, including zero.

<details>
<summary>Hint 1</summary>

Transitivity bounds every element of the union.

</details>
<details>
<summary>Hint 2</summary>

The set $\\alpha$ itself belongs to $\\alpha+1$.

</details>
<details>
<summary>Solution</summary>

If $x\\in\\bigcup(\\alpha+1)$, some $y\\in\\alpha+1$ contains it. Either $y=\\alpha$, giving $x\\in\\alpha$ immediately, or $y\\in\\alpha$, giving the same conclusion by transitivity. Conversely, if $x\\in\\alpha$, the witness $y=\\alpha\\in\\alpha+1$ puts $x$ in the union. Extensionality proves equality. For zero both sides are empty, so no exception is needed. This identity does not say that the union of every ordinal is its predecessor: a nonzero limit ordinal equals its own union and has no immediate predecessor at all.

</details>

<a id="ordinals-transfinite-recursion-ex3"></a>
**Exercise 8.3.** Prove every nonempty set of ordinals has a least member, without assuming it has a greatest member.

<details>
<summary>Hint 1</summary>

Foundation supplies a member disjoint from the set.

</details>
<details>
<summary>Hint 2</summary>

Use ordinal comparison to turn minimality into leastness.

</details>
<details>
<summary>Solution</summary>

Let $A$ be a nonempty set of ordinals. Foundation gives $\\alpha\\in A$ with no element in common with $A$. If $\\beta\\in A$ were less than $\\alpha$, then $\\beta\\in\\alpha\\cap A$, a contradiction. Comparison says every $\\beta\\in A$ is therefore equal to or greater than $\\alpha$. Hence $\\alpha$ is least. No upper bound was selected, and a greatest member need not exist, as $A=\\omega$ demonstrates. This argument is also the reason a transitive set of ordinals becomes well-ordered once comparison has established linearity.

</details>

<a id="ordinals-transfinite-recursion-ex4"></a>
**Exercise 8.4.** Explain why a base-and-successor argument alone does not prove a property for every ordinal. Give a property showing the gap.

<details>
<summary>Hint 1</summary>

Consider whether an ordinal is finite.

</details>
<details>
<summary>Hint 2</summary>

The first unhandled stage is $\\omega$.

</details>
<details>
<summary>Solution</summary>

The property “$\\alpha$ is finite” holds at zero and passes from any finite ordinal to its successor. Those two observations prove it for the natural numbers. They do not prove it for $\\omega$, which is a nonzero limit and has no immediate predecessor from which a successor implication could start. In full transfinite induction, one must show the property at a limit from all earlier cases; that step fails for finiteness. A complete proof can use a single implication from all predecessors, but then that implication must genuinely cover limits rather than silently restating only a successor rule.

</details>

<a id="ordinals-transfinite-recursion-ex5"></a>
**Exercise 8.5.** Prove uniqueness in transfinite recursion even when the defining operation is a class formula rather than a set function.

<details>
<summary>Hint 1</summary>

Assume two set-length solutions differ.

</details>
<details>
<summary>Hint 2</summary>

The least disagreement gives the same input history to the functional formula.

</details>
<details>
<summary>Solution</summary>

For solutions $f,g$ on the same ordinal $\\theta$, Separation gives the subset of indices where their values differ. If nonempty, choose its least member $\\alpha$. Their restrictions to $\\alpha$ agree pointwise and are equal set functions by Extensionality. The rule defines a unique output on this common history, so $f(\\alpha)=F(f\\upharpoonright\\alpha)=F(g\\upharpoonright\\alpha)=g(\\alpha)$, a contradiction. The argument quantifies only over the two existing set functions and the defining formula. It never requires the graph of the operation on all possible histories to be a set.

</details>

<a id="ordinals-transfinite-recursion-ex6"></a>
**Exercise 8.6.** Describe the order type of the integers with order $0\\prec1\\prec2\\prec\\cdots\\prec-1\\prec-2\\prec-3\\prec\\cdots$.

<details>
<summary>Hint 1</summary>

There are two consecutive natural-number blocks.

</details>
<details>
<summary>Hint 2</summary>

Map the second block's $n$th point to $-(n+1)$.

</details>
<details>
<summary>Solution</summary>

The order is a well-order: a nonempty subset with a nonnegative integer has a least such integer, and otherwise the positive indices of its negative entries have a least value. The first block has type $\\omega$, and the second block, in the specified order rather than the usual integer order, also has type $\\omega$. Thus its type is $\\omega+\\omega=\\omega\\cdot2$. The isomorphism sends $n$ in the first block to integer $n$ and the point $\\omega+n$ to $-(n+1)$. It is not the usual order on the integers, which has no least element and hence no ordinal type.

</details>

<a id="ordinals-transfinite-recursion-ex7"></a>
**Exercise 8.7.** Compute $3+\\omega$, $\\omega+3$, $3\\cdot\\omega$, and $\\omega\\cdot3$, and explain which equalities are ordinal equalities.

<details>
<summary>Hint 1</summary>

Use the supremum clause for a right-hand $\\omega$.

</details>
<details>
<summary>Hint 2</summary>

A finite right argument gives that many successive blocks.

</details>
<details>
<summary>Solution</summary>

For finite $n$, $3+n$ and $3\\cdot n$ are finite ordinals, and each sequence is unbounded in the finite ordinals. Their suprema are therefore $\\omega$, giving $3+\\omega=\\omega$ and $3\\cdot\\omega=\\omega$. The ordinal $\\omega+3$ has three points after the first infinite block and in particular a last point, so it differs from $\\omega$. Finally $\\omega\\cdot3=\\omega+\\omega+\\omega$ has three infinite blocks. The first point of each later block has infinitely many predecessors, so this order is also different from $\\omega$. All four sets are countable; equinumerosity does not justify replacing their ordinal types by one another.

</details>

<a id="ordinals-transfinite-recursion-ex8"></a>
**Exercise 8.8.** Prove that a strictly increasing sequence of ordinals indexed by a nonzero limit $\\lambda$ has a supremum with no greatest member of its range.

<details>
<summary>Hint 1</summary>

Every index has a larger index below $\\lambda$.

</details>
<details>
<summary>Hint 2</summary>

The supremum is the union of the range, supplied by Replacement and Union.

</details>
<details>
<summary>Solution</summary>

Let $f:\\lambda\\to\\mathrm{Ord}$ be strictly increasing. For each $\\alpha<\\lambda$, its successor is still below $\\lambda$, so $f(\\alpha)<f(\\alpha+1)$. Thus no value is greatest in the range. Replacement makes the range a set of ordinals, and its union $\\delta$ is their supremum. If $\\delta$ equalled a range value, that value would bound all later values, contradicting strict increase. Hence every value is strictly below $\\delta$. This does not assert that every increasing ordinal sequence is continuous at its own indices; continuity would additionally require its value at a limit to equal the supremum of earlier values.

</details>

<a id="ordinals-transfinite-recursion-ex9"></a>
**Exercise 8.9.** Repair a recursion rule specified only for histories whose earlier values are ordinals.

<details>
<summary>Hint 1</summary>

The recursion theorem needs a unique output on every ordinal-domain history.

</details>
<details>
<summary>Hint 2</summary>

Give unsuitable histories the fixed output zero.

</details>
<details>
<summary>Solution</summary>

Define a total rule: on a history all of whose values are ordinals, use the proposed uniquely specified ordinal output; on any other history, output $0$. The condition is first-order expressible over the set history, so this is a functional formula. Recursion gives a set-length solution for this total rule. Transfinite induction shows that every history actually reached has ordinal values: the empty history does, and if all earlier values are ordinals the intended clause returns an ordinal. Consequently the default clause is never used, and the solution satisfies the original intended specification. Both totalisation and the invariant argument are required for this repair.

</details>

<a id="ordinals-transfinite-recursion-ex10"></a>
**Exercise 8.10.** Why does the existence of a supremum for each set of ordinals not provide a greatest ordinal?

<details>
<summary>Hint 1</summary>

Every ordinal has a strictly greater successor.

</details>
<details>
<summary>Hint 2</summary>

A hypothetical set of all ordinals contradicts its own supremum bound.

</details>
<details>
<summary>Solution</summary>

The supremum theorem begins with a set $A$ of ordinals and constructs $\\bigcup A$. It does not assert that the collection of all ordinals is a set. If it were a set $O$, its union $\\delta$ would bound every member. The successor $\\delta+1$ is nevertheless an ordinal, hence would belong to $O$ and would have to be at most $\\delta$, impossible. Independently, any alleged greatest ordinal $\\gamma$ has the greater ordinal $\\gamma+1$. The set-size hypothesis is therefore essential, and applying Union to the proper class of all ordinals would simply skip the missing premise.

</details>

## Summary

Ordinals code well-ordered positions by their predecessor sets. Comparison, initial segments and set-sized suprema support transfinite induction. Recursion requires a unique value determined by an entire earlier history; Replacement collects those histories and Union glues compatible ones. Every set well-order has one ordinal type. Ordinal arithmetic tracks concatenated orders and is generally noncommutative. All these constructions take place in ZF, while the collection of every ordinal remains a proper class.

## Sources and further reading

New exposition for this book. Herbert B. Enderton, *Elements of Set Theory*, is the benchmark for well-orders and ordinal constructions. Martin Bays' author-written [*B1.2 Set Theory*](https://people.maths.ox.ac.uk/~bays/teaching/b1set/B1.2.pdf) offers another treatment of ordinal induction, recursion and order types. The chapter proves the recursion and collapse facts it uses; it does not assume a well-ordering of arbitrary sets.
`;export{e as default};
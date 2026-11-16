var e=`---
parent_id: book-cryptography
chapter_id: elliptic-curve-cryptography
title: "Elliptic-Curve Cryptography"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Elliptic-Curve Cryptography

An elliptic curve supplies a finite group in which the group operation is geometric in origin and algebraic in implementation. Cryptographic theorems still need a specified subgroup, encoding and hardness experiment. The curve equation alone is not a security claim. This chapter develops exact small-field arithmetic, instantiates the ElGamal reduction in additive notation and derives the algebraic consequence of a reused signature nonce.

The number-theory source “Elliptic Curves: Group Law, Reduction, and Descent” is the arithmetic seed. Its rational-point and descent topics remain there. Here use a finite prime field of characteristic other than two or three and a selected prime-order subgroup. The theorem that a nonsingular projective cubic with an identity has the stated abelian group law is an algebraic input; associativity is not proved merely by checking a few additions.

## Coordinates and scalars use different moduli

Over $\\mathbb F_p$, take $E:y^2=x^3+Ax+B$ with $4A^3+27B^2\\ne0$. Add the point at infinity $O$ as identity. For a point $(x,y)$ the inverse is $(x,-y)$. Select a point $P$ of prime order $q$ and work in $G=\\langle P\\rangle$. Coordinate arithmetic is modulo $p$; scalar arithmetic is modulo $q$. These primes need not be equal.

For distinct points with different first coordinates, the slope is $(y_2-y_1)/(x_2-x_1)$. For doubling with nonzero $y_1$, it is $(3x_1^2+A)/(2y_1)$. The output coordinates are the slope squared minus the two input first coordinates, and the slope times $x_1-x_3$ minus $y_1$. Every denominator is inverted in the field.

Exceptional cases are part of the operation: adding $O$ returns the other point, a point plus its inverse gives $O$, and a point with zero second coordinate doubles to $O$. The formulas with a denominator zero do not define those cases by division. Nor do these short-Weierstrass formulas claim to cover characteristic two or three unchanged. A chosen representation must express the identity and all legal branch cases.

## Worked example 1: a nineteen-point curve

Use $E:y^2=x^3+2x+2$ over $\\mathbb F_{17}$. Its nonsingularity quantity is $140\\equiv4$, so the curve is nonsingular. The point $P=(5,1)$ lies on it because the right side is $137\\equiv1$. For doubling, the slope is $77/2\\equiv9\\cdot9\\equiv13$. Then $x_3=13^2-10\\equiv6$ and $y_3=13(5-6)-1\\equiv3$, so $2P=(6,3)$. Adding $P$ again gives slope two and $3P=(10,6)$.

The first coordinates giving square right sides are $0,3,5,6,7,9,10,13,16$. Their right-side values are respectively $2,1,1,9,2,1,2,15,16$. Each is a nonzero quadratic residue modulo seventeen and has two square roots. The other eight first coordinates give nonsquares. Thus there are eighteen affine points and $O$, for nineteen points in total. Since nineteen is prime and $P\\ne O$, Lagrange's theorem makes $P$ a generator of the whole group.

The field prime is seventeen while the scalar order is nineteen. Doubling used an inverse modulo seventeen; a secret scalar or signature inverse below uses modulo nineteen. Substituting one modulus for the other would change the operation and can invalidate an otherwise plausible-looking calculation. The small count is an explicit finite argument, not a claim of practical hardness.

## Scalar multiplication and an exact algorithm

Double-and-add computes $[a]P$ from the binary expansion of a nonnegative integer. Keep a point accumulator $R$, current base $Q$ and remaining scalar $r$ with invariant $R+[r]Q=[a]P$. Initially use $R=O,Q=P,r=a$. For odd $r$, add $Q$ to $R$, double $Q$ and replace $r$ by $(r-1)/2$. For even $r$, double $Q$ and halve $r$. The group laws verify both updates, and the decreasing scalar proves termination.

This gives logarithmically many group additions and doublings. It is an operation-count theorem, not a timing-leakage theorem: branching on secret bits can expose information outside a black-box group experiment. Negative scalars use inversion; zero returns $O$. Reducing a scalar modulo $q$ preserves its action on the selected subgroup, but not necessarily on an arbitrary point outside it.

## Additive ElGamal and its reduction

Generate a uniform secret scalar $x$ modulo $q$ and public point $X=[x]P$. Messages are points $M\\in G$. With independent uniform $a$, encrypt as
$$R=[a]P,\\qquad S=M+[a]X.$$
Decrypt by $S-[x]R$, which equals $M$ because scalar multiplication commutes through the integer product. Every point in the formula belongs to the chosen group.

Assume additive DDH for the generated family: distinguish $(P,[x]P,[a]P,[xa]P)$ from the corresponding tuple with an independent uniform subgroup point in the last position. The public descriptions and scalar distributions are part of that assumption.

**Theorem 10.1 (Elliptic subgroup ElGamal).** The chosen-plaintext guessing advantage is bounded by the additive-DDH probability gap of the following efficient reduction.

*Proof.* Given a challenge tuple, use its second point as the public key. Receive two legal message points from the adversary, sample a hidden bit, and return the third point together with the selected message plus the fourth. In the real tuple this is exactly honest encryption with independent uniform secret and ephemeral scalars. In the random tuple, conditional on the other points and chosen messages, the fourth point is uniform independent in $G$. Addition by a fixed message permutes $G$, so the resulting second ciphertext point is uniform for either hidden choice. The ideal guess succeeds with probability one half. Output whether the adversary guessed correctly; its probability gap is the claimed guessing advantage. The wrapper uses one adversary execution and a group addition, plus public encryption simulation if requested. ∎

This theorem is the group-based reduction specialised to the actual additive encoding, not a proof that every elliptic subgroup satisfies DDH. A curve with special structure or a different adversarial interface requires its own analysis. General arithmetic correctness and a conditional hardness assumption are kept separate.

## Worked example 2: a point-message ciphertext

On the small nineteen-point group, take secret two and public point $X=2P=(6,3)$. With message $P$ and ephemeral scalar one, encryption returns $R=P$ and $S=P+2P=3P=(10,6)$. Decryption subtracts $2R=2P$ and recovers $P$.

The displayed ephemeral scalar makes the example transparent rather than secret. In the theorem it is sampled as stated, and an adversary does not receive it directly. Sending arbitrary field coordinates as messages would not automatically meet the point-message domain: they must lie in the selected group. A byte-message construction needs an explicit encoding or an independently analysed hybrid scheme.

## A scalar-signature calculation

For a public signing point $Q=[d]P$ of odd prime order $q$, a common scalar-signature pattern chooses nonzero nonce $k$, computes $[k]P$, and takes its first coordinate reduced modulo $q$ as $r$. Let $e$ be the message hash interpreted as a scalar. Define $s=k^{-1}(e+rd)\\pmod q$, retrying when the required nonzero conditions fail. Verification computes $s^{-1}e$ and $s^{-1}r$, forms their linear combination of $P,Q$, and compares its first-coordinate scalar with $r$.

Correctness follows because that point is $[s^{-1}(e+rd)]P=[k]P$. This is a round-trip argument with the coordinate, scalar and nonzero hypotheses stated. It is not a full unforgeability proof for an unspecified signature standard or hash model. The following nonce-reuse consequence is another exact algebraic claim under its explicit shared-nonce hypothesis.

## Worked example 3: recovering a repeated nonce

Use $q=19$, secret $d=3$ and nonce $k=2$, so $[k]P=(6,3)$ and $r=6$. For hash scalars four and seven, the signatures' second components are eleven and three: the inverse of two modulo nineteen is ten, so the formulas give $10(4+18)=11$ and $10(7+18)=3$ modulo nineteen.

Subtracting the signature equations gives $k(s_1-s_2)=e_1-e_2$. Here the inverse of eight modulo nineteen is twelve, so $k=(-3)\\cdot12\\equiv2$. Then $d=(s_1k-e_1)r^{-1}=(22-4)\\cdot16\\equiv3$, since six has inverse sixteen. Both unknown scalars are recovered from the two observed equations.

The calculation assumes the same nonce, a nonzero $r$, and distinct second components so their difference is invertible. Equal first-coordinate scalars alone need not establish the same nonce: different points can share a first coordinate, and reduction modulo $q$ can create additional coincidences. The exact reuse hypothesis is what licenses the displayed subtraction argument.

## Subgroup membership belongs to the interface

Checking the curve equation proves curve membership, not automatically membership in the selected prime-order subgroup. If a subgroup test uses $[q]Q=O$, its sufficiency depends on the whole curve group's structure. For example, when the total order is $hq$ with $q$ not dividing $h$, that condition identifies the unique subgroup of order $q$ in the finite abelian group. Without an appropriate structural hypothesis, simply annihilating a point by $q$ is not a general proof that it lies in the particular generated cyclic subgroup.

The security theorem assumes legal subgroup elements and canonical encodings. Extending a receiver to arbitrary bitstrings must specify decoding, identity policy and rejection behaviour. It cannot apply a subgroup distribution argument to points from another curve or a larger group without another theorem. These are domain conditions on the mathematics being executed.

## An explicit generic discrete-log algorithm

For known order $q$, let $b=\\lceil\\sqrt q\\rceil$. Store the points $[j]P$ for $0\\le j<b$. Given $Q=[x]P$ with $0\\le x<q$, search the points $Q-[ib]P$ for $0\\le i<b$ against that table. Since $q\\le b^2$, some representation $x=ib+j$ lies in those ranges. A match yields the scalar modulo $q$, which can be checked by multiplication.

The group-operation count and storage are on the order of $\\sqrt q$, with lookup costs depending on the table representation. The algorithm is an upper bound and does not prove an unconditional lower bound for every concrete elliptic curve. It does show why the order and encoding length matter to any resource claim. A tiny prime-order group remains easy to search despite having exactly the algebraic structure used in an asymptotic assumption.

## Worked example 4: equivalent coordinate representations

An affine point can also be represented in Jacobian-style coordinates by $(X,Y,Z)$ with nonzero $Z$, interpreted as $x=X/Z^2$ and $y=Y/Z^3$. The curve equation becomes $Y^2=X^3+AXZ^4+BZ^6$. Scaling by a nonzero field element according to $(X,Y,Z)\\mapsto(\\alpha^2X,\\alpha^3Y,\\alpha Z)$ preserves both the equation and the represented affine point. Identity and invalid-coordinate cases still require their own representation rules.

For the point $(5,1)$ over seventeen, choose $Z=2$. Then $X=5\\cdot4\\equiv3$ and $Y=8$, giving $(3,8,2)$. Recovering the affine coordinates uses $4^{-1}=13$, so $x=3\\cdot13\\equiv5$, and $y=8/8=1$. The projective-form equation has both sides congruent to thirteen, verifying that this is the same legal point in the alternative representation.

Two such nonidentity representations agree precisely when their cross-products satisfy $X_1Z_2^2=X_2Z_1^2$ and $Y_1Z_2^3=Y_2Z_1^3$. These conditions avoid demanding literal equality of stored triples. They follow by multiplying the affine equalities by nonzero denominators, and conversely those denominators can be inverted to recover the affine equalities. Thus representation equality has its own exact predicate.

Changing coordinates can reduce the number of explicit field inversions in an arithmetic routine. It does not automatically make every chosen addition formula complete at all inputs, nor prove constant timing. Each formula has applicability and identity conditions. An implementation theorem must connect its representation invariant and exceptional branches to the abstract group operation. The algebraic representation above supplies a starting contract, not an unproved claim about a particular collection of machine formulas.

This is another reason subgroup and point encodings belong in the security interface. Two different valid encodings might denote the same mathematical point, while an invalid triple might denote none. A verifier or protocol may need a canonical encoding to decide equality of transmitted objects consistently. Treating raw coordinate bytes as if they were already unique group elements would skip that representation step, even when every affine example in the chapter was calculated correctly.

## Exercises

### Exercise 1
<a id="elliptic-curve-cryptography-ex-1"></a>
Verify $3P=(10,6)$ from $P=(5,1)$ and $2P=(6,3)$ on the curve over seventeen.

<details><summary>Hint 1</summary>

The two first coordinates differ by one.

</details>
<details><summary>Hint 2</summary>

Use slope two and reduce both output coordinates modulo seventeen.

</details>
<details><summary>Solution</summary>

The slope is $(3-1)/(6-5)=2$. The first coordinate is $4-5-6=-7\\equiv10$ and second is $2(5-10)-1=-11\\equiv6$. Substitution gives $6^2\\equiv2$ and $10^3+2\\cdot10+2\\equiv2$, so the output lies on the curve. All divisions and coordinate reductions here are modulo seventeen, not the scalar order nineteen.

</details>

### Exercise 2
<a id="elliptic-curve-cryptography-ex-2"></a>
Explain why the nineteen-point count makes every nonidentity point generate the whole group.

<details><summary>Hint 1</summary>

An element order divides the group order.

</details>
<details><summary>Hint 2</summary>

A prime has only two positive divisors.

</details>
<details><summary>Solution</summary>

Lagrange's theorem makes the point order divide nineteen. A nonidentity point cannot have order one, so its order is nineteen. Its cyclic subgroup therefore has the same size as the full group and equals it. The argument uses the established exact count and primality; nonsingularity or point membership alone would not imply that order statement for an arbitrary curve.

</details>

### Exercise 3
<a id="elliptic-curve-cryptography-ex-3"></a>
Prove the odd-scalar update of the double-and-add invariant.

<details><summary>Hint 1</summary>

Update the accumulator to $R+Q$ and the base to $2Q$.

</details>
<details><summary>Hint 2</summary>

The remaining scalar becomes $(r-1)/2$.

</details>
<details><summary>Solution</summary>

The updated expression is $(R+Q)+[(r-1)/2](2Q)=R+[1+r-1]Q=R+[r]Q$. The group laws therefore preserve the target multiple. Positive odd $r$ strictly decreases to a nonnegative integer, supplying termination together with the invariant. A resource theorem counts group operations; it does not establish constant timing of the conditional update on a particular machine.

</details>

### Exercise 4
<a id="elliptic-curve-cryptography-ex-4"></a>
In the additive ElGamal reduction, why does a random fourth tuple point hide either chosen point-message?

<details><summary>Hint 1</summary>

Condition on the public key, first ciphertext point and chosen messages.

</details>
<details><summary>Hint 2</summary>

Translation by a fixed group point is a permutation.

</details>
<details><summary>Solution</summary>

The ideal fourth point remains independent uniform in the selected subgroup under that conditioning. Adding either fixed message preserves its uniform distribution. Thus the challenge's second point has the same distribution for either hidden choice and the ideal guessing success is one half. The conclusion depends on subgroup membership and the exact DDH comparison distribution, not merely on a coordinate pair looking random.

</details>

### Exercise 5
<a id="elliptic-curve-cryptography-ex-5"></a>
Derive the repeated-nonce formulas for $k$ and $d$, listing the required nonzero denominators.

<details><summary>Hint 1</summary>

Multiply each signature equation by the shared nonce and subtract.

</details>
<details><summary>Hint 2</summary>

Then substitute the recovered nonce into one original equation.

</details>
<details><summary>Solution</summary>

The equations are $ks_i=e_i+rd$. Subtraction gives $k=(e_1-e_2)/(s_1-s_2)$ when the difference is nonzero modulo prime $q$. Then $d=(ks_1-e_1)/r$ when $r\\ne0$. These inverses are scalar-field inverses modulo $q$. The argument assumes actual reuse of the nonce and does not infer that solely from a matching reduced first-coordinate value.

</details>

### Exercise 6
<a id="elliptic-curve-cryptography-ex-6"></a>
For the first displayed signature, verify that the reconstructed point is $2P$ using $s^{-1}=7$ modulo nineteen.

<details><summary>Hint 1</summary>

The two verification scalars are nine and four.

</details>
<details><summary>Hint 2</summary>

The public point is $3P$.

</details>
<details><summary>Solution</summary>

$s^{-1}e=7\\cdot4\\equiv9$ and $s^{-1}r=7\\cdot6\\equiv4$. Hence the point is $9P+4(3P)=21P=2P$ modulo the order nineteen. Its first coordinate is six, matching the signature's $r$. The calculation uses modulo nineteen for scalars and modulo seventeen for the stored point coordinates, illustrating the two distinct arithmetic domains.

</details>

### Exercise 7
<a id="elliptic-curve-cryptography-ex-7"></a>
Why does a curve-equation check not generally prove membership in a chosen prime-order subgroup?

<details><summary>Hint 1</summary>

The full curve group can contain more than that subgroup.

</details>
<details><summary>Hint 2</summary>

An annihilation test needs a structural argument about the total group order.

</details>
<details><summary>Solution</summary>

The equation identifies a point on the full curve, which can have other subgroup components. A condition such as $qQ=O$ proves membership in the desired cyclic subgroup only when the group structure makes the $q$-torsion exactly that subgroup, as under the stated coprime-cofactor condition. Without such a hypothesis another argument is required. A security theorem on uniformly generated elements of one subgroup cannot be applied to arbitrary curve points unchanged.

</details>

### Exercise 8
<a id="elliptic-curve-cryptography-ex-8"></a>
Prove completeness of the baby-step/giant-step search from the bound $q\\le b^2$.

<details><summary>Hint 1</summary>

Divide the unknown representative scalar by $b$.

</details>
<details><summary>Hint 2</summary>

Its quotient and remainder fall into the searched ranges.

</details>
<details><summary>Solution</summary>

For $0\\le x<q\\le b^2$, integer division gives $x=ib+j$ with $0\\le j<b$ and $0\\le i<b$. Thus $Q-[ib]P=[j]P$ appears in the stored baby-step table at the matching giant step. This proves that some match is found for every legal input. Checking its scalar multiple confirms the answer under the representation. The proof establishes an algorithmic upper bound and no universal lower bound for other attacks.

</details>

### Exercise 9
<a id="elliptic-curve-cryptography-ex-9"></a>
What result should addition return when two input points are inverses, and why is substituting a zero denominator not an implementation of that rule?

<details><summary>Hint 1</summary>

A point and its inverse sum to the group identity.

</details>
<details><summary>Hint 2</summary>

The affine slope formula has a different applicability condition.

</details>
<details><summary>Solution</summary>

Return $O$. The inverse-pair branch is a group-law case outside the different-first-coordinate formula, whose denominator would be zero. Zero has no field inverse, so continuing that division does not produce the identity through arithmetic. A representation must handle $O$ explicitly or through another complete coordinate system with its own rules. The exceptional case is part of correctness, not evidence that the group law is undefined.

</details>

### Exercise 10
<a id="elliptic-curve-cryptography-ex-10"></a>
Does a proof of a signature verification identity establish its full unforgeability? Name the separate objects still needed for that security statement.

<details><summary>Hint 1</summary>

Correctness covers honestly generated inputs.

</details>
<details><summary>Hint 2</summary>

A forgery experiment includes adversarial queries, randomness and a success event.

</details>
<details><summary>Solution</summary>

No. The identity proves that the honest scalar construction verifies under its nonzero and group hypotheses. Unforgeability additionally needs the generated key/group/hash distributions, signing and other oracle interfaces, message freshness definition, adversary resources and a proved reduction to stated assumptions. The chapter supplies the additive-DDH encryption reduction and the exact nonce-reuse consequence, not an unproved security theorem for an unspecified signature standard.

</details>

## Summary and provenance

Finite-field coordinates and subgroup scalars have different moduli. Exact point arithmetic, exceptional cases and membership hypotheses support the selected group interface. Additive ElGamal has a complete DDH reduction; scalar-signature correctness and nonce leakage are separate algebraic results. Generic discrete-log search gives an explicit upper bound without proving a universal security lower bound.

The arithmetic seeds are the retained Number Theory elliptic-curve chapter and Finite Algebra's cryptography chapter, including the seventeen-field doubling example. Their original hypotheses, solutions and wider theory remain there. Katz and Lindell, *Introduction to Modern Cryptography*, is the security benchmark. New reductions and exercise data are stated fully within this chapter.
`;export{e as default};
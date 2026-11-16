var e=`---
id: visual-lab-number-theory-cryptography
title: "Modular Arithmetic, RSA, and Elliptic Curves Workbench"
level: undergraduate
estimated_minutes: 145
license: CC BY-SA 4.0
---

# Modular Arithmetic, RSA, and Elliptic Curves Workbench

[Open the live workbench](#/labs?lab=visual-lab-number-theory-cryptography)

This instrument joins three exact finite calculations:

1. generalized Chinese remainder compatibility;
2. a deliberately tiny RSA round trip with repeated-squaring traces;
3. a nonsingular elliptic-curve point group over a tiny prime field.

All controls are native keyboard-operable form elements. The elliptic plot is static and supplementary; complete Euclidean, exponentiation, point, and scalar-multiple tables remain the authoritative text route. No panel contains production cryptography.

## 1. Begin with overlapping clocks

The opening system is

$x≡2 (\\pmod{6})$, $x≡5 (\\pmod{9})$.

The moduli are not coprime: their gcd is 3. Yet 2 and 5 have the same residue modulo 3, so the demands agree wherever the clocks overlap. The solution is

$x≡14 (\\pmod{18})$.

Verify: 14 leaves remainder 2 after division by 6 and remainder 5 after division by 9. The period is lcm(6,9)=18, not the product 54.

Switch to the inconsistent preset:

$x≡1 (\\pmod{4})$, $x≡2 (\\pmod{6})$.

The gcd is 2. The residues disagree modulo 2: the first condition requires odd x and the second even x. No amount of search can repair this conflict.

### General theorem implemented

For positive moduli m,n, the system

$x≡a (\\pmod{m})$, $x≡b (\\pmod{n})$

has a solution exactly when $gcd(m,n)|(b-a)$. When it does, solutions form one class modulo $lcm(m,n)$.

The algorithm writes x=a+mt, substitutes in the second congruence, divides the resulting equation by g, and inverts m/g modulo n/g. The reduced moduli are coprime, so that inverse exists.

## 2. Read the Euclid certificate

The Euclidean table lists equations

$dividend = quotient\\cdot divisor + remainder$.

The last nonzero remainder is the gcd. Extended Euclid also produces coefficients u,v with

$um+vn=gcd(m,n)$.

This identity independently certifies the result. It also constructs the inverse used after the CRT system is reduced. If a proposed inverse z of c modulo m is shown, check both:

- gcd(c,m)=1;
- $cz \\pmod{m} = 1$.

An inverse is absent when the gcd exceeds 1. “Division modulo m” is multiplication by an inverse, not ordinary fraction notation.

## 3. RSA panel: arithmetic only

The worked values are

$p=11$, $q=17$, $n=187$, $\\varphi (n)=160$, $e=7$.

Extended Euclid gives d=23 because

$7\\cdot 23=161≡1 (\\pmod{160})$.

For message representative M=42,

$C=42^7 \\pmod{187}=15$,

$15^23 \\pmod{187}=42$.

The table uses binary repeated squaring. At every row, the exponent’s low bit decides whether the current base is multiplied into the accumulator. The base is squared, the remaining exponent halved, and all values reduced modulo n.

### Why decryption works for nonunits too

Writing $ed=1+k\\varphi (n)$ and applying Euler directly works only when gcd(M,n)=1. Correctness for every residue needs a prime-by-prime proof.

Modulo p:

- if p divides M, both $M^{ed}$ and M are zero;
- otherwise Fermat gives $M^{p-1}≡1$, and p−1 divides φ(n), so $M^{ed}≡M$.

Repeat modulo q. Since p,q are coprime, CRT implies equality modulo n.

### Deliberate rejection experiments

- Choose p=q. The panel rejects repeated primes because the displayed φ formula and two-prime proof contract assume distinct primes.
- Choose an e sharing a factor with φ(n). No private inverse exists.
- Move M outside $0,\\ldots ,n-1$ after changing primes. The representative is rejected rather than silently normalized; this keeps the displayed message domain explicit.

The parser admits only a small prime list. This is input validation for the lesson, not cryptographic prime generation.

## 4. Why the RSA example is insecure

The primes are public on screen and factorization is immediate. More fundamentally, textbook exponentiation is deterministic: the same message always gives the same cipher. Anyone with the public key can encrypt likely messages and compare.

The panel omits randomized encoding, authenticated composition, key sizes, entropy, side-channel control, parsing rules, failure behavior, and a security definition. Its justified claim is:

> The displayed integer algorithms produce the displayed round trip for a validated tiny key and message.

It does not establish confidentiality, unforgeability, CCA security, or a deployable protocol. The exact-table design is pedagogically valuable precisely because no security-by-obscurity claim is possible.

## 5. Build a finite elliptic curve

Choose an odd prime p and coefficients a,b. The panel considers

$E\\colon y^{2}≡x^{3}+ax+b (\\pmod{p})$.

It first checks

$4a^{3}+27b^{2} \\not\\equiv 0 \\pmod{p}$.

In characteristic three, this quantity reduces to a³, so the exact condition is a≠0. For this short model the affine partial derivatives are −a and 2y; when a≠0 they cannot vanish together, while the point at infinity is nonsingular because its projective Z-derivative is one. If a=0, x³+b has a root and y=0 gives a singular point. The same chord and tangent formulas apply; the tangent numerator becomes a and the denominator remains 2y. This describes the stated short model in characteristic three, without asserting that every characteristic-three elliptic curve has that form.

If this quantity is zero, the cubic is singular. Select **Singular non-example**: the panel preserves the coefficients so the failure remains inspectable, rejects the curve, and performs no point or group operation. There is no elliptic-curve group under the advertised rule in that state.

For a valid curve, the table visits every x in $0,\\ldots ,p-1$, computes the right side, and lists every y whose square matches. Add the identity point $\\mathcal{O}$.

The default curve

$y^{2}≡x^{3}+2x+1 (\\pmod{5})$

has affine points

$(0,1),(0,4),(1,2),(1,3),(3,2),(3,3)$

and $\\mathcal{O}$, seven points total. Hasse’s bound checks the plausible range:

$|7-(5+1)|=1\\le 2\\sqrt{5}$.

## 6. Add points exactly

For distinct nonvertical points P,Q, the slope is

$\\lambda =(y_Q-y_P)(x_Q-x_P)^{-1} \\pmod{p}$.

For doubling P with y≠0,

$\\lambda =(3x_P^{2}+a)(2y_P)^{-1} \\pmod{p}$.

Then

$x_R=\\lambda ^{2}-x_P-x_Q$,

$y_R=\\lambda (x_P-x_R)-y_P$.

If Q=−P, the line is vertical and the sum is $\\mathcal{O}$. A point with y=0 doubles to $\\mathcal{O}$ because its tangent is vertical.

Choose the **Vertical tangent** preset. On $y^{2}=x^{3}+x$ modulo 5, P=(0,0) lies on the curve and 2P=$\\mathcal{O}$. A naïve formula would try to invert denominator 0; the branch must be handled before inversion.

## 7. Follow a complete cyclic subgroup

On the default seven-point curve, choose P=(0,1). The multiples table reads

$0P=𝒪$

$1P=(0,1)$

$2P=(1,3)$

$3P=(3,3)$

$4P=(3,2)$

$5P=(1,2)$

$6P=(0,4)$

$7P=𝒪$.

Thus P has order 7 and generates every group element. The triangular plot marker identifies P by shape, while every coordinate and identity return is repeated in the table.

At cryptographic sizes, discrete logarithms are not found by drawing or enumerating all points. This seven-element example makes the opposite point: its discrete log is completely exposed.

## 8. Engine contracts and complexity

The pure engine enforces:

- safe integer inputs for the displayed range;
- positive canonical modular residues;
- Bézout certificates;
- generalized CRT compatibility and lcm period;
- exact BigInt intermediate products in repeated squaring;
- distinct toy RSA primes, invertible exponent, bounded message;
- odd prime field and nonsingular curve;
- canonical affine coordinates at group-operation boundaries;
- on-curve inputs and on-curve outputs;
- explicit $\\mathcal{O}$, inverse, and vertical-tangent branches;
- defensive, shareable URL parsing.

Euclid uses logarithmically many division steps. Repeated squaring uses O(log e) modular multiplications. The point table tests p² affine pairs and is restricted to p≤31. Scalar multiplication uses double-and-add internally; the displayed multiples use repeated addition so each row has an immediate predecessor audit.

## 9. Accessibility route

The range controls, selects, and buttons operate by keyboard and pointer. Truth, failure, residue, and group state are written in words. The Euclidean table reproduces every division. RSA tables label bit 0/1 and whether multiplication occurred. The curve table lists every x, right side, and valid y; the multiples table lists every kP. The SVG is a static overview and has a descriptive name. It contains no interaction, animation, flashing, or motion-only information.

If SVG rendering is unavailable, no mathematical operation is lost. Share links encode every control state and are parsed with missing, blank, hostile, nonprime, noncanonical-point, and singular-curve cases distinguished.

## Challenges

1. Find a compatible noncoprime CRT system whose period is 12.
2. Find an inconsistent system with moduli 8 and 12.
3. With RSA p=5,q=11, find an allowed e and its inverse modulo φ.
4. Explain why RSA correctness modulo p handles two cases.
5. Enumerate $y^{2}=x^{3}+x$ modulo 5 and count points including $\\mathcal{O}$.
6. On the default curve, compute $-P$ and verify $P+(-P)=𝒪$.
7. Predict $15P$ from the order before moving the scalar control.
8. State the strongest justified claim after sharing a successful RSA/curve state.

## Solutions

1. For example $x≡1 (\\pmod{4})$, $x≡5 (\\pmod{6})$. The residues agree modulo gcd 2, and lcm(4,6)=12; x≡5 modulo 12.
2. $x≡0 (\\pmod{8})$, $x≡2 (\\pmod{12})$ is inconsistent because gcd=4 does not divide the residue difference 2.
3. φ=4·10=40. Choose e=3; $3\\cdot 27=81≡1 \\pmod{40}$, so d=27.
4. If the message is 0 modulo p, Fermat’s unit theorem cannot be invoked but equality is immediate. Otherwise the message is a unit and exponent reduction applies.
5. RHS values for x=0,…,4 are 0,2,0,0,3. Squares modulo 5 are 0,1,4, so x=0,2,3 each supplies y=0. There are three affine points plus $\\mathcal{O}$, four total.
6. $-(0,1)=(0,-1)=(0,4)$ modulo 5. Equal x coordinates and y sum 0 force the identity.
7. Order 7 gives $15P=(14+1)P=P=(0,1)$.
8. The exact shared state reproduces validated finite arithmetic: the toy RSA representative round-trips and the listed tiny curve operations close. No cryptographic security conclusion follows.

## Continue

Read the computation recipe to reconstruct each algorithm and test invariant. The standard course proves the surrounding theorems; the cryptography deep dive supplies adversarial definitions that this arithmetic instrument intentionally does not attempt to satisfy.
`;export{e as default};
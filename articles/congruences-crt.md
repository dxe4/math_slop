
# Congruences, Inverses, and the Chinese Remainder Theorem

**Before reading.** Read [Divisibility and Modular Arithmetic](../books/introduction-to-proof/divisibility-modular-arithmetic.md) and [Tiny Worlds, Precise Claims: Logic Before Formalism](logic-worlds-before-symbols.md). These are preparation for the ideas used below.

Suppose three repeating schedules reset every 5, 7, and 8 days. Can one day have prescribed positions in all three cycles? This is not ordinary equality: only remainders matter. Congruence turns that idea into algebra, and the Chinese remainder theorem explains when several local conditions combine into one global answer.

## Divisibility is the starting point

For integers $a,b$, with $a \ne 0$, write $a | b$ when $b=ak$ for some integer $k$. The greatest common divisor $\gcd(a,b)$ is the positive common divisor divisible by every other common divisor.

For $n\ge 1$, define

$a\equiv b\pmod n$ when $n\mid(a-b)$.

Thus $38\equiv3\pmod7$. Congruence is an equivalence relation, so it partitions the integers into residue classes. Addition and multiplication respect these classes: if $a\equiv b\pmod n$ and $c\equiv d\pmod n$, then $a+c\equiv b+d\pmod n$ and $ac\equiv bd\pmod n$.

Division is subtler. From $2\cdot1\equiv2\cdot4\pmod6$ one cannot cancel 2 to conclude $1\equiv4\pmod6$. The missing hypothesis is invertibility.

## The Euclidean algorithm produces certificates

Repeated division gives

$$252 = 2\cdot105 + 42$$

$$105 = 2\cdot42 + 21$$

$$42 = 2\cdot21$$

Therefore $\gcd(252,105)=21$. Reading upward also writes the gcd as an integer combination:

$$21 = 105-2\cdot42 = 105-2(252-2\cdot105) = 5\cdot105-2\cdot252$$

This is an instance of Bezout's identity: there exist integers $r,s$ with

$$ra+sb=\gcd(a,b)$$

Why must this hold? Consider the least positive integer of the form $ra+sb$. Divide $a$ and $b$ by it. Any nonzero remainder would also be such a combination and would be smaller, a contradiction. Hence it divides both $a$ and $b$; every common divisor divides the combination, so it is the gcd.

## When does a modular inverse exist?

An inverse of $a$ modulo $n$ is a residue $u$ satisfying $au\equiv1\pmod n$.

**Inverse criterion.** The residue $a$ has an inverse modulo $n$ exactly when $\gcd(a,n)=1$.

If the gcd is 1, Bezout gives $ua+vn=1$; reducing modulo $n$ gives $ua\equiv1\pmod n$. Conversely, if $au=1+kn$, every common divisor of $a$ and $n$ divides 1, so the gcd is 1.

Worked example: invert 17 modulo 43. The Euclidean algorithm gives

$43=2\cdot17+9$, $17=9+8$, $9=8+1$.

Back-substitution yields $1=2\cdot43-5\cdot17$. Hence $-5$, or 38, is the inverse. Indeed $17\cdot38=646\equiv1\pmod{43}$.

The criterion also classifies $ax\equiv b\pmod n$. If $d=\gcd(a,n)$, solutions exist exactly when $d\mid b$; then there are exactly $d$ solution classes modulo $n$. For example, $6x\equiv9\pmod{15}$ has $d=3$ and reduces to $2x\equiv3\pmod5$, so $x\equiv4\pmod5$: modulo 15 the three solutions are 4, 9, and 14.

## Combining two clocks

**Chinese remainder theorem, two-modulus form.** If $\gcd(m,n)=1$, then for any $a,b$ there is exactly one class modulo $mn$ satisfying

$x\equiv a\pmod m,\qquad x\equiv b\pmod n$.

For existence, Bezout supplies $r,s$ with $rm+sn=1$. Set

$$x = brm + asn$$

Modulo $m$, the first term vanishes and $sn\equiv1$, so $x\equiv a$. Modulo $n$, the second term vanishes and $rm\equiv1$, so $x\equiv b$.

For uniqueness, if $x$ and $y$ both work, then both $m$ and $n$ divide $x-y$. Coprimality implies $mn | (x-y)$, so they represent the same class modulo $mn$.

### Worked schedule

**Worked example.**

Find $x$ with

$x\equiv2\pmod5,\qquad x\equiv3\pmod7,\qquad x\equiv4\pmod8$.

Start with the first two. Write $x=2+5k$; then $2+5k\equiv3\pmod7$, so $5k\equiv1\pmod7$. Since $5^{-1}\equiv3\pmod7$, $k\equiv3\pmod7$, giving $x\equiv17\pmod{35}$.

Now write $x=17+35t$. Modulo 8 this says $1+3t\equiv4$; hence $3t\equiv3$, so $t\equiv1\pmod8$. Therefore $x\equiv52\pmod{280}$. Direct checking gives remainders 2, 3, and 4.

## Boundary case: what fails without coprimality?

The system $x\equiv a\pmod m$, $x\equiv b\pmod n$ is compatible precisely when $a\equiv b\pmod{\gcd(m,n)}$. If compatible, the solution is unique modulo $\operatorname{lcm}(m,n)$, not generally modulo $mn$.

For example, $x\equiv1\pmod4$ and $x\equiv2\pmod6$ is impossible because the first condition makes $x$ odd while the second makes it even. But residues 1 modulo 4 and 3 modulo 6 are compatible, with $x\equiv9\pmod{12}$.

### Constructing the solution when moduli overlap

Let $d=\gcd(m,n)$ and assume $d\mid(b-a)$. Write $x=a+mt$. The second congruence becomes

$$mt\equiv b-a\pmod n.$$

Divide the integer equation behind this congruence by $d$. With

$$m'=m/d,\qquad n'=n/d,\qquad c=(b-a)/d,$$

we need

$$m't\equiv c\pmod{n'}.$$

Now $\gcd(m',n')=1$, so $m'$ has an inverse modulo $n'$. Hence

$$t\equiv c(m')^{-1}\pmod{n'}.$$

Substituting into $x=a+mt$ produces one solution, and changing $t$ by $n'$ changes $x$ by $mn'=\operatorname{lcm}(m,n)$.

For the system

$$x\equiv4\pmod{12},\qquad x\equiv10\pmod{18},$$

we have $d=6$ and $(b-a)/d=1$. The reduced congruence is $2t\equiv1\pmod3$, so $t\equiv2\pmod3$. Taking $t=2$ gives $x=4+12\cdot2=28$. Every solution is

$$x\equiv28\pmod{36}.$$

This calculation proves both compatibility and the correct repetition modulus. Multiplying the original moduli would incorrectly suggest modulus 216.

## CRT as a ring decomposition

When $\gcd(m,n)=1$, define

$$
\Phi:\mathbb Z/(mn)\mathbb Z\longrightarrow
\mathbb Z/m\mathbb Z\times\mathbb Z/n\mathbb Z,
\qquad
[x]\longmapsto([x]_m,[x]_n).
$$

This map preserves addition and multiplication. Its kernel contains classes divisible by both $m$ and $n$; coprimality makes those precisely the multiples of $mn$, so the kernel is zero. Both sides have $mn$ elements, hence the injective map is bijective. The Chinese remainder theorem is therefore an isomorphism of rings, not only a scheduling recipe.

For $15=3\cdot5$, two useful elements are

$$e_1=10,\qquad e_2=6\pmod{15}.$$

Their residue pairs are $(1,0)$ and $(0,1)$. They satisfy

$$e_1^2=e_1,\qquad e_2^2=e_2,\qquad e_1e_2=0,\qquad e_1+e_2=1.$$

Given target residues $a\pmod3$ and $b\pmod5$, the element

$$x=10a+6b\pmod{15}$$

has exactly those two residues. The idempotents $e_1,e_2$ act like algebraic switches selecting the two components.

This decomposition also explains zero divisors. Under the isomorphism, $[5]\in\mathbb Z/15\mathbb Z$ corresponds to $(2,0)$ and $[3]$ corresponds to $(0,3)$. Both are nonzero, but their componentwise product is $(0,0)$, matching $[5][3]=[0]$ modulo 15.

## Powers and periodicity

If $\gcd(a,n)=1$, the powers of $[a]$ lie in the finite group of units $(\mathbb Z/n\mathbb Z)^\times$. Therefore some positive power returns to 1. Euler's theorem sharpens this to

$$a^{\varphi(n)}\equiv1\pmod n,$$

where $\varphi(n)$ counts invertible residue classes. Lagrange's theorem proves it: the order of $[a]$ divides the size $\varphi(n)$ of the unit group.

For $n=10$, $\varphi(10)=4$, so every $a$ coprime to 10 satisfies $a^4\equiv1\pmod{10}$. This theorem does not apply to $a=2$, which is not a unit modulo 10. Indeed $2^4\equiv6$, not 1. Checking the gcd is part of the theorem, not a preliminary nuisance.

## Connections

Congruence powers checksums and elementary cryptography; the inverse criterion explains why RSA works only with selected exponents. The Chinese remainder theorem decomposes arithmetic modulo a composite into smaller components, speeding computation. In abstract algebra it becomes an isomorphism of rings, while in algebraic number theory the local-to-global question becomes much deeper: compatible information modulo every prime need not always come from a global integer or rational solution.

## Exercises

<a id="deep-dive-congruences-crt-ex-1"></a>

### Exercise 1

1. Use the Euclidean algorithm to find $\gcd(414,662)$ and a Bezout certificate.

<details>
<summary>Hint 1</summary>

Run the Euclidean remainder chain on 662 and 414 until the last nonzero remainder.
</details>

<details>
<summary>Hint 2</summary>

Back-substitute through the chain to express that remainder as an integer combination of the inputs.
</details>

<details>
<summary>Solution</summary>

$\gcd=2$; back-substitution gives $2=8\cdot414-5\cdot662$.

</details>

<a id="deep-dive-congruences-crt-ex-2"></a>

### Exercise 2

2. Solve $14x\equiv12\pmod{20}$.

<details>
<summary>Hint 1</summary>

Check whether the common divisor of 14 and 20 also divides 12.
</details>

<details>
<summary>Hint 2</summary>

Divide the congruence by that common divisor, solve modulo ten, then lift the residue classes modulo twenty.
</details>

<details>
<summary>Solution</summary>

Divide by 2: $7x\equiv6\pmod{10}$, so $x\equiv8\pmod{10}$; modulo 20 the solutions are 8 and 18.

</details>

### Further exercises

3. Find the least nonnegative $x$ with remainders 1 modulo 3, 2 modulo 5, and 3 modulo 7.
4. Decide whether $x\equiv4\pmod{12}$ and $x\equiv10\pmod{18}$ are compatible.
5. Prove that cancellation of $c$ modulo $n$ is valid for every pair of residues exactly when $\gcd(c,n)=1$.

### Answers


3. Combining successively gives $x\equiv52\pmod{105}$, so 52 is least.
4. Yes: both residues are 4 modulo $\gcd(12,18)=6$; the solution is $x\equiv28\pmod{36}$.
5. If $c$ is invertible, multiply by its inverse. If $d=\gcd(c,n)>1$, then $c\cdot0\equiv c(n/d)\pmod n$ although $0$ and $n/d$ are distinct modulo $n$.

## Further problems with feedback

1. Solve $35x\equiv10\pmod{50}$ and list all solution classes modulo 50.
2. Solve $x\equiv5\pmod8$ and $x\equiv11\pmod{14}$, or prove the system inconsistent.
3. Find the element of $\mathbb Z/35\mathbb Z$ corresponding to $(3,4)$ under $\mathbb Z/5\mathbb Z\times\mathbb Z/7\mathbb Z$.
4. Use Euler's theorem to reduce $7^{222}$ modulo 20.
5. Explain why $[6]$ and $[10]$ are nontrivial idempotents modulo 15, and identify their CRT coordinate pairs.

**Solutions.** (1) The gcd is 5, which divides 10. Dividing gives $7x\equiv2\pmod{10}$; since $7^{-1}\equiv3$, $x\equiv6\pmod{10}$. The five classes modulo 50 are $6,16,26,36,46$. (2) The gcd of 8 and 14 is 2, and both prescribed residues are odd, so the system is compatible. Write $x=5+8t$; then $8t\equiv6\pmod{14}$, or $4t\equiv3\pmod7$, giving $t\equiv6\pmod7$. Thus $x\equiv53\pmod{56}$. (3) Elements selecting the two coordinates are $21\equiv(1,0)$ and $15\equiv(0,1)$, so $x=3\cdot21+4\cdot15=123\equiv18\pmod{35}$. Check: $18\equiv3\pmod5$ and $18\equiv4\pmod7$. (4) Since $\varphi(20)=8$ and $222\equiv6\pmod8$, $7^{222}\equiv7^6\equiv9\pmod{20}$. (5) $6^2\equiv6$ and $10^2\equiv10\pmod{15}$. Their pairs modulo $(3,5)$ are $(0,1)$ and $(1,0)$.

If 1 produced only one answer modulo 50, remember that dividing a congruence changes its modulus and the original modulus contains $d$ lifted classes. If 2 used modulus $8\cdot14$, replace the product by the least common multiple when moduli overlap.

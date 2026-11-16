var e=`---
parent_id: book-algebraic-analytic-number-theory
chapter_id: characters-primes-progressions
title: "Characters and Primes in Progressions"
level: graduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Characters and Primes in Progressions {#section-1-characters-and-primes-in-progressions}

Residue classes coprime to a modulus contain infinitely many primes, but proving this requires more than Euclid's construction. Dirichlet characters act as finite Fourier coordinates on the unit group: orthogonality isolates one progression, while $L$-functions connect that coordinate to primes.

This chapter assumes finite abelian groups, Euler products, and elementary complex numbers. It proves character orthogonality and the exact progression filter, proves the two modulo-four cases elementarily, and gives a hypothesis-explicit proof architecture for Dirichlet's theorem.

This supported primary adaptation preserves the earlier Euler mathematical text,
including its explicit theorem-import boundaries. The [exact retained seed](retained-seeds/characters-primes-progressions.md)
keeps the original parent metadata and exercise wording. Current primary exercises
add specific staged hints and solution reveals; the old book and its learner
identities remain separate and addressable.

Numbered chapter references inside preserved passages use the original book’s
numbering. Current semantic links identify the preparation and continuation.
The current absolute-product foundation is [Dirichlet Series and Euler Products](dirichlet-series-euler-products.md).

<a id="section-15-1-prime-progressions-and-the-gcd-boundary"></a>
## 1. Prime progressions and the gcd boundary {#section-17-1-prime-progressions-and-the-gcd-boundary}

An arithmetic progression is $a,a+q,a+2q,\\ldots$. If $\\gcd(a,q)>1$, every term shares a divisor, so at most one term can be prime. Coprimality is therefore necessary.

**Theorem 2.1 (Dirichlet's).** If $q\\ge 1$ and $\\gcd(a,q)=1$, infinitely many primes satisfy $p\\equiv a \\bmod q$.

The theorem asserts infinitude, not equal spacing or a prime-producing formula. Its quantitative refinement is $\\pi(x;q,a)\\sim \\operatorname{Li}(x)/\\varphi(q)$ for fixed coprime $a,q$, a much deeper statement whose error depends on analytic information.

<a id="section-23-2-elementary-modulo-four-cases"></a>
## 2. Elementary modulo-four cases {#section-25-2-elementary-modulo-four-cases}

There are infinitely many primes $3 \\bmod 4$: if the finite list were $p_{1},\\ldots,p_{r}$, a prime divisor of $N=4p_{1}\\ldots p_{r}-1$ must be $3 \\bmod 4$ for at least one divisor, since a product solely of $1 \\bmod 4$ primes is $1 \\bmod 4$; it is not listed because $N\\equiv-1 \\bmod p_{i}$.

There are infinitely many primes $1 \\bmod 4$: given a finite list, let $N=(2p_{1}\\ldots p_{r})^{2}+1$. Every odd prime divisor $q$ of $N$ has $-1$ as a square modulo $q$, so $q\\equiv 1 \\bmod 4$; it is new because $N\\equiv 1 \\bmod p_{i}$.

These constructions exploit special quadratic-residue structure and do not directly generalize to every reduced class.

<a id="section-31-3-dirichlet-characters"></a>
## 3. Dirichlet characters {#section-33-3-dirichlet-characters}

A Dirichlet character modulo $q$ is a group homomorphism

\\[\\chi:U(q)\\to\\mathbb{C}^{\\times}\\]

extended to all integers periodically, with $\\chi(n)=0$ when $\\gcd(n,q)>1$. Its nonzero values are roots of unity. The **principal character** $\\chi_{0}$ is one on units and zero on nonunits.

Characters are completely multiplicative. A character may be induced from a smaller modulus; then it is **imprimitive**. Its least inducing modulus is its conductor. Orthogonality modulo $q$ includes all characters modulo $q$, primitive or not.

<a id="section-41-worked-example-characters-modulo-five"></a>
### Worked example: characters modulo five {#section-43-worked-example-characters-modulo-five}

Since $U(5)=\\langle2\\rangle$ has order four, choose $\\chi(2)=i$. Then

$\\chi(1)=1$, $\\chi(2)=i$, $\\chi(4)=-1$, $\\chi(3)=-i$,

and multiples of five map to zero. The other characters arise by sending $2$ to each fourth root of unity.

<a id="section-49-4-orthogonality"></a>
## 4. Orthogonality {#section-51-4-orthogonality}

For a finite abelian group $G$,

$\\sum_{\\chi} \\chi(g) \\overline{\\chi(h)}=\\lvert G\\rvert$ if $g=h$, and $0$ otherwise.

If $g\\ne h$, choose a character nontrivial on $gh^{-1}$. Multiplying the character sum by this nonidentity value leaves the sum unchanged, forcing it to zero. At equality every term is one.

Thus, for unit classes $a,n \\bmod q$,

$\\mathbf{1}_{n\\equiv a\\bmod q}=\\frac{1}{\\varphi(q)}\\sum_{\\chi\\bmod q}\\overline{\\chi(a)}\\chi(n)$.

This is the exact finite Fourier filter that extracts one progression.

<a id="section-63-5-dirichlet-l-series"></a>
## 5. Dirichlet $L$-series {#section-65-5-dirichlet-l-series}

For $\\operatorname{Re}(s)>1$, define

$L(s,\\chi)=\\sum_{n\\ge 1}\\chi(n)/n^s$.

Absolute convergence and complete multiplicativity justify

$L(s,\\chi)=\\prod_{p} (1-\\chi(p)p^{-s})^{-1}$.

For the principal character, this is the zeta function with the finitely many factors at primes dividing $q$ removed, so it has a pole at $s=1$. For nonprincipal characters, bounded partial sums over complete periods and summation by parts give convergence for real $s>0$, in particular at one.

The decisive theorem is

\\[L(1,\\chi)\\ne 0\\]

for every nonprincipal Dirichlet character. Its proof treats real and complex characters differently and uses positivity or algebraic combinations of $L$-values. Merely observing conditional convergence does not prove nonvanishing.

<a id="section-81-6-proof-architecture-for-dirichlet-s-theorem"></a>
## 6. Proof architecture for Dirichlet's theorem {#section-83-6-proof-architecture-for-dirichlet-s-theorem}

Take logarithms of the Euler product for real $s>1$:

$\\log L(s,\\chi)=\\sum_{p} \\chi(p)/p^s+\\mathcal{O}(1)$,

where prime powers of exponent at least two contribute a bounded remainder. Multiply by $\\overline{\\chi(a)}$, sum over characters, and use orthogonality. The principal character contributes a logarithmic divergence as $s$ decreases to one. Nonprincipal logarithms remain bounded because their $L(1,\\chi)$ values are nonzero. Therefore

\\[\\sum_{p\\equiv a \\bmod q} 1/p^s\\]

diverges as $s\\to 1+$, which forces infinitely many primes in the class.

Every clause matters: absolute convergence before logarithmic rearrangement, bounded higher-prime-power terms, orthogonality over unit classes, the principal pole, and nonvanishing at one.

<a id="section-95-7-real-characters-and-quadratic-reciprocity"></a>
## 7. Real characters and quadratic reciprocity {#section-97-7-real-characters-and-quadratic-reciprocity}

Quadratic residue symbols produce real characters. For an odd prime $p$, $\\chi(n)=(n/p)$ is a character modulo $p$. Quadratic reciprocity relates such characters with numerator and denominator exchanged; character language packages residue signs into multiplicative Fourier data.

Not every character is quadratic: modulo five the order-four characters take values $\\pm i$. Restricting attention to real characters would not span all residue-class indicators.

<a id="section-101-8-computation-and-claim-boundaries"></a>
## 8. Computation and claim boundaries {#section-103-8-computation-and-claim-boundaries}

Counting primes by residue class can illustrate equidistribution, but a finite table cannot prove infinitude or the asymptotic theorem. A primality test, range, treatment of $p\\mid q$, and normalization must be reported. Error terms for varying $q$ are not covered by a theorem stated for fixed $q$.

<a id="section-105-exercises-with-complete-solutions"></a>
## 9. Extending a character one subgroup at a time {#section-418-9-extending-a-character-one-subgroup-at-a-time}

The orthogonality argument in Section 4 needs two facts: there are exactly $|G|$ characters, and a character distinguishes any two different elements. Both deserve proofs. Throughout this section $G$ is finite and abelian, and a character takes values in the complex unit circle. No cyclicity of $G$ is assumed.

Let $H$ be a subgroup, let $\\chi$ be a character on $H$, and choose $a\\in G$. If $a\\notin H$, let $m$ be the least positive integer with $a^m\\in H$; this exists because $a$ has finite order. The subgroup $K=\\langle H,a\\rangle$ has exactly the cosets $H,aH,\\ldots,a^{m-1}H$. Distinctness follows from minimality of $m$: any equality would put a smaller positive power of $a$ in $H$. Thus $[K:H]=m$.

Choose a complex number $z$ satisfying $z^m=\\chi(a^m)$. There are exactly $m$ such choices, all on the unit circle. Define
\\[
\\widetilde\\chi(ha^k)=\\chi(h)z^k.
\\]
To check independence of representation, suppose $ha^k=h'a^{k'}$. Then $a^{k-k'}=h^{-1}h'\\in H$, so $k-k'=tm$ for an integer $t$. Consequently $\\chi(h')=\\chi(h)\\chi(a^m)^t=\\chi(h)z^{tm}$, which makes the two displayed values equal. Commutativity now makes multiplication of representatives agree with multiplication of their values. This is a character of $K$ extending $\\chi$.

Conversely any extension must send $a$ to one of those $m$ roots, since its value has $m$th power $\\chi(a^m)$. It is then determined on $K$ by the formula. Hence every character of $H$ has exactly $[K:H]$ extensions to $K$. Starting with $H=\\{1\\}$ and adjoining elements until $G$ is reached proves extension to all of $G$. Finiteness ensures the process ends, and the product of the successive indices is $|G|$. Since the trivial subgroup has one character, counting extensions at each step proves
\\[
|\\widehat G|=|G|,
\\]
where $\\widehat G$ denotes the group of characters under pointwise multiplication.

For separation, take $g\\ne1$ of order $r>1$. On $\\langle g\\rangle$, prescribe $g\\mapsto \\exp(2\\pi i/r)$, and then extend to $G$. The resulting character is not one at $g$. Apply this to $gh^{-1}$ to distinguish $g$ from $h$. This also explains why choosing values freely on all elements is invalid: relations must be respected. The extension formula introduces one generator while enforcing exactly its relation with the subgroup already constructed.

The target matters. If only real signs were permitted, a cyclic group of order three would have only its trivial real character, not three characters. Allowing all complex roots of unity is essential even when the final question counts ordinary integers. Likewise, commutativity matters: homomorphisms from a nonabelian group to the unit circle kill every commutator, so they cannot separate all elements of a genuinely nonabelian group.

<a id="section-438-10-both-orthogonalities-and-fourier-inversion"></a>
## 10. Both orthogonalities and Fourier inversion {#section-440-10-both-orthogonalities-and-fourier-inversion}

For a nontrivial character $\\rho$ on $G$, choose $a$ with $\\rho(a)\\ne1$. Translation by $a$ permutes $G$, so
\\[
S=\\sum_{g\\in G}\\rho(g)=\\sum_{g\\in G}\\rho(ag)=\\rho(a)S,
\\]
and $S=0$. Applying this to $\\rho=\\chi\\overline\\psi$ proves row orthogonality:
\\[
\\sum_{g\\in G}\\chi(g)\\overline{\\psi(g)}
=|G|\\,\\mathbf1_{\\chi=\\psi}.
\\]
Here $\\overline{\\psi(g)}=\\psi(g)^{-1}$ because character values have modulus one. Complex conjugation is part of the formula, not an optional decoration.

For column orthogonality, put $k=gh^{-1}$. If $k\\ne1$, separation supplies $\\eta$ with $\\eta(k)\\ne1$. Multiplication $\\chi\\mapsto\\eta\\chi$ permutes $\\widehat G$, so
\\[
\\sum_{\\chi\\in\\widehat G}\\chi(k)
=\\eta(k)\\sum_{\\chi\\in\\widehat G}\\chi(k)=0.
\\]
If $k=1$, every term is one and there are $|G|$ terms by the extension count. This completes the justification omitted by a bare instruction to choose a separating character.

For any function $f:G\\to\\mathbb C$, define its coefficient
\\[
c_\\chi=\\frac1{|G|}\\sum_{h\\in G}f(h)\\overline{\\chi(h)}.
\\]
Substitution and column orthogonality give $\\sum_\\chi c_\\chi\\chi(g)=f(g)$: after exchanging the finite sums, every $h\\ne g$ vanishes and the $h=g$ term remains. Thus the characters really form a Fourier basis of all complex-valued functions on $G$. They form an orthonormal basis for the normalized inner product $|G|^{-1}\\sum f\\overline h$, and expanding this inner product yields $\\sum|c_\\chi|^2=|G|^{-1}\\sum|f(g)|^2$.

This finite argument has no convergence or limiting interchange. Analytic difficulty enters later when a prime sum approaches a boundary. Keeping those two steps separate helps diagnose a proof that uses excellent finite algebra but an unjustified logarithmic limit.

For $G=U(q)$, let $a$ be a unit and extend every character by zero on nonunits. The progression filter then holds for every integer $n$, not just units:
\\[
\\mathbf1_{n\\equiv a\\pmod q}
=\\frac1{\\varphi(q)}\\sum_{\\chi\\bmod q}\\overline{\\chi(a)}\\chi(n).
\\]
For a nonunit $n$, every term on the right is zero, and the left is also zero because a class congruent to the unit $a$ must be a unit. This domain check removes any need to divide by $\\chi(n)$ at a nonunit.

<a id="section-473-11-a-noncyclic-table-and-a-genuinely-complex-value"></a>
## 11. A noncyclic table and a genuinely complex value {#section-475-11-a-noncyclic-table-and-a-genuinely-complex-value}

**Worked example: the four-character modulo-eight filter.**

The group $U(8)$ is not cyclic: each of $3,5,7$ has order two. It is generated independently by $-1=7$ and $5$, and its four elements are $(-1)^r5^t$ with $r,t\\in\\{0,1\\}$. This is the small case of the power-of-two unit structure established earlier. Choosing each generator value independently in $\\{1,-1\\}$ gives the table

| Character | 1 | 3 | 5 | 7 |
|---|---:|---:|---:|---:|
| $\\chi_{00}$ | 1 | 1 | 1 | 1 |
| $\\chi_{10}$ | 1 | $-1$ | 1 | $-1$ |
| $\\chi_{01}$ | 1 | $-1$ | $-1$ | 1 |
| $\\chi_{11}$ | 1 | 1 | $-1$ | $-1$ |

Thus the indicator of $3\\bmod8$ is $(\\chi_{00}-\\chi_{10}-\\chi_{01}+\\chi_{11})/4$, with all four functions zero on even integers. Replacing $\\chi_{00}$ by the constant function one would make the expression $1/4$ at an even input. A correct identity on units need not survive a careless zero extension.

Modulo five, choose $\\chi(2)=i$. Its values on $1,2,3,4$ are $1,i,-i,-1$. The filter for $2\\bmod5$ is
\\[
\\frac14\\bigl(\\chi_0(n)-i\\chi(n)-\\chi(n)^2+i\\overline{\\chi(n)}\\bigr)
\\]
on units, and the same expression with the squared character understood as a zero-extended character on all integers. At $n=2$ the four terms are all one; at $n=3$ they are $1,-1,1,-1$. The nonreal rows distinguish classes that the real rows alone cannot separate.

**Worked example: a nonreal L-value at a real argument.**

For real $\\sigma>1$, absolute convergence allows grouping the same character's $L$-series by periods:
\\[
L(\\sigma,\\chi)=
\\sum_{k\\ge0}\\bigl[(5k+1)^{-\\sigma}-(5k+4)^{-\\sigma}\\bigr]
+i\\sum_{k\\ge0}\\bigl[(5k+2)^{-\\sigma}-(5k+3)^{-\\sigma}\\bigr].
\\]
Both displayed real sums are strictly positive, since every bracket is positive. Therefore this $L$-value is genuinely complex even though its argument $\\sigma$ is real. No logarithm of it can be a real number, because the exponential of a real number is positive real. The need for a compatible complex logarithm is already visible in this elementary example.

These concrete tables complement the general extension proof. Earlier order and CRT results make constructing unit groups efficient; they are not being used to assume that every unit group has a primitive root. Fourier completeness holds equally for cyclic and noncyclic finite abelian groups.

<a id="section-506-12-what-periodic-cancellation-proves-at-one"></a>
## 12. What periodic cancellation proves at one {#section-508-12-what-periodic-cancellation-proves-at-one}

For a nonprincipal character modulo $q$, row orthogonality gives $\\sum_{r=1}^q\\chi(r)=0$, including zero terms at nonunits. Decompose any initial interval into complete periods and a final block. Its partial sum $A(x)=\\sum_{n\\le x}\\chi(n)$ therefore satisfies $|A(x)|\\le q$. The principal character has a positive average and does not satisfy this bound.

Partial summation gives, for real $\\sigma>0$,
\\[
\\sum_{n>Y}\\chi(n)n^{-\\sigma}
=-A(Y)Y^{-\\sigma}+\\sigma\\int_Y^\\infty A(t)t^{-\\sigma-1}\\,dt.
\\]
The endpoint at infinity vanishes because $A$ is bounded. The tail is at most $2qY^{-\\sigma}$ in absolute value. This proves convergence at one, and uniform convergence for $\\sigma$ in any closed positive interval bounded away from zero. In particular $L(\\sigma,\\chi)\\to L(1,\\chi)$ as $\\sigma\\downarrow1$.

For complex $s$ with $\\operatorname{Re}(s)\\ge\\delta>0$ and $|s|\\le R$, the same computation bounds the tail by $q(1+R/\\delta)Y^{-\\delta}$. Consequently the series is locally uniformly convergent in $\\operatorname{Re}(s)>0$ for nonprincipal characters. The standard complex-analysis theorem that a locally uniform limit of holomorphic functions is holomorphic then supplies a holomorphic function near one. This is a stated analytic input; finite Fourier algebra alone does not imply holomorphy.

None of these estimates proves $L(1,\\chi)\\ne0$. A convergent complex series can sum to zero. Even holomorphy and absence of zeros in the open half-plane $\\operatorname{Re}(s)>1$ do not settle the boundary: the function $s-1$ has both properties there and vanishes at one. This example is a logical warning, not an assertion that $s-1$ is a character $L$-function.

The nonvanishing theorem used below is a separate imported analytic theorem: for every fixed positive integer $q$ and every nonprincipal Dirichlet character modulo $q$, primitive or imprimitive, $L(1,\\chi)\\ne0$. Its real-character case requires an argument beyond simple pairing of nonreal characters. The conclusion is used exactly at one; it is not replaced by a numerical computation of an approximate value.

<a id="section-523-13-the-logarithm-branch-and-its-domain"></a>
## 13. The logarithm branch and its domain {#section-525-13-the-logarithm-branch-and-its-domain}

Before continuing the analytic argument, read [Chapter 17, Section 20, “Euler-product foundation for zeta and character L-series”](#/item/book-number-theory-proof-reference?chapter=dirichlet-series-euler-products). Its prerequisites and proof do not use Dirichlet's theorem. In the half-plane $\\operatorname{Re}(s)>1$ it supplies the absolutely locally uniformly convergent series
\\[
\\mathcal L(s,\\chi)=\\sum_p\\sum_{k\\ge1}\\frac{\\chi(p)^k}{kp^{ks}},
\\qquad
\\exp\\mathcal L(s,\\chi)=L(s,\\chi).
\\]
This fixes the logarithm compatible with the Euler product and with $\\mathcal L(\\sigma,\\chi)\\to0$ as real $\\sigma\\to\\infty$. It is not an arbitrary choice of principal logarithm at each separate value of $L$.

The hypothesis $|\\chi(p)|\\le1$ and the domain $\\operatorname{Re}(s)>1$ justify the rearrangement. At a prime dividing $q$, all prime-power terms vanish. For real $\\sigma\\ge1$, the terms with $k\\ge2$ have the uniform bound
\\[
\\left|\\sum_p\\sum_{k\\ge2}\\frac{\\chi(p)^k}{kp^{k\\sigma}}\\right|
\\le\\sum_{m=2}^\\infty\\sum_{k\\ge2}m^{-k}
=\\sum_{m=2}^\\infty\\frac1{m(m-1)}=1.
\\]
This bound concerns only the higher prime powers. The $k=1$ prime sum still diverges in the principal case as $\\sigma\\downarrow1$.

If $\\chi$ is nonprincipal, local holomorphy near one and the imported nonzero value allow a nonvanishing disk about one. On a sufficiently small disk there is a holomorphic logarithm $H$ with $\\exp H=L$. For example shrink the disk so $|L(s)/L(1)-1|<1/2$ and use the convergent power series for $\\log(1+w)$, after choosing one logarithm of $L(1)$. On the connected real interval just to the right of one, $\\mathcal L-H$ is continuous and its exponential is one. It therefore has values in the discrete set $2\\pi i\\mathbb Z$ and is constant. Thus the canonical $\\mathcal L$ has a finite limit there.

This local argument proves boundedness of the correct complex logarithm, including its imaginary part. Merely bounding $|L|$ away from zero bounds the real part of a logarithm; it would not by itself prevent arbitrary branch jumps of $2\\pi i$. Conversely, if $L$ tended to zero, the real part of any logarithm would tend to $-\\infty$, since $\\operatorname{Re}\\log L=\\log|L|$.

An arbitrary multiplicative sequence does not inherit these conclusions by resemblance. Its Dirichlet series may have a different absolute-convergence half-plane, its local Euler factors may vanish, and a logarithmic expansion requires its own hypotheses. Even for character $L$-functions, the prime-power logarithm above is not claimed to converge at $s=1$.

<a id="section-547-14-the-conditional-prime-argument-in-full"></a>
## 14. The conditional prime argument in full {#section-549-14-the-conditional-prime-argument-in-full}

Fix $q\\ge1$ and a unit residue class $a$. For the principal character,
\\[
L(\\sigma,\\chi_0)=\\zeta(\\sigma)\\prod_{p\\mid q}(1-p^{-\\sigma}).
\\]
Integral comparison gives $1/(\\sigma-1)\\le\\zeta(\\sigma)\\le1+1/(\\sigma-1)$ for real $\\sigma>1$. Hence $(\\sigma-1)\\zeta(\\sigma)\\to1$. The finite product tends to the positive number $\\prod_{p\\mid q}(1-1/p)$. With the compatible real logarithm in this principal case,
\\[
\\mathcal L(\\sigma,\\chi_0)=\\log\\frac1{\\sigma-1}+O_q(1).
\\]
For $q=1$, the empty product is one and the group has one character; the same argument includes this case.

For every character write $\\mathcal L(\\sigma,\\chi)=\\sum_p\\chi(p)p^{-\\sigma}+R_\\chi(\\sigma)$, where the preceding bound gives $|R_\\chi|\\le1$. Multiply by $\\overline{\\chi(a)}$, sum over the $\\varphi(q)$ characters, and use the finite progression filter inside the absolutely convergent prime sum:
\\[
\\sum_{\\chi\\bmod q}\\overline{\\chi(a)}\\mathcal L(\\sigma,\\chi)
=\\varphi(q)\\sum_{p\\equiv a\\pmod q}p^{-\\sigma}+O_q(1).
\\]
Primes dividing $q$ contribute zero to every character and cannot belong to the unit class $a$, so no unmentioned exceptional primes remain.

Under the explicitly imported nonprincipal nonvanishing theorem, Section 13 makes every nonprincipal logarithm bounded as $\\sigma\\downarrow1$. There are finitely many characters because $q$ is fixed. Isolating the principal term therefore yields
\\[
\\sum_{p\\equiv a\\pmod q}p^{-\\sigma}
=\\frac1{\\varphi(q)}\\log\\frac1{\\sigma-1}+O_q(1).
\\]
The conjugate characters pair compatibly, or simply the exact filter shows that the prime sum is real. We have not assumed all the individual logarithms are real.

The positive divergence forces infinitely many primes in the class: a finite set would give a finite continuous sum at $\\sigma=1$. In fact it also forces $\\sum_{p\\equiv a}1/p$ to diverge, since a convergent positive sum at one would dominate and bound every sum with $\\sigma>1$. The displayed logarithmic coefficient is a Dirichlet-density statement. Turning it into a counting asymptotic $\\pi(x;q,a)\\sim\\operatorname{Li}(x)/\\varphi(q)$ needs additional analytic arguments and is not proved by this calculation.

The architecture is consequently complete as an implication with one named deep input. The finite character theory, bounded periodic partial sums, higher-prime-power estimate, principal divergence and final filter are proved here or in the explicitly routed foundation. The nonzero boundary value remains imported. A successful finite table, a nonzero value at $1.01$, or cancellation seen among conjugate rows cannot supply that missing theorem. Likewise, constants may depend on $q$ throughout; nothing here is uniform for a modulus growing with the prime range.

<a id="section-577-15-crt-products-and-induced-characters"></a>
## 15. CRT products and induced characters {#section-579-15-crt-products-and-induced-characters}

Characters respect the CRT decomposition without requiring a generator of the whole unit group. For finite abelian groups $G_1,G_2$, any character $\\chi$ on their direct product satisfies
\\[
\\chi(g_1,g_2)=\\chi(g_1,1)\\chi(1,g_2).
\\]
Each factor is a character of the corresponding group, and conversely any pair of characters gives a character by this product formula. The correspondence is bijective because the restrictions recover the pair. Counting therefore gives $|\\widehat{G_1\\times G_2}|=|G_1||G_2|$, consistent with the extension proof.

If $\\gcd(m,n)=1$, CRT identifies $U(mn)$ with $U(m)\\times U(n)$. Transporting the product formula describes every character modulo $mn$ as a pair of local characters. The progression indicator factors too: being in class $a$ modulo $mn$ means satisfying its two local classes, and multiplying their Fourier filters gives the global filter. The denominators multiply because $\\varphi(mn)=\\varphi(m)\\varphi(n)$. This uses coprimality; treating arbitrary moduli as independent would ignore compatibility constraints in generalized CRT.

For example $U(12)$ comes from $U(3)$ and $U(4)$, both of order two. Prescribe a sign on the nonidentity element of each group. The four independent sign choices give all four characters modulo twelve. No unit modulo twelve has order four, so searching for a single primitive root would obstruct a construction that is straightforward by products. Chapter 5 supplies unit orders and exponents, while Chapter 8 classifies cyclic cases; character completeness works on either side of that classification.

Induction from a smaller modulus is another operation. Suppose $d\\mid q$ and a character $\\psi$ modulo $d$ induces $\\chi$ modulo $q$: on units modulo $q$, $\\chi(n)=\\psi(n)$, and $\\chi$ is zero elsewhere. For $\\operatorname{Re}(s)>1$, comparing their absolutely convergent Euler factors gives
\\[
L(s,\\chi)=L(s,\\psi)\\prod_{\\substack{p\\mid q\\\\p\\nmid d}}(1-\\psi(p)p^{-s}).
\\]
Only the newly excluded primes appear. Their local factors at one are nonzero because $|\\psi(p)/p|<1$. Thus, when the corresponding functions extend near one, these finite factors do not create or remove a zero there.

Take the nonprincipal sign character modulo three and induce it modulo twelve. The new excluded prime is two, where $\\psi(2)=-1$. Hence $L(s,\\chi)=L(s,\\psi)(1+2^{-s})$ in the initial domain, with factor $3/2$ at one. This example explains why the stated nonvanishing theorem must cover imprimitive characters too, and how their finite local changes interact with the primitive theorem. It does not prove nonvanishing for the original smaller character.

<a id="section-597-16-conditional-convergence-preserves-an-order-of-summat"></a>
## 16. Conditional convergence preserves an order of summation {#section-599-16-conditional-convergence-preserves-an-order-of-summat}

At one, a nonprincipal character series is generally not absolutely convergent. In each complete block of length $q$ there are exactly $\\varphi(q)$ terms with absolute character value one. In the block $kq<n\\le(k+1)q$, each such term contributes at least $1/((k+1)q)$ to $\\sum|\\chi(n)|/n$. Summing over $k$ gives a constant multiple of the divergent harmonic series. Thus the convergence proved by bounded partial sums is genuinely conditional.

Cancellation occurs across a complete period of character values before the slowly changing denominator is accounted for. It is not a license to rearrange positive and negative terms at will. The partial-summation tail bound keeps the ordinary order $n=1,2,\\ldots$ and quantifies precisely how much remains after an endpoint. Grouping consecutive complete periods preserves that limit, whereas a rearrangement that selects distant terms by sign can change a conditional sum or destroy convergence.

This is why the prime filter is first applied for $\\sigma>1$. There all sums are absolutely convergent, so the finite sum over characters and the infinite sum over primes may be exchanged without ambiguity. Only after obtaining an exact relation there do we let $\\sigma$ approach one. We do not begin by asserting an Euler product or prime logarithm at the boundary itself.

The principal/nonprincipal distinction is equally concrete. The principal character has period mean $\\varphi(q)/q>0$ rather than zero. Its reciprocal series diverges, and the finite Euler factors leave the zeta pole intact. A nonprincipal character has mean zero and a convergent reciprocal series, but that limit can only be used in a logarithm after nonvanishing is separately known. Mean zero, convergence, a nonzero limit and a controlled logarithm are successive statements with different proofs.

For the nonreal modulo-five example, grouping consecutive periods gives positive real and positive imaginary parts. The complex-valued nature survives the real approach to one. Pairing it with the conjugate character makes certain combined expressions real; it does not make each individual logarithm real. The exact Fourier filter is the reason the final prime count is real.

<a id="section-609-17-character-values-exponents-and-the-number-of-rows"></a>
## 17. Character values, exponents and the number of rows {#section-611-17-character-values-exponents-and-the-number-of-rows}

Three integers that occur in these arguments serve different purposes: the modulus $q$, the group size $\\varphi(q)$, and the exponent $\\lambda(q)$. If a unit $a$ has order $r$, then $\\chi(a)^r=1$, so the order of its character value divides $r$, hence divides $\\lambda(q)$. Lagrange also gives $r\\mid\\varphi(q)$. Neither conclusion says character values must be $q$th roots of unity.

For example modulo five the value $\\chi(2)=i$ has order four, not a divisor of five. Modulo eight every nonzero character value is a sign because the unit-group exponent is two, yet there are four different characters. The number of rows counts different compatible assignments to all group elements; it is not the maximum order of one entry. This explains how a noncyclic group can have as many Fourier coordinates as elements even though no single coordinate value has that large an order.

The distinction also checks a common construction error. If a proposed character sends an order-two unit to $i$, applying it to the square of that unit would give $-1$ instead of one. Conversely, selecting allowed roots separately at each element need not respect products. The extension lemma handles both obligations: the chosen root satisfies the new generator's relation, and the subgroup formula enforces all mixed products. These are algebraic certificates for the character table, independent of later analytic limits.

<a id="section-617-exercises-a-filter-on-a-noncyclic-unit-group"></a>

## Summary

<a id="section-415-chapter-summary"></a>
Characters form the finite Fourier basis of reduced residue classes. Orthogonality gives an exact progression filter, while Euler products connect character coordinates to primes. Dirichlet's theorem follows from the principal pole, nonprincipal nonvanishing at one, and controlled logarithmic remainders. Special modulo-four infinitude proofs are elementary; the general theorem is genuinely analytic.
<a id="section-416-9-extending-a-character-one-subgroup-at-a-time"></a>

<a id="section-651-summary-and-next-connection"></a>
Finite character extension proves a complete Fourier basis on every finite
abelian unit group, including noncyclic examples. Absolute Euler products and
a separately named nonprincipal nonvanishing input turn its exact progression
filter into Dirichlet's prime-infinitude conclusion. Periodic cancellation
alone supplies convergence, not nonvanishing or an asymptotic count. The next
chapter isolates the absolute-convergence estimates that license products,
logarithms and derivative series before the new theta chapter continues zeta.

## Exercises {#section-107-exercises-with-complete-solutions}

### Exercise 1: Gcd obstruction {#characters-primes-progressions-ex-1}

How many primes can occur in $6n+4$?

<details>
<summary>Hint 1</summary>
Inspect the common factor of every term and the smallest permitted term.
</details>
<details>
<summary>Hint 2</summary>
Every term is even and at least four for nonnegative n; distinguish the exceptional prime two.
</details>
<details>
<summary>Solution</summary>
Every term is even and at least four for $n\\ge 0$, so none. More generally a noncoprime progression has at most the shared prime divisor itself.
</details>

### Exercise 2: Reduced classes modulo eight {#characters-primes-progressions-ex-2}

List them.

<details>
<summary>Hint 1</summary>
A reduced class is represented by an integer coprime to eight.
</details>
<details>
<summary>Hint 2</summary>
Remove the four even residues; every odd residue survives.
</details>
<details>
<summary>Solution</summary>
$U(8)=\\{1,3,5,7\\}$, so $\\varphi(8)=4$ reduced residue classes.
</details>

### Exercise 3: Modulo-four construction {#characters-primes-progressions-ex-3}

Why is a prime divisor of $(2P)^{2}+1$ new relative to primes dividing $P$?

<details>
<summary>Hint 1</summary>
Reduce the constructed number modulo any prime dividing P.
</details>
<details>
<summary>Hint 2</summary>
Its square term vanishes modulo that prime, leaving remainder one.
</details>
<details>
<summary>Solution</summary>
For each $p\\mid P$, the number is congruent to one modulo $p$, so $p$ cannot divide it.
</details>

### Exercise 4: A prime divisor class {#characters-primes-progressions-ex-4}

If odd prime $q\\mid x^{2}+1$, prove $q\\equiv 1 \\bmod 4$.

<details>
<summary>Hint 1</summary>
The root condition says minus one is a square modulo q.
</details>
<details>
<summary>Hint 2</summary>
Use the supplementary quadratic-residue law, or the order-four element in the multiplicative group.
</details>
<details>
<summary>Solution</summary>
$x^{2}\\equiv-1 \\bmod q$, so the supplementary quadratic-residue law says $q\\equiv 1 \\bmod 4$.
</details>

### Exercise 5: Principal character {#characters-primes-progressions-ex-5}

Write $\\chi_{0}(n)$ modulo $6$.

<details>
<summary>Hint 1</summary>
Apply the definition: one on units and zero on nonunits.
</details>
<details>
<summary>Hint 2</summary>
The only unit residue classes modulo six are one and five.
</details>
<details>
<summary>Solution</summary>
It is one for $n\\equiv 1,5 \\bmod 6$ and zero for the other four classes.
</details>

### Exercise 6: Character magnitude {#characters-primes-progressions-ex-6}

Why does a character have absolute value one on units?

<details>
<summary>Hint 1</summary>
A group element in this finite unit group has finite order.
</details>
<details>
<summary>Hint 2</summary>
Apply the character to the equation saying its r-th power is the identity.
</details>
<details>
<summary>Solution</summary>
A unit has finite order $r$, so $\\chi(g)^r=\\chi(g^r)=1$; hence the value is a root of unity.
</details>

### Exercise 7: Complete multiplicativity {#characters-primes-progressions-ex-7}

Why does the zero extension remain completely multiplicative?

<details>
<summary>Hint 1</summary>
Separate the case of two units from the case where at least one factor is a nonunit.
</details>
<details>
<summary>Hint 2</summary>
A prime dividing the modulus and a nonunit factor also divides their product.
</details>
<details>
<summary>Solution</summary>
If both factors are units, use the group homomorphism. If either is a nonunit, some prime dividing $q$ divides that factor and their product, so both sides are zero.
</details>

### Exercise 8: Modulo-five value {#characters-primes-progressions-ex-8}

For the chapter's order-four character, compute $\\chi(12)$.

<details>
<summary>Hint 1</summary>
First reduce twelve modulo five.
</details>
<details>
<summary>Hint 2</summary>
The specified character sends the chosen generator two to i.
</details>
<details>
<summary>Solution</summary>
$12\\equiv 2 \\bmod 5$, so $\\chi(12)=i$.
</details>

### Exercise 9: Character sum {#characters-primes-progressions-ex-9}

Show a nonprincipal character sums to zero over $U(q)$.

<details>
<summary>Hint 1</summary>
Choose a unit on which the nonprincipal character is not one.
</details>
<details>
<summary>Hint 2</summary>
Multiplication by that unit permutes the summation set and multiplies the whole sum by its character value.
</details>
<details>
<summary>Solution</summary>
Choose unit $a$ with $\\chi(a)\\ne 1$. Multiplication by $a$ permutes the group, so $S=\\sum \\chi(g)=\\sum \\chi(ag)=\\chi(a)S$; hence $S=0$.
</details>

### Exercise 10: First orthogonality {#characters-primes-progressions-ex-10}

For fixed characters $\\chi,\\psi$, show $\\sum_{g \\in G}\\chi(g)\\overline{\\psi(g)}$ is zero unless $\\chi=\\psi$.

<details>
<summary>Hint 1</summary>
The product of a character with the conjugate of another is a character.
</details>
<details>
<summary>Hint 2</summary>
Determine exactly when this product is principal, and then use the zero-sum result.
</details>
<details>
<summary>Solution</summary>
The product is the character $\\chi \\overline{\\psi}$. It is principal exactly when the characters agree; use Exercise 9 otherwise and sum ones in the equal case.
</details>

### Exercise 11: Indicator modulo four {#characters-primes-progressions-ex-11}

Express the indicator of $n\\equiv 1 \\bmod 4$ for odd $n$.

<details>
<summary>Hint 1</summary>
The real character takes the two values one and minus one on the odd classes.
</details>
<details>
<summary>Hint 2</summary>
Seek an affine expression equal to one at the first value and zero at the second.
</details>
<details>
<summary>Solution</summary>
With real character $\\chi(n)=1$ on $1$, $-1$ on $3$, the indicator is $(1+\\chi(n))/2$.
</details>

### Exercise 12: Other indicator {#characters-primes-progressions-ex-12}

Express the indicator of $n\\equiv 3 \\bmod 4$ for odd $n$.

<details>
<summary>Hint 1</summary>
Use the same two-value interpolation with the desired roles reversed.
</details>
<details>
<summary>Hint 2</summary>
Subtract the character instead of adding it, keeping the factor one half.
</details>
<details>
<summary>Solution</summary>
It is $(1-\\chi(n))/2$ for odd $n$.
</details>

### Exercise 13: Euler factor {#characters-primes-progressions-ex-13}

What is the local factor when $\\chi(p)=0$?

<details>
<summary>Hint 1</summary>
Insert the local character value into its geometric-series factor.
</details>
<details>
<summary>Hint 2</summary>
Every positive power term then vanishes and only the constant remains.
</details>
<details>
<summary>Solution</summary>
$(1-0\\cdot p^{-s})^{-1}=1$; primes dividing the modulus contribute no nontrivial factor.
</details>

### Exercise 14: Absolute convergence {#characters-primes-progressions-ex-14}

Why does the $L$-series converge absolutely for $\\operatorname{Re}(s)>1$?

<details>
<summary>Hint 1</summary>
Bound character magnitudes by one.
</details>
<details>
<summary>Hint 2</summary>
The absolute majorant is the positive Dirichlet series with real exponent sigma greater than one.
</details>
<details>
<summary>Solution</summary>
$\\lvert \\chi(n)\\rvert\\le 1$, so it is dominated by $\\sum n^{-\\sigma}$ with $\\sigma=\\operatorname{Re}(s)>1$.
</details>

### Exercise 15: Conditional convergence {#characters-primes-progressions-ex-15}

Why do bounded character partial sums help at $s=1$?

<details>
<summary>Hint 1</summary>
Nonprincipal periodic characters have bounded partial sums.
</details>
<details>
<summary>Hint 2</summary>
Summation by parts transfers that cancellation to the reciprocal weight; its differentiated tail is integrable.
</details>
<details>
<summary>Solution</summary>
Summation by parts combines bounded $A(x)=\\sum_{n\\le x}\\chi(n)$ with decreasing $1/n$ whose derivative is integrable at infinity after multiplication by the bound, yielding convergence for nonprincipal periodic characters.
</details>

### Exercise 16: Nonvanishing gap {#characters-primes-progressions-ex-16}

Why is convergence of $L(1,\\chi)$ insufficient for Dirichlet's proof?

<details>
<summary>Hint 1</summary>
A logarithm has real part equal to the logarithm of the modulus.
</details>
<details>
<summary>Hint 2</summary>
A zero limiting value would make this real part unbounded below, despite convergence of the original series.
</details>
<details>
<summary>Solution</summary>
The logarithm must remain bounded near one. If the limit were zero, the real part of any logarithm would tend to $-\\infty$, since it equals $\\log|L(s,\\chi)|$. A separate nonvanishing theorem is essential.
</details>

### Exercise 17: Infinitude from reciprocal divergence {#characters-primes-progressions-ex-17}

Why does divergence of $\\sum_{p\\equiv a}1/p^s$ as $s\\to 1+$ imply infinitely many such primes?

<details>
<summary>Hint 1</summary>
Assume the prime set in that progression were finite.
</details>
<details>
<summary>Hint 2</summary>
Each of its finitely many reciprocal-power terms has a finite continuous limit at one.
</details>
<details>
<summary>Solution</summary>
A finite set would give a finite sum continuous and bounded near $s=1$, contradicting divergence.
</details>

### Exercise 18: Fixed-modulus boundary {#characters-primes-progressions-ex-18}

Why may an asymptotic for fixed $q$ not be used uniformly for $q$ growing with $x$?

<details>
<summary>Hint 1</summary>
Write out the quantifiers in the fixed-q estimate.
</details>
<details>
<summary>Hint 2</summary>
Both its comparison constant and its starting threshold may depend on q, so growing q changes the claim.
</details>
<details>
<summary>Solution</summary>
Its hidden error constant and threshold may depend on $q$. Uniform use requires a theorem explicitly controlling that dependence.
</details>

<a id="section-413-chapter-summary"></a>

<a id="section-619-exercises-a-filter-on-a-noncyclic-unit-group"></a>
### -Infinity. NTP-16-E19. Extend the modulo-eight filter correctly {#section-621-ntp-16-e19-extend-the-modulo-eight-filter-correctly}

Use the table in Section 11 to write an indicator of $n\\equiv3\\bmod8$ valid for every integer $n$. Explain why replacing its principal character by the constant one gives a wrong answer on even inputs.


<details>
<summary>Hint 1</summary>
Use the four characters of the noncyclic unit group modulo eight.
</details>
<details>
<summary>Hint 2</summary>
Their values are independent sign choices on the two generators; the filter has four terms, not a cyclic order-four character.
</details>

<a id="section-633-solutions-a-filter-on-a-noncyclic-unit-group"></a>

## Solutions: a filter on a noncyclic unit group {#section-635-solutions-a-filter-on-a-noncyclic-unit-group}

<a id="section-635-ntp-16-e19-extend-the-modulo-eight-filter-correctly-sol"></a>
### NTP-16-E19. Extend the modulo-eight filter correctly — solution {#section-637-ntp-16-e19-extend-the-modulo-eight-filter-correctly-sol}

<details>
<summary>Solution</summary>
The indicator is $(\\chi_{00}(n)-\\chi_{10}(n)-\\chi_{01}(n)+\\chi_{11}(n))/4$. At $n\\equiv3$ the four signed terms are all one. At each other unit column their sum is zero. At an even input all four zero-extended characters vanish, giving zero. If $\\chi_{00}$ is replaced by the constant one, the other three characters still vanish at an even input and the expression becomes $1/4$, so it is not an indicator. The unit-domain identity must be extended together with all of its terms.
</details>

<a id="section-642-references-character-theory-and-the-boundary-theorem"></a>

## Sources: character theory and the boundary theorem {#section-644-references-character-theory-and-the-boundary-theorem}

The finite-group extension, counting, separation and both orthogonality proofs above are supplied locally. An independent primary-author comparison is Keith Conrad, [Characters of Finite Abelian Groups](https://kconrad.math.uconn.edu/blurbs/grouptheory/charthy.pdf), Theorems 3.3–3.5 and the orthogonality discussion.

The imported theorem $L(1,\\chi)\\ne0$ for nonprincipal characters, including imprimitive ones, is checked against Kiran Kedlaya, [Dirichlet characters and L-functions](https://kskedlaya.org/ant/chap-lfunc.html), Section 3.4, Theorems 3.10 and 3.11. Its holomorphic boundary setup is Theorem 3.5. No proof of those nonvanishing theorems or of the prime number theorem in progressions is claimed here.


<a id="section-649-summary-and-next-connection"></a>
`;export{e as default};
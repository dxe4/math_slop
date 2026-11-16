var e=`---
parent_id: book-complex-analysis
chapter_id: gamma-zeta-functions
title: The gamma and zeta functions
level: graduate
license: CC BY-SA 4.0
---

# The gamma and zeta functions

The factorial and the sum of reciprocal powers initially belong to different parts of mathematics. The gamma function extends factorials to complex arguments; the zeta function records integers and their prime factorizations. An integral connects them. That connection also exposes an important principle of analytic continuation: a divergent original formula does not prevent the function it once defined from having a meaningful continuation, but the continued value is not an ordinary sum of the divergent series.

Preparation: [Analytic continuation](analytic-continuation.md), [Entire and meromorphic functions](entire-meromorphic-functions.md), and [Power series and analytic functions](power-series-analytic-functions.md). For unique prime factorization and its arithmetic setting, use the registered [Number Theory reference](../number-theory-proof-reference.md). We use absolute convergence, uniformly controlled improper integrals, uniform convergence on compact subsets, and positive-real powers defined by \\(t^s=e^{s\\log t}\\) for \\(t>0\\). No choice of a complex logarithm of \\(t\\) is involved in the real integrals below.

## Gamma from a convergent integral
<a id="gamma-holomorphy"></a>

**Definition 18.1 (Gamma integral).** For \\(\\operatorname{Re}s>0\\), set
\\[
\\Gamma(s)=\\int_0^\\infty e^{-t}t^{s-1}\\,dt.
\\]

**Proposition 18.2 (Holomorphy and recurrence).** This integral defines a holomorphic function in the right half-plane, with derivatives obtained by inserting powers of \\(\\log t\\). It satisfies
\\[
\\Gamma(s+1)=s\\Gamma(s),\\qquad \\Gamma(1)=1,
\\]
and consequently \\(\\Gamma(n+1)=n!\\) for every integer \\(n\\ge0\\).

*Proof.* On a compact subset of the right half-plane, choose \\(0<\\delta\\le\\operatorname{Re}s\\le M\\). For \\(0<t\\le1\\), the integrand and its \\(k\\)th parameter derivative are bounded by \\(t^{\\delta-1}|\\log t|^k\\), which is integrable by the substitution \\(u=-\\log t\\). For \\(t\\ge1\\), they are bounded by \\(e^{-t}t^{M-1}(\\log t)^k\\), also integrable since exponential decay dominates any fixed power and logarithm. These uniform majorants justify differentiation under the integral, either by dominated difference quotients or by locally uniform convergence of truncated holomorphic integrals. Thus gamma is holomorphic with the stated derivative formulas.

For the recurrence integrate \\(t^s e^{-t}\\) by parts on \\([\\varepsilon,R]\\). The boundary terms tend to zero because \\(\\operatorname{Re}s>0\\) at zero and exponential decay dominates at infinity. The result is \\(\\Gamma(s+1)=s\\Gamma(s)\\). Direct integration gives \\(\\Gamma(1)=1\\), and induction gives the integer values. ∎

For positive real \\(s\\), gamma is positive because its integrand is positive. Complex arguments do not admit that positivity argument. In particular, nonvanishing in the whole right half-plane is not a consequence of the integral being nonzero on the positive axis. We prove it using an entire reciprocal product before using gamma to divide an identity in the zeta construction.

## An Euler limit and a zero-free gamma function
<a id="gamma-euler-product"></a>

**Lemma 18.3 (Euler limit).** Uniformly on compact subsets of \\(\\operatorname{Re}s>0\\),
\\[
\\Gamma(s)=\\lim_{N\\to\\infty}\\frac{N!\\,N^s}{s(s+1)\\cdots(s+N)}.
\\]

*Proof.* Integrating \\(\\int_0^1t^{s-1}(1-t)^Ndt\\) by parts repeatedly gives \\(N!/[s(s+1)\\cdots(s+N)]\\). For clarity the first integration moves a derivative onto \\((1-t)^N\\), giving \\(N/s\\) times the same integral with exponent \\(s\\) and power \\(N-1\\); after \\(N\\) steps the remaining integral is \\(1/(s+N)\\). All endpoint terms vanish because \\(\\operatorname{Re}s>0\\).

Multiply by \\(N^s\\) and substitute \\(u=Nt\\). The resulting integral is
\\[
\\int_0^N u^{s-1}(1-u/N)^Ndu.
\\]
Extend its integrand by zero for \\(u>N\\). It tends pointwise to \\(u^{s-1}e^{-u}\\). Since \\((1-u/N)^N\\le e^{-u}\\) for \\(0\\le u\\le N\\), the same endpoint majorants as in Proposition 18.2 dominate uniformly on compact \\(s\\)-sets. To see uniform convergence explicitly, first make both tails small by these common majorants, then use uniform convergence of the real factor on a fixed bounded \\(u\\)-interval away from zero. This proves the Euler limit locally uniformly. ∎

Let \\(H_N=\\sum_{k=1}^N1/k\\). The real numbers \\(H_N-\\log N\\) converge to a finite constant \\(\\gamma\\). Indeed their successive differences are \\(1/(N+1)-\\log(1+1/N)<0\\), since the integral of \\(1/x\\) from \\(N\\) to \\(N+1\\) exceeds \\(1/(N+1)\\). They are bounded below by zero using the integral comparison \\(H_N\\ge\\int_1^Ndx/x\\). This proves existence of the constant without assuming a numerical value.

**Theorem 18.4 (Entire reciprocal and meromorphic gamma).** The product
\\[
E(s)=s e^{\\gamma s}\\prod_{k=1}^\\infty(1+s/k)e^{-s/k}
\\]
converges locally uniformly to an entire function with simple zeros exactly at \\(0,-1,-2,\\ldots\\). On \\(\\operatorname{Re}s>0\\), it is \\(1/\\Gamma(s)\\). Gamma extends meromorphically to the plane, has no zeros, and has simple poles at \\(-n\\), with residue \\((-1)^n/n!\\).

*Proof.* On a fixed compact set and sufficiently large \\(k\\), \\(|s/k|\\le1/2\\). The logarithm of the \\(k\\)th factor is \\(\\log(1+s/k)-s/k\\), whose power series has modulus at most \\(2|s|^2/k^2\\). The logarithm series therefore converges uniformly on compact sets. The product argument from Chapter 17 makes its tail holomorphic and nonvanishing. Its finite factors give precisely the simple zeros stated, including the prefactor \\(s\\) at zero.

The reciprocals of the Euler approximants are
\\[
E_N(s)=s\\prod_{k=1}^N(1+s/k)N^{-s}
=s e^{s(H_N-\\log N)}\\prod_{k=1}^N(1+s/k)e^{-s/k}.
\\]
They converge locally uniformly to \\(E\\) on the plane. In the right half-plane the Euler approximants converge to \\(\\Gamma\\), and each approximant times \\(E_N\\) equals one. Passing to the limit gives \\(\\Gamma E=1\\). Thus gamma is nonzero there.

For any \\(s\\) farther left, choose an integer \\(m\\) with \\(\\operatorname{Re}(s+m)>0\\), and define meromorphically
\\[
\\Gamma(s)=\\frac{\\Gamma(s+m)}{s(s+1)\\cdots(s+m-1)}.
\\]
The recurrence makes definitions for different \\(m\\) agree on their overlaps. Away from nonpositive integers both numerator and denominator are nonzero, so there are no zeros or poles there. Near \\(s=-n\\), choose \\(m=n+1\\). The numerator tends to \\(\\Gamma(1)=1\\), and the denominator has a simple zero with remaining-factor product \\((-1)^n n!\\). Thus the pole is simple with the indicated residue. The reciprocal is the entire function \\(E\\), first on the right half-plane and then everywhere by continuation. ∎

## Zeta in its half-plane of convergence
<a id="zeta-series-euler-product"></a>

**Definition 18.5 (Zeta series).** For \\(\\operatorname{Re}s>1\\), define
\\[
\\zeta(s)=\\sum_{n=1}^\\infty n^{-s}.
\\]

The series converges absolutely and locally uniformly there: on a compact set take \\(\\operatorname{Re}s\\ge1+\\delta\\), and compare with \\(\\sum n^{-1-\\delta}\\). It is therefore holomorphic. Its derivatives can also be taken termwise on smaller half-planes because \\((\\log n)^k n^{-1-\\delta}\\) is summable; this follows, for example, by comparison with \\(n^{-1-\\delta/2}\\) for large \\(n\\).

**Theorem 18.6 (Euler product and nonvanishing).** In \\(\\operatorname{Re}s>1\\),
\\[
\\zeta(s)=\\prod_{p\\ \\mathrm{prime}}(1-p^{-s})^{-1},
\\]
and the product is nonzero.

*Proof.* For a finite set of primes, expand each geometric series. Absolute convergence permits multiplication, and unique prime factorization identifies the result as the sum of \\(n^{-s}\\) over positive integers whose prime factors belong to that set. Include all primes at most \\(X\\). Every omitted integer has a prime factor larger than \\(X\\), hence itself exceeds \\(X\\). The modulus of the omitted sum is at most \\(\\sum_{n>X}n^{-\\sigma}\\), where \\(\\sigma=\\operatorname{Re}s>1\\), tending to zero. Thus the finite products tend to zeta.

To prove that the limit is nonzero, rather than merely a limit of nonzero numbers, use logarithms. The series
\\[
\\sum_p\\sum_{k\\ge1}\\frac{p^{-ks}}k
\\]
is absolutely convergent: its modulus sum is bounded by \\(\\sum_p p^{-\\sigma}/(1-p^{-\\sigma})\\le C_\\sigma\\sum_{n\\ge2}n^{-\\sigma}<\\infty\\). Its exponential is the limit of the finite Euler products and never vanishes. Hence zeta has no zeros in this half-plane. ∎

The theorem links an additive sum over integers to a multiplicative product over primes. Its absolute-convergence region is part of the theorem. It does not justify inserting \\(s=1\\), where both sides diverge, or using the same product in the critical strip without another argument. The continuation below extends the function, not the convergence of this original product.

## Mellin integration and full continuation
<a id="zeta-mellin-continuation"></a>

**Theorem 18.7 (Meromorphic continuation of zeta).** Zeta has a unique meromorphic continuation to the complex plane. Its only pole is simple, at \\(s=1\\), with residue one. Moreover \\(\\zeta(0)=-1/2\\), \\(\\zeta(-1)=-1/12\\), and \\(\\zeta(-2n)=0\\) for every positive integer \\(n\\).

*Proof.* For \\(\\operatorname{Re}s>1\\), expand \\((e^t-1)^{-1}=\\sum_{n\\ge1}e^{-nt}\\). The sum of absolute integrals after multiplication by \\(t^{s-1}\\) is \\(\\Gamma(\\sigma)\\sum n^{-\\sigma}<\\infty\\). Interchanging sum and integral is therefore justified. Substitution \\(u=nt\\) in each term gives
\\[
\\Gamma(s)\\zeta(s)=\\int_0^\\infty\\frac{t^{s-1}}{e^t-1}dt.
\\]
Put \\(A(t)=t/(e^t-1)\\), with its removable value one at zero. It is holomorphic for complex \\(|t|<2\\pi\\), because the nonzero zeros of \\(e^t-1\\) are \\(2\\pi ik\\). Write \\(A(t)=\\sum_{k\\ge0}a_kt^k\\). Its first coefficients, found by multiplying by \\((e^t-1)/t\\), are \\(a_0=1,a_1=-1/2,a_2=1/12\\).

For every integer \\(M\\ge0\\), define
\\[
J_M(s)=\\int_1^\\infty\\frac{t^{s-1}}{e^t-1}dt
+\\int_0^1 t^{s-2}\\left(A(t)-\\sum_{k=0}^M a_kt^k\\right)dt
+\\sum_{k=0}^M\\frac{a_k}{s+k-1}.
\\]
The first integral is entire in \\(s\\) by exponential decay and the same logarithmic derivative estimates as before. The Taylor remainder is \\(O(t^{M+1})\\) on \\([0,1]\\), so the second integral is holomorphic on \\(\\operatorname{Re}s>-M\\): its modulus near zero is bounded by a constant times \\(t^{\\sigma+M-1}\\), with logarithmic factors still integrable on compact subsets. The rational terms have only the displayed possible simple poles. On \\(\\operatorname{Re}s>1\\), integrating the subtracted powers recovers the original Mellin integral, so \\(J_M=\\Gamma\\zeta\\) there.

For consecutive \\(M\\), direct subtraction gives zero wherever both expressions are holomorphic: the removed integral of \\(a_{M+1}t^{s+M-1}\\) equals \\(a_{M+1}/(s+M)\\), exactly its added rational term. Thus the \\(J_M\\) patch to a meromorphic function \\(J\\) on the plane, with possible simple poles only at \\(1,0,-1,-2,\\ldots\\), and residue \\(a_k\\) at \\(s=1-k\\). Define the continued zeta by \\(E(s)J(s)\\), using the entire reciprocal gamma function. It agrees with the original zeta in the right half-plane.

At each nonpositive integer, the simple zero of \\(E\\) cancels the possible simple pole of \\(J\\). At one, \\(J\\) has residue \\(a_0=1\\) and \\(E(1)=1\\), so zeta has a simple pole of residue one. There are no other possible poles. Uniqueness follows from the identity theorem for meromorphic functions, applied after locally clearing poles.

Near zero, \\(E(s)/s\\to1\\), so the term \\(a_1/s\\) gives \\(\\zeta(0)=a_1=-1/2\\). At \\(-n\\), gamma's residue gives \\(E'(-n)=(-1)^n n!\\). Hence \\(\\zeta(-n)=(-1)^n n!a_{n+1}\\). In particular \\(a_2=1/12\\) gives \\(\\zeta(-1)=-1/12\\). Finally \\(A(-t)=A(t)+t\\), so \\(A(t)+t/2\\) is even. All odd coefficients \\(a_{2n+1}\\) for \\(n\\ge1\\) vanish, giving \\(\\zeta(-2n)=0\\). ∎

The proof constructs continuation on successively larger half-planes and checks compatibility directly. Multiplication by \\(E\\) is essential: the Mellin expression itself has extra possible poles that are removed in zeta by gamma's reciprocal zeros. The calculation establishes the listed negative values as analytic-continuation values. It does not claim that \\(1+2+3+\\cdots\\) converges to \\(-1/12\\) in the ordinary sense; its partial sums tend to positive infinity.

No assertion about all zeros in the strip \\(0<\\operatorname{Re}s<1\\) has been proved here. In particular the Riemann hypothesis is not a conclusion of the continuation or the Euler product. The functional equation and prime-counting applications require further work and are not substituted for missing steps in the present argument.

## Worked examples

### Example 18.8: A factorial away from integers

Use the substitution \\(t=x^2\\) to write \\(\\Gamma(1/2)=2\\int_0^\\infty e^{-x^2}dx\\). Let \\(I=\\int_{-\\infty}^{\\infty}e^{-x^2}dx>0\\). For finite \\(R>0\\), ordinary iterated integration on the square gives \\(I_R^2=\\int_{[-R,R]^2}e^{-(x^2+y^2)}dxdy\\), where \\(I_R=\\int_{-R}^R e^{-x^2}dx\\). The disk of radius \\(R\\) lies inside that square, and the square lies inside the disk of radius \\(\\sqrt2R\\). Positivity and polar integration therefore sandwich \\(I_R^2\\) between \\(\\pi(1-e^{-R^2})\\) and \\(\\pi(1-e^{-2R^2})\\). Taking \\(R\\to\\infty\\) gives \\(I^2=\\pi\\). Therefore \\(I=\\sqrt\\pi\\), and \\(\\Gamma(1/2)=\\sqrt\\pi\\).

The recurrence then gives \\(\\Gamma(3/2)=\\sqrt\\pi/2\\) and \\(\\Gamma(-1/2)=-2\\sqrt\\pi\\). The last value is not obtained from the defining real integral, which diverges at zero for that argument; it is obtained from the proved meromorphic continuation and its recurrence.

### Example 18.9: A residue at a negative integer

Near \\(s=-2\\), use \\(\\Gamma(s)=\\Gamma(s+3)/[s(s+1)(s+2)]\\). The numerator tends to \\(\\Gamma(1)=1\\), and the two nonvanishing denominator factors tend to \\((-2)(-1)=2\\). Thus the coefficient of \\(1/(s+2)\\) is \\(1/2\\). This agrees with \\((-1)^2/2!\\).

Taking a reciprocal gives \\(E(s)=2(s+2)+O((s+2)^2)\\). If the Mellin continuation \\(J\\) had a pole there with residue \\(a_3\\), their product would take value \\(2a_3\\). But evenness of \\(A(t)+t/2\\) gives \\(a_3=0\\), hence \\(\\zeta(-2)=0\\). This illustrates how a reciprocal-gamma zero and a missing Taylor coefficient interact.

### Example 18.10: A justified finite Euler approximation

For real \\(s=2\\), take the product over primes at most \\(X\\). Its geometric expansion sums \\(n^{-2}\\) only over integers with those prime factors. All omitted integers exceed \\(X\\), so
\\[
0\\le\\zeta(2)-\\prod_{p\\le X}(1-p^{-2})^{-1}
\\le\\sum_{n>X}n^{-2}.
\\]
For integer \\(X\\ge1\\), integral comparison bounds the last tail by \\(1/X\\). This is a rigorous, though coarse, error bound for that finite prime product. It does not require evaluating \\(\\zeta(2)\\) in closed form.

At \\(s=1\\), the same tail comparison diverges and supplies no error bound tending to zero. The prime product's convergence proof therefore genuinely depends on being to the right of one. A numerical product at many primes cannot replace that hypothesis.

## Exercises

### Exercise 18.1
<a id="gamma-zeta-functions-ex-1"></a>
Compute \\(\\Gamma(5)\\) and \\(\\Gamma(7/2)\\).
<details><summary>Hint 1</summary>
Start with \\(\\Gamma(1)=1\\) and \\(\\Gamma(1/2)=\\sqrt\\pi\\).
</details>
<details><summary>Hint 2</summary>
Apply the recurrence repeatedly, retaining each half-integer factor.
</details>
<details><summary>Solution</summary>
One gets \\(\\Gamma(5)=4!=24\\). Also \\(\\Gamma(7/2)=(5/2)(3/2)(1/2)\\Gamma(1/2)=15\\sqrt\\pi/8\\). Both computations use arguments where the recurrence was proved and extended consistently.
</details>

### Exercise 18.2
<a id="gamma-zeta-functions-ex-2"></a>
Find the residues of gamma at zero and at minus three.
<details><summary>Hint 1</summary>
Use the general residue formula from the recurrence proof.
</details>
<details><summary>Hint 2</summary>
The sign is \\((-1)^n\\) at \\(-n\\).
</details>
<details><summary>Solution</summary>
At zero the residue is one. At \\(-3\\) it is \\((-1)^3/3!=-1/6\\). These are coefficients of the inverse first powers in the local Laurent expansions, not values of gamma at its poles.
</details>

### Exercise 18.3
<a id="gamma-zeta-functions-ex-3"></a>
Show directly why the gamma integral diverges at zero for real \\(s=-1/2\\).
<details><summary>Hint 1</summary>
For small positive \\(t\\), the exponential stays bounded below by a positive constant.
</details>
<details><summary>Hint 2</summary>
Compare with \\(t^{-3/2}\\).
</details>
<details><summary>Solution</summary>
On \\(0<t<1\\), \\(e^{-t}\\ge e^{-1}\\), so the integrand is at least \\(e^{-1}t^{-3/2}\\). Its integral diverges at zero. Thus the finite continuation value \\(-2\\sqrt\\pi\\) is not the value of the original improper integral at that argument.
</details>

### Exercise 18.4
<a id="gamma-zeta-functions-ex-4"></a>
Prove local uniform convergence of the zeta series in \\(\\operatorname{Re}s>1\\).
<details><summary>Hint 1</summary>
A compact subset has a positive distance in real part from the line one.
</details>
<details><summary>Hint 2</summary>
Apply the majorant \\(\\sum n^{-1-\\delta}\\).
</details>
<details><summary>Solution</summary>
For any compact set choose \\(\\delta>0\\) with \\(\\operatorname{Re}s\\ge1+\\delta\\) there. Then \\(|n^{-s}|=n^{-\\operatorname{Re}s}\\le n^{-1-\\delta}\\). The summable majorant gives uniform absolute convergence and hence holomorphy by the locally uniform limit theorem.
</details>

### Exercise 18.5
<a id="gamma-zeta-functions-ex-5"></a>
Explain why a convergent sequence of nonzero finite Euler products does not alone prove its limit is nonzero.
<details><summary>Hint 1</summary>
Recall a sequence of positive nonzero numbers tending to zero.
</details>
<details><summary>Hint 2</summary>
The logarithm-series estimate is the extra ingredient.
</details>
<details><summary>Solution</summary>
The sequence \\(1/n\\) shows that nonzero approximants may converge to zero. For the Euler product, absolute convergence of the logarithm series proves that the limit is the exponential of a finite complex number, which cannot vanish. The latter argument, not just finite nonvanishing, establishes zero-freeness.
</details>

### Exercise 18.6
<a id="gamma-zeta-functions-ex-6"></a>
Derive \\(a_0,a_1,a_2\\) for \\(A(t)=t/(e^t-1)\\) without quoting Bernoulli numbers.
<details><summary>Hint 1</summary>
Multiply \\(A(t)\\) by \\(1+t/2+t^2/6+\\cdots\\).
</details>
<details><summary>Hint 2</summary>
The product is one; compare coefficients through degree two.
</details>
<details><summary>Solution</summary>
The constant equation gives \\(a_0=1\\). The linear equation gives \\(a_1+1/2=0\\), hence \\(a_1=-1/2\\). The quadratic equation is \\(a_2+a_1/2+1/6=0\\), giving \\(a_2=1/12\\).
</details>

### Exercise 18.7
<a id="gamma-zeta-functions-ex-7"></a>
Verify the identity \\(A(-t)=A(t)+t\\), and deduce the vanishing odd coefficients used for trivial zeta zeros.
<details><summary>Hint 1</summary>
Multiply numerator and denominator of \\(A(-t)\\) by \\(e^t\\).
</details>
<details><summary>Hint 2</summary>
Check that adding \\(t/2\\) makes an even function.
</details>
<details><summary>Solution</summary>
One has \\(A(-t)=te^t/(e^t-1)=t+t/(e^t-1)=t+A(t)\\). Thus \\(B(t)=A(t)+t/2\\) satisfies \\(B(-t)=B(t)\\). Its odd Taylor coefficients vanish. For \\(A\\), only the linear correction remains; all odd coefficients of degree at least three are zero, giving \\(\\zeta(-2n)=0\\) by the proved continuation formula.
</details>

### Exercise 18.8
<a id="gamma-zeta-functions-ex-8"></a>
Why does the remainder after subtracting \\(M+1\\) Taylor terms give holomorphy of the small Mellin integral on \\(\\operatorname{Re}s>-M\\)?
<details><summary>Hint 1</summary>
The remainder is \\(O(t^{M+1})\\).
</details>
<details><summary>Hint 2</summary>
Multiply by \\(t^{s-2}\\) and use the exponent criterion at zero.
</details>
<details><summary>Solution</summary>
The modulus is bounded near zero by \\(Ct^{\\sigma+M-1}\\), integrable exactly when \\(\\sigma+M>0\\). On each compact subset of this half-plane there is a positive margin in that inequality. Extra powers of \\(|\\log t|\\) from differentiation remain integrable, proving holomorphy under the integral.
</details>

### Exercise 18.9
<a id="gamma-zeta-functions-ex-9"></a>
Compute the residue of zeta at one from the Mellin construction.
<details><summary>Hint 1</summary>
Only the \\(a_0/(s-1)\\) term is singular there.
</details>
<details><summary>Hint 2</summary>
The reciprocal gamma value at one is one.
</details>
<details><summary>Solution</summary>
The residue of \\(J\\) is \\(a_0=1\\), and \\(E(1)=1/\\Gamma(1)=1\\). Multiplying by a holomorphic factor multiplies a simple-pole residue by its value at the pole. Hence the zeta residue is one, and because it is nonzero the singularity is genuinely a pole.
</details>

### Exercise 18.10
<a id="gamma-zeta-functions-ex-10"></a>
Explain why \\(\\zeta(-1)=-1/12\\) is not an ordinary sum of the positive integers.
<details><summary>Hint 1</summary>
Write the ordinary partial sums.
</details>
<details><summary>Hint 2</summary>
Analytic continuation preserves a function on its original convergence domain, not convergence of its defining series elsewhere.
</details>
<details><summary>Solution</summary>
The partial sum \\(1+2+\\cdots+N=N(N+1)/2\\) tends to positive infinity. Thus the ordinary series diverges. The value \\(-1/12\\) is instead the value at minus one of the unique meromorphic continuation of the function initially defined by \\(\\sum n^{-s}\\) for real part greater than one. These are different mathematical operations.
</details>

### Exercise 18.11
<a id="gamma-zeta-functions-ex-11"></a>
Show that gamma has no zeros anywhere in the plane where it is finite.
<details><summary>Hint 1</summary>
Nonvanishing is proved in the right half-plane by the reciprocal product.
</details>
<details><summary>Hint 2</summary>
Shift any other nonpole argument to that half-plane using the recurrence.
</details>
<details><summary>Solution</summary>
For a finite nonpole argument \\(s\\), choose \\(m\\) with \\(\\operatorname{Re}(s+m)>0\\). None of \\(s,s+1,\\ldots,s+m-1\\) is zero because a nonpositive integer would be a pole argument. The formula \\(\\Gamma(s)=\\Gamma(s+m)/\\prod_{j=0}^{m-1}(s+j)\\) is therefore a ratio of nonzero numbers. Hence gamma cannot vanish there.
</details>

### Exercise 18.12
<a id="gamma-zeta-functions-ex-12"></a>
For real \\(\\sigma>1\\) and integer \\(X\\ge1\\), bound the error of the finite Euler product over primes at most \\(X\\) by \\(X^{1-\\sigma}/(\\sigma-1)\\).
<details><summary>Hint 1</summary>
The omitted integers all exceed \\(X\\).
</details>
<details><summary>Hint 2</summary>
Compare their positive power sum with the integral from \\(X\\) to infinity.
</details>
<details><summary>Solution</summary>
The finite product expands into a subset of the positive terms in \\(\\zeta(\\sigma)\\), and all omitted terms have indices greater than \\(X\\). Thus the nonnegative error is at most \\(\\sum_{n>X}n^{-\\sigma}\\le\\int_X^\\infty x^{-\\sigma}dx=X^{1-\\sigma}/(\\sigma-1)\\). This bound depends on the strict condition \\(\\sigma>1\\) and deteriorates as \\(\\sigma\\downarrow1\\).
</details>

## Worked example: factorial interpolation and continuation values

The gamma recurrence gives \\(\\Gamma(3/2)=\\tfrac12\\Gamma(1/2)=\\sqrt\\pi/2\\), then \\(\\Gamma(5/2)=\\tfrac32\\Gamma(3/2)=3\\sqrt\\pi/4\\). Moving left instead gives \\(\\Gamma(-1/2)=\\Gamma(1/2)/(-1/2)=-2\\sqrt\\pi\\). Only the positive arguments in this list are covered by the original integral. At \\(-1/2\\), the integrand \\(e^{-t}t^{-3/2}\\) has a nonintegrable singularity at zero, so the negative value belongs to the meromorphic continuation. The recurrence is a bridge between domains, not permission to use the divergent integral outside its initial half-plane.

Likewise, \\(\\zeta(-1)=-1/12\\) is a value of the continued meromorphic function. The defining series at \\(s=-1\\) would be \\(\\sum_{n\\ge1}n\\), whose partial sums are \\(N(N+1)/2\\to\\infty\\). Calling that ordinary series equal to \\(-1/12\\) would contradict its elementary partial sums. The Mellin construction obtains the continued value through subtraction of the small-\\(t\\) Taylor terms and multiplication by the reciprocal gamma function. Those operations define a new analytic expression agreeing with the original series where the latter converges; uniqueness then fixes its value elsewhere.

## A quantitative Euler-product truncation

Fix a real \\(\\sigma>1\\), and include in the Euler product all primes at most \\(X\\). Expanding the finite product yields a sum over positive integers whose prime factors are all at most \\(X\\). Every omitted integer exceeds \\(X\\), so the difference from \\(\\zeta(\\sigma)\\) is nonnegative and at most
\\[
 \\sum_{n>X}n^{-\\sigma}\\le\\int_X^\\infty t^{-\\sigma}dt=\\frac{X^{1-\\sigma}}{\\sigma-1},
\\]
with the integral comparison interpreted using the appropriate integer endpoint if \\(X\\) is not integral. This gives an explicit error certificate for a finite prime product. The certificate worsens as \\(\\sigma\\downarrow1\\), reflecting the boundary of absolute convergence. It does not imply convergence of the prime product at one, and it says nothing by itself about zeros in the critical strip. The quantitative bound is obtained entirely inside the region where both sum and product are justified.

## Cancellation at a nonpositive integer

The Mellin continuation first produces \\(J(s)=\\Gamma(s)\\zeta(s)\\), which may have a simple pole at a nonpositive integer \\(-n\\). The reciprocal gamma function \\(E=1/\\Gamma\\) has a simple zero there, so \\(E(s)J(s)\\) can have a finite value. Locally write \\(E(s)=E'(-n)(s+n)+O((s+n)^2)\\) and \\(J(s)=a_{n+1}/(s+n)+H(s)\\), with \\(H\\) holomorphic near \\(-n\\). Multiplication gives \\(\\zeta(-n)=E'(-n)a_{n+1}=(-1)^n n!a_{n+1}\\). This calculation shows exactly why the possible Mellin pole does not become a zeta pole. If \\(a_{n+1}=0\\), the value is zero; that is how the even negative zeros arise from the parity of \\(A(t)+t/2\\).

The mechanism is local and algebraic once the global continuation has been built. It does not provide an Euler product at these arguments. The Euler product's nonvanishing proof uses an absolutely convergent logarithm series only for \\(\\operatorname{Re}s>1\\). The continued zeta can vanish elsewhere without conflicting with that proof, because continuation preserves the function, not a divergent product representation.

## The half-plane margin in parameter differentiation

To differentiate the gamma integral with respect to \\(s\\), one inserts \\(\\log t\\). On a compact parameter set with \\(\\operatorname{Re}s\\ge\\delta>0\\), the integral near zero is bounded by \\(\\int_0^1 t^{\\delta-1}|\\log t|^kdt\\). Substituting \\(u=-\\log t\\) turns this into \\(\\int_0^\\infty e^{-\\delta u}u^kdu\\), which is finite. The positive margin \\(\\delta\\) is essential; at \\(\\delta=0\\), even the undifferentiated integral has a logarithmic divergence near zero. At infinity, \\(e^{-t}\\) dominates every fixed power of \\(t\\) and \\(\\log t\\). These two independent endpoint estimates explain why the defining integral is holomorphic precisely on its initial right half-plane.

The same principle controls the zeta series. On \\(\\operatorname{Re}s\\ge1+\\delta\\), differentiating once inserts \\(-\\log n\\), and \\(\\sum_{n\\ge1}(\\log n)n^{-1-\\delta}\\) converges. A smaller positive margin can absorb any fixed power of \\(\\log n\\), so all parameter derivatives converge locally uniformly. At the boundary \\(\\operatorname{Re}s=1\\), the comparison loses its margin and provides no such assertion. Analytic continuation later defines zeta beyond this boundary by a different expression, while these original series estimates remain tied to their absolute-convergence region.

## Sources

Original exposition and exercises. Definitions and analytic properties may be compared with the primary NIST Digital Library of Mathematical Functions: [Gamma definitions and properties, §5.2](https://dlmf.nist.gov/5.2), [Gamma functional relations, §5.5](https://dlmf.nist.gov/5.5), and [Zeta definition and expansions, §25.2](https://dlmf.nist.gov/25.2). The author-hosted [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/) provides background on products and continuation. All continuation and nonvanishing results used in this chapter have their arguments supplied above; no functional equation or Riemann-hypothesis assertion is required.

## Summary

Gamma begins as a holomorphic integral, satisfies the factorial recurrence, and extends meromorphically with explicitly computed poles. An Euler limit produces an entire reciprocal and proves gamma has no zeros. Zeta begins as an absolutely convergent series; unique factorization gives its nonvanishing Euler product to the right of one. A Mellin integral and successive Taylor subtractions continue it to the whole plane, with one pole and the stated special values. These examples connect local analytic estimates, global continuation, infinite products, and arithmetic while preserving the distinction between a convergent original formula and its continued function.
`;export{e as default};
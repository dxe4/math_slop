var e=`---
parent_id: book-complex-analysis
chapter_id: argument-principle-rouche
title: Argument principle and Rouché
level: graduate
license: CC BY-SA 4.0
---

# Argument principle and Rouché

A polynomial can have roots whose formulas are unusable, yet the number of roots in a specified region may be easy to determine. The same is true for holomorphic functions. Instead of solving an equation, we follow the change of its argument along a contour. The contour avoids zeros; the information it records concerns the zeros inside. This separation between what happens on the edge and what happens inside is one of the most useful consequences of complex integration.

Preparation: [The residue theorem](residue-theorem.md), [Zeros, identity theorem, maximum modulus](zeros-identity-maximum-modulus.md), and [Paths and contour integrals](paths-contour-integrals.md). Zeros and poles are counted with their orders. A region below has finitely many piecewise smooth Jordan boundary curves, with the complete induced orientation. Functions are defined on an open neighborhood of its compact closure. These assumptions make the boundary integrals ordinary integrals and make the number of interior zeros and poles finite when there are none on the boundary.

## The logarithmic derivative
<a id="logarithmic-derivative-orders"></a>

**Proposition 12.1 (Orders as residues).** Let \\(f\\) be meromorphic near \\(a\\), neither identically zero nor identically infinite. If \\(f\\) has a zero of order \\(m\\), then \\(f'/f\\) has residue \\(m\\). If it has a pole of order \\(m\\), the residue is \\(-m\\). At a point where \\(f\\) is finite and nonzero, \\(f'/f\\) is holomorphic.

*Proof.* At a zero, write \\(f(z)=(z-a)^m u(z)\\), with \\(u\\) holomorphic and nonzero near \\(a\\). Then
\\[
\\frac{f'}f=\\frac m{z-a}+\\frac{u'}u.
\\]
The second term is holomorphic. At a pole use \\(f=(z-a)^{-m}u\\), giving the same formula with \\(-m\\). At a regular nonzero point, division preserves holomorphy. ∎

The residue sees multiplicity automatically. A double zero contributes two turns of the image around the origin when a sufficiently small source circle is traversed once. A pole produces the opposite orientation. The logarithmic derivative therefore packages both kinds of local behavior into one meromorphic differential.

A local logarithm of \\(f\\) satisfies \\((\\log f)'=f'/f\\), but a single logarithm need not exist on the whole region. That is not an obstacle: the quotient \\(f'/f\\) is globally defined wherever \\(f\\ne0,\\infty\\). Integrating it around a loop measures precisely the failure of a logarithm to return to its original value. Supposing that a global logarithm always exists would force every such integral to vanish and would erase the zero count we are trying to recover.

## The argument principle
<a id="argument-principle-proof"></a>

**Theorem 12.2 (Argument principle).** Let \\(f\\) be meromorphic on a neighborhood of the closure of a bounded region \\(D\\) with the boundary described above. Assume \\(f\\) has neither zeros nor poles on \\(\\partial D\\). Let \\(Z\\) and \\(P\\) be the sums of the orders of its zeros and poles in \\(D\\). Then
\\[
\\frac1{2\\pi i}\\int_{\\partial D}\\frac{f'(z)}{f(z)}\\,dz=Z-P.
\\]
For each boundary component, the corresponding integral is the index of its image under \\(f\\) about zero; their oriented sum is therefore \\(Z-P\\).

*Proof.* Zeros and poles cannot accumulate in the compact closure without violating local meromorphy or the identity theorem. The absence of zeros and poles on the compact boundary also supplies a neighborhood there containing none. Thus there are finitely many in \\(D\\). Proposition 12.1 identifies every singularity and residue of \\(f'/f\\); the residue theorem gives the displayed equation. For a parametrized boundary component \\(z=\\gamma(t)\\), the chain rule gives
\\(f'(\\gamma(t))\\gamma'(t)/f(\\gamma(t))\\).
This is the index integrand of the closed path \\(f\\circ\\gamma\\). The image avoids zero and infinity by hypothesis, so its index is defined. ∎

The geometric language “change of argument” refers to a continuous argument chosen along a parameter interval. Its endpoint change is well-defined as an integer multiple of \\(2\\pi\\), even if the image winds around zero repeatedly and no single argument exists on a neighborhood of its entire image. Measuring just the difference of two principal arguments would miss full revolutions. It is the continuous lift along the path, or equivalently the integral, that supplies the correct integer.

Boundary zeros are excluded for a reason. If \\(f(z)=z-1\\) and the contour is the unit circle, its image passes through zero. Its winding number about zero is undefined. The argument principle cannot decide whether to count a point exactly on the edge as inside, nor does it assign a universal half multiplicity there. Move the contour or analyze a suitable indentation if such a case must be studied.

## Stability before comparison
<a id="zero-count-stability"></a>

**Lemma 12.3 (Nonzero boundary homotopy).** Let \\(F_t\\), \\(0\\le t\\le1\\), be holomorphic on a fixed neighborhood of \\(\\overline D\\), with \\(F_t\\) and \\(F'_t\\) continuous jointly on \\(\\partial D\\times[0,1]\\). Suppose \\(F_t(z)\\ne0\\) there. Then the number of zeros in \\(D\\), with multiplicity, is independent of \\(t\\).

*Proof.* The compact boundary-parameter set has a positive minimum for \\(|F_t|\\). Therefore \\(F'_t/F_t\\) varies continuously and uniformly along the finite-length boundary. Its integral is continuous in \\(t\\). By the argument principle divided by \\(2\\pi i\\), this integral is a nonnegative integer. A continuous integer-valued function on an interval is constant. ∎

The condition says that zeros may move or split inside, but cannot cross the boundary during the deformation. A multiple zero may become several simple zeros: multiplicity is exactly what keeps the total stable. A parameter at which the boundary condition fails can change the count, so one must inspect the entire homotopy rather than only the functions at its endpoints.

**Theorem 12.4 (Rouché).** If \\(f,g\\) are holomorphic on a neighborhood of \\(\\overline D\\), and
\\[
|g(z)|<|f(z)|\\qquad(z\\in\\partial D),
\\]
then \\(f\\) and \\(f+g\\) have the same number of zeros in \\(D\\), counted with multiplicity.

*Proof.* Put \\(F_t=f+tg\\). The reverse triangle inequality gives
\\(|F_t(z)|\\ge|f(z)|-t|g(z)|\\ge|f(z)|-|g(z)|>0\\)
on the boundary. Since \\(f,g\\) and their derivatives are continuous there, Lemma 12.3 applies to this linear homotopy. Its endpoint counts agree. ∎

Equivalently, to compare two holomorphic functions \\(f\\) and \\(h\\), establish \\(|h-f|<|f|\\) on the boundary. It is often useful to choose \\(f\\) as a single dominant polynomial term. The estimate concerns the sum of every other term, not each term separately: several individually smaller terms may add up to something larger. The triangle inequality gives a safe sufficient bound, though sometimes a sharper geometric estimate improves it.

A non-strict inequality does not automatically suffice. For \\(f(z)=z\\), \\(g(z)=-1\\) on the unit circle, \\(|g|=|f|\\), but \\(f+g=z-1\\) has a boundary zero. Additional hypotheses can produce variants, but the theorem proved here uses strict inequality everywhere on the complete boundary.

## Local consequences and inverse branches
<a id="local-zero-continuity"></a>

**Proposition 12.5 (Persistence of an isolated zero).** Suppose \\(f_n\\to f\\) uniformly on compact subsets of a domain, with all functions holomorphic. If \\(f\\) has an isolated zero of order \\(m\\) at \\(a\\), then every sufficiently small disk centered at \\(a\\), containing no other zeros of \\(f\\), contains exactly \\(m\\) zeros of \\(f_n\\) for all sufficiently large \\(n\\).

*Proof.* Choose the disk closure inside the domain with no zeros of \\(f\\) on its boundary and no other zeros inside. The continuous modulus has a positive boundary minimum \\(\\eta\\). Uniform convergence on that circle eventually gives \\(|f_n-f|<\\eta\\le|f|\\). Rouché gives the same zero count \\(m\\). ∎

The conclusion counts zeros, not distinct zero locations. If \\(f(z)=z^2\\) and \\(f_n(z)=z^2-1/n\\), the two nearby zeros are distinct, although the limiting zero is one point. This example explains why a statement claiming convergence of “the” zero would require simplicity or an additional labeling convention.

**Proposition 12.6 (A local inverse at a simple point).** If \\(f\\) is holomorphic near \\(a\\) and \\(f'(a)\\ne0\\), then there are open neighborhoods on which \\(f\\) has a holomorphic inverse.

*Proof.* Choose a small circle about \\(a\\) such that \\(f(z)-f(a)\\) has its only zero inside at \\(a\\), of order one. Its boundary modulus has a positive minimum \\(\\eta\\). For \\(|w-f(a)|<\\eta\\), Rouché compares \\(f(z)-w\\) with \\(f(z)-f(a)\\), showing exactly one solution in the disk, with multiplicity one. Shrink the target disk if necessary and let \\(h(w)\\) be this solution. The residue formula gives
\\[
h(w)=\\frac1{2\\pi i}\\int_{|z-a|=r}\\frac{z f'(z)}{f(z)-w}\\,dz.
\\]
The denominator stays uniformly away from zero on the contour for target points in compact smaller disks. Differentiation under the finite integral therefore proves that \\(h\\) is holomorphic. Its defining solution gives \\(f(h(w))=w\\). The source set \\(h(V)=f^{-1}(V)\\cap B(a,r)\\) is open, and uniqueness gives the other inverse identity there. ∎

This proof also derives the formula \\(h'(w)=1/f'(h(w))\\) by the chain rule. It demonstrates a recurring pattern: the zero count first proves existence and uniqueness, and differentiation then computes a derivative. Formal differentiation of an assumed inverse alone would not establish either existence or injectivity.

## Worked examples

### Example 12.7: Counting a quintic's small roots

Consider \\(p(z)=z^5+3z+1\\) on \\(|z|=1\\). Take \\(f(z)=3z\\), \\(g(z)=z^5+1\\). On the circle \\(|g|\\le2<3=|f|\\). Rouché shows that \\(p\\) has exactly one zero in the unit disk, counted with multiplicity. In particular that zero is simple. There are no boundary zeros because the same strict inequality implies \\(|p|\\ge1\\) there.

On \\(|z|=2\\), the term \\(z^5\\) has modulus 32, while \\(|3z+1|\\le7\\). Thus all five zeros lie in the radius-two disk. Subtracting the counts, exactly four lie in \\(1<|z|<2\\). No root formula or numerical plot was needed.

### Example 12.8: A meromorphic count with a pole

Let \\(f(z)=(z-1)^3/(z+2)^2\\), and use \\(|z|=3\\). The logarithmic derivative is \\(3/(z-1)-2/(z+2)\\). Both exceptional points lie inside; integration gives \\(2\\pi i(3-2)=2\\pi i\\). Thus the image curve has index one around zero. That number is not the number of zeros alone: three zeros and two poles contribute with opposite signs.

For \\(|z|=3/2\\), only the triple zero is inside and the same integral is \\(6\\pi i\\). Both contours are legal because neither contains a zero or pole on its image. If the radius were two, the pole at \\(-2\\) would lie on the path, invalidating the formula.

### Example 12.9: A double zero splits but its total persists

Study \\(f_\\varepsilon(z)=z^2+\\varepsilon e^z\\) in \\(|z|<1/2\\). On the boundary, \\(|z^2|=1/4\\), whereas \\(|\\varepsilon e^z|\\le|\\varepsilon|e^{1/2}\\). Hence if \\(|\\varepsilon|<e^{-1/2}/4\\), exactly two zeros lie inside, counted with multiplicity. For nonzero sufficiently small parameters they need not coincide with the original zero at zero; indeed zero itself is no longer a root.

The estimate is uniform over the whole boundary, so it supplies a quantitative parameter neighborhood. It does not identify the roots or assert that both are real when the parameter is real. Zero counting is the conclusion actually established, and is already useful when explicit roots are unavailable.

## Exercises

### Exercise 12.1
<a id="argument-principle-rouche-ex-1"></a>
Count the zeros of \\(z^4+5z+1\\) in the unit disk.
<details><summary>Hint 1</summary>
Choose the linear term as the comparison function.
</details>
<details><summary>Hint 2</summary>
The sum of the remaining term moduli is at most two on the circle.
</details>
<details><summary>Solution</summary>
On \\(|z|=1\\), \\(|z^4+1|\\le2<5=|5z|\\). Rouché gives exactly one zero, with multiplicity, because \\(5z\\) has one. Strictness also excludes boundary zeros.
</details>

### Exercise 12.2
<a id="argument-principle-rouche-ex-2"></a>
Count the zeros of \\(z^4+5z+1\\) in \\(|z|<2\\), and then in \\(1<|z|<2\\).
<details><summary>Hint 1</summary>
Use the leading term on the larger circle.
</details>
<details><summary>Hint 2</summary>
Its modulus is sixteen and the remainder is at most eleven.
</details>
<details><summary>Solution</summary>
On radius two, \\(|5z+1|\\le11<16=|z^4|\\), so all four zeros lie inside. Exercise 12.1 gives one inside radius one. Since neither circle contains a zero, the annulus contains exactly three, counted with multiplicity.
</details>

### Exercise 12.3
<a id="argument-principle-rouche-ex-3"></a>
Evaluate \\((2\\pi i)^{-1}\\int_{|z|=2}f'/f\\,dz\\) for \\(f=z^3/(z-3)^2\\).
<details><summary>Hint 1</summary>
List zeros and poles relative to radius two.
</details>
<details><summary>Hint 2</summary>
Only the zero at zero is inside.
</details>
<details><summary>Solution</summary>
The zero at zero has order three; the pole at three lies outside. There are no boundary exceptions. The argument principle gives three. Directly \\(f'/f=3/z-2/(z-3)\\), whose integral has the same value after division by \\(2\\pi i\\).
</details>

### Exercise 12.4
<a id="argument-principle-rouche-ex-4"></a>
Give a counterexample to replacing the strict inequality in Rouché by a non-strict one without further conditions.
<details><summary>Hint 1</summary>
Start with a linear comparison function on a unit circle.
</details>
<details><summary>Hint 2</summary>
Subtract a constant of modulus one.
</details>
<details><summary>Solution</summary>
Take \\(f=z\\), \\(g=-1\\). Their moduli agree on the unit circle, but \\(f+g=z-1\\) has a boundary zero, whereas \\(f\\) has one zero in the open disk. The conclusion in the stated strict form therefore fails.
</details>

### Exercise 12.5
<a id="argument-principle-rouche-ex-5"></a>
If \\(f\\) has a zero of order four and \\(g\\) a pole of order two at the same point, determine the residue of \\((fg)'/(fg)\\) there.
<details><summary>Hint 1</summary>
Orders add under multiplication.
</details>
<details><summary>Hint 2</summary>
Factor both functions into powers times nonvanishing holomorphic factors.
</details>
<details><summary>Solution</summary>
Their product is \\((z-a)^2u(z)v(z)\\), with \\(uv\\) holomorphic and nonzero. It has a zero of order two, so its logarithmic derivative has residue two. This is also the sum \\(4+(-2)\\) of the original logarithmic residues.
</details>

### Exercise 12.6
<a id="argument-principle-rouche-ex-6"></a>
Show that \\(z^n+\\varepsilon\\) has \\(n\\) zeros in \\(|z|<r\\) whenever \\(|\\varepsilon|<r^n\\).
<details><summary>Hint 1</summary>
The comparison function is a monomial.
</details>
<details><summary>Hint 2</summary>
The perturbation has constant boundary modulus.
</details>
<details><summary>Solution</summary>
On \\(|z|=r\\), \\(|\\varepsilon|<|z^n|\\). Rouché gives the count \\(n\\), including multiplicity. If \\(\\varepsilon=0\\), all multiplicity is at zero; if \\(\\varepsilon\\ne0\\), differentiating shows all roots are simple, since a root is nonzero and \\(nz^{n-1}\\ne0\\).
</details>

### Exercise 12.7
<a id="argument-principle-rouche-ex-7"></a>
For fixed \\(r>0\\), find an explicit condition on \\(\\varepsilon\\) ensuring \\(z+\\varepsilon\\sin z\\) has one zero in \\(|z|<r\\).
<details><summary>Hint 1</summary>
Compare with \\(z\\), and bound sine using its exponential formula.
</details>
<details><summary>Hint 2</summary>
On that circle, \\(|\\sin z|\\le e^r\\) is sufficient.
</details>
<details><summary>Solution</summary>
Since \\(|e^{iz}|,|e^{-iz}|\\le e^r\\), the formula for sine gives \\(|\\sin z|\\le e^r\\). Thus \\(|\\varepsilon|e^r<r\\) ensures Rouché's strict inequality and gives one zero. This is a sufficient condition, not a claim of the largest possible parameter range.
</details>

### Exercise 12.8
<a id="argument-principle-rouche-ex-8"></a>
Explain why a sequence \\(f_n\\to f\\) locally uniformly with \\(f\\equiv0\\) need not have a stable local zero count.
<details><summary>Hint 1</summary>
The positive boundary minimum used in the proof has disappeared.
</details>
<details><summary>Hint 2</summary>
Compare the constant sequence \\(1/n\\) with \\(z/n\\).
</details>
<details><summary>Solution</summary>
Both sequences converge locally uniformly to zero. The constants \\(1/n\\) have no zeros, while \\(z/n\\) has one zero in every disk about zero. The identically zero limit has no isolated zero of a finite order, so Proposition 12.5 does not apply.
</details>

### Exercise 12.9
<a id="argument-principle-rouche-ex-9"></a>
If \\(f\\) has a zero of order \\(m\\) at \\(a\\), prove that for every sufficiently small nonzero \\(w\\), the equation \\(f(z)=w\\) has \\(m\\) solutions counted with multiplicity in a fixed small disk about \\(a\\).
<details><summary>Hint 1</summary>
Choose the disk with no other zeros and no boundary zero.
</details>
<details><summary>Hint 2</summary>
Compare \\(f-w\\) with \\(f\\) using the boundary minimum.
</details>
<details><summary>Solution</summary>
Choose a legal circle with \\(\\eta=\\min|f|>0\\). For \\(|w|<\\eta\\), the constant perturbation \\(-w\\) is strictly smaller than \\(f\\) on the circle. Rouché gives exactly the original multiplicity \\(m\\) inside. The assertion counts multiplicity and does not claim the solutions are all distinct.
</details>

### Exercise 12.10
<a id="argument-principle-rouche-ex-10"></a>
Prove that a holomorphic injective function on a domain has nonzero derivative everywhere.
<details><summary>Hint 1</summary>
If its derivative vanishes, its local first nonconstant Taylor term has degree at least two.
</details>
<details><summary>Hint 2</summary>
Use the previous exercise, choosing a nearby target which is not a critical value in the small disk.
</details>
<details><summary>Solution</summary>
At a point \\(a\\), nonconstancy gives order (mge1) for \\(f-f(a)\\). If \\(m\\ge2\\), shrink the disk so \\(f'(z)\\ne0\\) except possibly at \\(a\\), using the isolated zero of the derivative. For nonzero sufficiently small \\(w\\), the equation \\(f=f(a)+w\\) has \\(m\\) zeros there by Rouché, none at \\(a\\), and all simple. Thus there are at least two distinct preimages, contradicting injectivity. Hence \\(m=1\\), so \\(f'(a)\\ne0\\).
</details>

### Exercise 12.11
<a id="argument-principle-rouche-ex-11"></a>
For a meromorphic \\(f\\) with no zeros or poles on an annulus closure, show that the indices of its images of the two counterclockwise boundary circles agree.
<details><summary>Hint 1</summary>
Use the complete annular boundary, rather than treating both circles as positively oriented boundary components.
</details>
<details><summary>Hint 2</summary>
The complete boundary integral of the logarithmic derivative is zero.
</details>
<details><summary>Solution</summary>
There are no zeros or poles in the annulus, so the argument principle gives zero for the outer counterclockwise integral minus the inner counterclockwise integral. Dividing by \\(2\\pi i\\) identifies their equal image indices. Singularities in the excluded hole can make their common index nonzero.
</details>

### Exercise 12.12
<a id="argument-principle-rouche-ex-12"></a>
Suppose \\(|f-h|<|f|\\) on the boundary and \\(f\\) has no interior zeros. Prove \\(h\\) has none, and explain why the same statement does not directly compare poles of meromorphic functions.
<details><summary>Hint 1</summary>
Use the holomorphic comparison theorem exactly as stated.
</details>
<details><summary>Hint 2</summary>
The argument principle counts zeros minus poles when poles are allowed.
</details>
<details><summary>Solution</summary>
If both functions are holomorphic near the closure, Rouché gives equal zero counts, so \\(h\\) has zero zeros. For meromorphic functions the homotopy may have poles, and the integral controls the difference of zero and pole counts rather than zeros alone. A separate pole accounting or denominator reduction is needed; the holomorphic theorem cannot simply be applied unchanged.
</details>

## Worked example: counting roots without locating them

Consider \\(p(z)=z^5+3z+1\\) on the circle \\(|z|=2\\). The leading term has modulus \\(32\\), while \\(|3z+1|\\le7\\). Rouché's strict boundary inequality therefore says that \\(p\\) and \\(z^5\\) have the same number of zeros, namely five, in \\(|z|<2\\), counted with multiplicity. The result does not identify the zeros, and it would remain true if coefficients were perturbed while the strict inequality held. Since the polynomial has degree five, every zero lies in this disk. This is a global location statement obtained without solving a quintic.

On \\(|z|=1/4\\), the constant term has modulus one and \\(|z^5+3z|\\le(1/4)^5+3/4<1\\). Rouché now compares \\(p\\) with the constant function one, so there are no zeros in \\(|z|<1/4\\). Combining the two contours confines all five roots to the annulus \\(1/4\\le|z|<2\\). The bounds are deliberately one-sided: a non-strict inequality at one point of the boundary would not suffice for the standard theorem. The two comparisons also show that the dominant term can change with the chosen contour.

## A meromorphic count needs pole bookkeeping

For \\(f(z)=(z-a)/(z-b)^2\\), assume a simple closed positive contour encloses distinct points \\(a,b\\) and avoids them. Then \\(f'/f=1/(z-a)-2/(z-b)\\) on the contour. The integral divided by \\(2\\pi i\\) is \\(1-2=-1\\): one zero minus two poles counted with orders. The negative result is sensible; it is not a negative number of zeros. If a contour encloses only \\(a\\), the count is one; if it encloses only \\(b\\), the count is minus two. This concrete calculation is a useful guard against applying the holomorphic version of Rouché to meromorphic functions without recording poles.

When a family \\(f_t\\) is continuous and nonzero on a fixed boundary for \\(0\\le t\\le1\\), its winding number cannot jump: it is integer-valued and varies continuously with \\(t\\). The zero-minus-pole count inside is consequently stable, provided the functions remain meromorphic and no zero or pole crosses the boundary. To deduce stability of the zero count alone, the pole count must also stay fixed. Multiplying by a denominator to clear poles can sometimes reduce the problem to the holomorphic theorem, but the denominator's boundary nonvanishing and its own zeros have to be checked explicitly.

## Persistence under a controlled coefficient perturbation

Let \\(p_t(z)=z^5+3z+1+t z^2\\) for a complex parameter \\(t\\). On \\(|z|=2\\), the comparison with \\(z^5\\) remains valid whenever \\(7+4|t|<32\\), so all five zeros remain inside the radius-two disk for \\(|t|<25/4\\). On \\(|z|=1/4\\), comparison with one remains valid when \\((1/4)^5+3/4+|t|/16<1\\). Under that smaller explicit condition no zero enters the inner disk either. Therefore, for sufficiently small \\(|t|\\), the annular count is stable without tracing any individual root as \\(t\\) changes. The method certifies a count, including multiplicity; it does not promise that each root can be labeled continuously across collisions without further work.

At a boundary parameter where the strict inequality becomes equality, Rouché's stated sufficient condition stops applying. This does not prove a root has crossed the circle. A sharper estimate or a different comparison might still show stability. It is important to distinguish a theorem's sufficient hypothesis from a necessary condition for its conclusion.

## A boundary zero blocks the count

Take \\(f_t(z)=z-t\\) and the unit-circle contour. For \\(|t|<1\\), the function has one zero inside; for \\(|t|>1\\), it has none. At \\(|t|=1\\), the zero lies on the contour and the logarithmic derivative \\(f_t'/f_t\\) is singular there. The contour integral is not defined in the theorem's ordinary sense at that parameter. The jump in the interior count is therefore consistent with stability: the family crossed precisely the prohibited boundary-zero condition. When using Rouché, the strict inequality ensures that every intermediate function in the straight-line homotopy is nonzero on the boundary, preventing this crossing.

This example also explains why multiplicity is built into the argument principle. For \\(f_t(z)=z^2-t\\), two roots can merge at zero as \\(t\\to0\\), but the total count in a small fixed disk remains two as long as the boundary stays zero-free. Counting distinct roots would change from two to one at the collision, even though no root crossed the boundary. The logarithmic derivative counts the merged root with order two, preserving the homotopy invariant.

## Sources

The exposition, examples and exercises are original. The relevant primary author-hosted reference is Jiří Lebl's [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), whose zero-counting development provides a complementary route. The local inverse proof here is supplied explicitly rather than assumed from real inverse-function theory.

## Summary

The logarithmic derivative turns zero and pole orders into residues. Its boundary integral is an integer winding count. A nonvanishing boundary homotopy keeps that integer constant, and Rouché supplies a simple sufficient inequality for such a homotopy. These ideas prove persistence of isolated zeros and local invertibility at a simple point. Later they will control limits of holomorphic functions and the extremal maps used in the Riemann mapping theorem.
`;export{e as default};
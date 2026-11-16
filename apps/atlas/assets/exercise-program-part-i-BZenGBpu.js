var e=`---
parent_id: book-numerical-mathematics-error-algorithms
matter_id: exercise-program-part-i
title: "Solved Exercise Program, Part I"
level: undergraduate
estimated_minutes: 1800
license: CC BY-SA 4.0
---

# Solved Exercise Program, Part I {#section-1-solved-exercise-program-part-i}

This retained earlier-edition supplement provides 150 fully solved exercises under its original Chapters 1–10 numbering; these labels and exercise identities are preserved, not current chapter numbers. For the current seventeen-chapter route use the reader guide: old groups 1–9 map respectively to current Chapters 1, 16, 2, 3, 4, 5, 6, 7–8, and 9; old group 10 belongs to the linked Matrix Computation in Practice prerequisite. Unless a problem says otherwise, arithmetic over the reals is exact; any floating-point model, rounding rule, norm, differentiability assumption, or randomness assumption needed by a numerical claim is stated locally. A numerical answer without its hypotheses is not a certificate.

<a id="section-3-chapter-1-finite-precision-conditioning-and-stability"></a>
## Chapter 1: finite precision, conditioning, and stability {#section-5-chapter-1-finite-precision-conditioning-and-stability}

<a id="section-5-exercise-1-1-spacing-in-a-toy-format"></a>
### Exercise 1.1 — Spacing in a toy format {#section-7-exercise-1-1-spacing-in-a-toy-format}

A normalized binary format stores numbers as \\(1.b1b2 \\times 2^e\\), with two fraction bits and unbounded exponent. List the representable numbers in the closed interval \\([1,2]\\) and find the conventional unit roundoff for round-to-nearest, ties-to-even.

<a id="section-9-solution"></a>
#### Solution {#section-11-solution}

The significands in the first binade give \\(1\\), \\(5/4\\), \\(3/2\\), and \\(7/4\\), and the next binade contributes the included endpoint \\(2\\); these are all the representable values in \\([1,2]\\). The spacing at \\(1\\) is \\(1/4\\), so the conventional unit roundoff is half that relative spacing, \\(u=1/8\\). This is the standard uniform model constant, not the sharp maximum of \\(\\lvert \\operatorname{fl}(x)-x\\rvert/\\lvert x\\rvert\\) in this toy binade: under ties-to-even the sharp value \\(1/9\\) occurs at the first midpoint \\(x=9/8\\), which rounds to \\(1\\). The model excludes underflow and overflow.

<a id="section-13-exercise-1-2-a-midpoint-tie"></a>
### Exercise 1.2 — A midpoint tie {#section-15-exercise-1-2-a-midpoint-tie}

In the format of Exercise 1.1, round \\(11/8\\) under ties-to-even and under ties-away-from-zero.

<a id="section-17-solution"></a>
#### Solution {#section-19-solution}

The value \\(11/8\\) lies midway between \\(5/4=10/8\\), whose last stored bit is \\(1\\), and \\(3/2=12/8\\), whose last stored bit is \\(0\\). Ties-to-even therefore returns \\(3/2\\). Ties-away-from-zero also returns \\(3/2\\) because the input is positive. The policies agree here, though for the midpoint between \\(1\\) and \\(5/4\\), ties-to-even returns \\(1\\) while ties-away returns \\(5/4\\).

<a id="section-21-exercise-1-3-loss-of-associativity"></a>
### Exercise 1.3 — Loss of associativity {#section-23-exercise-1-3-loss-of-associativity}

In decimal arithmetic with three significant digits and round-to-nearest after every operation, compute \\((100+0.6)+0.6\\) and \\(100+(0.6+0.6)\\).

<a id="section-25-solution"></a>
#### Solution {#section-27-solution}

First, \\(\\operatorname{fl}(100+0.6)=101\\), and then \\(\\operatorname{fl}(101+0.6)=102\\). In the second ordering, \\(\\operatorname{fl}(0.6+0.6)=1.20\\), followed by \\(\\operatorname{fl}(100+1.20)=101\\). Thus the results are \\(102\\) and \\(101\\). Exact addition is associative, but the two intervening roundings differ. The example also shows that changing evaluation order can change a reproducibility contract.

<a id="section-29-exercise-1-4-forward-and-backward-error"></a>
### Exercise 1.4 — Forward and backward error {#section-31-exercise-1-4-forward-and-backward-error}

The exact problem is \\(f(x)=\\sqrt{x}\\) at \\(x=4\\). A program returns \\(1.99\\). Find its relative forward error and a relative backward error in the input.

<a id="section-33-solution"></a>
#### Solution {#section-35-solution}

The exact output is \\(2\\), so the relative forward error is \\(\\lvert 1.99-2\\rvert/2=0.005\\). Since \\(1.99=\\sqrt{3.9601}\\), an exact compatible perturbed input is \\(\\widehat{x}=3.9601\\). Its relative perturbation is \\(\\lvert 3.9601-4\\rvert/4=0.009975\\). This backward error uses perturbations of the scalar input and exact evaluation of the square root; a different permitted perturbation model could give a different measure.

<a id="section-37-exercise-1-5-a-relative-condition-number"></a>
### Exercise 1.5 — A relative condition number {#section-39-exercise-1-5-a-relative-condition-number}

For \\(f(x)=\\log x\\), derive the local relative condition number at \\(x>0\\), assuming \\(\\log x \\ne 0\\), and interpret it near \\(x=1\\).

<a id="section-41-solution"></a>
#### Solution {#section-43-solution}

Because \\(f'(x)=1/x\\), the relative condition number is \\(\\lvert x f'(x)/f(x)\\rvert=1/\\lvert \\log x\\rvert\\). It diverges as \\(x\\) approaches \\(1\\), where the output approaches zero. Small relative changes in \\(x\\) can then create large relative changes in \\(\\log x\\). This does not imply large absolute error: the absolute condition number is \\(1/x\\), which remains near one.

<a id="section-45-exercise-1-6-cancellation-repaired-algebraically"></a>
### Exercise 1.6 — Cancellation repaired algebraically {#section-47-exercise-1-6-cancellation-repaired-algebraically}

For \\(x>0\\), transform \\(\\sqrt{x^{2}+1}-x\\) into a mathematically equivalent form that avoids subtracting nearby positive numbers. Evaluate the stable form at \\(x=10^{8}\\) to leading order.

<a id="section-49-solution"></a>
#### Solution {#section-51-solution}

Multiplying numerator and denominator by the conjugate gives
\\(\\sqrt{x^{2}+1}-x = 1/(\\sqrt{x^{2}+1}+x)\\).
At \\(x=10^{8}\\), the denominator is approximately \\(2\\times10^{8}\\), so the value is approximately \\(5\\times10^{-9}\\). The equivalence is exact over the reals for \\(x>0\\); in finite arithmetic, the second expression avoids catastrophic cancellation, provided squaring \\(x\\) neither overflows nor is itself evaluated unsafely.

<a id="section-55-exercise-1-7-conditioning-of-a-sum"></a>
### Exercise 1.7 — Conditioning of a sum {#section-57-exercise-1-7-conditioning-of-a-sum}

For input vector \\(x=(10^{8},1,-10^{8})\\), compute the componentwise-relative condition number \\(\\sum_i \\lvert x_i\\rvert / \\lvert \\sum_i x_i\\rvert\\) of summation.

<a id="section-59-solution"></a>
#### Solution {#section-61-solution}

The exact sum is \\(1\\), while the sum of magnitudes is \\(200000001\\). The condition number is therefore \\(200000001\\). Thus small componentwise relative perturbations can be amplified by roughly two hundred million in the relative error of the sum. No summation order can remove this input sensitivity, although a stable order can avoid adding unnecessary algorithmic error.

<a id="section-63-exercise-1-8-sequential-summation-bound"></a>
### Exercise 1.8 — Sequential summation bound {#section-65-exercise-1-8-sequential-summation-bound}

Assume the standard one-operation model, no overflow or underflow, round-to-nearest, and \\(n\\,u<1\\). For \\(n=1000\\) and \\(u=10^{-8}\\), evaluate \\(\\gamma_n=n\\,u/(1-n\\,u)\\).

<a id="section-67-solution"></a>
#### Solution {#section-69-solution}

Here \\(n\\,u=10^{-5}\\), so \\(\\gamma_n=10^{-5}/(1-10^{-5})=0.000010000100001\\ldots\\). The bound is slightly larger than \\(10^{-5}\\) because it includes accumulated higher-order products of rounding errors. It is a worst-case factor, not a prediction of the observed signed error.

<a id="section-71-exercise-1-9-diagnose-a-misleading-tolerance"></a>
### Exercise 1.9 — Diagnose a misleading tolerance {#section-73-exercise-1-9-diagnose-a-misleading-tolerance}

A solver declares success when \\(\\lvert \\widehat{x}-x\\rvert/\\lvert x\\rvert<10^{-8}\\), but a valid test has \\(x=0\\). Diagnose and repair the test.

<a id="section-75-solution"></a>
#### Solution {#section-77-solution}

The stated relative error is undefined at zero. A scale-aware mixed test is \\(\\lvert \\widehat{x}-x\\rvert \\le atol + rtol \\lvert x\\rvert\\), with documented positive \\(atol\\); for this test it reduces to \\(\\lvert \\widehat{x}\\rvert\\le atol\\). The absolute tolerance must come from the units, data uncertainty, or an application requirement rather than an arbitrary machine epsilon.

<a id="section-79-exercise-1-10-stable-does-not-mean-accurate"></a>
### Exercise 1.10 — Stable does not mean accurate {#section-81-exercise-1-10-stable-does-not-mean-accurate}

Explain why a backward-stable algorithm may return a poor forward answer for solving \\(Ax=b\\) when \\(A\\) is nearly singular.

<a id="section-83-solution"></a>
#### Solution {#section-85-solution}

Backward stability says the computed solution exactly solves \\((A+\\Delta A)\\widehat{x}=b+\\Delta b\\) for small permitted perturbations. Near singularity, the solution map has a large condition number, so those small input perturbations may cause a large change in the solution. A typical forward estimate scales like \\(condition number \\times backward error\\). Stability controls the algorithmic contribution; it cannot cure an ill-conditioned problem.

<a id="section-87-exercise-1-11-product-perturbations"></a>
### Exercise 1.11 — Product perturbations {#section-89-exercise-1-11-product-perturbations}

Suppose three positive exact factors are multiplied sequentially and each multiplication satisfies \\(\\operatorname{fl}(a b)=ab(1+\\delta)\\), \\(\\lvert \\delta\\rvert\\le u\\). Bound the final relative error, assuming \\(2u<1\\).

<a id="section-91-solution"></a>
#### Solution {#section-93-solution}

Two rounded multiplications occur, so the computed product is \\(abc(1+\\delta_1)(1+\\delta_2)\\). The relative error has magnitude at most \\((1+u)^{2}-1=2u+u^{2}\\), and the standard compressed bound is \\(\\gamma_2=2u/(1-2u)\\), which is slightly looser. Positivity is not essential here, but finite normal intermediates and the one-step model are.

<a id="section-95-exercise-1-12-overflow-safe-norm"></a>
### Exercise 1.12 — Overflow-safe norm {#section-97-exercise-1-12-overflow-safe-norm}

Why can \\(\\sqrt{x^{2}+y^{2}}\\) overflow when the mathematical result is representable? Give a scaled formula for nonzero \\(m=\\max(\\lvert x\\rvert,\\lvert y\\rvert)\\).

<a id="section-99-solution"></a>
#### Solution {#section-101-solution}

Squaring the larger component may overflow even when the square root of the sum would not. With \\(m=\\max(\\lvert x\\rvert,\\lvert y\\rvert)>0\\), compute \\(m \\sqrt{(x/m)^{2}+(y/m)^{2}}\\). Both ratios have magnitude at most one, so their squares are safe from overflow. The zero case must return zero separately. Underflow of a very small ratio may occur but usually loses only a negligible contribution.

<a id="section-103-exercise-1-13-residual-versus-error"></a>
### Exercise 1.13 — Residual versus error {#section-105-exercise-1-13-residual-versus-error}

For \\(A=\\operatorname{diag}(1,10^{-8})\\), \\(b=(1,10^{-8})\\), and \\(\\widehat{x}=(1,0)\\), compute the residual and forward error in the infinity norm.

<a id="section-107-solution"></a>
#### Solution {#section-109-solution}

The exact solution is \\((1,1)\\). The residual is \\(r=b-Ax_{hat}=(0,10^{-8})\\), so \\(\\lVert r\\rVert_\\infty=10^{-8}\\). The forward error is \\(x-\\widehat{x}=(0,1)\\), hence \\(\\lVert x-\\widehat{x}\\rVert_\\infty=1\\). A small absolute residual does not by itself imply a small solution error; the inverse scales the second residual component by \\(10^{8}\\).

<a id="section-111-exercise-1-14-counterexample-to-fixed-epsilon-equality"></a>
### Exercise 1.14 — Counterexample to fixed epsilon equality {#section-113-exercise-1-14-counterexample-to-fixed-epsilon-equality}

Give two pairs of real numbers showing that a universal test \\(\\lvert a-b\\rvert<10^{-6}\\) is respectively too strict and too loose.

<a id="section-115-solution"></a>
#### Solution {#section-117-solution}

At large scale, \\(a=10^{12}\\) and \\(b=10^{12}+10^{-4}\\) fail the test even though their relative difference is about \\(10^{-16}\\). Near zero, \\(a=0\\) and \\(b=9\\times10^{-7}\\) pass, although an application requiring absolute accuracy \\(10^{-9}\\) would reject them. A useful comparison needs an application scale, commonly \\(\\lvert a-b\\rvert\\le atol+rtol \\max(\\lvert a\\rvert,\\lvert b\\rvert)\\).

<a id="section-119-exercise-1-15-summation-order"></a>
### Exercise 1.15 — Summation order {#section-121-exercise-1-15-summation-order}

In exact real arithmetic all orders agree. In a finite system, state one deterministic summation rule and one accuracy advantage over arbitrary parallel reduction.

<a id="section-123-solution"></a>
#### Solution {#section-125-solution}

A reproducible rule can sort neither by runtime arrival nor thread schedule, but sum a fixed indexed array through a fixed balanced binary tree. The tree has depth \\(\\operatorname{ceil}(\\log_2 n)\\) rather than \\(n-1\\), reducing the number of rounding levels affecting each datum and often yielding a bound proportional to \\(\\gamma_{\\operatorname{ceil}(\\log_2 n)}\\) for same-sign inputs. The fixed topology also makes repeated runs comparable.

<a id="section-127-chapter-2-reproducible-mixed-precision-and-interval-ari"></a>
## Chapter 2: reproducible, mixed-precision, and interval arithmetic {#section-129-chapter-2-reproducible-mixed-precision-and-interval-ari}

<a id="section-129-exercise-2-1-directed-interval-addition"></a>
### Exercise 2.1 — Directed interval addition {#section-131-exercise-2-1-directed-interval-addition}

Let \\(X=[1/10,1/5]\\) and \\(Y=[1/3,1/2]\\). Give the exact real interval sum and the outward-rounded implementation rule.

<a id="section-133-solution"></a>
#### Solution {#section-135-solution}

Exact interval addition gives \\(X+Y=[1/10+1/3,1/5+1/2]=[13/30,7/10]\\). In floating-point code the lower endpoint must be rounded toward negative infinity and the upper endpoint toward positive infinity: \\([\\operatorname{rdn}(a+c), \\operatorname{rup}(b+d)]\\). Round-to-nearest at both ends may produce a non-enclosing interval and is therefore not a certificate.

<a id="section-137-exercise-2-2-interval-multiplication-signs"></a>
### Exercise 2.2 — Interval multiplication signs {#section-139-exercise-2-2-interval-multiplication-signs}

Compute \\([-2,3][4,5]\\) exactly.

<a id="section-141-solution"></a>
#### Solution {#section-143-solution}

The four endpoint products are \\(-8,-10,12,15\\); their minimum and maximum are \\(-10\\) and \\(15\\). Hence the product is \\([-10,15]\\). The shortcut \\([ac,bd]\\) would happen to work only for nonnegative intervals. A general implementation takes outward-rounded minima and maxima of all four products, with special care for infinities and signed zero.

<a id="section-145-exercise-2-3-dependency-overestimation"></a>
### Exercise 2.3 — Dependency overestimation {#section-147-exercise-2-3-dependency-overestimation}

Evaluate the natural interval form of \\(x-x\\) on \\(X=[0,1]\\) and compare it with the exact range.

<a id="section-149-solution"></a>
#### Solution {#section-151-solution}

Interval subtraction treats the two occurrences independently, giving \\([0,1]-[0,1]=[-1,1]\\). The exact pointwise function is identically zero, so its range is \\({0}\\). This dependency effect is an enclosure loss, not an invalid result: \\([-1,1]\\) still contains every possible value. Algebraic simplification or a centered form can tighten it.

<a id="section-153-exercise-2-4-an-inclusion-test"></a>
### Exercise 2.4 — An inclusion test {#section-155-exercise-2-4-an-inclusion-test}

If an interval Newton step for a continuously differentiable scalar function maps \\(X=[1,2]\\) to \\(N(X)=[1.3,1.5]\\), what may be concluded when the derivative interval excludes zero?

<a id="section-157-solution"></a>
#### Solution {#section-159-solution}

Because \\(N(X)\\) lies strictly inside \\(X\\) and \\(0\\) is excluded from the derivative enclosure, the interval Newton theorem certifies exactly one root in \\(X\\), subject to correct outward rounding and a valid derivative enclosure over all of \\(X\\). Merely observing a small floating-point residual at \\(1.4\\) would not establish existence or uniqueness.

<a id="section-161-exercise-2-5-precision-assignment"></a>
### Exercise 2.5 — Precision assignment {#section-163-exercise-2-5-precision-assignment}

A residual is formed as \\(b-Ax_{hat}\\) after a low-precision solve. Why is evaluating it in higher precision useful in iterative refinement?

<a id="section-165-solution"></a>
#### Solution {#section-167-solution}

The low-precision factorization may give a correction direction cheaply, but a residual computed in the same precision can lose the small discrepancy through cancellation. Higher-precision residual evaluation measures the defect more faithfully, enabling meaningful correction equations. Convergence still requires suitable conditioning and stable correction solves; mixed precision is not a guarantee for an arbitrarily ill-conditioned matrix.

<a id="section-169-exercise-2-6-reproducible-reduction-contract"></a>
### Exercise 2.6 — Reproducible reduction contract {#section-171-exercise-2-6-reproducible-reduction-contract}

Name four items that a reproducible dot-product experiment must record.

<a id="section-173-solution"></a>
#### Solution {#section-175-solution}

It should record at least the input bit patterns or generation seed, arithmetic formats and rounding modes, the reduction order or tree, and compiler/hardware settings that permit transformations such as fused multiply-add. It should also report exceptional values and accumulator precision. Decimal printouts alone do not uniquely determine binary inputs or evaluation order.

<a id="section-177-exercise-2-7-interval-reciprocal"></a>
### Exercise 2.7 — Interval reciprocal {#section-179-exercise-2-7-interval-reciprocal}

Find \\(1/X\\) for \\(X=[-4,-2]\\), and explain why the same rule cannot be applied to \\([-1,2]\\).

<a id="section-181-solution"></a>
#### Solution {#section-183-solution}

Because the reciprocal is decreasing on the negative half-line, \\(1/[-4,-2]=[-1/2,-1/4]\\). The interval \\([-1,2]\\) contains zero, where reciprocal is undefined and its image is disconnected and unbounded. A single bounded interval reciprocal is therefore invalid; extended interval arithmetic must return two rays or signal division by an interval containing zero.

<a id="section-185-exercise-2-8-exact-representability"></a>
### Exercise 2.8 — Exact representability {#section-187-exercise-2-8-exact-representability}

Which of \\(1/2\\), \\(1/10\\), and \\(3/8\\) have finite binary expansions? Justify.

<a id="section-189-solution"></a>
#### Solution {#section-191-solution}

A reduced rational has a finite binary expansion exactly when its denominator is a power of two. Thus \\(1/2\\) and \\(3/8\\) are exactly representable in a sufficiently wide binary format, while \\(1/10\\) is not because its reduced denominator contains a factor five. Storage of \\(0.1\\) therefore begins with a conversion rounding before later arithmetic occurs.

<a id="section-193-exercise-2-9-a-midpoint-radius-enclosure"></a>
### Exercise 2.9 — A midpoint-radius enclosure {#section-195-exercise-2-9-a-midpoint-radius-enclosure}

For \\(X=[2,2.02]\\), give its midpoint-radius form and bound \\(x^{2}\\) by the centered expansion about the midpoint.

<a id="section-197-solution"></a>
#### Solution {#section-199-solution}

The midpoint is \\(m=2.01\\) and radius \\(r=0.01\\). Write \\(x=m+d\\), \\(\\lvert d\\rvert\\le r\\); then \\(x^{2}=m^{2}+2md+d^{2}\\). Thus the range is enclosed by \\(m^{2}+[-2mr,2mr]+[0,r^{2}]=4.0401+[-0.0402,0.0402]+[0,0.0001]=[3.9999,4.0804]\\). The exact range is \\([4,4.0804]\\), so the centered bound is close but slightly wider below.

<a id="section-201-exercise-2-10-compensated-summation-invariant"></a>
### Exercise 2.10 — Compensated summation invariant {#section-203-exercise-2-10-compensated-summation-invariant}

What information does the compensation variable in a compensated sum attempt to retain?

<a id="section-205-solution"></a>
#### Solution {#section-207-solution}

When a rounded update \\(t=\\operatorname{fl}(s+x)\\) loses low-order information, the compensation estimates the part of \\(x\\) (and sometimes \\(s\\)) not represented in \\(t\\). A later update reintroduces that error estimate. The method greatly improves many sums but is not exact for all inputs and still needs assumptions excluding overflow and invalid operations. Its precise guarantee depends on the variant and rounding model.

<a id="section-209-exercise-2-11-outward-rounding-counterexample"></a>
### Exercise 2.11 — Outward rounding counterexample {#section-211-exercise-2-11-outward-rounding-counterexample}

Suppose exact lower endpoint \\(a+c\\) lies strictly below its round-to-nearest floating value. Why does storing the nearest value invalidate an enclosure?

<a id="section-213-solution"></a>
#### Solution {#section-215-solution}

An interval lower endpoint must be less than or equal to every exact result. If rounding-to-nearest moves \\(a+c\\) upward, the exact attainable endpoint is excluded. Directed downward rounding restores containment. Adding an arbitrary decimal padding is not a general repair because its adequacy depends on magnitude, operation count, and format.

<a id="section-217-exercise-2-12-fused-versus-unfused-evaluation"></a>
### Exercise 2.12 — Fused versus unfused evaluation {#section-219-exercise-2-12-fused-versus-unfused-evaluation}

Why may \\(\\operatorname{fl}(a b+c)\\) differ between hardware using a fused multiply-add and hardware using separate multiplication and addition?

<a id="section-221-solution"></a>
#### Solution {#section-223-solution}

The fused operation computes the exact product-plus-sum conceptually and rounds once. Separate operations first round \\(ab\\), then add \\(c\\) and round again. The intermediate rounding can alter the final bit pattern, especially under cancellation. Both may conform to their stated arithmetic contracts, so reproducibility requires either fixing fusion behavior or accepting a specified result set.

<a id="section-225-exercise-2-13-interval-monotonicity"></a>
### Exercise 2.13 — Interval monotonicity {#section-227-exercise-2-13-interval-monotonicity}

Find the exact range of \\(\\exp(x)\\) on \\([-2,1]\\) and state the property used.

<a id="section-229-solution"></a>
#### Solution {#section-231-solution}

The exponential is strictly increasing on the real line because its derivative is positive. Its range is therefore \\([\\exp(-2),e]\\). A validated implementation encloses those endpoints with downward and upward rounding respectively. Endpoint evaluation would not suffice for a nonmonotone function without splitting or analyzing its critical points.

<a id="section-233-exercise-2-14-mixed-precision-cost-model"></a>
### Exercise 2.14 — Mixed-precision cost model {#section-235-exercise-2-14-mixed-precision-cost-model}

A high-precision operation costs eight low-precision operations. A method uses \\(n\\) high-precision residual operations and \\(20n\\) low-precision factor operations. Express its cost in low-precision equivalents.

<a id="section-237-solution"></a>
#### Solution {#section-239-solution}

The residual costs \\(8n\\) low-precision equivalents and the factor work costs \\(20n\\), for a total of \\(28n\\). An all-high-precision version of the same \\(21n\\) operation count would cost \\(168n\\). This arithmetic cost model predicts a factor-six advantage, but ignores memory traffic, conversion, parallelism, and convergence failures; those must be measured separately.

<a id="section-241-exercise-2-15-empty-interval-intersection"></a>
### Exercise 2.15 — Empty interval intersection {#section-243-exercise-2-15-empty-interval-intersection}

A validation step obtains enclosures \\([1,1.1]\\) and \\([1.2,1.3]\\) for a quantity claimed to be common. Interpret their intersection.

<a id="section-245-solution"></a>
#### Solution {#section-247-solution}

The intersection is empty. If both enclosures were correctly derived under the same mathematical and input assumptions, no common value exists, so the model, data, or claimed identity is inconsistent. In practice one must also audit directed rounding, units, and input versions before treating the contradiction as mathematical evidence.

<a id="section-249-chapter-3-nonlinear-equations-and-root-certificates"></a>
## Chapter 3: nonlinear equations and root certificates {#section-251-chapter-3-nonlinear-equations-and-root-certificates}

<a id="section-251-exercise-3-1-bisection-count"></a>
### Exercise 3.1 — Bisection count {#section-253-exercise-3-1-bisection-count}

A continuous function changes sign on \\([0,3]\\). How many bisections guarantee an interval width at most \\(3/1024\\)?

<a id="section-255-solution"></a>
#### Solution {#section-257-solution}

After \\(n\\) bisections the width is \\(3/2^n\\). Requiring \\(3/2^n \\le 3/1024\\) gives \\(2^n\\ge 1024\\), so \\(n=10\\) suffices. Continuity and an initial sign change certify a root remains in each retained interval; uniqueness requires an additional condition such as strict monotonicity.

<a id="section-259-exercise-3-2-sign-change-limitation"></a>
### Exercise 3.2 — Sign change limitation {#section-261-exercise-3-2-sign-change-limitation}

Give a continuous function with a root in \\([-1,1]\\) but no endpoint sign change.

<a id="section-263-solution"></a>
#### Solution {#section-265-solution}

Take \\(f(x)=x^{2}\\). It has the root \\(x=0\\), while \\(f(-1)=f(1)=1\\). Thus a sign-change search may miss even-multiplicity roots. This is a limitation of the certificate, not of continuity; derivative information or minimization of \\(\\lvert f\\rvert\\) can reveal such a root.

<a id="section-267-exercise-3-3-one-newton-step"></a>
### Exercise 3.3 — One Newton step {#section-269-exercise-3-3-one-newton-step}

Starting from \\(x_0=1.5\\), perform one Newton step for \\(f(x)=x^{2}-2\\).

<a id="section-271-solution"></a>
#### Solution {#section-273-solution}

Since \\(f'(x)=2x\\),
\\(x_1=x_0-f(x_0)/f'(x_0)=3/2-(9/4-2)/3=3/2-1/12=17/12\\).
Numerically this is \\(1.41666\\ldots\\), closer to \\(\\sqrt{2}\\). The step assumes a nonzero derivative; local quadratic convergence additionally requires sufficient smoothness and a starting point in an appropriate neighborhood.

<a id="section-277-exercise-3-4-newton-breakdown"></a>
### Exercise 3.4 — Newton breakdown {#section-279-exercise-3-4-newton-breakdown}

What happens if Newton's method is applied to \\(f(x)=x^{1/3}\\) from a nonzero \\(x_0\\)?

<a id="section-281-solution"></a>
#### Solution {#section-283-solution}

For \\(x\\ne 0\\), \\(f'(x)=(1/3)x^{-2/3}\\), so the Newton update is \\(x-3x=-2x\\). The iterates alternate sign and double in magnitude, moving away from the root. The function is not differentiable with a finite derivative at the root, so the standard local convergence hypotheses fail.

<a id="section-285-exercise-3-5-fixed-point-contraction"></a>
### Exercise 3.5 — Fixed-point contraction {#section-287-exercise-3-5-fixed-point-contraction}

Show that \\(g(x)=\\cos x\\) is a contraction on \\([0.5,1]\\) and conclude uniqueness of its fixed point there.

<a id="section-289-solution"></a>
#### Solution {#section-291-solution}

The map sends \\([0.5,1]\\) into \\([\\cos 1,\\cos 0.5]\\), which lies inside \\([0.5,1]\\). Moreover \\(\\lvert g'(x)\\rvert=\\lvert \\sin x\\rvert\\le \\sin 1<1\\) on the interval. The contraction theorem therefore gives a unique fixed point and convergence of iteration from every point in the interval, with error bounded geometrically by the contraction factor.

<a id="section-293-exercise-3-6-residual-to-error-bound"></a>
### Exercise 3.6 — Residual-to-error bound {#section-295-exercise-3-6-residual-to-error-bound}

Assume \\(f\\) is differentiable on interval \\(I\\), has a root \\(r\\) there, and \\(\\lvert f'(x)\\rvert\\ge m>0\\) throughout \\(I\\). Bound \\(\\lvert x-r\\rvert\\) using \\(\\lvert f(x)\\rvert\\).

<a id="section-297-solution"></a>
#### Solution {#section-299-solution}

By the mean value theorem, \\(f(x)-f(r)=f'(\\xi)(x-r)\\) for some \\(\\xi\\) between \\(x\\) and \\(r\\). Since \\(f(r)=0\\), \\(\\lvert f(x)\\rvert\\ge m\\lvert x-r\\rvert\\), hence \\(\\lvert x-r\\rvert\\le \\lvert f(x)\\rvert/m\\). The derivative lower bound over the entire connecting interval is essential; a small residual alone is not an error certificate.

<a id="section-301-exercise-3-7-secant-step"></a>
### Exercise 3.7 — Secant step {#section-303-exercise-3-7-secant-step}

For \\(f(x)=x^{2}-3\\), use \\(x_0=1\\), \\(x_1=2\\) to compute the next secant iterate.

<a id="section-305-solution"></a>
#### Solution {#section-307-solution}

The values are \\(f(1)=-2\\) and \\(f(2)=1\\). Thus
\\(x_2=2-1(2-1)/(1-(-2))=2-1/3=5/3\\).
The formula requires distinct function values. Unlike bisection, an unconstrained secant step does not preserve a sign-changing bracket.

<a id="section-311-exercise-3-8-safeguarded-choice"></a>
### Exercise 3.8 — Safeguarded choice {#section-313-exercise-3-8-safeguarded-choice}

A Newton proposal lies outside a current sign-changing bracket. Give a safe update rule.

<a id="section-315-solution"></a>
#### Solution {#section-317-solution}

Reject the proposal and use the bracket midpoint. Evaluate the function there and retain the half interval whose endpoints have opposite signs, treating an exact zero as success. This hybrid preserves the bisection existence certificate while accepting Newton steps only when they remain inside the bracket and satisfy any desired progress test.

<a id="section-319-exercise-3-9-multiple-root-convergence"></a>
### Exercise 3.9 — Multiple root convergence {#section-321-exercise-3-9-multiple-root-convergence}

For \\(f(x)=(x-1)^{2}\\), derive the ordinary Newton error recurrence.

<a id="section-323-solution"></a>
#### Solution {#section-325-solution}

Newton gives \\(x_{k+1}=x_k-(x_k-1)^{2}/[2(x_k-1)]=(x_k+1)/2\\) for \\(x_k\\ne 1\\). Hence \\(e_{k+1}=x_{k+1}-1=e_k/2\\). Convergence is linear, not quadratic, because the root has multiplicity two. If multiplicity is known, the modified step \\(x-2f/f'\\) reaches the root in one exact-arithmetic iteration.

<a id="section-327-exercise-3-10-stopping-test-scaling"></a>
### Exercise 3.10 — Stopping test scaling {#section-329-exercise-3-10-stopping-test-scaling}

Why should a root solver combine a step test with a residual or bracket test?

<a id="section-331-solution"></a>
#### Solution {#section-333-solution}

A small step can arise from rounding, a nearly zero derivative handled by damping, or stagnation far from a root. A small residual can also be misleading if the derivative is tiny. A bracket width directly certifies location when a sign change is preserved. Combining scaled step, residual, and certificate information distinguishes convergence from stagnation and ties stopping to the requested error notion.

<a id="section-335-exercise-3-11-inverse-interpolation-hazard"></a>
### Exercise 3.11 — Inverse interpolation hazard {#section-337-exercise-3-11-inverse-interpolation-hazard}

State one failure mode of fitting \\(x\\) as a function of \\(f(x)\\) near a root.

<a id="section-339-solution"></a>
#### Solution {#section-341-solution}

If sampled function values coincide or are nearly equal, inverse interpolation has a zero or tiny denominator, producing an undefined or enormous proposal. It can also extrapolate outside a valid bracket. A robust implementation checks denominator separation and accepts the proposal only under bracket and progress safeguards.

<a id="section-343-exercise-3-12-root-count-by-monotonicity"></a>
### Exercise 3.12 — Root count by monotonicity {#section-345-exercise-3-12-root-count-by-monotonicity}

Prove that \\(x+\\exp(x)=0\\) has exactly one real root.

<a id="section-347-solution"></a>
#### Solution {#section-349-solution}

Let \\(f(x)=x+\\exp(x)\\). Its derivative \\(1+\\exp(x)\\) is strictly positive, so there is at most one root. Also \\(f(-1)=-1+e^{-1}<0\\) and \\(f(0)=1>0\\); continuity supplies at least one root in \\((-1,0)\\). Together these establish exactly one real root.

<a id="section-351-exercise-3-13-perturbing-a-simple-root"></a>
### Exercise 3.13 — Perturbing a simple root {#section-353-exercise-3-13-perturbing-a-simple-root}

If \\(f(r)=0\\) and \\(f'(r)\\ne 0\\), derive the first-order root change caused by replacing \\(f\\) with \\(f+\\epsilon h\\).

<a id="section-355-solution"></a>
#### Solution {#section-357-solution}

Write the perturbed root as \\(r+\\Delta r\\). Taylor expansion gives \\(0=f(r)+f'(r)\\Delta r+\\epsilon h(r)+\\) higher-order terms. Since \\(f(r)=0\\), \\(\\Delta r \\approx -\\epsilon h(r)/f'(r)\\). A small derivative makes the root sensitive. The derivation assumes sufficient differentiability and a nearby simple root.

<a id="section-359-exercise-3-14-false-convergence-counterexample"></a>
### Exercise 3.14 — False convergence counterexample {#section-361-exercise-3-14-false-convergence-counterexample}

Construct a function and point with a tiny residual but a large distance to a root.

<a id="section-363-solution"></a>
#### Solution {#section-365-solution}

Let \\(f(x)=10^{-12}(x-1000)\\). At \\(x=0\\), the residual magnitude is \\(10^{-9}\\), which may look tiny, but the unique root is 1000 units away. The derivative lower bound is only \\(10^{-12}\\), and the residual-to-error formula gives exactly \\(10^{-9}/10^{-12}=1000\\). Residuals must be interpreted with scaling or conditioning.

<a id="section-367-exercise-3-15-bracket-under-rounding"></a>
### Exercise 3.15 — Bracket under rounding {#section-369-exercise-3-15-bracket-under-rounding}

What information must be validated before a floating-point sign test can certify a bracket?

<a id="section-371-solution"></a>
#### Solution {#section-373-solution}

One must certify that the computed endpoint values have the stated signs despite evaluation error. This can be done with interval enclosures excluding zero or with rigorous forward-error bounds smaller than each computed magnitude. Merely obtaining opposite floating-point signs is insufficient if rounding or overflow could have reversed or invalidated one sign.

<a id="section-375-chapter-4-nonlinear-systems-jacobians-and-globalization"></a>
## Chapter 4: nonlinear systems, Jacobians, and globalization {#section-377-chapter-4-nonlinear-systems-jacobians-and-globalization}

<a id="section-377-exercise-4-1-a-newton-system"></a>
### Exercise 4.1 — A Newton system {#section-379-exercise-4-1-a-newton-system}

For \\(F(x,y)=(x^{2}+y^{2}-1,x-y)\\), form the Newton correction equation at \\((1,0)\\) and compute the next iterate.

<a id="section-381-solution"></a>
#### Solution {#section-383-solution}

At \\((1,0)\\), \\(F=(0,1)\\) and \\(J=\\begin{pmatrix}2&0\\\\1&-1\\end{pmatrix}\\). Solve \\(J s=-F=(0,-1)\\). The first row gives \\(s_x=0\\); the second gives \\(-s_y=-1\\), so \\(s_y=1\\). The next iterate is \\((1,1)\\). This full step does not solve the system and increases the first residual, illustrating why multidimensional Newton often needs globalization.

<a id="section-385-exercise-4-2-singular-jacobian"></a>
### Exercise 4.2 — Singular Jacobian {#section-387-exercise-4-2-singular-jacobian}

Show that the Jacobian of \\(F(x,y)=(x^{2}-y^{2},2xy)\\) is singular only at the origin.

<a id="section-389-solution"></a>
#### Solution {#section-391-solution}

The Jacobian is \\(\\begin{pmatrix}2x&-2y\\\\2y&2x\\end{pmatrix}\\), whose determinant is \\(4x^{2}+4y^{2}\\). This is zero exactly when \\(x=y=0\\). Away from the origin the Newton correction is uniquely defined. At the origin, the derivative provides no invertible local linear model even though the system has a root there.

<a id="section-393-exercise-4-3-merit-function-descent"></a>
### Exercise 4.3 — Merit-function descent {#section-395-exercise-4-3-merit-function-descent}

Let \\(\\phi(x)=\\lVert F(x)\\rVert_2^{2}/2\\). If \\(J(x)s=-F(x)\\), show that the directional derivative of \\(\\phi\\) along \\(s\\) is negative whenever \\(F(x)\\ne 0\\).

<a id="section-397-solution"></a>
#### Solution {#section-399-solution}

The gradient is \\(J(x)^{\\mathsf T} F(x)\\). Therefore \\(D \\phi(x)[s]=F^TJs=F^{\\mathsf T}(-F)=-\\lVert F\\rVert_2^{2}<0\\). This assumes the Newton equation is solved exactly and \\(J\\) is nonsingular. It shows that a sufficiently short step reduces the merit function, although the full Newton step need not.

<a id="section-401-exercise-4-4-armijo-acceptance"></a>
### Exercise 4.4 — Armijo acceptance {#section-403-exercise-4-4-armijo-acceptance}

Suppose \\(\\phi=10\\), \\(\\nabla(\\phi)^{\\mathsf T} s=-4\\), and the Armijo parameter is \\(c=10^{-4}\\). What upper bound must \\(\\phi(x+s)\\) satisfy for a unit step?

<a id="section-405-solution"></a>
#### Solution {#section-407-solution}

The Armijo condition is \\(\\phi(x+s)\\le \\phi(x)+c \\nabla(\\phi)^{\\mathsf T} s\\). Thus the bound is \\(10-4\\times10^{-4}=9.9996\\). This is a modest required decrease because \\(c\\) is small. Acceptance alone ensures progress in the chosen merit function, not proximity to a root.

<a id="section-409-exercise-4-5-scaling-residual-components"></a>
### Exercise 4.5 — Scaling residual components {#section-411-exercise-4-5-scaling-residual-components}

Why can minimizing \\(F_1^{2}+F_2^{2}\\) be misleading when \\(F_1\\) is measured in metres and \\(F_2\\) in microseconds?

<a id="section-413-solution"></a>
#### Solution {#section-415-solution}

Squaring and adding quantities with different units is physically undefined, and numerical magnitude may make one component dominate arbitrarily. Introduce documented positive scales \\(s_i\\) and minimize \\(\\sum_i(F_i/s_i)^{2}\\), where scales reflect tolerances or characteristic magnitudes. Changing units should then not change the algorithmic judgment.

<a id="section-417-exercise-4-6-finite-difference-jacobian-error"></a>
### Exercise 4.6 — Finite-difference Jacobian error {#section-419-exercise-4-6-finite-difference-jacobian-error}

For a smooth scalar component, explain why a forward-difference derivative has error modeled by \\(C_1 h+C_2 u/h\\).

<a id="section-421-solution"></a>
#### Solution {#section-423-solution}

Taylor expansion gives truncation error proportional to \\(h\\). Function evaluations carry absolute rounding errors of order \\(u\\) times their scales; subtracting two values and dividing by \\(h\\) amplifies that contribution like \\(u/h\\). Balancing the terms suggests \\(h\\) of order \\(\\sqrt{u}\\) after scaling. The constants depend on derivatives and evaluation conditioning, so a universal unscaled step is inappropriate.

<a id="section-425-exercise-4-7-a-system-residual-bound"></a>
### Exercise 4.7 — A system residual bound {#section-427-exercise-4-7-a-system-residual-bound}

Assume \\(F\\) is differentiable near a root \\(x_{*}\\) and every averaged Jacobian on the segment from \\(x\\) to \\(x_{*}\\) has smallest singular value at least \\(m>0\\). Bound the error.

<a id="section-429-solution"></a>
#### Solution {#section-431-solution}

The integral mean-value identity gives \\(F(x)-F(x_{*})=A(x-x_{*})\\), where \\(A\\) is the averaged Jacobian. Since \\(F(x_{*})=0\\) and \\(\\sigma_{\\min}(A)\\ge m\\), \\(\\lVert F(x)\\rVert_2\\ge m\\lVert x-x_{*}\\rVert_2\\). Hence \\(\\lVert x-x_{*}\\rVert_2\\le \\lVert F(x)\\rVert_2/m\\). The uniform nonsingularity hypothesis is the crucial certificate.

<a id="section-433-exercise-4-8-trust-region-boundary"></a>
### Exercise 4.8 — Trust-region boundary {#section-435-exercise-4-8-trust-region-boundary}

Minimize the linear model \\(g^{\\mathsf T} s\\) subject to \\(\\lVert s\\rVert_2\\le \\Delta\\), where \\(g\\ne 0\\).

<a id="section-437-solution"></a>
#### Solution {#section-439-solution}

By Cauchy–Schwarz, \\(g^Ts\\ge -\\lVert g\\rVert \\lVert s\\rVert\\ge -\\Delta\\lVert g\\rVert\\). Equality holds at \\(s=-\\Delta g/\\lVert g\\rVert\\). Thus the steepest linear-model step lies on the trust-region boundary opposite the gradient. A quadratic model may instead have an interior minimizer.

<a id="section-441-exercise-4-9-rank-deficiency-diagnosis"></a>
### Exercise 4.9 — Rank deficiency diagnosis {#section-443-exercise-4-9-rank-deficiency-diagnosis}

A least-squares Newton correction has Jacobian columns \\((1,1)^{\\mathsf T}\\) and \\((2,2)^{\\mathsf T}\\). Diagnose the correction problem.

<a id="section-445-solution"></a>
#### Solution {#section-447-solution}

The second column is twice the first, so the Jacobian has rank one rather than two. The normal matrix is singular and the correction is not unique in parameter space. A rank-revealing QR or singular-value decomposition should expose the null direction; blindly solving normal equations can hide it through squared conditioning.

<a id="section-449-exercise-4-10-inexact-newton-forcing"></a>
### Exercise 4.10 — Inexact Newton forcing {#section-451-exercise-4-10-inexact-newton-forcing}

An inexact correction satisfies \\(\\lVert J_k s_k+F_k\\rVert\\le \\eta_k\\lVert F_k\\rVert\\). What does decreasing \\(\\eta_k\\) accomplish near a regular root?

<a id="section-453-solution"></a>
#### Solution {#section-455-solution}

The residual of the linear solve becomes small relative to the nonlinear residual. If \\(\\eta_k\\) tends to zero under standard smoothness and nonsingularity assumptions, the local convergence can become superlinear; a forcing term proportional to \\(\\lVert F_k\\rVert\\) can support quadratic behavior. Loose solves far from the root save work, while tighter solves prevent linear-solver error from limiting final convergence.

<a id="section-457-exercise-4-11-broyden-secant-condition"></a>
### Exercise 4.11 — Broyden secant condition {#section-459-exercise-4-11-broyden-secant-condition}

State the secant condition for an updated Jacobian approximation \\(B_+\\) after step \\(s\\) and residual change \\(y=F(x+s)-F(x)\\).

<a id="section-461-solution"></a>
#### Solution {#section-463-solution}

The condition is \\(B_+ s=y\\). It makes the updated linear model reproduce the observed change along the latest step. This single vector equation does not determine all matrix entries, so a rank-one update chooses the smallest change under a specified matrix norm. The condition can be unreliable when \\(s\\) or \\(y\\) is dominated by noise.

<a id="section-465-exercise-4-12-constraints-and-projected-steps"></a>
### Exercise 4.12 — Constraints and projected steps {#section-467-exercise-4-12-constraints-and-projected-steps}

For the box \\(0\\le x_i\\le 1\\), project the trial point \\((-0.2,0.7,1.4)\\) in Euclidean norm.

<a id="section-469-solution"></a>
#### Solution {#section-471-solution}

Euclidean projection onto a Cartesian box clips each coordinate independently. The projection is \\((0,0.7,1)\\). Projection ensures feasibility but may destroy the descent predicted for the unprojected step; a constrained method must assess the actual projected direction and use appropriate optimality conditions.

<a id="section-473-exercise-4-13-counterexample-to-component-stopping"></a>
### Exercise 4.13 — Counterexample to component stopping {#section-475-exercise-4-13-counterexample-to-component-stopping}

Give a two-component residual for which checking only the first component falsely reports convergence.

<a id="section-477-solution"></a>
#### Solution {#section-479-solution}

At a candidate point take \\(F=(10^{-12},10^{3})\\). A test \\(\\lvert F_1\\rvert<10^{-8}\\) passes while the second equation is grossly violated. A system solver must use all scaled components, for example \\(\\lVert D^{-1}F\\rVert_\\infty\\le 1\\), with tolerances encoded in diagonal \\(D\\).

<a id="section-481-exercise-4-14-local-quadratic-term"></a>
### Exercise 4.14 — Local quadratic term {#section-483-exercise-4-14-local-quadratic-term}

Assuming \\(J(x_{*})\\) is invertible and \\(J\\) is Lipschitz near \\(x_{*}\\), state the qualitative Newton error recurrence.

<a id="section-485-solution"></a>
#### Solution {#section-487-solution}

For iterates sufficiently near the root, there is a constant \\(C\\) such that \\(\\lVert e_{k+1}\\rVert\\le C\\lVert e_k\\rVert^{2}\\). The proof uses cancellation of the first-order term and bounds the Jacobian variation by its Lipschitz constant. The statement is local: neither an arbitrary starting point nor a singular root receives this guarantee.

<a id="section-489-exercise-4-15-globalization-ledger"></a>
### Exercise 4.15 — Globalization ledger {#section-491-exercise-4-15-globalization-ledger}

List the minimum quantities a line-search Newton implementation should log per iteration for diagnosis.

<a id="section-493-solution"></a>
#### Solution {#section-495-solution}

Log the scaled residual or merit value, proposed correction norm, directional derivative, accepted step length, number of rejected trials, linear-solve residual, and termination reason. Also retain evaluation failures. This ledger distinguishes model failure, bad scaling, inaccurate linear solves, and mere slow progress; a final “converged” flag does not.

<a id="section-497-chapter-5-interpolation-splines-and-least-squares"></a>
## Chapter 5: interpolation, splines, and least squares {#section-499-chapter-5-interpolation-splines-and-least-squares}

<a id="section-499-exercise-5-1-linear-interpolant"></a>
### Exercise 5.1 — Linear interpolant {#section-501-exercise-5-1-linear-interpolant}

Find the linear interpolant through \\((0,1)\\) and \\((2,5)\\) and evaluate it at \\(x=1/2\\).

<a id="section-503-solution"></a>
#### Solution {#section-505-solution}

The slope is \\((5-1)/(2-0)=2\\), so \\(p(x)=1+2x\\). Thus \\(p(1/2)=2\\). The interpolant is unique among polynomials of degree at most one because the nodes are distinct.

<a id="section-507-exercise-5-2-lagrange-basis"></a>
### Exercise 5.2 — Lagrange basis {#section-509-exercise-5-2-lagrange-basis}

For nodes \\(0,1,2\\), write the Lagrange basis polynomial associated with node \\(1\\).

<a id="section-511-solution"></a>
#### Solution {#section-513-solution}

The basis is \\(L_1(x)=(x-0)(x-2)/[(1-0)(1-2)]=-x(x-2)=2x-x^{2}\\). It equals one at \\(x=1\\) and zero at \\(0\\) and \\(2\\). Distinct nodes ensure nonzero denominators.

<a id="section-515-exercise-5-3-interpolation-remainder"></a>
### Exercise 5.3 — Interpolation remainder {#section-517-exercise-5-3-interpolation-remainder}

Assume \\(f\\) has three continuous derivatives on an interval containing \\(0,1,2,x\\). State the quadratic interpolation remainder.

<a id="section-519-solution"></a>
#### Solution {#section-521-solution}

For some \\(\\xi\\) in the convex hull of the nodes and \\(x\\),
\\(f(x)-p_2(x)=f'''(\\xi)x(x-1)(x-2)/3!\\).
Consequently a uniform derivative bound \\(\\lvert f'''\\rvert\\le M\\) yields \\(\\lvert f(x)-p_2(x)\\rvert\\le M\\lvert x(x-1)(x-2)\\rvert/6\\). The smoothness and location of \\(\\xi\\) are part of the theorem.

<a id="section-525-exercise-5-4-divided-difference"></a>
### Exercise 5.4 — Divided difference {#section-527-exercise-5-4-divided-difference}

Compute \\(f[0,1,3]\\) for data \\(f(0)=1\\), \\(f(1)=2\\), \\(f(3)=10\\).

<a id="section-529-solution"></a>
#### Solution {#section-531-solution}

First differences are \\(f[0,1]=1\\) and \\(f[1,3]=(10-2)/2=4\\). Therefore \\(f[0,1,3]=(4-1)/(3-0)=1\\). The Newton interpolant is \\(1+x+x(x-1)\\), which simplifies to \\(x^{2}+1\\) and matches all data.

<a id="section-533-exercise-5-5-lebesgue-interpretation"></a>
### Exercise 5.5 — Lebesgue interpretation {#section-535-exercise-5-5-lebesgue-interpretation}

What does a large Lebesgue constant imply about interpolation of perturbed data?

<a id="section-537-solution"></a>
#### Solution {#section-539-solution}

The interpolation operator can amplify the maximum data perturbation by as much as its Lebesgue constant in the sup norm. Thus a large constant signals sensitivity to measurement or rounding errors, independent of the approximation error for exact data. It is an operator condition measure, not proof that every data set will exhibit the worst case.

<a id="section-541-exercise-5-6-natural-spline-equations"></a>
### Exercise 5.6 — Natural spline equations {#section-543-exercise-5-6-natural-spline-equations}

What boundary conditions define a natural cubic spline on \\([a,b]\\)?

<a id="section-545-solution"></a>
#### Solution {#section-547-solution}

Besides interpolating the data and having continuous first and second derivatives across interior knots, a natural cubic spline satisfies \\(s''(a)=s''(b)=0\\). These two endpoint conditions close the system. They encode one modeling choice; clamped splines instead prescribe endpoint first derivatives.

<a id="section-549-exercise-5-7-least-squares-line"></a>
### Exercise 5.7 — Least-squares line {#section-551-exercise-5-7-least-squares-line}

Find the constant least-squares fit to observations \\(1,2,6\\) with equal weights.

<a id="section-553-solution"></a>
#### Solution {#section-555-solution}

Minimize \\((c-1)^{2}+(c-2)^{2}+(c-6)^{2}\\). Differentiating gives \\(6c-18=0\\), hence \\(c=3\\), the sample mean. The second derivative is positive. With positive unequal weights, the solution becomes the weighted mean.

<a id="section-557-exercise-5-8-orthogonality-of-residual"></a>
### Exercise 5.8 — Orthogonality of residual {#section-559-exercise-5-8-orthogonality-of-residual}

For full-column-rank \\(A\\), prove that a least-squares solution has residual orthogonal to the column space.

<a id="section-561-solution"></a>
#### Solution {#section-563-solution}

Minimizing \\(\\lVert Ax-b\\rVert_2^{2}\\) gives the normal equation \\(A^{\\mathsf T}(Ax-b)=0\\). With residual \\(r=b-Ax\\), this is \\(A^{\\mathsf T}r=0\\), so \\(r\\) is orthogonal to every column of \\(A\\) and hence to their span. Full rank ensures the minimizer is unique, though residual orthogonality itself also characterizes minimizers in the rank-deficient case.

<a id="section-565-exercise-5-9-why-normal-equations-square-conditioning"></a>
### Exercise 5.9 — Why normal equations square conditioning {#section-567-exercise-5-9-why-normal-equations-square-conditioning}

For full-column-rank \\(A\\), relate the 2-norm condition numbers of \\(A\\) and \\(A^{\\mathsf T} A\\).

<a id="section-569-solution"></a>
#### Solution {#section-571-solution}

The singular values of \\(A^TA\\) are the squares of those of \\(A\\). Therefore \\(\\kappa_2(A^TA)=\\sigma_{\\max}(A)^{2}/\\sigma_{\\min}(A)^{2}=\\kappa_2(A)^{2}\\). Forming and solving normal equations can consequently lose roughly twice as many digits as an orthogonal-factor method when conditioning dominates.

<a id="section-573-exercise-5-10-weighted-least-squares"></a>
### Exercise 5.10 — Weighted least squares {#section-575-exercise-5-10-weighted-least-squares}

Derive the normal equations for minimizing \\((Ax-b)^{\\mathsf T} W(Ax-b)\\) when \\(W\\) is symmetric positive definite.

<a id="section-577-solution"></a>
#### Solution {#section-579-solution}

Differentiation gives \\(2A^TW(Ax-b)=0\\), hence \\(A^TWAx=A^TWb\\). Positive definiteness makes the expression a norm squared after applying a square root of \\(W\\). If \\(A\\) has full column rank, \\(A^TWA\\) is positive definite and the minimizer is unique.

<a id="section-581-exercise-5-11-duplicate-interpolation-nodes"></a>
### Exercise 5.11 — Duplicate interpolation nodes {#section-583-exercise-5-11-duplicate-interpolation-nodes}

Why is ordinary polynomial interpolation ill posed if two identical nodes are assigned different values?

<a id="section-585-solution"></a>
#### Solution {#section-587-solution}

A function, and hence a polynomial, can have only one value at a given input. Requirements \\(p(x_0)=y_1\\) and \\(p(x_0)=y_2\\) with \\(y_1\\ne y_2\\) are inconsistent. Repeated nodes can instead encode derivative data in Hermite interpolation, but that is a different problem with explicit derivative conditions.

<a id="section-589-exercise-5-12-barycentric-invariance"></a>
### Exercise 5.12 — Barycentric invariance {#section-591-exercise-5-12-barycentric-invariance}

In the barycentric interpolation formula, what happens if all weights are multiplied by the same nonzero constant?

<a id="section-593-solution"></a>
#### Solution {#section-595-solution}

Both numerator and denominator are multiplied by that constant, so their ratio is unchanged whenever evaluation is away from a node. This scaling freedom can be used to avoid unnecessary overflow or underflow in stored weights. At a node the implementation should return the corresponding datum directly rather than divide by zero.

<a id="section-597-exercise-5-13-spline-smoothness-counterexample"></a>
### Exercise 5.13 — Spline smoothness counterexample {#section-599-exercise-5-13-spline-smoothness-counterexample}

Give a continuous piecewise-linear interpolant that is not differentiable at its interior knot.

<a id="section-601-solution"></a>
#### Solution {#section-603-solution}

Interpolate \\((0,0),(1,1),(2,0)\\) linearly on each subinterval. The left slope at \\(1\\) is \\(1\\), while the right slope is \\(-1\\). The function is continuous but not differentiable at the knot. This motivates higher-order splines when derivative continuity is part of the modeling requirement.

<a id="section-605-exercise-5-14-data-error-amplification"></a>
### Exercise 5.14 — Data error amplification {#section-607-exercise-5-14-data-error-amplification}

If an interpolation operator has Lebesgue constant \\(12\\) and nodal errors are bounded by \\(3\\times10^{-6}\\), bound the induced sup-norm error.

<a id="section-609-solution"></a>
#### Solution {#section-611-solution}

Linearity and the operator norm bound give at most \\(12\\cdot3\\times10^{-6}=3.6\\times10^{-5}\\). This accounts only for perturbation of nodal values. Approximation error of interpolating the exact function and rounding error in evaluation must be bounded separately.

<a id="section-613-exercise-5-15-model-degree-selection"></a>
### Exercise 5.15 — Model degree selection {#section-615-exercise-5-15-model-degree-selection}

Why is zero training residual not sufficient evidence for choosing a polynomial degree?

<a id="section-617-solution"></a>
#### Solution {#section-619-solution}

A degree \\(n-1\\) polynomial can interpolate \\(n\\) distinct data points exactly, including their noise. Zero residual therefore may indicate overfitting rather than predictive accuracy. Degree selection should use stated noise assumptions, validation data, regularization, or an approximation-theoretic criterion, and should report conditioning of the fitted basis.

<a id="section-621-chapter-6-orthogonal-weighted-and-minimax-approximation"></a>
## Chapter 6: orthogonal, weighted, and minimax approximation {#section-623-chapter-6-orthogonal-weighted-and-minimax-approximation}

<a id="section-623-exercise-6-1-projection-coefficient"></a>
### Exercise 6.1 — Projection coefficient {#section-625-exercise-6-1-projection-coefficient}

In \\(L^{2}[-1,1]\\) with weight one, project \\(f(x)=x^{2}\\) onto the constants.

<a id="section-627-solution"></a>
#### Solution {#section-629-solution}

The constant coefficient is \\(\\langle f,1\\rangle/\\langle 1,1\\rangle = (\\int_{-1}^{1} x^{2} dx)/2=(2/3)/2=1/3\\). Thus the best constant in this norm is \\(1/3\\). Orthogonality follows because \\(\\int_{-1}^{1}(x^{2}-1/3)dx=0\\).

<a id="section-631-exercise-6-2-pythagorean-optimality"></a>
### Exercise 6.2 — Pythagorean optimality {#section-633-exercise-6-2-pythagorean-optimality}

If \\(p\\) is the orthogonal projection of \\(f\\) onto a finite-dimensional subspace \\(V\\), prove it is a best approximation in the induced norm.

<a id="section-635-solution"></a>
#### Solution {#section-637-solution}

For any \\(v \\in V\\), write \\(f-v=(f-p)+(p-v)\\). The first term is orthogonal to \\(V\\), and the second lies in \\(V\\), so \\(\\lVert f-v\\rVert^{2}=\\lVert f-p\\rVert^{2}+\\lVert p-v\\rVert^{2}\\ge \\lVert f-p\\rVert^{2}\\). Equality requires \\(v=p\\). This uses a positive-definite inner product.

<a id="section-639-exercise-6-3-weighted-inner-product"></a>
### Exercise 6.3 — Weighted inner product {#section-641-exercise-6-3-weighted-inner-product}

What conditions on \\(w\\) make \\(\\langle f,g\\rangle_w=\\int_a^b f g w\\) an inner product on continuous real functions modulo equality almost everywhere?

<a id="section-643-solution"></a>
#### Solution {#section-645-solution}

Assume \\(w\\) is measurable, integrable, and nonnegative almost everywhere. On continuous functions, positive definiteness holds exactly when

\\[
\\int_J w(x)\\,dx>0
\\]

for every nonempty open subinterval \\(J\\subseteq[a,b]\\). Indeed, if a continuous \\(f\\) is nonzero, then \\(|f|\\) is bounded below by a positive constant on some such \\(J\\), so \\(\\int f^2w>0\\). Conversely, if the integral of \\(w\\) vanishes on an open interval, a nonzero continuous bump supported there has zero norm. The familiar assumption \\(w>0\\) almost everywhere is sufficient, but it is stronger than necessary; a positive-measure zero set with empty interior need not support any nonzero continuous function.

<a id="section-653-exercise-6-4-orthogonal-residual-coefficients"></a>
### Exercise 6.4 — Orthogonal residual coefficients {#section-655-exercise-6-4-orthogonal-residual-coefficients}

Let \\({q_0,\\ldots,q_n}\\) be orthonormal. Give the least-squares coefficients of \\(f\\) in their span.

<a id="section-657-solution"></a>
#### Solution {#section-659-solution}

The projection is \\(p=\\sum_{j=0}^n \\langle f,q_j\\rangle q_j\\), so each coefficient is \\(\\langle f,q_j\\rangle\\). Subtracting gives a residual orthogonal to every basis vector. Orthonormality avoids solving a Gram system and improves conditioning relative to a badly scaled monomial basis.

<a id="section-661-exercise-6-5-symmetry-removes-terms"></a>
### Exercise 6.5 — Symmetry removes terms {#section-663-exercise-6-5-symmetry-removes-terms}

On \\([-1,1]\\) with an even weight, show that an odd function is orthogonal to every even polynomial.

<a id="section-665-solution"></a>
#### Solution {#section-667-solution}

The product of the odd function, even polynomial, and even weight is odd. Its integral over the symmetric interval is zero, assuming integrability. Therefore all even-basis coefficients vanish exactly. A numerical quadrature that violates symmetric pairing may fail to preserve this property in floating arithmetic.

<a id="section-669-exercise-6-6-uniform-versus-mean-square-error"></a>
### Exercise 6.6 — Uniform versus mean-square error {#section-671-exercise-6-6-uniform-versus-mean-square-error}

Give continuous functions \\(f_n\\) on \\([0,1]\\) whose \\(L^{2}\\) norms tend to zero but sup norms equal one.

<a id="section-673-solution"></a>
#### Solution {#section-675-solution}

Let \\(f_n(x)=\\max(1-nx,0)\\). Each is continuous and has sup norm one at zero. Its squared \\(L^{2}\\) norm is \\(\\int_0^{1/n}(1-nx)^{2} dx=1/(3n)\\), tending to zero. Thus mean-square convergence need not imply uniform convergence.

<a id="section-677-exercise-6-7-equioscillation-check-for-a-line"></a>
### Exercise 6.7 — Equioscillation check for a line {#section-679-exercise-6-7-equioscillation-check-for-a-line}

Show that the best constant uniform approximation to \\(f(x)=x\\) on \\([-1,1]\\) is zero.

<a id="section-681-solution"></a>
#### Solution {#section-683-solution}

For a constant \\(c\\), endpoint errors are \\(-1-c\\) and \\(1-c\\). Their maximum absolute value is at least half their difference, namely one. Choosing \\(c=0\\) attains maximum error one, with alternating errors \\(-1\\) and \\(1\\). Therefore zero is minimax among constants.

<a id="section-685-exercise-6-8-a-monic-minimax-quadratic"></a>
### Exercise 6.8 — A monic minimax quadratic {#section-687-exercise-6-8-a-monic-minimax-quadratic}

Among all monic quadratics \\(p(x)=x^{2}+a x+b\\), find one minimizing \\(\\lVert p\\rVert_\\infty\\) on \\([-1,1]\\) and prove the optimum value.

<a id="section-689-solution"></a>
#### Solution {#section-691-solution}

At the three points \\(-1,0,1\\), the values are \\(1-a+b\\), \\(b\\), and \\(1+a+b\\). The larger absolute endpoint value is at least the absolute value of their average, \\(\\lvert 1+b\\rvert\\). Therefore every candidate has
\\(\\lVert p\\rVert_\\infty\\ge \\max(\\lvert b\\rvert,\\lvert 1+b\\rvert)\\ge 1/2\\); the last inequality follows because two numbers one unit apart cannot both have magnitude below \\(1/2\\). Taking \\(a=0\\) and \\(b=-1/2\\) gives \\(p(x)=x^{2}-1/2\\), whose range on \\([-1,1]\\) is exactly \\([-1/2,1/2]\\). Thus the optimal norm is \\(1/2\\). The proof also shows that nonzero \\(a\\) cannot improve the lower bound; uniqueness is not claimed without an additional argument.

<a id="section-694-exercise-6-9-gram-matrix-positivity"></a>
### Exercise 6.9 — Gram matrix positivity {#section-696-exercise-6-9-gram-matrix-positivity}

For linearly independent functions \\(\\phi_j\\) in an inner-product space, prove their Gram matrix is positive definite.

<a id="section-698-solution"></a>
#### Solution {#section-700-solution}

For nonzero coefficient vector \\(c\\), \\(c^{\\mathsf T} G c = \\lVert \\sum_j c_j \\phi_j\\rVert^{2}\\). Linear independence makes the combined function nonzero, and positive definiteness of the inner product makes its squared norm positive. Hence \\(G\\) is symmetric positive definite and the projection coefficients are uniquely determined.

<a id="section-702-exercise-6-10-approximation-under-scaling"></a>
### Exercise 6.10 — Approximation under scaling {#section-704-exercise-6-10-approximation-under-scaling}

Map \\(x \\in [a,b]\\) to \\(t \\in [-1,1]\\) by an affine formula.

<a id="section-706-solution"></a>
#### Solution {#section-708-solution}

The map is \\(t=(2x-a-b)/(b-a)\\) for \\(a<b\\); its inverse is \\(x=(a+b)/2+(b-a)t/2\\). Scaling to a standard interval permits reusable orthogonal bases. Error derivatives and quadrature weights must be transformed by the corresponding scale factors.

<a id="section-710-exercise-6-11-discrete-orthogonality"></a>
### Exercise 6.11 — Discrete orthogonality {#section-712-exercise-6-11-discrete-orthogonality}

With sample points \\(x_i\\) and positive weights \\(w_i\\), state when two sampled basis vectors are discretely orthogonal.

<a id="section-714-solution"></a>
#### Solution {#section-716-solution}

They are orthogonal when \\(\\sum_i w_i \\phi_j(x_i)\\phi_k(x_i)=0\\). Positive weights make the discrete inner product positive definite provided no nonzero function in the chosen span vanishes at every sampled point. Discrete orthogonality need not equal continuous orthogonality unless the quadrature is exact for the relevant products.

<a id="section-718-exercise-6-12-minimax-lower-bound"></a>
### Exercise 6.12 — Minimax lower bound {#section-720-exercise-6-12-minimax-lower-bound}

If an error function takes values \\(E,-E,E\\) at three ordered points, what lower bound does this provide for its uniform norm?

<a id="section-722-solution"></a>
#### Solution {#section-724-solution}

Immediately \\(\\lVert e\\rVert_\\infty\\ge E\\) for \\(E\\ge 0\\), since the norm dominates the magnitude at each point. In an appropriate approximation space, alternating extremal errors may additionally certify optimality, but three samples alone do not prove global maximality or minimax status without the theorem's dimension and regularity hypotheses.

<a id="section-726-exercise-6-13-weight-concentration"></a>
### Exercise 6.13 — Weight concentration {#section-728-exercise-6-13-weight-concentration}

What qualitative effect does a large weight near one endpoint have on a weighted least-squares approximation?

<a id="section-730-solution"></a>
#### Solution {#section-732-solution}

Errors near that endpoint contribute more strongly to the objective, so the optimizer tends to fit that region more closely, potentially at the expense of lightly weighted regions. The claim is comparative, not pointwise: it does not guarantee the error is smallest exactly where the weight is largest. Extreme weights may also worsen discrete conditioning.

<a id="section-734-exercise-6-14-basis-change-invariance"></a>
### Exercise 6.14 — Basis change invariance {#section-736-exercise-6-14-basis-change-invariance}

Does changing from one basis of a fixed subspace to another change the exact orthogonal projection?

<a id="section-738-solution"></a>
#### Solution {#section-740-solution}

No. The projection is characterized uniquely by membership in the subspace and residual orthogonality to the whole subspace, both basis-independent properties. In floating arithmetic, however, the basis affects coefficient conditioning and computed accuracy; orthogonal bases are usually preferable to high-degree monomials.

<a id="section-742-exercise-6-15-counterexample-for-unsigned-error-plots"></a>
### Exercise 6.15 — Counterexample for unsigned error plots {#section-744-exercise-6-15-counterexample-for-unsigned-error-plots}

Why can plotting only \\(\\lvert f-p\\rvert\\) conceal evidence relevant to minimax approximation?

<a id="section-746-solution"></a>
#### Solution {#section-748-solution}

Minimax optimality often depends on alternating signed extrema. Absolute values erase the sign pattern, so equal peaks could all originate from errors of the same sign and fail the alternation criterion. A responsible plot or table reports signed error, locations, and a sufficiently justified global search for extrema.

<a id="section-750-chapter-7-spectral-approximation-and-fast-transforms"></a>
## Chapter 7: spectral approximation and fast transforms {#section-752-chapter-7-spectral-approximation-and-fast-transforms}

<a id="section-752-exercise-7-1-fourier-coefficient-of-a-constant"></a>
### Exercise 7.1 — Fourier coefficient of a constant {#section-754-exercise-7-1-fourier-coefficient-of-a-constant}

On \\([0,2\\pi]\\), using coefficients \\(c_k=(1/(2\\pi)) \\int_0^{2\\pi} f(x)e^{-ikx} dx\\), find the coefficients of \\(f(x)=3\\).

<a id="section-756-solution"></a>
#### Solution {#section-758-solution}

For \\(k=0\\), \\(c_0=3\\). For nonzero integer \\(k\\), the integral of \\(e^{-ikx}\\) over a full period is zero, so \\(c_k=0\\). The result assumes the complex exponential convention stated in the prompt; other normalizations redistribute factors of \\(2\\pi\\).

<a id="section-760-exercise-7-2-aliasing-of-sampled-modes"></a>
### Exercise 7.2 — Aliasing of sampled modes {#section-762-exercise-7-2-aliasing-of-sampled-modes}

Show that modes \\(k\\) and \\(k+N\\) have identical values on the grid \\(x_j=2\\pi j/N\\).

<a id="section-764-solution"></a>
#### Solution {#section-766-solution}

At a grid point,
\\(e^{i(k+N)x_j}=e^{ikx_j}e^{iN(2\\pi j/N)}=e^{ikx_j}e^{i2\\pi j}=e^{ikx_j}\\).
Thus sampled data cannot distinguish frequencies differing by a multiple of \\(N\\). This is exact aliasing, independent of floating-point error.

<a id="section-770-exercise-7-3-nyquist-ambiguity"></a>
### Exercise 7.3 — Nyquist ambiguity {#section-772-exercise-7-3-nyquist-ambiguity}

For even \\(N\\), compare the sampled complex modes \\(k=N/2\\) and \\(k=-N/2\\).

<a id="section-774-solution"></a>
#### Solution {#section-776-solution}

Their ratio at \\(x_j\\) is \\(e^{iNx_j}=e^{i2\\pi j}=1\\), so they are identical on the grid. Both equal \\((-1)^j\\). A real discrete transform therefore needs a convention for this Nyquist mode; counting both independently would duplicate one degree of freedom.

<a id="section-778-exercise-7-4-discrete-orthogonality"></a>
### Exercise 7.4 — Discrete orthogonality {#section-780-exercise-7-4-discrete-orthogonality}

Evaluate \\(\\sum_{j=0}^{N-1} e^{2\\pi i(k-l)j/N}\\) for integers \\(k,l\\).

<a id="section-782-solution"></a>
#### Solution {#section-784-solution}

If \\(k-l\\) is divisible by \\(N\\), every term equals one and the sum is \\(N\\). Otherwise it is a finite geometric series with ratio \\(q\\ne 1\\) but \\(q^N=1\\), so the sum is \\((1-q^N)/(1-q)=0\\). This identity underlies exact inversion of the discrete Fourier transform.

<a id="section-786-exercise-7-5-transform-operation-count"></a>
### Exercise 7.5 — Transform operation count {#section-788-exercise-7-5-transform-operation-count}

A direct transform uses order \\(N^{2}\\) operations and a radix-two fast transform order \\(N \\log_2 N\\). Compare the leading counts at \\(N=1024\\).

<a id="section-790-solution"></a>
#### Solution {#section-792-solution}

The scale counts are \\(1024^{2}=1,048,576\\) versus \\(1024\\cdot10=10,240\\), a ratio of about \\(102.4\\). Constants, memory access, and implementation overhead affect actual time, but the asymptotic reduction is already substantial at this size.

<a id="section-794-exercise-7-6-spectral-derivative"></a>
### Exercise 7.6 — Spectral derivative {#section-796-exercise-7-6-spectral-derivative}

If \\(f(x)=\\sum_k c_k e^{ikx}\\) is differentiable termwise, what are the Fourier coefficients of \\(f'\\)?

<a id="section-798-solution"></a>
#### Solution {#section-800-solution}

Differentiating \\(e^{ikx}\\) gives \\(ik e^{ikx}\\), so the coefficient becomes \\(ik c_k\\). Termwise differentiation needs sufficient convergence or smoothness; for a truncated trigonometric polynomial it is exact. High-frequency noise is amplified by the factor \\(\\lvert k\\rvert\\).

<a id="section-802-exercise-7-7-mean-from-the-transform"></a>
### Exercise 7.7 — Mean from the transform {#section-804-exercise-7-7-mean-from-the-transform}

Under the convention of Exercise 7.1, identify the spatial mean of a periodic function.

<a id="section-806-solution"></a>
#### Solution {#section-808-solution}

The mean is \\((1/(2\\pi)) \\int_0^{2\\pi} f(x)dx=c_0\\). Thus the zero-frequency coefficient records the average. In a discrete transform the corresponding coefficient is the sample mean under the matching \\(1/N\\) normalization, not necessarily the exact continuous mean unless the sampling quadrature is exact.

<a id="section-810-exercise-7-8-smoothness-and-decay"></a>
### Exercise 7.8 — Smoothness and decay {#section-812-exercise-7-8-smoothness-and-decay}

Use integration by parts to explain why a periodic continuously differentiable function with matching endpoint values has Fourier coefficients \\(c_k=\\mathcal O(1/\\lvert k\\rvert)\\).

<a id="section-814-solution"></a>
#### Solution {#section-816-solution}

For \\(k\\ne 0\\), integration by parts yields \\(c_k=(1/(2\\pi ik)) \\int_0^{2\\pi} f'(x)e^{-ikx}dx\\); the boundary term vanishes by periodic endpoint matching. Therefore \\(\\lvert c_k\\rvert\\le \\lVert f'\\rVert_{L^{1}}/(2\\pi\\lvert k\\rvert)\\). Additional smooth periodic derivatives permit repeated integration by parts and faster algebraic decay.

<a id="section-818-exercise-7-9-exponential-decay-estimate"></a>
### Exercise 7.9 — Exponential decay estimate {#section-820-exercise-7-9-exponential-decay-estimate}

If coefficients satisfy \\(\\lvert c_k\\rvert\\le C \\rho^{-\\lvert k\\rvert}\\) with \\(\\rho>1\\), bound the two-sided tail \\(\\sum_{\\lvert k\\rvert>n}\\lvert c_k\\rvert\\).

<a id="section-822-solution"></a>
#### Solution {#section-824-solution}

The positive and negative tails each form a geometric series. Their sum is at most \\(2C \\sum_{k=n+1}^\\infty \\rho^{-k}=2C \\rho^{-(n+1)}/(1-\\rho^{-1})\\). Absolute convergence makes this also a uniform truncation-error bound for the exponential basis, whose magnitude is one.

<a id="section-826-exercise-7-10-gibbs-diagnosis"></a>
### Exercise 7.10 — Gibbs diagnosis {#section-828-exercise-7-10-gibbs-diagnosis}

Why does increasing the number of Fourier modes near a jump fail to remove the maximum overshoot immediately?

<a id="section-830-solution"></a>
#### Solution {#section-832-solution}

Truncated global oscillatory bases approximate the discontinuity through a narrowing oscillatory layer. The layer width decreases, but the peak overshoot approaches a nonzero fraction of the jump rather than vanishing. Away from the jump convergence improves. Filtering can reduce ringing but modifies resolution and must be reported as part of the method.

<a id="section-834-exercise-7-11-chebyshev-node-location"></a>
### Exercise 7.11 — Chebyshev node location {#section-836-exercise-7-11-chebyshev-node-location}

Show that \\(x_j=\\cos(j \\pi/n)\\), \\(j=0,\\ldots,n\\), lie in \\([-1,1]\\) and include both endpoints.

<a id="section-838-solution"></a>
#### Solution {#section-840-solution}

Cosine always lies in \\([-1,1]\\). At \\(j=0\\), \\(x_0=1\\); at \\(j=n\\), \\(x_n=\\cos \\pi=-1\\). Interior nodes cluster near the endpoints because the derivative of cosine vanishes near \\(0\\) and \\(\\pi\\), a geometry that controls polynomial interpolation growth better than equally spaced nodes.

<a id="section-842-exercise-7-12-coefficient-threshold-hazard"></a>
### Exercise 7.12 — Coefficient threshold hazard {#section-844-exercise-7-12-coefficient-threshold-hazard}

Why is truncating whenever one coefficient falls below tolerance unsafe?

<a id="section-846-solution"></a>
#### Solution {#section-848-solution}

A single small coefficient may occur through symmetry or cancellation while later coefficients are larger. For example an even function has all odd coefficients zero. A robust tail test examines a block or envelope, accounts for coefficient scaling, and verifies the resulting approximation on an independent grid or by a theorem.

<a id="section-850-exercise-7-13-parseval-interpretation"></a>
### Exercise 7.13 — Parseval interpretation {#section-852-exercise-7-13-parseval-interpretation}

For an orthonormal spectral basis, what does the sum of squared omitted coefficients measure?

<a id="section-854-solution"></a>
#### Solution {#section-856-solution}

Parseval's identity makes it the squared \\(L^{2}\\) norm of the truncation error: \\(\\lVert f-p_n\\rVert_2^{2}=\\sum_{k\\notin\\mathcal K}\\lvert c_k\\rvert^{2}\\), where \\(\\mathcal K\\) is the set of retained indices and the complete expansion exists in the Hilbert space. It does not directly bound the sup norm without additional smoothness or inverse estimates.

<a id="section-858-exercise-7-14-real-symmetry"></a>
### Exercise 7.14 — Real symmetry {#section-860-exercise-7-14-real-symmetry}

For real-valued periodic \\(f\\), prove \\(c_{-k}=\\overline{c_k}\\).

<a id="section-862-solution"></a>
#### Solution {#section-864-solution}

Taking \\(\\overline{c_k}\\) gives \\((1/(2\\pi)) \\int f(x)e^{ikx}dx\\) because \\(f\\) is real. This is exactly \\(c_{-k}\\). Therefore only roughly half the complex coefficients are independent, a symmetry implementations can exploit and should check.

<a id="section-866-exercise-7-15-padding-and-convolution"></a>
### Exercise 7.15 — Padding and convolution {#section-868-exercise-7-15-padding-and-convolution}

Why can multiplying two truncated spectral functions require padding before transforming back?

<a id="section-870-solution"></a>
#### Solution {#section-872-solution}

Multiplication in physical space corresponds to convolution of coefficients, creating modes whose frequencies are sums of the original frequencies. If these exceed the grid's resolvable band, they wrap into lower modes by aliasing. Padding increases the temporary resolvable band; truncating after multiplication prevents those high modes from corrupting retained coefficients.

<a id="section-874-chapter-8-numerical-differentiation-and-quadrature"></a>
## Chapter 8: numerical differentiation and quadrature {#section-876-chapter-8-numerical-differentiation-and-quadrature}

<a id="section-876-exercise-8-1-forward-difference-order"></a>
### Exercise 8.1 — Forward-difference order {#section-878-exercise-8-1-forward-difference-order}

Assume \\(f\\) has two continuous derivatives near \\(x\\). Derive the leading error of \\((f(x+h)-f(x))/h\\).

<a id="section-880-solution"></a>
#### Solution {#section-882-solution}

Taylor's theorem gives \\(f(x+h)=f(x)+hf'(x)+(h^{2}/2)f''(\\xi)\\). Dividing the difference by \\(h\\) yields \\(f'(x)+(h/2)f''(\\xi)\\). Hence the truncation error is first order in \\(h\\). This excludes evaluation rounding; adding it changes the optimal step-size analysis.

<a id="section-884-exercise-8-2-centered-difference-order"></a>
### Exercise 8.2 — Centered-difference order {#section-886-exercise-8-2-centered-difference-order}

Assume three continuous derivatives. Derive the leading error of \\([f(x+h)-f(x-h)]/(2h)\\).

<a id="section-888-solution"></a>
#### Solution {#section-890-solution}

Taylor expansions about \\(x\\) cancel the constant and even-power terms. The quotient is \\(f'(x)+(h^{2}/6)f'''(\\xi)\\) in an appropriate remainder form, so the truncation error is order \\(h^{2}\\). Function-evaluation noise is amplified like \\(1/h\\), preventing indefinite improvement as \\(h\\) shrinks.

<a id="section-892-exercise-8-3-optimal-step-scale"></a>
### Exercise 8.3 — Optimal step scale {#section-894-exercise-8-3-optimal-step-scale}

If a differentiation error bound is \\(Ah^{2}+Bu/h\\) for positive constants, find the minimizing \\(h\\).

<a id="section-896-solution"></a>
#### Solution {#section-898-solution}

Differentiate: \\(2Ah-Bu/h^{2}=0\\), so \\(h^{3}=Bu/(2A)\\) and \\(h=(Bu/(2A))^{1/3}\\). The cube-root scaling is typical for centered differences. It depends on derivative and function scales hidden in \\(A,B\\); rescaling the independent variable changes the numerical value.

<a id="section-900-exercise-8-4-trapezoid-exactness"></a>
### Exercise 8.4 — Trapezoid exactness {#section-902-exercise-8-4-trapezoid-exactness}

Prove the one-panel trapezoid rule is exact for every affine function on \\([a,b]\\).

<a id="section-904-solution"></a>
#### Solution {#section-906-solution}

For \\(f(x)=mx+c\\), the exact integral is \\((b-a)[m(a+b)/2+c]\\). The trapezoid value is \\((b-a)(f(a)+f(b))/2\\), which simplifies to the same expression. Exactness here is algebraic and assumes exact function values and arithmetic.

<a id="section-908-exercise-8-5-a-composite-trapezoid-certificate"></a>
### Exercise 8.5 — A composite trapezoid certificate {#section-910-exercise-8-5-a-composite-trapezoid-certificate}

Let \\(f\\) have a continuous second derivative on \\([0,2]\\) with \\(\\lvert f''(x)\\rvert\\le 3\\). Bound the absolute error of the composite trapezoid rule with eight equal panels, assuming exact samples and arithmetic.

<a id="section-912-solution"></a>
#### Solution {#section-914-solution}

The panel width is \\(h=2/8=1/4\\). The standard composite bound is
\\(\\lvert I-T_8\\rvert\\le (b-a)h^{2} \\max\\lvert f''\\rvert/12\\). Substitution gives
\\(2(1/4)^{2}(3)/12=1/32\\). Thus \\(0.03125\\) is a proved discretization bound under the stated smoothness and exact-evaluation assumptions. It is not an estimate of floating-point sampling error, and a function with an unbounded or discontinuous second derivative falls outside the theorem.

<a id="section-918-exercise-8-6-richardson-extrapolation"></a>
### Exercise 8.6 — Richardson extrapolation {#section-920-exercise-8-6-richardson-extrapolation}

Approximations satisfy \\(D(h)=D+C h^{2}+\\mathcal O(h^{4})\\). Combine \\(D(h)\\) and \\(D(h/2)\\) to cancel the \\(h^{2}\\) term.

<a id="section-922-solution"></a>
#### Solution {#section-924-solution}

Since \\(D(h/2)=D+C h^{2}/4+\\mathcal O(h^{4})\\), compute \\([4D(h/2)-D(h)]/3=D+\\mathcal O(h^{4})\\). The cancellation assumes the asymptotic expansion is valid at both steps and that rounding or nonsmoothness has not become dominant.

<a id="section-926-exercise-8-7-composite-trapezoid-computation"></a>
### Exercise 8.7 — Composite trapezoid computation {#section-928-exercise-8-7-composite-trapezoid-computation}

Use two equal panels to integrate \\(x^{2}\\) on \\([0,1]\\).

<a id="section-930-solution"></a>
#### Solution {#section-932-solution}

With \\(h=1/2\\) and values \\(0,1/4,1\\), the composite trapezoid rule gives \\(h[f_0/2+f_1+f_2/2]=(1/2)(0+1/4+1/2)=3/8\\). The exact integral is \\(1/3\\), so the error is \\(1/24\\), consistent with the rule's overestimate for convex functions.

<a id="section-934-exercise-8-8-adaptive-indicator-limitation"></a>
### Exercise 8.8 — Adaptive indicator limitation {#section-936-exercise-8-8-adaptive-indicator-limitation}

Why does agreement of a coarse and refined quadrature rule not prove small error?

<a id="section-938-solution"></a>
#### Solution {#section-940-solution}

Both rules may miss the same narrow feature or sample zeros of an oscillatory integrand, producing identical answers far from the true integral. Their difference is an estimator under smoothness and resolution assumptions, not an unconditional bound. Robust adaptivity uses safeguards, transformed problems, or validated remainder bounds when certification is required.

<a id="section-942-exercise-8-9-differentiating-noisy-data"></a>
### Exercise 8.9 — Differentiating noisy data {#section-944-exercise-8-9-differentiating-noisy-data}

Measurements have independent absolute errors bounded by \\(\\epsilon\\). Bound their contribution to a centered difference.

<a id="section-946-solution"></a>
#### Solution {#section-948-solution}

Let the two errors be \\(e_+,e_-\\), each bounded by \\(\\epsilon\\). Their derivative contribution is \\((e_+-e_-)/(2h)\\), whose magnitude is at most \\((2\\epsilon)/(2h)=\\epsilon/h\\). Thus smaller \\(h\\) amplifies worst-case measurement noise, creating a bias-noise tradeoff even in exact arithmetic after sampling.

<a id="section-950-exercise-8-10-quadrature-under-affine-change"></a>
### Exercise 8.10 — Quadrature under affine change {#section-952-exercise-8-10-quadrature-under-affine-change}

Transform \\(\\int_a^b f(x)dx\\) to \\([-1,1]\\).

<a id="section-954-solution"></a>
#### Solution {#section-956-solution}

Set \\(x=(a+b)/2+(b-a)t/2\\); then \\(dx=(b-a)dt/2\\). The integral becomes \\((b-a)/2 \\int_{-1}^{1} f((a+b)/2+(b-a)t/2)dt\\). The Jacobian factor must multiply quadrature weights; omitting it is a common scaling error.

<a id="section-958-exercise-8-11-positive-weights-and-stability"></a>
### Exercise 8.11 — Positive weights and stability {#section-960-exercise-8-11-positive-weights-and-stability}

If a quadrature rule has positive weights summing to \\(b-a\\), bound the effect of function-value errors \\(\\lvert e_i\\rvert\\le \\epsilon\\).

<a id="section-962-solution"></a>
#### Solution {#section-964-solution}

The quadrature perturbation is \\(\\lvert \\sum_i w_i e_i\\rvert\\le \\sum_i w_i\\lvert e_i\\rvert\\le \\epsilon \\sum_iw_i=\\epsilon(b-a)\\). Positivity prevents cancellation-free amplification by large signed weights. The bound covers data errors, not truncation error of the rule.

<a id="section-966-exercise-8-12-endpoint-singularity-diagnosis"></a>
### Exercise 8.12 — Endpoint singularity diagnosis {#section-968-exercise-8-12-endpoint-singularity-diagnosis}

Why does a polynomial-order error theorem requiring bounded fourth derivative not apply directly to \\(\\sqrt{x}\\) on \\([0,1]\\)?

<a id="section-970-solution"></a>
#### Solution {#section-972-solution}

The fourth derivative behaves like a negative power of \\(x\\) and is unbounded at zero. Therefore a bound involving its maximum over \\([0,1]\\) is infinite or undefined. One should transform the variable, split the endpoint region, or use a theorem tailored to the singularity rather than quote the smooth result.

<a id="section-974-exercise-8-13-complex-step-derivative-hypothesis"></a>
### Exercise 8.13 — Complex-step derivative hypothesis {#section-976-exercise-8-13-complex-step-derivative-hypothesis}

Let \\(f\\) be analytic near a real point \\(x\\) and real-valued on a real neighborhood of \\(x\\), and suppose it is evaluated with complex arithmetic. Explain why \\(Im f(x+ih)/h\\) avoids subtractive cancellation.

<a id="section-978-solution"></a>
#### Solution {#section-980-solution}

Taylor expansion gives \\(f(x+ih)=f(x)+ihf'(x)-h^2f''(x)/2-ih^3f'''(x)/6+\\ldots\\). Because \\(f\\) is real-valued on the real axis, its derivatives there are real; taking the imaginary part and dividing by \\(h\\) therefore yields \\(f'(x)+\\mathcal O(h^{2})\\) without subtracting two close real values. Analyticity alone is insufficient—for example, \\(f(z)=i+z\\) would introduce a spurious \\(1/h\\) term. The method also requires code that preserves complex operations; nonanalytic branching or absolute value can invalidate it.

<a id="section-982-exercise-8-14-exactness-degree-counterexample"></a>
### Exercise 8.14 — Exactness degree counterexample {#section-984-exercise-8-14-exactness-degree-counterexample}

Show that the trapezoid rule is not exact for all quadratics by using \\(x^{2}\\) on \\([-1,1]\\).

<a id="section-986-solution"></a>
#### Solution {#section-988-solution}

The trapezoid value is \\((2/2)[f(-1)+f(1)]=2\\), while the exact integral is \\(2/3\\). Therefore its general polynomial degree of exactness is one. Symmetry may make it exact for selected higher odd powers, but isolated success does not raise the degree of exactness.

<a id="section-990-exercise-8-15-error-table-interpretation"></a>
### Exercise 8.15 — Error table interpretation {#section-992-exercise-8-15-error-table-interpretation}

Errors at steps \\(h,h/2,h/4\\) are \\(1.6\\times 10^{-3},4.1\\times 10^{-4},1.0\\times 10^{-4}\\). Estimate the observed order.

<a id="section-994-solution"></a>
#### Solution {#section-996-solution}

The ratios are about \\(3.90\\) and \\(4.10\\). Since halving \\(h\\) reduces an order-\\(p\\) error by \\(2^p\\), \\(p=\\log_2(ratio)\\) is about \\(1.96\\) and \\(2.04\\). The data support second-order behavior over this range, but three points do not prove the asymptotic theorem or rule out later rounding stagnation.

<a id="section-998-chapter-9-singular-oscillatory-and-high-dimensional-int"></a>
## Chapter 9: singular, oscillatory, and high-dimensional integration {#section-1000-chapter-9-singular-oscillatory-and-high-dimensional-int}

<a id="section-1000-exercise-9-1-removing-a-square-root-singularity"></a>
### Exercise 9.1 — Removing a square-root singularity {#section-1002-exercise-9-1-removing-a-square-root-singularity}

Transform \\(\\int_0^{1} x^{-1/2}g(x)dx\\) using \\(x=t^{2}\\), assuming \\(g\\) is continuous.

<a id="section-1004-solution"></a>
#### Solution {#section-1006-solution}

With \\(x=t^{2}\\), \\(dx=2t dt\\) and \\(x^{-1/2}=1/t\\) for \\(t>0\\). The factors cancel, giving \\(2 \\int_0^{1} g(t^{2})dt\\). Continuity extends the transformed integrand to \\(t=0\\), removing the algebraic endpoint singularity. The original improper integral is finite under the stated assumption.

<a id="section-1008-exercise-9-2-an-improper-integral"></a>
### Exercise 9.2 — An improper integral {#section-1010-exercise-9-2-an-improper-integral}

Determine for which real \\(\\alpha\\) the integral \\(\\int_0^{1} x^{-\\alpha}dx\\) converges and give its value.

<a id="section-1012-solution"></a>
#### Solution {#section-1014-solution}

For \\(\\alpha\\ne 1\\), integrating from \\(\\epsilon\\) gives \\((1-\\epsilon^{1-\\alpha})/(1-\\alpha)\\). The limit is finite exactly when \\(1-\\alpha>0\\), that is \\(\\alpha<1\\), and then equals \\(1/(1-\\alpha)\\). For \\(\\alpha=1\\) it diverges logarithmically; for \\(\\alpha>1\\) it diverges by a power.

<a id="section-1016-exercise-9-3-symmetric-principal-value"></a>
### Exercise 9.3 — Symmetric principal value {#section-1018-exercise-9-3-symmetric-principal-value}

Compute the Cauchy principal value of \\(\\int_{-1}^{1} 1/x dx\\) and distinguish it from the improper integral.

<a id="section-1020-solution"></a>
#### Solution {#section-1022-solution}

Symmetric exclusion gives \\(\\lim_{\\epsilon\\to 0}[\\int_{-1}^{-\\epsilon}1/x dx+\\int_{\\epsilon}^{1} 1/x dx]=0\\). The ordinary improper integral does not exist because each one-sided integral diverges. A numerical method must state whether it targets a principal value; silently returning zero changes the mathematical problem.

<a id="section-1024-exercise-9-4-oscillatory-cancellation"></a>
### Exercise 9.4 — Oscillatory cancellation {#section-1026-exercise-9-4-oscillatory-cancellation}

Evaluate \\(\\int_0^{2\\pi} \\sin(kx)dx\\) for nonzero integer \\(k\\).

<a id="section-1028-solution"></a>
#### Solution {#section-1030-solution}

An antiderivative is \\(-\\cos(kx)/k\\), so the integral is \\([-\\cos(2\\pi k)+\\cos 0]/k=0\\). Quadrature nodes that do not resolve the oscillations may nevertheless give a nonzero error. Conversely, sampled zeros can give a spuriously exact-looking answer for other phases.

<a id="section-1032-exercise-9-5-integration-by-parts-decay"></a>
### Exercise 9.5 — Integration by parts decay {#section-1034-exercise-9-5-integration-by-parts-decay}

Let \\(f\\) be continuously differentiable on \\([a,b]\\). Bound \\(\\int_a^b f(x)e^{i \\omega x}dx\\) for nonzero \\(\\omega\\).

<a id="section-1036-solution"></a>
#### Solution {#section-1038-solution}

Integration by parts gives a boundary term \\([f(x)e^{i\\omega x}/(i\\omega)]_a^b\\) minus \\((1/(i\\omega))\\int_a^b f'(x)e^{i\\omega x}dx\\). Hence the magnitude is at most \\((\\lvert f(a)\\rvert+\\lvert f(b)\\rvert+\\lVert f'\\rVert_1)/\\lvert \\omega\\rvert\\). This exposes decay through cancellation that an absolute-value bound would miss.

<a id="section-1040-exercise-9-6-monte-carlo-mean-and-variance"></a>
### Exercise 9.6 — Monte Carlo mean and variance {#section-1042-exercise-9-6-monte-carlo-mean-and-variance}

If \\(U_i\\) are independent uniform samples on \\([0,1]^d\\) and \\(Y_i=f(U_i)\\) has finite variance \\(\\sigma^{2}\\), state the mean and variance of \\(Q_N=N^{-1} \\sum_iY_i\\).

<a id="section-1044-solution"></a>
#### Solution {#section-1046-solution}

The estimator is unbiased: \\(E Q_N=\\int_{[0,1]^d} f(x)\\,dx\\). Independence gives \\(\\operatorname{Var}(Q_N)=\\sigma^{2}/N\\), so the root-mean-square sampling error is \\(\\sigma/\\sqrt{N}\\). This probabilistic statement is dimension-independent in rate but not necessarily in the size of \\(\\sigma\\) or cost per sample.

<a id="section-1048-exercise-9-7-sample-size-scaling"></a>
### Exercise 9.7 — Sample-size scaling {#section-1050-exercise-9-7-sample-size-scaling}

How must Monte Carlo sample size change to reduce root-mean-square error by a factor of ten, assuming unchanged variance?

<a id="section-1052-solution"></a>
#### Solution {#section-1054-solution}

Because the error scale is proportional to \\(N^{-1/2}\\), reducing it by ten requires increasing \\(N\\) by \\(10^{2}=100\\). This is an expected or root-mean-square relation, not a deterministic guarantee for a single run.

<a id="section-1056-exercise-9-8-antithetic-variance"></a>
### Exercise 9.8 — Antithetic variance {#section-1058-exercise-9-8-antithetic-variance}

For \\(U\\) uniform on \\([0,1]\\), consider the antithetic estimator \\([f(U)+f(1-U)]/2\\). When can it reduce variance?

<a id="section-1060-solution"></a>
#### Solution {#section-1062-solution}

Its variance is one quarter of the sum of the two variances plus twice their covariance. Since the two terms have equal variance, a negative covariance reduces variance below ordinary averaging of independent samples. Monotone \\(f\\) often makes \\(f(U)\\) and \\(f(1-U)\\) negatively related. Reduction is not universal and should be demonstrated or bounded.

<a id="section-1064-exercise-9-9-importance-sampling-support"></a>
### Exercise 9.9 — Importance-sampling support {#section-1066-exercise-9-9-importance-sampling-support}

Why must an importance density \\(q\\) be positive wherever the target integrand-density product is nonzero?

<a id="section-1068-solution"></a>
#### Solution {#section-1070-solution}

The estimator uses a ratio such as \\(h(x)/q(x)\\). If \\(q=0\\) where \\(h\\ne 0\\), that contribution is never sampled and the ratio is undefined, producing bias or an infinite-variance formulation. Support coverage is therefore a correctness condition, not a tuning preference.

<a id="section-1072-exercise-9-10-tensor-grid-growth"></a>
### Exercise 9.10 — Tensor-grid growth {#section-1074-exercise-9-10-tensor-grid-growth}

A product rule uses \\(m\\) nodes per coordinate. How many points are needed in dimension \\(d\\), and what is the count for \\(m=8,d=6\\)?

<a id="section-1076-solution"></a>
#### Solution {#section-1078-solution}

The Cartesian product has \\(m^d\\) points. Here it is \\(8^{6}=262144\\). This exponential growth is the tensor-product curse of dimensionality. Sparse or randomized methods reduce cost by using additional structure or weaker guarantees, not by changing this count.

<a id="section-1080-exercise-9-11-stratification-allocation"></a>
### Exercise 9.11 — Stratification allocation {#section-1082-exercise-9-11-stratification-allocation}

Two equal-volume strata have standard deviations \\(1\\) and \\(3\\). Under variance-minimizing proportional allocation with equal sample costs, give their sample ratio.

<a id="section-1084-solution"></a>
#### Solution {#section-1086-solution}

Optimal allocation is proportional to stratum volume times standard deviation. Equal volumes therefore give \\(n_1:n_2=1:3\\). More samples go to the variable stratum. Integer rounding and a minimum sample count per stratum are practical constraints.

<a id="section-1088-exercise-9-12-logarithmic-singularity-transformation"></a>
### Exercise 9.12 — Logarithmic singularity transformation {#section-1090-exercise-9-12-logarithmic-singularity-transformation}

Evaluate \\(\\int_0^{1} \\log x dx\\) exactly and note why endpoint evaluation is problematic.

<a id="section-1092-solution"></a>
#### Solution {#section-1094-solution}

An antiderivative is \\(x \\log x-x\\). Since \\(x \\log x\\) tends to zero as \\(x\\) approaches zero from above, the integral is \\(-1\\). The integrand itself is unbounded at zero, so a rule that directly evaluates the endpoint fails even though the improper integral converges.

<a id="section-1096-exercise-9-13-randomized-confidence-qualification"></a>
### Exercise 9.13 — Randomized confidence qualification {#section-1098-exercise-9-13-randomized-confidence-qualification}

Why is \\(estimate \\pm 1.96 sample_standard_{error}\\) not an unconditional 95% certificate?

<a id="section-1100-solution"></a>
#### Solution {#section-1102-solution}

It relies on an approximate normal sampling distribution, independent representative samples, finite variance, and a sufficiently large effective sample size. Heavy tails, dependence, adaptive stopping, or estimated variance can spoil coverage. The interval is a statistical confidence procedure under assumptions, not a deterministic enclosure of the integral.

<a id="section-1104-exercise-9-14-control-variate-coefficient"></a>
### Exercise 9.14 — Control variate coefficient {#section-1106-exercise-9-14-control-variate-coefficient}

For estimator \\(Y-c(Z-EZ)\\), derive the variance-minimizing \\(c\\) when \\(\\operatorname{Var}(Z)>0\\).

<a id="section-1108-solution"></a>
#### Solution {#section-1110-solution}

Its variance is \\(\\operatorname{Var}(Y)-2c \\operatorname{Cov}(Y,Z)+c^{2} \\operatorname{Var}(Z)\\). Differentiating in \\(c\\) gives \\(c_{*}=\\operatorname{Cov}(Y,Z)/\\operatorname{Var}(Z)\\). Substitution reduces variance by \\(\\operatorname{Cov}(Y,Z)^{2}/\\operatorname{Var}(Z)\\). Estimating \\(c\\) from the same data introduces finite-sample considerations that should be reported.

<a id="section-1112-exercise-9-15-reproducible-random-experiment"></a>
### Exercise 9.15 — Reproducible random experiment {#section-1114-exercise-9-15-reproducible-random-experiment}

Is recording only a pseudorandom seed sufficient for exact reproducibility? Explain.

<a id="section-1116-solution"></a>
#### Solution {#section-1118-solution}

No. One also needs the generator algorithm and version, mapping from bits to samples, stream splitting or consumption order, arithmetic environment, code version, and stopping rule. Parallel scheduling can alter which sample receives which random value. A seed identifies a stream only within a fully specified generation contract.

<a id="section-1120-chapter-10-direct-and-iterative-linear-algebra"></a>
## Chapter 10: direct and iterative linear algebra {#section-1122-chapter-10-direct-and-iterative-linear-algebra}

<a id="section-1122-exercise-10-1-triangular-solve"></a>
### Exercise 10.1 — Triangular solve {#section-1124-exercise-10-1-triangular-solve}

Solve \\(\\begin{pmatrix}2&0\\\\3&1\\end{pmatrix}x=(4,7)^{\\mathsf T}\\) by forward substitution.

<a id="section-1126-solution"></a>
#### Solution {#section-1128-solution}

The first equation gives \\(2x_1=4\\), so \\(x_1=2\\). The second gives \\(3\\cdot2+x_2=7\\), hence \\(x_2=1\\). Nonzero diagonal entries guarantee a unique triangular solve; very small diagonals may still create numerical sensitivity.

<a id="section-1130-exercise-10-2-one-elimination-step"></a>
### Exercise 10.2 — One elimination step {#section-1132-exercise-10-2-one-elimination-step}

Eliminate the first entry of the second row in \\(\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}x=(1,2)^{\\mathsf T}\\).

<a id="section-1134-solution"></a>
#### Solution {#section-1136-solution}

The multiplier is \\(m=4/2=2\\). Replace row two by row two minus twice row one: the matrix row becomes \\((0,1)\\) and the right side becomes \\(0\\). Back substitution gives \\(x_2=0\\), then \\(x_1=1/2\\). The step assumes a nonzero pivot.

<a id="section-1138-exercise-10-3-pivoting-necessity"></a>
### Exercise 10.3 — Pivoting necessity {#section-1140-exercise-10-3-pivoting-necessity}

Why does Gaussian elimination without row exchanges fail on \\(\\begin{pmatrix}0&1\\\\1&1\\end{pmatrix}\\) despite nonsingularity?

<a id="section-1142-solution"></a>
#### Solution {#section-1144-solution}

The first pivot is zero, so the multiplier is undefined. Yet the determinant is \\(-1\\), so the system is nonsingular. Swapping the two rows supplies pivot one and permits elimination. Partial pivoting selects a largest-magnitude available entry in the pivot column to avoid zero and reduce multiplier growth.

<a id="section-1146-exercise-10-4-residual-correction"></a>
### Exercise 10.4 — Residual correction {#section-1148-exercise-10-4-residual-correction}

Given approximate solution \\(\\widehat{x}\\), write the correction equation whose exact solution would remove its error.

<a id="section-1150-solution"></a>
#### Solution {#section-1152-solution}

Compute \\(r=b-Ax_{hat}\\) and solve \\(A d=r\\). Since \\(A(\\widehat{x}+d)=Ax_{hat}+r=b\\), the corrected solution is exact if residual and correction are exact and \\(A\\) is nonsingular. In finite arithmetic this is iterative refinement; higher-precision residuals often improve its effectiveness.

<a id="section-1154-exercise-10-5-jacobi-iteration-matrix"></a>
### Exercise 10.5 — Jacobi iteration matrix {#section-1156-exercise-10-5-jacobi-iteration-matrix}

For \\(A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}\\), form the Jacobi iteration matrix using \\(A=D+(L+U)\\).

<a id="section-1158-solution"></a>
#### Solution {#section-1160-solution}

Here \\(D=\\operatorname{diag}(4,3)\\) and the off-diagonal part is \\(\\begin{pmatrix}0&1\\\\2&0\\end{pmatrix}\\). Jacobi has \\(x^{k+1}=D^{-1}[b-(L+U)x^k]\\), so the iteration matrix is \\(-D^{-1}(L+U)=\\begin{pmatrix}0&-1/4\\\\-2/3&0\\end{pmatrix}\\). Its eigenvalues have magnitudes \\(\\sqrt{1/6}<1\\), hence the iteration converges for every starting vector.

<a id="section-1162-exercise-10-6-residual-error-relation"></a>
### Exercise 10.6 — Residual-error relation {#section-1164-exercise-10-6-residual-error-relation}

For nonsingular \\(A\\), express the exact error in terms of residual \\(r=b-Ax_{hat}\\).

<a id="section-1166-solution"></a>
#### Solution {#section-1168-solution}

Since \\(Ax=b\\), subtracting \\(A\\widehat{x}\\) gives \\(A(x-\\widehat{x})=r\\). Therefore \\(e=x-\\widehat{x}=A^-1r\\) and \\(\\lVert e\\rVert\\le \\lVert A^{-1}\\rVert \\lVert r\\rVert\\) in any compatible induced norm. The factor \\(\\lVert A^{-1}\\rVert\\) explains why a small residual may coexist with a large error.

<a id="section-1170-exercise-10-7-spd-energy"></a>
### Exercise 10.7 — SPD energy {#section-1172-exercise-10-7-spd-energy}

Show that solving \\(Ax=b\\) for symmetric positive-definite \\(A\\) is equivalent to minimizing \\(q(x)=x^TAx/2-b^Tx\\).

<a id="section-1174-solution"></a>
#### Solution {#section-1176-solution}

The gradient is \\(Ax-b\\), so the unique stationary point solves the system. The Hessian is \\(A\\), positive definite, making \\(q\\) strictly convex; hence that stationary point is the unique global minimizer. This variational view underlies conjugate-gradient methods.

<a id="section-1178-exercise-10-8-one-minimal-residual-krylov-step"></a>
### Exercise 10.8 — One minimal-residual Krylov step {#section-1180-exercise-10-8-one-minimal-residual-krylov-step}

For \\(A=\\operatorname{diag}(1,4)\\), \\(b=(1,1)^{\\mathsf T}\\), and \\(x_0=0\\), restrict the first correction to \\(x_1=\\alpha b\\). Find the real \\(\\alpha\\) minimizing \\(\\lVert b-Ax_1\\rVert_2\\) and compute the minimum residual norm.

<a id="section-1182-solution"></a>
#### Solution {#section-1184-solution}

The residual is \\((1-\\alpha,1-4\\alpha)^{\\mathsf T}\\), so its squared norm is
\\(\\phi(\\alpha)=(1-\\alpha)^{2}+(1-4\\alpha)^{2}\\). Differentiation gives
\\(\\phi'(\\alpha)=-2(1-\\alpha)-8(1-4\\alpha)=-10+34\\alpha\\); strict convexity makes \\(\\alpha=5/17\\) the unique minimizer. The residual is \\((12/17,-3/17)^{\\mathsf T}\\), with norm \\(\\sqrt{153}/17=3/\\sqrt{17}\\). This calculation illustrates Euclidean residual minimization on the one-dimensional Krylov space \\(\\operatorname{span}\\{b\\}\\); it does not assert the energy-minimization property of conjugate gradients.

<a id="section-1188-exercise-10-9-condition-number-of-a-diagonal-matrix"></a>
### Exercise 10.9 — Condition number of a diagonal matrix {#section-1190-exercise-10-9-condition-number-of-a-diagonal-matrix}

Find \\(\\kappa_2(\\operatorname{diag}(2,10^{-3}))\\).

<a id="section-1192-solution"></a>
#### Solution {#section-1194-solution}

For a diagonal matrix with positive entries, singular values are their absolute values. Thus \\(\\kappa_2=2/(10^{-3})=2000\\). Relative perturbations aligned with the small singular direction can be amplified by up to this factor in solving the system.

<a id="section-1196-exercise-10-10-preconditioning-equivalence"></a>
### Exercise 10.10 — Preconditioning equivalence {#section-1198-exercise-10-10-preconditioning-equivalence}

For nonsingular \\(M\\), why does left-preconditioned system \\(M^-1Ax=M^-1b\\) have the same exact solution as \\(Ax=b\\)?

<a id="section-1200-solution"></a>
#### Solution {#section-1202-solution}

Multiplying the preconditioned equation by \\(M\\) recovers \\(Ax=b\\), and multiplying the original by \\(M^{-1}\\) gives the preconditioned form. Thus solution sets coincide. Numerically, \\(M^{-1}\\) should usually be applied through solves rather than formed explicitly, and the new residual norm has a different interpretation.

<a id="section-1204-exercise-10-11-stationary-convergence-criterion"></a>
### Exercise 10.11 — Stationary convergence criterion {#section-1206-exercise-10-11-stationary-convergence-criterion}

For iteration \\(x_{k+1}=Gx_k+c\\), state the exact-arithmetic convergence condition for every starting vector.

<a id="section-1208-solution"></a>
#### Solution {#section-1210-solution}

Convergence for every start to the unique fixed point occurs exactly when the spectral radius \\(\\rho(G)<1\\). Then \\(G^k\\) tends to zero and errors satisfy \\(e_k=G^ke_0\\). A matrix norm below one is a sufficient but not necessary easily checked condition.

<a id="section-1212-exercise-10-12-normal-equation-residual"></a>
### Exercise 10.12 — Normal-equation residual {#section-1214-exercise-10-12-normal-equation-residual}

If \\(x\\) satisfies \\(A^{\\mathsf T} A x=A^Tb\\), what orthogonality condition does its residual satisfy?

<a id="section-1216-solution"></a>
#### Solution {#section-1218-solution}

Rearranging gives \\(A^{\\mathsf T}(b-Ax)=0\\). Thus residual \\(r=b-Ax\\) is orthogonal to the column space of \\(A\\). If \\(A\\) has full column rank, this uniquely characterizes the least-squares minimizer. Forming \\(A^TA\\) explicitly is often less stable than QR or singular-value methods.

<a id="section-1220-exercise-10-13-sparse-fill"></a>
### Exercise 10.13 — Sparse fill {#section-1222-exercise-10-13-sparse-fill}

Why can a sparse matrix produce denser triangular factors?

<a id="section-1224-solution"></a>
#### Solution {#section-1226-solution}

Elimination couples remaining variables that share an eliminated neighbor, creating new nonzero entries called fill. Fill depends strongly on ordering. Reordering can reduce storage and work without changing the mathematical system, while careless ordering may make a nominally sparse direct solve impractical.

<a id="section-1228-exercise-10-14-krylov-information"></a>
### Exercise 10.14 — Krylov information {#section-1230-exercise-10-14-krylov-information}

Define the order-\\(k\\) Krylov subspace generated by \\(A\\) and residual \\(r_0\\).

<a id="section-1232-solution"></a>
#### Solution {#section-1234-solution}

It is \\(K_k(A,r_0)=\\operatorname{span}\\{r_0,Ar_0,\\ldots,A^{k-1}r_0\\}\\). Krylov methods seek corrections in this space using matrix-vector products. In exact arithmetic its dimension may stop growing; in finite arithmetic loss of orthogonality and roundoff affect the ideal polynomial picture.

<a id="section-1236-exercise-10-15-backward-error-for-a-linear-solve"></a>
### Exercise 10.15 — Backward error for a linear solve {#section-1238-exercise-10-15-backward-error-for-a-linear-solve}

Given nonzero \\(\\widehat{x}\\), show that there exists a rank-one \\(\\Delta A\\) satisfying \\((A+\\Delta A)\\widehat{x}=b\\), and bound it using residual \\(r=b-Ax_{hat}\\).

<a id="section-1240-solution"></a>
#### Solution {#section-1242-solution}

Choose \\(\\Delta A=r \\widehat{x}^{\\mathsf T}/\\lVert \\widehat{x}\\rVert_2^{2}\\). Then \\(\\Delta A \\widehat{x}=r\\), so \\((A+\\Delta A)\\widehat{x}=b\\). Its spectral norm is \\(\\lVert r\\rVert_2/\\lVert \\widehat{x}\\rVert_2\\). Thus this ratio is an absolute normwise matrix backward error; a relative measure divides by \\(\\lVert A\\rVert_2\\), with separate treatment when scales vanish.

<a id="section-1244-reproducible-projects"></a>
## Reproducible projects {#section-1246-reproducible-projects}

Each project is deliberately bounded. Use only deterministic local code and standard arithmetic already available in the project environment; do not add dependencies. Commit code, machine-readable data, and a short report beside one another. A plot may supplement but never replace the required numerical table.

<a id="section-1248-project-1-summation-laboratory"></a>
### Project 1 — Summation laboratory {#section-1250-project-1-summation-laboratory}

Implement left-to-right, fixed-tree pairwise, and Kahan summation for three arrays of exactly \\(2^{16}\\) binary64 values. Array A has \\(x_i=2^((i mod 7)-3)\\). Array B repeats \\((2^{53},1,-2^{53},1)\\) exactly \\(16384\\) times. Array C is the Fisher--Yates permutation of B produced by SplitMix64 initial state \\(20260831\\), unsigned arithmetic modulo \\(2^{64}\\), and rejection-sampled indices. Compute each method exactly 20 timed repetitions per array in each of two single-threaded executions with fused contraction disabled. Compute references by exact dyadic integer accumulation. The hard ceiling is 360 timed summations, three exact references reused by both executions, and three stored-array hash checks.

<a id="section-1252-required-outputs-and-verification"></a>
#### Required outputs and verification {#section-1254-required-outputs-and-verification}

Produce a CSV with method, data-set hash, order, hexadecimal result, absolute error, relative error when defined, and runtime over a fixed repetition count. Verify the positive-data results against a \\(\\gamma_n\\)-style bound under explicitly checked no-overflow assumptions. Repeat every run twice and require byte-identical CSV numerical fields; explain any runtime variation. Include one test demonstrating that changing only the reduction order can change the binary64 result.

<a id="section-1256-project-2-certified-scalar-root-dossier"></a>
### Project 2 — Certified scalar-root dossier {#section-1258-project-2-certified-scalar-root-dossier}

Implement bisection and safeguarded Newton for exactly four fixtures: \\(x^{2}-2\\) on \\([1,2]\\) from \\(3/2\\); \\(\\cos(x)-x\\) on \\([0,1]\\) from \\(1/2\\); \\((x-1)^{2}\\) on \\([0,2]\\) from \\(3/2\\); and \\(2^{-40}(x-1)\\) on \\([0,2]\\) from \\(3/2\\). Use analytic derivatives. Newton proposals outside the current bracket, with zero derivative, or failing to reduce absolute residual are replaced by the midpoint; update a sign bracket only when outward-rounded function enclosures certify opposite signs. Cap each method/function pair at 100 iterations and \\(250\\) function/derivative evaluations, for eight attempted runs total.

<a id="section-1260-required-outputs-and-verification"></a>
#### Required outputs and verification {#section-1262-required-outputs-and-verification}

For each case output an iteration table containing endpoints when applicable, proposal type, accepted point, residual, derivative enclosure or bound, and termination reason. Verify sign claims with outward-rounded intervals or a stated rigorous evaluation-error bound. Supply a final root interval when the theorem applies, explicitly report why sign-change bisection cannot certify the even root, and use a derivative lower bound to convert residual to error where valid. Re-running must reproduce the same termination row and hexadecimal endpoints.

<a id="section-1264-project-3-interpolation-and-spectral-stress-test"></a>
### Project 3 — Interpolation and spectral stress test {#section-1266-project-3-interpolation-and-spectral-stress-test}

On \\([-1,1]\\), approximate exactly \\(f_1=x^{7}-2x^{3}+1\\), \\(f_2=\\exp(x)\\), and \\(f_3=\\lvert x-1/5\\rvert\\) at degrees \\(8,16,32,64\\). Compare barycentric interpolation at \\(x_j=-1+2j/N\\), barycentric interpolation at Chebyshev--Lobatto nodes \\(\\cos(j\\cdot \\pi/N)\\), and a Chebyshev truncation whose coefficients use the direct deterministic DCT-I sum and whose values use Clenshaw recurrence. Compute barycentric weights from their product definition with a common rescaling and increasing-index products. Use exactly \\(x_i=-1+2i/8192\\), \\(i=0,\\ldots,8192\\), for every error and Lebesgue scan. The hard ceiling is 36 fits, 36 grid evaluations, and \\(2,000,000\\) scalar function evaluations including diagnostics.

<a id="section-1268-required-outputs-and-verification"></a>
#### Required outputs and verification {#section-1270-required-outputs-and-verification}

Save nodes, coefficients, maximum signed error on the specified 8193-point grid, an independently evaluated Lebesgue-function estimate, and coefficient-tail data. Verify polynomial exactness to a tolerance derived from operation count and unit roundoff, not a free constant. For the other functions, label grid maxima as lower bounds on true sup errors unless an analytic bound is supplied. Report whether observed convergence agrees with smoothness, and include signed-error tables so alternation or ringing is visible without a plot.

<a id="section-1272-project-4-differentiation-and-difficult-integral-audit"></a>
### Project 4 — Differentiation and difficult-integral audit {#section-1274-project-4-differentiation-and-difficult-integral-audit}

For \\(f(x)=\\exp(x)\\) at \\(x=1\\), compare forward, centered, and complex-step derivatives over \\(h=2^{-k}\\), \\(k=1,\\ldots,50\\), using their literal textbook formulas in binary64 with fused contraction disabled. Integrate \\(x^{-1/2}\\) and \\(\\log x\\) on \\([0,1]\\), and \\(\\sin(1000x)\\) on \\([0,1]\\). The naive method is composite midpoint with \\(2^r\\) panels, \\(r=4,\\ldots,16\\). For the endpoint cases use \\(x=t^{2}\\), giving the first transformed integrand \\(2\\), including at \\(t=0\\), and the second \\(2t \\log(t^{2})\\), extended by its limiting value zero at \\(t=0\\), and composite Simpson at the same panel counts. For the oscillatory case also use the exact reference \\((1-\\cos(1000))/1000\\) and a partition at integer multiples of \\(\\pi/1000\\). The hard budget is \\(2^{20}\\) function evaluations for the whole project; skip larger scheduled cases with \`budget_exhausted\` rather than changing the grid.

<a id="section-1276-required-outputs-and-verification"></a>
#### Required outputs and verification {#section-1278-required-outputs-and-verification}

Output derivative errors, observed local orders, evaluation counts, transformed formulas, quadrature estimates, and reference values with derivations or certified enclosures. Verify that the complex-step assumptions hold for the implemented exponential path. Record endpoint failures rather than replacing nonfinite values silently. For every integral, state whether the reported discrepancy is a proved bound or an empirical error. Repeated runs must have identical tables and evaluation counts.

<a id="section-1280-project-5-linear-solver-evidence-ledger"></a>
### Project 5 — Linear-solver evidence ledger {#section-1282-project-5-linear-solver-evidence-ledger}

At sizes \\(n \\in {16,32,64}\\), use four exact dyadic families. Let \\(T_n\\) have diagonal \\(2\\) and first off-diagonals \\(-1/4\\). Let \\(D_{ii}=2^{-floor(20i/(n-1))}\\) and use \\(D T_n D\\). Let \\(B_n\\) have diagonal \\(4\\), first off-diagonals \\(-1\\), and second off-diagonals \\(1/4\\). Let \\(U_n\\) have diagonal \\(2\\), superdiagonal \\(-1\\), and subdiagonal \\(1/8\\). Set \\(x_{*}=(1,-2,3,-4,\\ldots)^{\\mathsf T}\\) and form \\(b\\) by exact dyadic accumulation followed by one binary64 rounding. Compare binary64 Gaussian elimination with partial pivoting, weighted Jacobi with \\(\\omega=2/3\\), and CG on the three symmetric positive-definite families or restarted GMRES(20) on \\(U_n\\), always from zero and without preconditioning. Cap each iterative run at 500 iterations and 1000 matrix-vector products, for exactly 36 solver runs; crossing either ceiling is \`budget_exhausted\`.

<a id="section-1284-required-outputs-and-verification"></a>
#### Required outputs and verification {#section-1286-required-outputs-and-verification}

For every run record matrix hash, size, method, stopping rule, iterations, residual norms, forward error, a condition estimate with its method, and failure reason. Verify direct-solve residuals by recomputation in higher available precision. Check that each iterative method is used only under its hypotheses, and include a deliberately invalid method-matrix pairing as a rejected precondition test rather than a run. Fix ordering, seeds, thread count, and reduction scheme; require byte-identical numerical ledgers in two executions.

<a id="section-1288-closing-checklist"></a>
## Closing checklist {#section-1290-closing-checklist}

Every exercise above has a local solution, while every project has a finite input suite, fixed resource ceiling, required numerical artifacts, and verification obligations. When adapting any item, preserve its hypotheses: replacing a certified enclosure with a sampled plot or a deterministic reduction with a schedule-dependent one changes the claim being tested.

<a id="section-1292-source-and-verification-note"></a>
## Sources {#section-1294-source-and-verification-note}

The floating-format exercises use IEEE 754-2019 as the verified standards identity, but no clause-level locator is specified here. Each language, compiler, hardware, library, rounding-mode, and subnormal claim requires its own conformance evidence.
`;export{e as default};
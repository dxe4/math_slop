# Logic, proof, and the real numbers

Use [Introduction to Proof](#/books/introduction-to-proof) for the full preparation sequence. This is a short reminder with optional analysis previews retained below. Allow about five minutes to read, then 20–30 minutes for the four written exercises and comparison. These planning estimates exclude remedial book reading. Examples guide discovery; arguments justify general statements, and a study checkmark does not certify a proof.

## Quantifiers and dependence

“For every” is written $\forall$ and “there exists” is written $\exists$. For every real $x$ there is a $y>x$: choose $y=x+1$. There is no single $y$ greater than every real $x$, since $x=y+1$ defeats it. Order controls which choices may depend on earlier ones. Negating “every $x\in D$ satisfies $f(x)>0$” gives “some $x\in D$ satisfies $f(x)\le0$”. See [Quantifiers](../introduction-to-proof/quantifiers.md).

An implication $P\Rightarrow Q$ differs from its converse. Divisibility by four implies evenness, but two disproves the converse. The equivalent contrapositive is “if $Q$ is false, then $P$ is false”. Use [Statements and Truth Tables](../introduction-to-proof/statements-truth-tables.md) and [Contrapositive and Contradiction](../introduction-to-proof/contrapositive-contradiction.md).

## Three proof habits

For a direct proof that two odd integers have an even sum, write $a=2m+1$ and $b=2n+1$. Then $a+b=2(m+n+1)$, twice an integer. The universal claim that every positive $x$ has $x^2\ge x$ instead fails at $x=1/2$. One counterexample disproves it; one supporting example cannot prove it. See [Direct Proof and Proof by Cases](../introduction-to-proof/direct-proof-cases.md).

Induction needs a base and a general step. For $1+\cdots+n=n(n+1)/2$, the case $n=1$ holds. Assuming the formula at $n$, adding $n+1$ gives $(n+1)(n+2)/2$, its next case. Use [Induction](../introduction-to-proof/induction.md) for the complete method.

## Preparing for an epsilon argument

This optional preview illustrates quantifier order. For any $\varepsilon>0$, to make $3x+1$ lie within $\varepsilon$ of seven, use $|(3x+1)-7|=3|x-2|$. Choosing $\delta=\varepsilon/3$ makes $|x-2|<\delta$ sufficient. The output tolerance arrives first; the input tolerance may depend on it. [Quantifiers](../introduction-to-proof/quantifiers.md) explains that dependence; [Limits and Rates of Change: A First Look](../precalculus/limits-rates-preview.md) develops the nearby-value idea without requiring formal analysis.

## Why real numbers matter

For a later analysis course, an upper bound $M$ of a real set $S$ satisfies $s\le M$ for every $s\in S$. Its supremum is its least upper bound, not necessarily a member: $(0,1)$ has supremum one. Completeness asserts that every nonempty real set bounded above has a real supremum. The positive rationals with square below two have no rational supremum, showing the corresponding rational property fails. These are optional orientation facts here; their developed arguments belong to [Order and Completeness](../lucent-analysis/completeness.md) after its proof preparation.

## Exercises

1. Negate: “There exists M ∈ ℝ such that every n ≥ 1 satisfies n ≤ M”, where n ranges over integers.
2. Prove that the square of an even integer is even.
3. For ε > 0, choose δ > 0 so that |x − 4| < δ implies |(5x − 2) − 18| < ε.
4. Does [−2,3) have a largest element? Find its supremum and justify both answers.

<details>
<summary>Hints and solutions</summary>

1. Switch the quantifiers and negate the inequality: “For every real $M$, there exists an integer $n\ge1$ with $n>M$.” The possible integer witness may depend on $M$.
2. Write the even integer as $2k$ with $k\in\mathbb Z$. Its square is $4k^2=2(2k^2)$, twice an integer, hence even.
3. Take $\delta=\varepsilon/5>0$. The output distance is $|(5x-2)-18|=5|x-4|<5\delta=\varepsilon$.
4. Three is an upper bound. Every smaller candidate fails: if $M<-2$, the member negative two exceeds it; if $-2\le M<3$, the member $(M+3)/2$ exceeds $M$ and is below three. Thus the supremum is three. For any member $m$, the midpoint $(m+3)/2$ is a larger member, so there is no largest element.

</details>

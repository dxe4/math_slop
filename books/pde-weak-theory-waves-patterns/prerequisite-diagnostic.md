
# Prerequisite Diagnostic and Repair

1. On $(0,1)$, is $x^{-1/3}$ in $L^2$? Is $x^{-1/2}$? Write the integrals rather than judging the graph.
2. If $u_j\to u$ in $L^2$, bound $|\int(u_j-u)\varphi|$ for fixed $\varphi\in L^2$.
3. For smooth zero-endpoint $u,v$, integrate $-\int u''v$ by parts. What changes if $v$ does not vanish at an endpoint?
4. Explain the difference between a complete normed space and a finite-dimensional one.
5. State Riesz representation in a real Hilbert space and identify the norm of the representing functional.

For the first question, the squared powers are $x^{-2/3}$, whose integral is three, and $x^{-1}$, whose integral diverges. Thus singularity alone does not settle integrability. For the second, Cauchy–Schwarz gives the upper bound $\|u_j-u\|_2\|\varphi\|_2\to0$. For the third the result is $\int u'v'-[u'v]_0^1$; retaining or removing the boundary term must match the test space. Completeness means every norm-Cauchy sequence has a limit in the space and can hold in infinite dimensions, as in $L^2$. Riesz says a bounded real Hilbert functional is $(b,\cdot)$ for a unique $b$, with norm $\|b\|$.

Repair integration and almost-everywhere reasoning through [real analysis](#/books/proof-safe-real-analysis). Repair Hilbert terminology through [Functional Analysis](../functional-analysis/hilbert-spaces.md). Repair equation and boundary modeling through [classical PDE](../partial-differential-equations/classification-model-problems.md). These are preparation suggestions, not pass/fail scores or evidence of an independent review.


# References and Notation

## Primary reading

Joe Blitzstein and Jessica Hwang, *Introduction to Probability*, is linked in its free online form from the authors' [Harvard Stat 110 site](https://stat110.hsites.harvard.edu/). It is a principal benchmark for the breadth and introductory level of this book.

Charles M. Grinstead and J. Laurie Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), is available through Dartmouth's CHANCE Project. The inspected version is dated 4 July 2006 and identifies its own publication history and GNU Free Documentation License. Chapters 1–4 provide complementary treatments of models, counting and conditioning; Chapters 5–7 treat laws, moments and sums; Chapters 8–9 discuss large numbers and normal limits; Chapter 11 develops finite Markov chains.

These official sources were consulted on 13 November 2026. They are references for mathematical ideas and further reading. The present exposition, numerical choices, exercises and solutions are original; no external exercise set or extended passage is reproduced.

## Euler source relationships

Three existing Euler sources provide starting ideas: [Probability You Can Touch](../../articles/probability-you-can-touch.md) for Chapter 1, [Probability: Models Before Formulas](../../course-texts/atlas-probability-models.md) for Chapter 4, and [Random Walks from Coins](../../articles/random-walks-from-coins.md) for Chapter 14. Their original files, identities, hypotheses, calculations, exercises and references remain available. The new book is an introductory route rather than a deletion or silent replacement of those sources.

The continuation is [Probability: Models, Bounds, and Proofs](../probability-models-proofs/event-models-and-axioms.md). Its sigma-algebra and measure-based treatment requires additional proof and analysis preparation stated there.

## Notation and conventions

| Symbol | Meaning and qualification |
| --- | --- |
| $\Omega$ | Outcome space of the specified experiment |
| $A^c$ | Complement of an event within that space |
| $P(A\mid B)$ | $P(A\cap B)/P(B)$ when $P(B)>0$ |
| $X$ | A numerical function of an outcome |
| $p_X(x)$ | Discrete point mass $P(X=x)$ |
| $f_X(x)$ | Density height; interval probabilities are integrals |
| $F_X(x)$ | Cumulative probability $P(X\le x)$ |
| $\mathbb E X$ or $E[X]$ | Expectation, with integrability assumptions stated |
| $\operatorname{Var}(X)$ | Expected squared deviation, requiring a finite second moment for the finite formulas |
| $\operatorname{Cov}(X,Y)$ | Centred product expectation when it exists |
| $\operatorname{Geom}(p)$ | Number of trials through the first success, on $1,2,\ldots$ |
| $N(\mu,\sigma^2)$ | Normal law parameterised by mean and variance |
| $\overline X_n$ | Average of the first $n$ observations |
| $P$ in a chain calculation | Row-stochastic transition matrix, distinguished from probability by context |
| $\alpha P^n$ | Row distribution after $n$ steps from initial row law $\alpha$ |
| iid | Independent and identically distributed, two separate conditions |

A density can exceed one and still be valid; its total integral, not its maximum height, must be one. A variable with a density has zero probability at every individual point. Zero probability need not mean that a numerical value is logically impossible.

For formulas with a positive-variance standardisation, the zero-variance case is handled separately. A conditional density given a numerical value is a density construction at points with positive marginal density, not the elementary ratio conditioning on a positive-probability singleton.

Finally, independence must refer to the stated joint law. Equal marginal laws, zero covariance, stationary distributions and repeated use of the same observation do not by themselves give independent samples.

var e=`---
parent_id: book-proof-safe-real-analysis
matter_id: notation-and-proof-conventions
title: "Notation, Status Labels, and Proof Conventions"
license: CC BY-SA 4.0
---

# Notation, Status Labels, and Proof Conventions

## Stable identifiers and the revised order

The current reading order is given in the book overview. Identifiers ANA-CH01 through ANA-CH22 continue to name the original exercise families; ANA-CH23 through ANA-CH27 name the five newly commissioned families. Their numerical prefixes are identities retained across reordering, rather than a promise about current page position. Derivative orders use parentheses, as in $f^{(k)}$, to distinguish them from powers.

All new finite-dimensional derivative statements concern open subsets of real Euclidean spaces. One-sided endpoint derivatives and relative-topology statements are named explicitly where used. Riemann–Stieltjes integration in the new variation chapter uses arbitrary tagged partitions with mesh tending to zero; a convention allowing only refinements of a preselected partition is a different definition when jumps occur.

Notation is an interface, not decoration. Every symbol should make an object easier to inspect without hiding its domain, dependence, or exceptional cases. This guide records the volume-wide defaults. A chapter may introduce a local convention, but must say so before using it.

## Number systems and indexing

\\(N\\) denotes the positive integers \\(\\{1,2,3,\\ldots\\}\\) unless a formula explicitly begins at \\(0\\). \\(N_0=\\{0,1,2,\\ldots\\}\\). \\(Z\\), \\(Q\\), \\(R\\), and \\(C\\) denote the integers, rationals, reals, and complex numbers. The extended real line is \\([-\\infty,\\infty]\\); expressions such as \\(\\infty-\\infty\\), \\(0\\cdot \\infty\\), and \\(\\infty/\\infty\\) are not assigned values by ordinary extended-real arithmetic.

Indices \\(m,n,k,j\\) normally range over integers. A sequence \\((a_n)\\) means a function whose domain is an indicated tail of \\(N\\) or \\(N_0\\); changing finitely many initial terms does not change convergence. Subsequence indices are written \\(n_k\\) with \\(n_1<n_2<\\ldots\\). The expression \\(a_{n_k}\\) means the \\(k\\)th selected term, not a product of three symbols.

Intervals use standard endpoint notation: \\((a,b)\\), \\([a,b]\\), \\((a,b]\\), and \\([a,b)\\). Infinite endpoints are never included, so only parentheses occur beside \\(\\pm \\infty\\). An interval with reversed endpoints is not silently reinterpreted; when orientation matters, the text states it.

## Stable learning-item identifiers

Every core exercise has an identifier of the form \`ANA-CHnn-Ennn\`. Its prompt
and complete solution carry the same identifier, so links and review records
remain meaningful when headings or page numbers change. The chapter component
records a stable exercise family, not its current route position; the final component records the
exercise's position within that chapter.

Core projects use \`ANA-CHnn-Pnnn\`. Optional investigations use
\`ANA-CHnn-Innn\`, which keeps them visible without counting them as required
projects. An identifier refers to one learning contract and is not reused for a
different task. Subparts inherit their parent identifier unless the text gives
them separate identifiers explicitly.

## Sets and logic

\\(x\\in A\\) means that \\(x\\) is an element of \\(A\\); \\(A\\subseteq B\\) allows equality; \\(A\\subsetneq B\\) denotes proper inclusion. The empty set is \\(\\varnothing\\). Union, intersection, set difference, and complement are \\(A\\cup B\\), \\(A\\cap B\\), \\(A\\setminus B\\), and \\(A^c\\), with the ambient set for a complement stated or inferable from the immediate setup.

Indexed unions and intersections are \\(\\bigcup_i A_i\\) and \\(\\bigcap_i A_i\\) in plain source notation. “For every” and “there exists” may be written \\(\\forall\\) and \\(\\exists\\). A colon or vertical bar in set-builder notation means “such that”: \\(\\{x\\in R: x^2<2\\}\\).

The implication \\(P\\Rightarrow Q\\) does not assert its converse. \\(P\\Longleftrightarrow Q\\) means both directions. When proving an equivalence among more than two statements, the proof names the implication cycle or proves each statement from a common condition. The negation of \\(\\forall x\\in X P(x)\\) is \\(\\exists x\\in X \\neg P(x)\\); the negation of \\(\\exists x\\in X P(x)\\) is \\(\\forall x\\in X \\neg P(x)\\).

Quantifier dependence is part of meaning. In

\\(\\forall \\varepsilon>0 \\exists N\\in N \\forall n\\ge N: |a_n-L|<\\varepsilon\\),

\\(N\\) may depend on \\(\\varepsilon\\); it may not depend on the later arbitrary \\(n\\). Phrases such as “choose uniformly” mean that one choice works across the stated family of points, indices, or functions.

## Functions and restrictions

A function declaration \\(f:X\\to Y\\) names a domain \\(X\\) and codomain \\(Y\\). Its image is \\(f(X)\\) or, for \\(A\\subseteq X\\), \\(f(A)\\). The preimage of \\(B\\subseteq Y\\) is \\(f^{-1}(B)\\); this notation does not require \\(f\\) to be invertible. An inverse function is used only after a suitable bijective domain and codomain have been fixed.

The restriction of \\(f\\) to \\(A\\) is \\(f|_A\\). Composition is \\((f\\circ g)(x)=f(g(x))\\), with domain restricted to inputs for which the inner output belongs to the outer domain. Identity functions may be written \\(id_X\\).

Indicator functions are \\(1_A\\): they equal \\(1\\) on \\(A\\) and \\(0\\) off \\(A\\). The symbol is a function and must have an ambient domain when that domain affects integration or convergence.

For a real-valued function, \\(f^+=\\max(f,0)\\) and \\(f^-=\\max(-f,0)\\), so \\(f=f^+-f^-\\) and \\(|f|=f^++f^-\\). This superscript notation does not mean a power.

## Distance, neighborhoods, and topology

A metric space is \\((X,d)\\). The open ball of radius \\(r>0\\) about \\(x\\) is \\(B_r(x)=\\{y\\in X:d(x,y)<r\\}\\). On \\(R\\) with the usual metric, \\(B_r(x)=(x-r,x+r)\\). Closure, interior, boundary, and complement are \\(\\overline{A}\\), \\(\\operatorname{int}(A)\\), \\(\\partial A\\), and \\(A^c\\) in prose-friendly source notation.

Topology is always relative to an ambient space. A subset may be open in itself without being open in a larger space. “Compact” means open-cover compact unless another characterization is explicitly being proved equivalent. “Sequentially compact” means every sequence has a convergent subsequence whose limit belongs to the space. In metric spaces these notions agree; the text does not export that equivalence to arbitrary topological spaces without comment.

A set is **complete** when every Cauchy sequence in its induced metric converges to a point of the set. It is **closed** relative to a containing metric space when it contains limits of convergent sequences from the set. Closedness and completeness coincide for a subset of a complete metric space, not in every ambient setting.

## Limits and asymptotic language

Sequence convergence is \\(a_n\\to L\\). Function limits are written \\(\\lim_{x\\to a} f(x)=L\\), with one-sided or extended limits labelled. Pointwise convergence of functions is \\(f_n(x)\\to f(x)\\) for every stated \\(x\\). Uniform convergence is \\(\\lVert f_n-f\\rVert_\\infty\\to 0\\) when the supremum norm is defined, or is written with its full \\(\\forall \\varepsilon\\exists N\\forall n\\forall x\\) statement.

\\(\\limsup a_n\\) and \\(\\liminf a_n\\) describe persistent tail bounds, not necessarily subsequential limits until the relevant theorem is invoked. For nonnegative quantities, \\(u_n=O(v_n)\\) means that \\(u_n\\le Cv_n\\) eventually for some fixed \\(C\\); \\(u_n=o(v_n)\\) means \\(u_n/v_n\\to 0\\) where the quotient is defined. Constants implicit in asymptotic notation must not depend on variables over which uniformity is claimed.

An infinite series \\(\\sum a_n\\) means the limit of its partial sums. Algebraic rearrangement is licensed by finite identities first; passage to infinite sums requires convergence hypotheses. Absolute convergence and conditional convergence are named separately.

## Derivatives and integrals

\\(f'(a)\\) is the derivative at \\(a\\) defined by a limit of difference quotients. Higher derivatives are \\(f^{k}\\) when no confusion with powers is possible. The differential notation \\(df/dx\\) is used as derivative notation, not as permission to manipulate infinitesimals without a theorem. Mean-value and Taylor formulas state the interval, differentiability order, and remainder form they require.

\\(\\int _a^b f(x) dx\\) denotes a Riemann integral in the Riemann chapters and a Lebesgue integral only where the measure-theoretic context says so. To prevent ambiguity later, a Lebesgue integral may be written \\(\\int _E f d\\mu\\). An integral without displayed bounds is not silently assumed indefinite; antiderivatives are named as functions.

Improper integrals are limits of proper integrals and are marked as improper. Changing the order of integration, differentiating under an integral sign, or exchanging a limit and integral always requires a stated theorem or a direct uniform estimate.

## Measure and almost-everywhere conventions

A measure space is \\((X,M,\\mu)\\), where \\(M\\) is a sigma-algebra and \\(\\mu\\) is a nonnegative countably additive measure. Lebesgue measure on \\(R\\) is usually \\(m\\). A property holds **almost everywhere**, abbreviated a.e., when its failure set is measurable and has measure zero.

Measurable functions that agree almost everywhere represent the same element of \\(L^p\\). Consequently, \\(\\lVert f\\rVert_p=0\\) implies \\(f=0\\) almost everywhere, not necessarily at every point for a chosen representative. Lowercase \\(l^p\\) may be used for sequence spaces; uppercase \\(L^p\\) is used for function equivalence classes over a stated measure space.

For \\(1\\le p<\\infty\\), \\(\\lVert f\\rVert_p=(\\int |f|^p d\\mu)^{1/p}\\). The essential supremum defines \\(\\lVert f\\rVert_\\infty\\); isolated changes on null sets do not alter it. Conjugate exponents satisfy \\(1/p+1/q=1\\), including the endpoint convention \\(p=1\\), \\(q=\\infty\\).

Statements involving monotone, Fatou, or dominated convergence name measurability and sign/integrability conditions. “Dominated” means there is one integrable envelope independent of the sequence index.

## Suprema, maxima, and empty sets

\\(\\sup A\\) is the least upper bound and need not belong to \\(A\\); \\(\\max A\\), when it exists, is a member. Similarly, \\(\\inf A\\) need not be a minimum. Suprema of function values are taken over a stated domain. The manuscript avoids assigning ordinary real values to \\(\\sup \\varnothing\\) or \\(\\inf \\varnothing\\); an extended-real convention, if needed, is declared locally.

When the norm \\(\\lVert f\\rVert_\\infty=\\sup_x |f(x)|\\) is used, the domain follows the function-space declaration. In measure theory the \\(L^\\infty\\) norm is an essential supremum instead; the distinction is never inferred from typography alone.

## Proof conventions

A proof begins from declared hypotheses and ends when the promised conclusion has been obtained for arbitrary objects introduced by the statement. “Without loss of generality” is used only when a symmetry or exhaustive relabelling is identified. “Clearly” and “obviously” are avoided where they would conceal a theorem choice, a domain check, or a nontrivial inequality.

Existence and uniqueness are separate tasks. To define an object by choosing a representative, the proof must show independence of the choice. To divide, take roots, apply logarithms, invert a function, or interchange limiting operations, the line records the condition licensing that move.

Forward references may motivate but do not serve as premises. When a later theorem provides a shorter proof, the text labels it as an alternate proof rather than creating a circular dependency. Results from exercises are not silently assumed in the main exposition unless the exercise is explicitly promoted and proved.

Proofs about epsilon and delta use positive tolerances. Replacing \\(\\varepsilon\\) by a smaller convenient value is legitimate when the relationship is stated, for example \\(\\eta=\\min(1,\\varepsilon/(3C))\\). The proof then verifies the requested \\(\\varepsilon\\), not merely the auxiliary \\(\\eta\\).

## Equality and approximation

The equality sign is reserved for equality in the active mathematical structure. \\(\\approx\\) denotes approximation and requires either a displayed error, a stated asymptotic regime, or an explicitly exploratory context. Decimal output is not silently exact. A numerical example records enough precision to support its conclusion and distinguishes rounding error from truncation, discretization, and model error.

An identity holds throughout its stated domain; an equation may hold only for selected unknowns. Transforming an equation can lose or introduce solutions when multiplying by zero, squaring, applying a noninjective function, or extending a domain. Final candidates are checked in the original statement.

## Ambiguity policy

If two standard conventions differ, the book chooses one and names it. If the distinction affects a theorem—whether natural numbers include zero, whether compactness is relative, whether an integral is Riemann or Lebesgue, whether \\(L^\\infty\\) uses a supremum or essential supremum—the convention is restated locally. A reader should never have to infer a material hypothesis from font, colour, or authorial habit.

This policy is itself subject to audit. A notation used before definition, an unstated domain change, or a symbol with two live meanings is a manuscript issue even when an experienced reader can guess the intent.
`;export{e as default};
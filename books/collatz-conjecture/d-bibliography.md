# Primary-source bibliography {#sec-bibliography}

## How sources are classified

This bibliography distinguishes journal publications and books from preprints.
Peer review does not make every interpretation correct, but it is a materially
different status from public posting. A preprint may contain valuable mathematics
and useful algorithms; it is cited with its status attached.

## Foundational and survey sources

Lagarias's 1985 survey remains a foundational map of the problem, its
generalizations, heuristics, and early results ([Lagarias 1985](#ref-lagarias1985)). The edited AMS
volume brings together major historical and research perspectives
([Lagarias 2010](#ref-lagarias2010)). Wirsching's monograph develops the associated dynamical system
in depth ([Wirsching 1998](#ref-wirsching1998)). These are established scholarly sources, not claims
that the conjecture was resolved.

Lagarias's two annotated bibliographies catalogue the specialized literature
from 1963 through 2009 and explicitly preserve map conventions, publication
status, and the open status of the conjecture
([Lagarias 2003](#ref-lagarias2003bibliography); [Lagarias 2006](#ref-lagarias2006bibliography)). They are used here as
coverage maps rather than as substitutes for the primary paper behind a named
theorem.

The exact cycle clinic in Chapter 8 derives its integrality implication
directly. Its rational closure formula is classical ([Lagarias 1990](#ref-lagarias1990cycles))
and is stated explicitly in the research preprint ([Brent 2002](#ref-brent2002rational),
Section 2). A return after the stated word length need not have that least
period. Chapter 24's category/measure contrast uses Baire's theorem as stated
in ([Melleray 2016](#ref-melleray2016baire), Theorem 2.1) and the authored Haar-measure treatment
in ([Bell n.d.](#ref-bell2016padic), Section 3, Lemma 5).

Terras's peer-reviewed 1976 article proves a density result for finite stopping
time ([Terras 1976](#ref-terras1976)). Everett independently gives the closely related
almost-everywhere descent conclusion in 1977 ([Everett 1977](#ref-everett1977)). Their theorems
should not be summarized as almost-everywhere convergence to 1.

## Rigorous partial results

Krasikov and Lagarias prove a computer-assisted lower bound on the number of
integers below $x$ whose forward orbit contains 1 ([Krasikov and Lagarias 2003](#ref-krasikov2003)). This is a
peer-reviewed asymptotic basin-count result.

Tao's article is peer-reviewed and was published in *Forum of Mathematics, Pi*
in 2022 ([Tao 2022](#ref-tao2022)). It proves that almost all orbits attain almost bounded
values in logarithmic density. It does not prove that almost every orbit reaches
1.

## Exhaustive computation

Barina's article is a peer-reviewed journal publication. It was accepted on
21 April 2025 and reports completed verification for every $n<2^{71}$
([Barina 2025](#ref-barina2025)). The DOI is
`10.1007/s11227-025-07337-0`. The strict endpoint and the finite
scope belong in every citation of the record.

Angeltveit's arXiv:2602.10466 is a 2026 **preprint**, not a completed proof or a
new completed frontier ([Angeltveit 2026](#ref-angel2026)). It describes an improved finite-range
checking algorithm, projects feasible higher ranges, and explicitly states that
a proof appears out of reach with current techniques.

## Generalization and computability

Conway's conference paper introduces generalized unpredictable iterations
([Conway 1972](#ref-conway1972)). Kurtz and Simon's peer-reviewed conference contribution proves a
natural generalized Collatz problem recursively undecidable
([Kurtz and Simon 2007](#ref-kurtzsimon2007)). Neither result establishes undecidability or independence of
the single classical $3n+1$ statement.

## Ergodic, graph, statistical, and logical tools

The symbolic-dynamics and recurrence material in Chapter 28 can be continued in
[Walters](#ref-walters1982) (1982). Markov chains, mixing, conductance, and spectral methods for finite
state spaces are developed in [Levin et al.](#ref-levinpereswilmer2017) (2017). Neither reference turns a
finite or 2-adic averaged theorem into a statement about every positive Collatz
orbit; the transfer obligation remains problem-specific.

For bootstrap reasoning and its model assumptions, see [Efron and Tibshirani](#ref-efrontibshirani1993) (1993).
Chapter 30 uses resampling as a way to expose sampling assumptions, not as a
measure of whether a universal conjecture is true. Computability, reductions,
and the distinction between recognizability and decidability can be deepened in
[Sipser](#ref-sipser2013) (2013) before returning to the specialized generalized-map results of
Conway and Kurtz–Simon.

## Combinatorial, information, and validated-computation tools

Generating functions, regular languages, singularity analysis, and weighted
counting are developed comprehensively in [Flajolet and Sedgewick](#ref-flajoletsedgewick2009) (2009). Chapter 40
uses only finite recurrences and rational generating functions from that wider
framework.

Finite Shannon entropy, mutual information, relative entropy, coding, and data
processing are standard material in [Cover and Thomas](#ref-coverthomas2006) (2006). Martingales and stopping
theorems are developed in [Williams](#ref-williams1991) (1991). Coupling for finite Markov chains is
treated in [Levin et al.](#ref-levinpereswilmer2017) (2017), while concentration methods appear in
[Dubhashi and Panconesi](#ref-dubhashipanconesi2009) (2009). These probability references support model theorems;
they do not supply a Collatz arithmetic transfer automatically.

Chapter 43 uses the induced shortest-path metric and edge-coupling theorem
from ([Levin et al. 2017](#ref-levinpereswilmer2017), sec. 14.2, Theorem 14.6). Its finite gluing
argument, four-state counterexample to omitting that metric hypothesis,
random-coordinate refresh calculation, and changed coordinate-cover task are
given explicitly. The coupling's noncoalescence probability is distinguished
from the total variation distance of its marginal laws.

Presburger arithmetic and its algorithmic boundaries are surveyed in
[Haase](#ref-haase2018) (2018). Integer optimization and exact formulation principles are developed
in [Schrijver](#ref-schrijver1986) (1986). Chapter 44 restricts their use to declared bounded traces and
checkable semilinear descriptions.

Interval inclusion, outward rounding, and validated elementary functions are
developed in [Moore et al.](#ref-moorekearfottcloud2009) (2009). Floating-point error and stability are
treated in [Higham](#ref-higham2002) (2002). Chapter 45 prefers exact integer comparisons whenever
possible and uses intervals only with explicit remainder or rounding
certificates.

## Versioned status note

The theorem-status audit in this edition is dated **10 August 2026**. New
computations, accepted papers, or counterexamples after that date require a new
audit. Unreviewed proof claims are intentionally not listed or linked: visibility
is not validation, and amplifying a claim can be mistaken for endorsement.

## Complete cited references

<div id="refs" class="references">

<a id="ref-angel2026"></a>Angeltveit, Vigleik. 2026. *An Improved Algorithm for Checking the Collatz Conjecture for All n < 2^N*.

<a id="ref-barina2025"></a>Barina, David. 2025. “Improved Verification Limit for the Convergence of the Collatz Conjecture.” *The Journal of Supercomputing* 81: 810. doi:10.1007/s11227-025-07337-0.

<a id="ref-bell2016padic"></a>Bell, Jordan. n.d. *Harmonic Analysis on the p-adic Numbers*. <https://jordanbell.info/LaTeX/mathematics/padicharmonic/>

<a id="ref-brent2002rational"></a>Brent, Barry. 2002. *3x+1 Dynamics on Rationals with Fixed Denominator*. <https://arxiv.org/abs/math/0204170>

<a id="ref-conway1972"></a>Conway, John H.. 1972. “Unpredictable Iterations.” *Proceedings of the 1972 Number Theory Conference*: 49–52.

<a id="ref-coverthomas2006"></a>Cover, Thomas M. and Joy A. Thomas. 2006. *Elements of Information Theory*. Wiley. doi:10.1002/047174882X.

<a id="ref-dasdangupta1998"></a>Dasdan, Ali and Rajesh K. Gupta. 1998. “Faster Maximum and Minimum Mean Cycle Algorithms for System Performance Analysis.” *IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems* 17(10): 889–899. <https://mesl.ucsd.edu/pubs/dasdan-tcad98.pdf>

<a id="ref-dubhashipanconesi2009"></a>Dubhashi, Devdatt P. and Alessandro Panconesi. 2009. *Concentration of Measure for the Analysis of Randomized Algorithms*. Cambridge University Press. doi:10.1017/CBO9780511581274.

<a id="ref-efrontibshirani1993"></a>Efron, Bradley and Robert J. Tibshirani. 1993. *An Introduction to the Bootstrap*. Chapman and Hall.

<a id="ref-everett1977"></a>Everett, C. J.. 1977. “Iteration of the Number-Theoretic Function f(2n)=n, f(2n+1)=3n+2.” *Advances in Mathematics* 25(1): 42–45. doi:10.1016/0001-8708(77)90087-1.

<a id="ref-flajoletsedgewick2009"></a>Flajolet, Philippe and Robert Sedgewick. 2009. *Analytic Combinatorics*. Cambridge University Press. doi:10.1017/CBO9780511801655.

<a id="ref-haase2018"></a>Haase, Christoph. 2018. “A Survival Guide to Presburger Arithmetic.” *ACM SIGLOG News* 5(3): 67–82. doi:10.1145/3242953.3242964.

<a id="ref-higham2002"></a>Higham, Nicholas J.. 2002. *Accuracy and Stability of Numerical Algorithms*. Society for Industrial and Applied Mathematics. doi:10.1137/1.9780898718027.

<a id="ref-jenkinson2019"></a>Jenkinson, Oliver. 2019. “Ergodic Optimization in Dynamical Systems.” *Ergodic Theory and Dynamical Systems* 39(10): 2593–2618. <https://arxiv.org/abs/1712.02307>

<a id="ref-karp1978"></a>Karp, Richard M.. 1978. “A Characterization of the Minimum Cycle Mean in a Digraph.” *Discrete Mathematics* 23(3): 309–311. <https://www2.eecs.berkeley.edu/Pubs/TechRpts/1977/Archive/ERL-m-77-47.pdf>

<a id="ref-krasikov2003"></a>Krasikov, Ilia and Jeffrey C. Lagarias. 2003. “Bounds for the 3x+1 Problem Using Difference Inequalities.” *Acta Arithmetica* 109(3): 237–258. doi:10.4064/aa109-3-4.

<a id="ref-kurtzsimon2007"></a>Kurtz, Stuart A. and Janos Simon. 2007. “The Undecidability of the Generalized Collatz Problem.” *Theory and Applications of Models of Computation* 4484: 542–553. Springer. doi:10.1007/978-3-540-72504-6_49.

<a id="ref-lagarias1985"></a>Lagarias, Jeffrey C.. 1985. “The 3x+1 Problem and Its Generalizations.” *The American Mathematical Monthly* 92(1): 3–23. doi:10.2307/2322189.

<a id="ref-lagarias1990cycles"></a>Lagarias, Jeffrey C.. 1990. “The Set of Rational Cycles for the 3x+1 Problem.” *Acta Arithmetica* 56(1): 33–53. doi:10.4064/aa-56-1-33-53.

<a id="ref-lagarias2003bibliography"></a>Lagarias, Jeffrey C.. 2003. *The 3x+1 Problem: An Annotated Bibliography (1963–1999)*.

<a id="ref-lagarias2006bibliography"></a>Lagarias, Jeffrey C.. 2006. *The 3x+1 Problem: An Annotated Bibliography, II (2000–2009)*.

<a id="ref-lagarias2010"></a>Lagarias, Jeffrey C.. 2010. *The Ultimate Challenge: The 3x+1 Problem*. American Mathematical Society. doi:10.1090/mbk/078.

<a id="ref-levinpereswilmer2017"></a>Levin, David A., Yuval Peres, and Elizabeth L. Wilmer. 2017. *Markov Chains and Mixing Times*. American Mathematical Society.

<a id="ref-melleray2016baire"></a>Melleray, Julien. 2016. “Polish Groups and Baire Category Methods.” *Confluentes Mathematici* 8(1): 89–164. <https://www.numdam.org/item/10.5802/cml.28.pdf>

<a id="ref-moorekearfottcloud2009"></a>Moore, Ramon E., R. Baker Kearfott, and Michael J. Cloud. 2009. *Introduction to Interval Analysis*. Society for Industrial and Applied Mathematics. doi:10.1137/1.9780898717716.

<a id="ref-schrijver1986"></a>Schrijver, Alexander. 1986. *Theory of Linear and Integer Programming*. Wiley.

<a id="ref-sipser2013"></a>Sipser, Michael. 2013. *Introduction to the Theory of Computation*. Cengage Learning.

<a id="ref-tao2022"></a>Tao, Terence. 2022. “Almost All Orbits of the Collatz Map Attain Almost Bounded Values.” *Forum of Mathematics, Pi* 10: e12. doi:10.1017/fmp.2022.8.

<a id="ref-terras1976"></a>Terras, Riho. 1976. “A Stopping Time Problem on the Positive Integers.” *Acta Arithmetica* 30(3): 241–252. doi:10.4064/aa-30-3-241-252.

<a id="ref-walters1982"></a>Walters, Peter. 1982. *An Introduction to Ergodic Theory*. Springer.

<a id="ref-williams1991"></a>Williams, David. 1991. *Probability with Martingales*. Cambridge University Press.

<a id="ref-wirsching1998"></a>Wirsching, Günther J.. 1998. *The Dynamical System Generated by the 3n+1 Function*. Springer. doi:10.1007/BFb0095985.

</div>

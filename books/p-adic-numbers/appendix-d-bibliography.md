# Bibliography and reading paths

The exposition in this book is original, while the subject has a rich literature.
The following paths indicate where to deepen particular themes.

## First and second courses

For an approachable first encounter with computations, topology, and Hensel's
lemma, see [Gouvêa](#ref-gouvea2020) (2020) and [Katok](#ref-katok2007) (2007). The concise classic [Cassels](#ref-cassels1986) (1986) develops
local fields with number-theoretic purpose. Readers wanting many explicit
problems can pair these with the algorithms in Chapter 15.

For a freely available benchmark, [Poonen](#ref-poonen2009notes) (2009) develops absolute values,
completion, inverse limits, $p$-adic expansions, Hensel lifting, multiplicative
structure, and square classes in a compact sequence. The later
[Sutherland](#ref-mit18782-2023) (2023) schedule continues through Hilbert symbols and
Hasse–Minkowski, while [Sutherland](#ref-sutherland18785-2016) (2016) adds extensions of complete
discrete valuation rings, differents, ramification, Haar measure, adeles,
ideles, and local class field theory.

Chapter 9's singular-lifting investigation uses the finite inverse-system
argument from [Poonen](#ref-poonen2009notes) (2009), Section 11, Lemma 11.1 and Proposition 11.2.
Its compatibility proof does not assume surjective reduction maps. Keith
Conrad's author-hosted [*Hensel's Lemma*](https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf),
Sections 1–2, provides another treatment of the Taylor identity, digit
construction, and the distinction between simple and singular reductions.
The developed square-root trees, finite-lifetime calculation, and delayed
three-polynomial task in this book are derived explicitly.

### Strong Hensel and root accuracy {#sec-nonunit-hensel-reading}

Chapter 9's optional nonunit-Newton clinic uses Keith Conrad's
[*Hensel's Lemma*](https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf#page=6),
Theorem 4.1, printed page 6. Besides its strict inequality and uniqueness
ball, the theorem gives the exact distance
$|\alpha-a|_p=|f(a)/f'(a)|_p$. The clinic derives its sharper quadratic
recurrences and source-data cap directly by factorization.

Andrew Sutherland's [MIT 18.785 Lecture 9 (2019), Example 9.18](https://math.mit.edu/classes/18.785/2019fa/LectureNotes9.pdf#page=6)
already uses $\sqrt{17}$ with start $1$ as an existence example.
The clinic's purpose is to distinguish residual digits, selected-root
digits, and digits supported by uncertain coefficient data. Its exact
fraction ledger and finite certificate need no external mathematical package.

## Analysis and dynamics

<!-- primitive-boundary-reading:start -->
### Formal primitives and boundary convergence {#sec-primitive-boundary-reading}

Chapter 8's lacunary pair is a special case of Kiran S. Kedlaya's
author-hosted [*Weil cohomology in practice*, Example 13.1.4](https://kskedlaya.org/weil-cohom/Weil-cohom-15.html).
The discussion preceding Definition 13.1.5 distinguishes preservation of
the open convergence radius from possible loss of convergence on its
boundary. The elementary coefficient proof and changed task in this book
make that distinction without using the surrounding cohomology theory.

<!-- primitive-boundary-reading:end -->
The functional-analytic development in [Schikhof](#ref-schikhof1984) (1984) treats Banach spaces,
integration, and differentiation over ultrametric fields. For *p*-adic dynamical
systems, finite residue shadows, and ergodic ideas, see [Anashin and Khrennikov](#ref-anashin2009) (2009). Berkovich's
construction in [Berkovich](#ref-berkovich1990) (1990) supplies the richer analytic spaces mentioned in
the final chapter.

For Mahler expansions, analytic groups, and a broad second course, see
[Robert](#ref-robert2000) (2000) and [Koblitz](#ref-koblitz1984) (1984). The systematic affinoid approach is developed in
[Bosch](#ref-bosch2014) (2014) and [Bosch et al.](#ref-bgr1984) (1984), while [Baker and Rumely](#ref-bakerrumely2010) (2010) connects Berkovich potential
theory with dynamics.

## Local fields and arithmetic geometry

The standard graduate reference [Serre](#ref-serre1979) (1979) develops valuations, ramification,
different and discriminant, and local class field theory. The global placement
of completions, adeles, and number fields is developed in [Neukirch](#ref-neukirch1999) (1999). For
elliptic curves, local descent, and Selmer groups, [Silverman](#ref-silverman2009) (2009) is a natural
next step. The adelic and automorphic direction requires additional harmonic
analysis and representation theory.

Tate's thesis [Tate](#ref-tate1967) (1967) is the source of the local Fourier and zeta-integral
framework in Chapter 22. For the period-ring and comparison-theorem landscape,
[Brinon and Conrad](#ref-brinonconrad2009) (2009) gives a rigorous graduate-level route after local fields and
algebraic geometry.

The course route [Li-Huerta](#ref-mitfourier2020) (2020) explicitly sequences topological groups,
valued fields, Haar measure, Pontryagin duality, adeles and ideles, strong
approximation, adelic Poisson summation, global zeta integrals, and epsilon
factors. Chapter 22 now reaches the additive-duality and Poisson-summation
connection while keeping the global functional equation theorem-scoped.

## Computational precision {#sec-padic-precision-reading}

Chapter 39's polynomial clinic uses exact expansion to allocate input and
coefficient digits. For a broader mathematical framework, Xavier Caruso's
author-hosted [*Computations with p-adic numbers*](https://xavier.caruso.ovh/papers/publis/course-padic.pdf),
Section 3.2.1, printed pages 54–55, explains backward precision planning.
The precision lemma in Section 3.1.4 has hypotheses on the differential and
input uncertainty; a first-order expression alone is not a general certificate.

The official [SageMath documentation for lattice precision](https://doc.sagemath.org/html/en/reference/padics/sage/rings/padics/factory.html#sage.rings.padics.factory.ZpLC)
demonstrates dependent intermediate values whose joint information survives
better than separate displayed balls suggest. These references provide
context; the book's finite polynomial verifier uses standalone integer
arithmetic and does not require SageMath.

## Modern local arithmetic

For cyclotomic towers, $p$-adic measures, and the classical main conjecture,
[Washington](#ref-washington1997) (1997) is the standard continuation after algebraic number theory.
[Neukirch et al.](#ref-neukirchschmidtwingberg2008) (2008) develops profinite cohomology and global Galois
groups at a substantially more advanced level. Local reciprocity and
ramification should first be consolidated in [Serre](#ref-serre1979) (1979) before either route.
For a detailed freely available continuation through Lubin–Tate extensions,
group cohomology, Brauer groups, and global reciprocity, see [Milne](#ref-milnecft2020) (2020).

For arithmetic differential equations and Frobenius modules over the Robba
ring, [Kedlaya](#ref-kedlaya2010) (2010) gives a systematic graduate treatment. Modular forms and
Coleman integration additionally require algebraic curves and rigid geometry;
the chapters here provide a map of the ideas, not a replacement for those
prerequisites.

Perfectoid spaces originate in [Scholze](#ref-scholze2012) (2012). That paper assumes extensive
algebraic and adic geometry; readers should approach it after [Bosch](#ref-bosch2014) (2014) and a
course in schemes and étale cohomology. For period rings and comparison
theorems, [Brinon and Conrad](#ref-brinonconrad2009) (2009) remains the most direct bridge from local-field and
Galois-representation foundations.

## Buildings, representations, cohomology, and definability

For the lattice tree, group action, and quotient geometry of Chapter 40, see
[Serre](#ref-serre1980trees) (1980). The smooth-representation route through spherical Hecke
algebras, principal series, and local Langlands can continue with [Bump](#ref-bump1997) (1997) and
[Bushnell and Henniart](#ref-bushnellhenniart2006) (2006). These references assume more harmonic analysis and
representation theory than Chapter 41, which deliberately derives the rank-one
tree recurrence first.

The scheme-theoretic construction of étale cohomology is developed in
[Milne](#ref-milne1980) (1980). Chapter 42 is a bridge to that theory, not a replacement for its
derived functors, base-change theorems, and duality machinery.

For polynomial local zeta functions and resolution-based rationality, continue
with [Igusa](#ref-igusa2000) (2000). The local-height route from divisors and Coleman integration is
represented by [Coleman and Gross](#ref-colemangross1989) (1989). Both subjects require every measure,
logarithm, and normalization convention to remain visible.

Macintyre's quantifier-elimination theorem is [Macintyre](#ref-macintyre1976) (1976), while
[Denef](#ref-denef1986) (1986) develops $p$-adic cell decomposition. These sources make precise the
language dependence and uniform rationality boundaries mapped in Chapter 45.

## Suggested routes

- **One-semester introduction:** Chapters 1–9, then selected material from
  Chapters 10, 11, and 14; use Appendix C weekly.
- **Local algebra:** Chapters 1–6, 9, 10, and 12, followed by Serre.
- **Analysis and dynamics:** Chapters 3–8, 11, and 13, followed by Schikhof and
  Anashin–Khrennikov.
- **Arithmetic geometry:** Chapters 2, 9, 10, 12, and 14, followed by Neukirch
  and Silverman.
- **Computational seminar:** Chapters 5, 6, 9, 13, and 15, with one reproducible
  project per participant.
- **Advanced local analysis:** Chapters 7–8, 11, and 16–23, followed by
  Robert, Bosch, and Baker–Rumely.
- **Ramification and periods:** Chapters 12, 14, and 19–24, followed by Serre,
  Tate, Silverman, and Brinon–Conrad.
- **Local reciprocity and towers:** Chapters 12, 18–20, and 25–31, followed by
  Serre and Washington.
- **Perfectoid and Hodge route:** Chapters 16, 21, 23–26, and 32–33, followed
  by Bosch, Scholze, and Brinon–Conrad; add schemes and étale cohomology before
  attempting the original comparison proofs.
- **Buildings and smooth representations:** Chapters 11, 22–23, 27, and
  40–41, followed by Serre, Bump, and Bushnell–Henniart.
- **Étale and arithmetic geometry:** Chapters 24, 26, 33, 35–36, and 42–44,
  followed by Milne and Coleman–Gross.
- **Local zeta and definability:** Chapters 9, 11, 19, 39, 43, and 45, followed
  by Igusa, Macintyre, and Denef.

## References

<div id="refs" class="references">

<a id="ref-anashin2009"></a>Vladimir Anashin and Andrei Khrennikov. 2009. *Applied Algebraic Dynamics*. De Gruyter.

<a id="ref-bakerrumely2010"></a>Matthew Baker and Robert Rumely. 2010. *Potential Theory and Dynamics on the Berkovich Projective Line*. American Mathematical Society.

<a id="ref-berkovich1990"></a>Vladimir G. Berkovich. 1990. *Spectral Theory and Analytic Geometry over Non-Archimedean Fields*. American Mathematical Society.

<a id="ref-bosch2014"></a>Siegfried Bosch. 2014. *Lectures on Formal and Rigid Geometry*. Springer.

<a id="ref-bgr1984"></a>Siegfried Bosch, Ulrich Güntzer, and Reinhold Remmert. 1984. *Non-Archimedean Analysis*. Springer.

<a id="ref-brinonconrad2009"></a>Olivier Brinon and Brian Conrad. 2009. *CMI Summer School Notes on p-adic Hodge Theory*.

<a id="ref-bump1997"></a>Daniel Bump. 1997. *Automorphic Forms and Representations*. Cambridge University Press.

<a id="ref-bushnellhenniart2006"></a>Colin J. Bushnell and Guy Henniart. 2006. *The Local Langlands Conjecture for GL(2)*. Springer.

<a id="ref-cassels1986"></a>J. W. S. Cassels. 1986. *Local Fields*. Cambridge University Press.

<a id="ref-colemangross1989"></a>Robert F. Coleman and Benedict H. Gross. 1989. “p-adic Heights on Curves.” *Algebraic Number Theory*: 73–81. Academic Press.

<a id="ref-denef1986"></a>Jan Denef. 1986. “p-adic Semi-algebraic Sets and Cell Decomposition.” *Journal für die reine und angewandte Mathematik* 369: 154–166.

<a id="ref-gouvea2020"></a>Fernando Q. Gouvêa. 2020. *p-adic Numbers: An Introduction*. Springer.

<a id="ref-igusa2000"></a>Jun-Ichi Igusa. 2000. *An Introduction to the Theory of Local Zeta Functions*. American Mathematical Society.

<a id="ref-katok2007"></a>Svetlana Katok. 2007. *p-adic Analysis Compared with Real*. American Mathematical Society.

<a id="ref-kedlaya2010"></a>Kiran S. Kedlaya. 2010. *p-adic Differential Equations*. Cambridge University Press.

<a id="ref-koblitz1984"></a>Neal Koblitz. 1984. *p-adic Numbers, p-adic Analysis, and Zeta-Functions*. Springer.

<a id="ref-mitfourier2020"></a>Siyan Daniel Li-Huerta. 2020. *Fourier Analysis on Number Fields*. Harvard Math 99r course materials hosted by MIT. <https://math.mit.edu/~sdlh/math99r_f20/>

<a id="ref-macintyre1976"></a>Angus Macintyre. 1976. “On Definable Subsets of p-adic Fields.” *Journal of Symbolic Logic* 41(3): 605–610.

<a id="ref-milne1980"></a>James S. Milne. 1980. *Etale Cohomology*. Princeton University Press.

<a id="ref-milnecft2020"></a>James S. Milne. 2020. *Class Field Theory*. Course notes, version 4.03. <https://www.jmilne.org/math/CourseNotes/cft.html>

<a id="ref-neukirch1999"></a>Jürgen Neukirch. 1999. *Algebraic Number Theory*. Springer.

<a id="ref-neukirchschmidtwingberg2008"></a>Jürgen Neukirch, Alexander Schmidt, and Kay Wingberg. 2008. *Cohomology of Number Fields*. Springer.

<a id="ref-poonen2009notes"></a>Bjorn Poonen. 2009. *Introduction to Arithmetic Geometry: Notes from 18.782*. Massachusetts Institute of Technology lecture notes. <https://math.mit.edu/~poonen/782/782notes.pdf>

<a id="ref-robert2000"></a>Alain M. Robert. 2000. *A Course in p-adic Analysis*. Springer.

<a id="ref-schikhof1984"></a>W. H. Schikhof. 1984. *Ultrametric Calculus*. Cambridge University Press.

<a id="ref-scholze2012"></a>Peter Scholze. 2012. “Perfectoid Spaces.” *Publications Mathématiques de l'IHÉS* 116: 245–313.

<a id="ref-serre1979"></a>Jean-Pierre Serre. 1979. *Local Fields*. Springer.

<a id="ref-serre1980trees"></a>Jean-Pierre Serre. 1980. *Trees*. Springer.

<a id="ref-silverman2009"></a>Joseph H. Silverman. 2009. *The Arithmetic of Elliptic Curves*. Springer.

<a id="ref-sutherland18785-2016"></a>Andrew V. Sutherland. 2016. *18.785 Number Theory I: Lecture Notes*. Massachusetts Institute of Technology. <https://math.mit.edu/classes/18.785/2016fa/lectures.html>

<a id="ref-mit18782-2023"></a>Andrew V. Sutherland. 2023. *18.782 Introduction to Arithmetic Geometry: Lecture Schedule and Notes*. Massachusetts Institute of Technology. <https://math.mit.edu/classes/18.782/2023sp/lectures.html>

<a id="ref-tate1967"></a>John Tate. 1967. “Fourier Analysis in Number Fields and Hecke's Zeta-Functions.” *Algebraic Number Theory*. Academic Press.

<a id="ref-washington1997"></a>Lawrence C. Washington. 1997. *Introduction to Cyclotomic Fields*. Springer.

</div>

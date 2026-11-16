# Lift, return, choose a root

Research and instructor note, 20 October 2026. This is the third local homotopy
lecture, following the circle and figure-eight/torus investigations. The
mathematical task is to decide whether pointwise inverse values can form a
continuous function on an entire domain.

## The missing bridge

The first lecture develops angle lifting and winding. The second uses a tree
and the plane as covering spaces. Neither develops finite transport as a
permutation, nor turns an endpoint calculation into a complete classification
of continuous roots and logarithms. The new lecture uses those prerequisites
to solve that problem, rather than introducing the same lifting theorem again.

The connected [Conditions workshop](../../conditions/index.html) asks what
algebraic transformations preserve when domains are recorded. Here the domain
also has a loop, and continuation around it creates an additional compatibility
condition. This connection is a teaching design; its learning effect has not
been measured.

<a id="verified-primary-sources-and-their-role"></a>
## Primary sources and their role

- [Hatcher, *Algebraic Topology*, Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf),
  printed pp. 56–57: finite circle covers; pp. 60–62, Propositions 1.30 and
  1.33: lifting and the lift criterion; pp. 68–69: transport in fibers.
  These support the topological framework. We state our forward endpoint
  convention explicitly, since action conventions can reverse transport.
- MIT OpenCourseWare, [Branch Cuts and Branches](https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-fall-1999/pages/study-materials/branch-cuts-and-branches/):
  relates a formula's chosen angle to its domain.
- MIT OpenCourseWare, [Riemann Surfaces: The Logarithm](https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-fall-1999/pages/study-materials/riemann-surfaces-the-logarithm/):
  develops continuation of the logarithm. We use the elementary continuous
  angle formulation, without introducing complex differentiability.

These pages were opened and checked during development. The local prose,
derivations, exercises and diagrams are original; external exercises or images
are not reproduced.

## Derivation and proof dependencies

Write ζₙ=exp(2πi/n), n≥2. The fiber of pₙ(w)=wⁿ over 1 consists of ζₙʲ,
0≤j<n. For γₖ(s)=exp(2πiks), the lift starting at ζₙʲ is

    wⱼ(s)=exp(2πi(j+ks)/n).

It is a lift by direct exponentiation. Uniqueness uses only continuity and
connectedness: the ratio of two lifts is a continuous map into the finite set
of nth roots of unity, and is therefore constant. Equal starting values force
equal lifts. This argument prevents a silent switch between inverse values.

Forward transport sends j to j+k modulo n. After r complete γₖ traversals it
sends j to j+rk. With d=gcd(n,|k|), the first positive return is n/d and the
permutation has d cycles. Adopt gcd(n,0)=n, so the constant loop gives n fixed
points and first return 1. Negative winding gives the inverse permutation.

A root h:S¹→S¹ of fₖ(z)=zᵏ induces a closed lift on the parameter interval,
so necessarily n divides k. If k=nm, hⱼ(z)=ζₙʲzᵐ supplies n roots. Any two
roots have a ratio in the finite root-of-unity set; connectedness of S¹ proves
these are all the roots. Integer powers of negative degree are continuous on
S¹ because zero is absent. The conclusion is about continuous functions on
the whole circle, rather than a pointwise set of roots.

A continuous logarithm L satisfies exp L=fₖ. Unit modulus forces Re L=0.
Along the parameter interval, L(exp(2πis))/(2πi)−ks is integer-valued and
continuous, hence a constant ℓ. Endpoint compatibility requires k=0. In that
case all logarithms are constants 2πiℓ, with ℓ any integer. Divisibility by a
finite n and equality to zero are different conditions.

For a general continuous f:S¹→ℂ∖{0}, first lift the angle of its normalized
loop f/|f|. If the lift is a(s), its endpoint difference k is the winding.
Multiplying an angle root by the positive real amplitude |f|^(1/n) gives the
same root criterion; the logarithm is log|f|+2πia. Here angle-lift existence
is a substantive named theorem. Endpoint agreement allows descent through
the quotient [0,1]/(0∼1). Winding invariance under a homotopy avoiding zero
then proves that both existence properties are homotopy invariant.

## Exact experiments and what their drawings mean

The bounded model accepts 2≤n≤12, −24≤k≤24, 0≤j<n and 1≤r≤24.
The progress slider has exact rational times p/1000. It computes sheet
permutations, cycles, return times, root/logarithm decisions, and reduced turn
fractions using safe integers. Only the final drawing converts a turn to a
floating trigonometric position. Repeated traces around the same circle do
not reveal their multiplicity in a picture; the unwrapped turn is displayed.

Numbered labels stay fixed at the fiber over input 1 while the candidate
dots move. They identify endpoint sheets when the input returns to 1 and do
not assert a global decomposition of a connected cover into n disjoint sheets. The endpoint trace
records each complete γₖ traversal, not every intermediate visit to input 1.
The separate base and total-space drawings each depict a single circle.

The second experiment classifies fₖ on its original parameter circle. Its
answer does not change when the first experiment repeats the loop until it
closes. A closed lift in this finite cover may itself have nonzero winding.

The optional principal-selector clinic fixes f₂ and uses Arg∈(−π,π]. At the
negative real axis, the chosen square root is +i. Along z(s)=exp(2πis), the
principal square root of z² jumps at s=1/4 and 3/4, whereas h(z)=z is
continuous. The moving points use an exact integer seam classification.
The slit-domain continuous branch instead uses Arg∈(−π,π) and excludes the
seam. These are explicitly different domains and conventions.

## Teaching route and changed tasks

Plan approximately 10 minutes for a written prediction, 20 for finite
transport, 20 for root existence and its proof, 15 for logarithms, and 15–25
for selected tasks and discussion. This is an unpiloted planning estimate.
Assign the general-map extension and remaining tasks separately if needed.

1. n=6,k=4,j=1: 1→5→3→1; cycles (0 4 2),(1 5 3), first return 3;
   no sixth root of f₄. The closed third traversal is f₁₂, a changed map.
2. n=6,k=−4,j=1: 1→3→5→1; inverse cycles, same return length; no root.
3. n=4,k=8: four roots iʲz², each winding 2. Closure does not imply
   contraction in the total-space circle.
4. n=3,k=0: three constant cube roots, infinitely many constant logarithms;
   connectedness rules out nonconstant selections from either discrete set.
5. f₂ has roots ±z but no logarithm. The specified principal selector jumps
   across the cut; its failure does not disprove existence of other roots.
6. On ℂ∖(−∞,0], the positive amplitude and slit-domain angle construct a
   root. A global extension to ℂ∖{0} would restrict to the impossible nth
   root of the identity on S¹ for n≥2.

Hints and answers remain independently revealable. Saved attempts and
computed cases use separate storage from earlier lectures. The export names
the last successfully computed cases, rather than unsubmitted form text.
No written proof or learning mastery is automatically assessed.

<a id="review-and-verification-status"></a>
## Model and reading scope

The [transport model](../monodromy-model.js) illustrates exact positive,
negative and zero winding cases. Keep the general map's non-unit amplitude and
codomain explicit; quotient descent is part of the argument. Fiber labels name
fixed roots while the displayed candidates move. A finite selector state or a
screen overlap does not prove a continuous global root choice.

The [learner](../artifacts/lift-return-roots-learner.pdf) and
[instructor](../artifacts/lift-return-roots-instructor.pdf) PDFs include the
optional clinic. The learner's six answers are closed and the instructor's are
open. The documents contain selected exact cases; saved private notes remain in
your browser. A tagged PDF alone does not establish accessible mathematical
reading with assistive technology.
